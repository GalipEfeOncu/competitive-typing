# Test stratejisi ve tamamlanma kanıtı

Bugün yalnızca `pnpm check:repo` vardır. Feature testleri henüz uygulanmadı.
Komutlar ilgili milestone'da gerçek suite ile eklenir; `passWithNoTests`, `echo ok` veya
atlanmış testleri tüm testler geçti diye raporlama. Canonical eşikler ARCHITECTURE ve
RANKING_MATCHMAKING; burada onların doğrulama yöntemi bulunur.

## Yerleşim ve hiyerarşi

- **Unit/property — M0.1/M1/M6:** `packages/*/src/**/*.test.ts` ve
  `apps/*/src/**/*.test.ts`. Vitest + fast-check. Core, pure rating ve queue politikası
  ağ/DB/React olmadan çalışır. Clock/RNG açık dependency; seed ve küçültülmüş failure
  fixture'ı kayda girer. Komut: `pnpm test:unit`.
- **HTTP/module integration — M3:** `tests/integration`; Fastify app factory/inject,
  gerçek schema validation ve DB adapter. Auth provider contract mock'ları timeout/error
  için; gerçek staging OAuth/OTP smoke ayrı. Komut: `pnpm test:integration`.
- **DB — M0.2/M3/M6:** `tests/db`; gerçek PostgreSQL/Testcontainers, Supabase ile aynı major.
  Migration, grant/RLS, FK/check/unique, rollback/locking ve query access. SQLite/in-memory
  mock kabul edilmez. Komut: `pnpm test:db`.
- **Realtime/fault — M4/M5/M6:** `tests/realtime`; gerçek Fastify/Socket.IO +
  `socket.io-client`, ephemeral port, izole DB. Fake socket yalnızca unit'te.
  Toxiproxy/ağ emülasyonu ayrı fault profili. Komut: `pnpm test:realtime`.
- **E2E — M2 ve her UI dilimi:** `tests/e2e`; Playwright Chromium/Firefox/WebKit, ayrı
  actor context/session'ları; desktop physical keyboard ve mobile solo/companion kapsamı.
  Komut: `pnpm test:e2e`; automation'ın OS IME/screen reader sınırı manuel kanıtla tamamlanır.
- **Load — M8:** `tests/load`; Socket.IO protokolü, actor başına geçerli realistic input,
  bounded generation ve JSON/CSV özet. HTTP-only benchmark yetmez. Komut: `pnpm test:load`.
- **Fixture/helper:** `tests/fixtures` sentetik cross-boundary veriler ve `tests/helpers`
  isolated DB/process/session kurulumu; core golden vectors core paketinde. Yeni helper
  yalnızca gerçekten tekrar eden setup için; tüm domain'i saklayan test framework'ü kurma.

## Mutlaka korunan test vektörleri

### Typing, input ve zaman

C=longest correct prefix; error suffix silinmeden ilerlemez. Boş stream, doğru/yanlış
insert, delete-to-word-boundary, tekrar sil-yaz, 64 suffix/10k text limiti, I=0/null
accuracy, whitespace ve ASCII/composition/paste/selection normalizasyonu. 300 C/30s=120
WPM golden sonucu; replay eşitliği ve sayaç invariants için randomized streams.

`start_at-ε`, start dahil, `end_at-ε`, end hariç; client timestamp ilerletmesi ve wall-clock
sıçraması süreyi değiştirmez. Final ACK penceresi score grace değildir. Sayısal clock
boundary unit testi + gerçek process/browser gecikme testi birlikte gerekir.

### Rating ve queue (M6)

1200 başlangıç; eşit established ±16, eşit provisional ±32, mixed K +32/−16;
1600/1400 örneklerinde ±7.69/24.31 toleransla; eşit/farklı rating draw; 10. ve 11.
maç sınırı; client WPM/accuracy/score margin değişse aynı sonuç aynı delta. Fraction
DB round-trip'te korunur, display rounding ayrı test edilir. No-contest/private/ghost
provisional sayacını değiştirmez; forfeit değiştirir.

Her iki ticket için 15/30/60s boundary, 500ms tick, ±300 hard cap; en eski ticket'a aday
yoksa sonraki denenir. Ready timeout'ta diğer kişinin yaşı korunur; manuel rejoin sıfırlar.
RTT p95/jitter/fark sınırları; provisional WPM koruması için örnek yeterliliği ve 30s
gevşeme; veri yoksa normal Elo. Deterministik tie-break RNG; 2/10/50 kişi simülasyonu.

### DB atomiklik, review ve correction

