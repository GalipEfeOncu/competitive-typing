import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const excluded = new Set(['.git', 'node_modules', 'dist', 'build', 'coverage', 'playwright-report', 'test-results']);
const failures = [];
const read = (file) => readFile(path.join(root, file), 'utf8');

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(path.join(root, directory), { withFileTypes: true })) {
    if (excluded.has(entry.name)) continue;
    const relative = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(relative));
    else if (entry.isFile()) files.push(relative);
  }
  return files;
}

async function check(name, action) {
  try {
    await action();
    console.log(`OK ${name}`);
  } catch (error) {
    // Do not include file contents or environment values in diagnostics.
    failures.push(name);
    console.error(`FAIL ${name}: ${error.message}`);
  }
}

await check('workspace manifests', async () => {
  const manifest = JSON.parse(await read('package.json'));
  assert.equal(manifest.private, true);
  assert.equal(manifest.type, 'module');
  assert.match(manifest.packageManager, /^pnpm@\d+\.\d+\.\d+$/);
  assert.equal(manifest.engines.node, '>=24 <25');
  assert.match((await read('.node-version')).trim(), /^24\.\d+\.\d+$/);
  const workspace = await read('pnpm-workspace.yaml');
  for (const glob of ['apps/*', 'packages/*']) assert.ok(workspace.includes(glob), `missing ${glob}`);
  for (const [folder, name] of [
    ['apps/web', 'web'], ['apps/server', 'server'],
    ['packages/typing-core', 'typing-core'], ['packages/contracts', 'contracts'],
  ]) {
    const pkg = JSON.parse(await read(`${folder}/package.json`));
    assert.equal(pkg.name, `@competitive-typing/${name}`);
    assert.equal(pkg.private, true);
    assert.equal(pkg.type, 'module');
  }
});

await check('required handoff files', async () => {
  for (const file of [
    'AGENTS.md', 'README.md', 'SECURITY.md', '.env.example', 'pnpm-lock.yaml',
    'docs/ARCHITECTURE.md', 'docs/RANKING_MATCHMAKING.md', 'docs/VALIDATION_ROADMAP.md',
    'docs/ROADMAP.md', 'docs/STATUS.md', 'docs/DEVELOPMENT.md', 'docs/TESTING.md',
    'docs/DEPLOYMENT.md', 'docs/adr/README.md',
  ]) assert.ok((await stat(path.join(root, file))).isFile(), `missing ${file}`);
});

await check('local Markdown file links (excluding historical archive)', async () => {
  const missing = [];
  const documents = (await walk('')).filter((file) => file.endsWith('.md') && !file.startsWith('docs/archive/'));
  for (const file of documents) {
    const contents = (await read(file)).replace(/```[^]*?```/g, '');
    for (const match of contents.matchAll(/!?\[[^\]\n]*\]\(([^)\n]+)\)/g)) {
      const raw = match[1].trim();
      if (/^(?:[a-z][a-z0-9+.-]*:|#|\/\/)/i.test(raw)) continue;
      const target = decodeURIComponent(raw.split('#')[0].split('?')[0]);
      if (!target) continue;
      const resolved = path.resolve(root, path.dirname(file), target);
      const relative = path.relative(root, resolved);
      assert.ok(!relative.startsWith('..') && !path.isAbsolute(relative), `link outside repository in ${file}`);
      try { await stat(resolved); } catch { missing.push(`${file} -> ${target}`); }
    }
  }
  assert.equal(missing.length, 0, `missing links: ${missing.join(', ')}`);
  console.log(`Checked ${documents.length} current Markdown files`);
});

await check('example environment hygiene', async () => {
  const entries = new Map();
  for (const line of (await read('.env.example')).split('\n')) {
    if (!line.trim() || line.trimStart().startsWith('#')) continue;
    const match = /^([A-Z][A-Z0-9_]*)=(.*)$/.exec(line);
    assert.ok(match, 'invalid env assignment');
    assert.ok(!entries.has(match[1]), `duplicate env key ${match[1]}`);
    entries.set(match[1], match[2]);
  }
  for (const [key, value] of entries) {
    if (/SECRET|TOKEN|ENCRYPTION_KEY_BASE64|DATABASE.*URL/.test(key)) {
      assert.ok(value === '', `${key} must be blank in example`);
    }
    if (key.startsWith('VITE_')) {
      assert.ok(['VITE_SENTRY_DSN', 'VITE_BUILD_SHA'].includes(key), `unreviewed public env ${key}`);
    }
  }
  const ignore = await read('.gitignore');
  assert.ok(ignore.includes('.env.*') && ignore.includes('!.env.example'), 'env ignore rules missing');
});

if (failures.length) {
  console.error(`${failures.length} repository check(s) failed`);
  process.exitCode = 1;
} else {
  console.log('Repository handoff checks passed. No application tests were run.');
}
