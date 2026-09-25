# Deployment ve işletim rehberi

Bu bir uygulanacak runbook'tur. Henüz uygulama, Render servisi, Supabase projesi,
container image veya deployment yapılmadı. Kod/CLI sürümleri ve sağlayıcı alanları ilk
release'te canlı doğrulanacak; burada başarı iddiası veya kopyalanacak sahte servis ID'si yok.

## Topoloji ve release artefact'i

Tek paid Render web service; Fastify aynı HTTPS origin'de REST + WSS Socket.IO + Vite
assets sunar. Aynı bölgede Supabase PostgreSQL/Auth/private Storage. Frankfurt ilk pilot
adayıdır, RTT kanıtı olmadan global destek iddiası değildir. Replicas=1; deploy overlap
olabileceğinden RuntimeOwner lease/epoch fencing yine zorunlu. Redis adapter yok.

M0 araç zinciri build/start sözleşmesini, M5 drain/lifecycle ve Docker/release config'ini,
M8/M9 gerçek platform ayarlarını doğrular. Exact Node image/runtime ve lockfile kullanılır;
production image dev dependency/secret/env dosyası içermez. Source-map upload CI işi;
public source map/PII policy doğrulanır. Yeni instance owner almadan ranked-ready değildir.

## Health ve readiness sözleşmesi

M0.1 `/health/live`: process ayakta; private bilgi dönmez. M3 `/health/ready`: gerekli
config/DB/API hazır. M5 `/health/ranked`: owner lease geçerli, DB/settlement sağlıklı,
admission açık ve drain yok. Genel platform probe ile ranked availability farklıdır:
eski owner drain ederken yeni instance'ın HTTP liveness'ı owner yetkisi vermez.

App public status yalnızca kullanıcıya gereken maintenance/unavailable durumunu gösterir;
owner key/epoch internals veya sırlar public response'a eklenmez. Uptime ve ranked probe
ayrı izlenir. Drain/lease-loss sırasında ranked admission fail-closed; local solo mümkünse açık.

## İlk staging hazırlığı (M3–M8)

1. Ayrı staging/prod Supabase projeleri/secret'ları, runtime ve migration DB rollerini kur.
   Private schema grants ve exposed schema RLS sınırını gerçek anon/authenticated role ile dene.
2. Auth redirect allowlist/domain, Google provider ve Resend SMTP'yi Supabase'te yapılandır;
   gerçek inbox OTP/OAuth, expiry ve revoke testi. Varsayılan SMTP'yi production sanma.
3. [Env sözleşmesi](DEVELOPMENT.md) ile sadece gerekli secret'ları platform secret store'a koy.
   DDL ve Sentry upload credentials runtime'a gitmez. TLS/Origin/host-only cookie doğrula.
4. Export/review buckets private; signed link ve object TTL. Monitoring redaction ve
   alert alıcısını test et. Kullanılmayan provider'ı açık anahtarla taklit etme.
5. Disposable DB testlerinden geçen migrations staging'e ayrı release adımıyla uygulanır;
   build sonucu migration uygulandığının kanıtı değildir. Runtime DDL çalıştırmaz.
6. Gerçek iki browser WSS/HTTP, revoke, queue gate ve drain/recovery smoke; admission
   cap M8 ölçümünden gelir. Platform shutdown penceresi 60s drain ve güvenli kapanışı
   tamamlayacak şekilde ayarlanıp gerçek deploy ile test edilir.

## Normal release ve migration sırası

1. Commit/build ID, exact artifact, test sonuçları ve migration uyumluluk notunu kaydet.
2. Backup/restore noktası ve DB lock/DDL tahmini gözden geçirilir. Önce additive compatible
   migration; eski/yeni app birlikte bu schema'yı okuyabilmeli. Destructive contract cleanup
   eski build kapandıktan sonra ayrı release. Uyumsuz DDL için ilan edilmiş bakım gerekir.
3. Ranked admission/queue'yu kapat; eski owner en fazla 60s aktif maçları drain eder.
   Bitmeyen maçları gerekçeli no-contest'e geçir; durable review'u silme. Lease'i bırak.
4. Yeni instance başlar, DB owner lease/epoch alır, orphan recovery'yi uygular. Eski owner
   hiçbir epoch-fenced commit yapamaz. Sağlık/probe geçmeden queue açılmaz.
5. Kalıcı sonucu GET/resume ile doğrula; gerçek iki kullanıcı ve authentication smoke.
   Duplicate rating/no-contest/DB/outbox/lease metriklerini izle; queue sonra açılır.
6. Release kaydı: uygulama deploy, migration version ve live E2E üç ayrı sonuçtur.

Rollback: admission kapat, drain/fence, önceki **schema-compatible** artifact'e dön;
uygulanmış migration'ı düzenleme/otomatik down etme. Veri kaybı gerektiren geri dönüş yerine
reviewed forward-fix veya kontrollü restore. Çift rating invariant'ında yeni rated hemen
kapanır; ledger audit/compensation politikası uygulanır, kayıtlar sessizce overwrite edilmez.

## Incident ve restore

Owner lease/DB erişimi belirsizse yeni rated durur; expired owner score kabul edemez.
RAM kaybı ve kalıcı kanıtı olmayan active maç no-contest; normal user loss değil.
Commit edilmiş sonuç kullanıcıya tekrar okunur; pending_review durable iş olarak sürer.

M8/M9 restore provası: erişimi kapat → şifreli backup'ı izole DB'ye geri yükle → migration,
constraints/ledger/outbox/review tutarlılığını kontrol et → deletion tombstone cleanup'ını
ve consent/ghost erasure'ı yeniden uygula → private Storage objelerini ayrı doğrula →
session/key güvenliğini değerlendir → smoke → erişimi aç. Backup DB'nin Storage dosyalarını
da kapsadığını varsayma. Provider dışı şifreli backup/retention ve erişim sahibi kaydedilir.
RPO ≤24h / RTO ≤4h başlangıç hedefleri, ancak tatbikat süresiyle doğrulanır.

Gerekli alarmlar: owner loss, tek duplicate rating, no-contest artışı, DB/result/outbox lag,
review yaşı, retention job ve SMTP failure. On-call/review gerçek sorumlusu M9 blocker'ıdır;
yalnız dashboard oluşturmak yeterli değildir. Secret rotation/incident ayrıntıları
[SECURITY](../SECURITY.md) ve ARCHITECTURE'deki data policy ile birlikte uygulanır.