İki concurrent finalize ve 100 retry → tek settlement/result/outbox etkisi. Her transaction
adımında fault injection → iki rating birlikte veya hiç; emit öncesi crash → GET aynı kayıt.
Aynı hesap iki ticket/maç olamaz; pending review yeni rated'i engeller, private izinli.
Review bitişi başka private match rezervasyonunu silmez. Timeout vs finalize yarışı;
compensation original delta'ya bağlı bir kez uygulanır, pending rating snapshot boşalana
kadar bekler. Terminal immutable kayıt overwrite edilmez. Nullable correction_ref ile
unique index semantics gerçek PostgreSQL'de kanıtlanır.

Pair reservation/start yarışında kayan 24h üçüncü start kabul, dördüncü ret; iptal edilen
pre-start teklif sayılmaz. Önceki çift 120s cooldown. DB lock sırası deadlock/load altında
izlenir. Yeni/upgrade migration, role grants ve unauthorized read/write ayrıca denenir.

### Realtime, abuse ve failure (M4–M6)

Same seq/same payload önceki ACK, same seq/different payload ret; gap üstünden skor yok;
old generation/owner, yetkisiz participant/match, wrong phase/protocol ret. Bounded buffer,
16KiB ve rate/burst limitleri; çok hızlı geçerli typing otomatik permanent ban üretmez.
Foreign Origin, eksik CSRF/nonce/session, revoked/deleted/banned actor canlı socket'te ret.

1/4/6s kopma, refresh, explicit second-tab takeover, idle-but-connected AFK, double-abandon,
final nonce replay, finish deadline vs disconnect deadline; offline backfill ret. DB down,
lease renewal belirsizliği/expiry, iki process deploy overlap, owner death before/after commit,
durable pending-review recovery; server failure forfeit değildir. Planned drain 60s.

20/100/200ms RTT ile aynı event stream ve jitter/drop/burst: C kaybı ve deadline drops
raporlanır. Adalet eşikleri tutmuyorsa launch bekler; client time rewind eklenmez.
Otomasyon/valid script input'unu kesin insan olarak onaylayan test/iddia yazılmaz.

### UX, güvenlik ve data lifecycle

Keyboard-only first solo→result→restart; login→queue→cancel→ready→match→result→new opponent;
private guest invite; rematch; ghost/live ayrımı; settings ve report. Two independent actors,
reload/resume ve servis hataları. Loading/empty/error/forbidden/offline durumlarını dolaş.
320/390px + desktop, 200% zoom/400% reflow, contrast, focus order/dialog trap/return,
non-color error cue, reduced-motion; screen reader milestone duyuruları, her key değil.

Storage failure/cleanup, ghost withdraw/source deletion ve evidence TTL ayrımı; export'a
rakibin raw input/email/private detector verisi giremez. Consent rejection/withdrawal,
redacted logs/Sentry/bundle scan; restore ardından tombstone replay erişim açılmadan biter.
Admin role/MFA ve audit, mass-report sahte ban, open redirect/account linking kontrolleri.

## CI ve release kapıları

- Bugünkü `repository.yml`: Node pin + bağımlılıksız repo check ve diff check.
- M0.1'den itibaren her PR: frozen install, check:repo, typecheck, lint, unit, build;
  güvenlik/dependency değişiklik kontrolü ve browser bundle boundary denetimi.
- DB/HTTP/WS sahip milestone'larda entegrasyon tier'ları CI'a eklenir; bu alanlardaki
  değişiklikler ilgili tier geçmeden tamamlanmaz. Secrets gerektirmeyen testler PR'da;
  gerçek provider smoke staging'de ayrı kanıt. Fork PR'a privileged secret verme.
- Kullanıcı akışı değiştiren her iş: ilgili E2E browser matrisi + screenshot/a11y evidence.
- Realtime/performance/DDL/deploy değişikliği: ilgili fault/load profili. M8/M9 release
  adayı: tam realtime matris, kontrollü ramp, 60 dakikalık soak, restore ve drain tatbikatı.
- Başarı kaydı: commit/build, komut, ortam/browser/device/DB major, seed, metrik pay/payda,
  sonuç ve limitation. Büyük raw log/PII repo'ya girmez; artifact link/anonim özet kullan.

Hedefler: reference device input-to-paint p95 ≤16.7ms; progress age p95 ≤300ms;
normal result p95 ≤2s; technical normal completion ≥98%, server no-contest <1%, duplicate
rating 0. Target ile ölçüm ayrılır; tek mutation invariant ihlali ranked release'i durdurur.

Feature DoD, AGENTS içindedir. Bir tier uygulanmıyorsa sebebi yazılır; UI yokken responsive
başarısı veya migration yokken DB testi başarısı iddia edilmez. Passed local test, uygulanmış
production migration/deploy ya da gerçek provider çalışması anlamına gelmez.
