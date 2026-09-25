# Agent implementation guide

## Start here

This repository prepares a competitive typing MVP; product features are not implemented.
Read [README](README.md), [current task](docs/STATUS.md), then the active milestone in
[ROADMAP](docs/ROADMAP.md). Read the owning specification before changing its domain.
Archived drafts are historical material, never requirements.

Canonical owners (do not create replacement PRODUCT.md or UI_UX.md):
- Scope/scoring: [product](competitive_typing_platform_project.md).
- Navigation/interactions: [UX](competitive_typing_platform_ui_ux.md).
- Elo/queue policy: [ranking](docs/RANKING_MATCHMAKING.md).
- Runtime/protocol/data/security: [architecture](docs/ARCHITECTURE.md).
- Events/metrics/validation gates: [validation](docs/VALIDATION_ROADMAP.md).
- Execution order: [roadmap](docs/ROADMAP.md); actual progress: [status](docs/STATUS.md).

## Product and locked scope

Fast anonymous solo, one 30-second English 1K ranked 1v1 queue, unrated invitation
matches, explicitly recorded ghosts, minimal profile/history/leaderboard and trust
operations. Rank is one Elo value; client-reported solo results cannot grant rating.
No public casual queue, seasons, social graph, store, subscriptions or adaptive
practice in MVP. Never introduce pay-to-win or sell accessibility/training advantage.

## Stack and boundaries

pnpm workspace; Node 24; React 19/Vite/TypeScript, Router/Query, CSS Modules/tokens and
selected Radix primitives. Fastify 5 + Socket.IO 4, TypeBox/JSON Schema, pg/Drizzle,
Supabase PostgreSQL/Auth, Render single process. Versions must be exactly pinned and
verified when dependencies are introduced; major upgrades need compatibility evidence.

- `apps/web`: only browser UI/adapters; shared UI stays in `src/ui`, not another package.
- `apps/server`: HTTP, realtime, domain modules, jobs, configuration, DB and migrations.
- `packages/typing-core`: deterministic TypeScript, no DOM/network/clock/database.
- `packages/contracts`: public runtime schemas and inferred types, no secrets/DB models.
- `tests`: cross-boundary integration, DB, realtime, E2E and load suites.
- Pure rating/queue functions belong to server domain modules, independently testable.

Web/server may import contracts and typing-core; shared packages must not import apps.
Core must not import contracts. Contracts may refer to core's public types, never its
adapters. Export small explicit entry points; no deep imports across packages.
Avoid speculative abstraction, DI frameworks, empty future services, Nx/Turborepo,
Redis or distributed owners. Justify each new dependency in the change description.

## Coding and API conventions

Strict TypeScript; unknown at untrusted boundaries; no unexplained `any` or assertions
that bypass validation. ESM; kebab-case modules, PascalCase React component files,
camelCase local identifiers, PascalCase types, snake_case SQL and protocol fields.
Use UTC persisted timestamps; units explicit (`durationMs`, `rating`, `received_at`).
Inject clock/RNG into domain logic; never depend on Date.now or Math.random in reducers.
Functions return explicit outcomes for expected failures; unexpected faults get a
redacted correlation ID. Do not swallow errors or expose provider/SQL error bodies.

REST `/api/v1` handles account/read/resource operations; Socket.IO handles queue and
match commands. Validate payloads, bounds, responses and authorization at both boundaries.
Use shared public schemas; TS alone is not validation. Specify version compatibility,
error codes, HTTP status, pagination, timeout and retry/idempotency for each operation.
Never retry a mutation blindly. GET must not join an invite or otherwise mutate state.
UI text uses localization keys; launch language is English, docs are primarily Turkish.

## Database and migrations

Private application schema; browser has no direct table access. Least-privilege runtime
role, separate migration role, no routine service-role queries. Enforce invariants with
SQL constraints and transactions, not application checks alone. Review RLS/grants.
Drizzle schema changes require reviewed SQL migrations in `apps/server/db/migrations`.
Never schema-push production or edit an already-applied migration. Test clean creation
and upgrade; use expand/contract and document lock/rollback implications.
Terminal results, rulesets/content and rating ledger are immutable. Corrections append
compensation entries. Settlement locks match and rating rows in stable user order and
commits both players, lock release and outbox atomically. Handle NULL uniqueness explicitly.
Active participation and unresolved ranked settlement locks are different concepts.
Seed only isolated local/test databases; never import real users/input or seed production.

## Realtime and integrity

Same-origin WebSocket-only Socket.IO; no polling fallback. One authoritative owner
with DB lease/epoch fencing, explicit match/participant state machines and bounded input.
Local typing is immediate; server owns time, accepted stream, score, result and rating.
Only input received in `[start_at, end_at)` counts. No offline backfill or score grace.
Use monotonic match clocks, seq/payload deduplication, connection generations and
versioned snapshots. An ACK is not a durable settlement; emit final result after commit.
Server failure must not become an automatic player loss. Follow the existing resume,
review, no-contest and deploy rules exactly; do not invent replacement timeout policies.
Replay validates consistency, not human input. No automatic permanent ban from WPM,
IP, isTrusted, client time or a low-confidence anomaly alone. Audit moderation actions.
Do not silently alter ranking, score, eligibility or queue constants; version policy,
update its canonical specification, add deterministic examples and record an ADR change.

## UI, performance and accessibility

Preserve Pratik/Ranked/Sıralama information architecture (English labels at launch).
Home starts solo; never turn it into a feature dump. Global settings belong in settings,
not random headers. One primary task per screen; progressive disclosure; reuse UI.
Provide loading, empty, error, permission-denied and disconnected states where applicable.
Keyboard-first: natural Tab, visible focus, Escape is not surrender, no global character
capture. Preserve reduced motion, non-color error cues, readable contrast and zoom/reflow.
Check 320/390px, desktop, 200% zoom/400% reflow and keyboard/screen-reader journeys.
Desktop physical-keyboard ranked is the supported launch scope; do not claim hardware
can be reliably detected from viewport or UA. Mobile solo/companion must remain usable.
No DB/log/analytics write per key. Keep core off route-wide state; batch and bound work.
Initial measured targets: input-to-paint p95 <=16.7ms on a named reference device,
opponent progress age p95 <=300ms, normal result p95 <=2s after end. Targets are not proof.

## Security, telemetry and documentation

BFF opaque HttpOnly cookie; provider credentials never in browser storage. Check CSRF,
Origin, session, membership and phase; revoke active sockets on logout/ban/deletion.
Bound payloads, jobs, connections and caches. Redact secrets, emails, raw input, IP and
invite URLs from logs, analytics and Sentry. Keep privileged detector configuration private.
Events follow VALIDATION_ROADMAP: optional analytics respects consent; server facts come
from committed outbox; dedupe consumers. No key-level analytics or session replay.
Every feature specifies operational metrics, event ownership and failure alerts; justified
`not applicable` is acceptable for pure code/docs, fabricated events are not.
Retention/export/deletion/restore behavior must be tested, not merely documented.
Keep canonical documents and affected ADRs in sync. Record rationale for changes,
commands actually run, results and remaining limits; never label planned checks passed.

## Incremental workflow and definition of done

Check Git state; preserve unrelated work. Take the first ready task in STATUS/ROADMAP.
Deliver one bounded task; validate its acceptance criteria before moving to dependencies.
Parallelizable in the graph means independent code ownership, not permission to run agents.
Update STATUS with evidence and next task; do not edit archive snapshots.
For each completed feature:
- Typecheck, lint, relevant tests and build pass; `pnpm check:repo` and diff check pass.
- Boundary validation/authorization, migrations, adversarial and retry tests exist as needed.
- Telemetry and redaction verified; required UX states, responsive, keyboard and accessibility
  evidence recorded; relevant performance budget measured.
- Security/data implications and dependency changes reviewed; canonical docs updated.
- Deployment, migration application and live E2E are reported separately from local success.
See [TESTING](docs/TESTING.md) for mandatory tiers. Never replace unimplemented commands
with successful no-op scripts or use an empty test suite as feature validation.
