# Yerel geliştirme ve yapılandırma

## Bugün çalışan yol

Depo feature implementasyonu içermeyen dört paketli iskelettir. Uygulama bağımlılığı,
source entry point, DB şeması, dev server veya ürün test suite'i henüz yoktur.
Bu durum M0.1/M0.2'de değiştirilir; aşağıdaki gelecek komutlar bugün varmış gibi sunulmaz.

1. `.node-version` içindeki Node 24.21.0'ı mevcut Node yöneticinle seç.
2. `package.json` içindeki pnpm 11.19.0'ı kullan. Bu sürümler bu aktarım ortamında
   çalıştırıldı; "en yeni" veya güvenlik taramasından geçti iddiası değildir.
3. Repo kökünde:

```sh
pnpm install --frozen-lockfile
pnpm check:repo
git diff --check
```

`check:repo`, repo sınırlarını/manifestlerini, yerel Markdown dosya bağlantılarını ve
örnek env sözleşmesini kontrol eder. External URL, başlık anchor'ları, mimarinin doğruluğu,
uygulama güvenliği veya feature testleri bu komutun kapsamı değildir. Secret gerekmez.
Root ve dört placeholder paket private'tır; source eklenene kadar export/script yoktur.

## M0.1'in kuracağı tek happy path

```sh
pnpm install --frozen-lockfile
cp .env.example .env
pnpm dev
```

`dev` shared package watch/build, Fastify `127.0.0.1:3000` ve Vite `localhost:5173`
başlatacak. Tarayıcı yalnızca `http://localhost:5173` origin'ini kullanacak; `/api` ve
Socket.IO `/socket.io` Vite proxy'sinden backend'e gidecek (WebSocket proxy açık).
Cookie/Origin kontrolleri bu origin'i doğrulayacak. Production'da Vite dev server yok;
aynı Fastify build edilmiş web asset'lerini sunar. CORS wildcard ile proxy eksikliği kapatılmaz.

Env dosyası repo kökünden **bir kez** server config bootstrap'ında okunacak;
çalışma dizinine bağlı implicit davranış kullanılmaz. Production'da process environment
sağlayıcıdan gelir. Browser tarafına yalnızca aşağıdaki açık VITE allowlist'i verilir.
Server app factory listen etmeden test edilebilecek; test clock/RNG enjekte edilebilecek.
Core → contracts → apps build sırası veya eşdeğer TS project references doğrulanacak.
ESM export map'leri hem Node compiled import hem Vite için gerçek smoke ile denenecek.

M0.1 root script sözleşmesi:
- `dev`: web + server ve gerekli shared watch; bağımlı process hata verince görünür hata.
- `typecheck`: bütün workspace TypeScript; strict/noUncheckedIndexedAccess ve browser/server
  lib ayrımı; JS checker lint kapsamına da alınır.
- `lint`: ESLint, hooks ve package import sınırları; formatter eklenecekse tek araç/gerekçe.
- `test:unit`: Vitest + fast-check, bounded deterministic seeds; boş suite başarılı sayılmaz.
- `build`: shared ve server derlemesi, Vite assets; browser bundle'da server modülü bulunmaz.

## M0.2 ve M3'ün DB yolu

Tek yerel yol Docker üzerinde pinlenmiş Supabase CLI local stack'tir; PostgreSQL/Auth
aynı test akışında bulunur. CLI/config M0.2'de eklenir; standalone başka DB türü eklenmez.
CI DB testleri Testcontainers ile aynı PostgreSQL major'ını kullanır; auth emulator mock'u
provider acceptance yerine geçmez. Uygulama DDL sahibi Drizzle'dır; Supabase local lifecycle
SQL migration'ları ikinci bir araçla paralel yönetmez.

M0.2'nin ekleyip gerçekten çalıştıracağı komutlar:

```sh
pnpm db:start
pnpm db:migrate
pnpm db:seed
pnpm test:db
pnpm db:stop
```

- `db:start`: Docker hazır değilse açık hata; local servisler ve runtime/DDL role bootstrap.
- `db:generate`: Drizzle değişiminden gözden geçirilecek SQL + metadata üretir.
- `db:migrate`: yalnızca `DATABASE_MIGRATION_URL` ile explicit runner; app boot'u DDL çalıştırmaz.
- `db:seed`: tekrarlanabilir küçük sentetik veri, açık local/test hedef allowlist'i; remote
  URL'de ve production NODE_ENV'de reddet. Fixture'lar lisanslı corpus yerine geçmez.
- `test:db`: ayrılmış ephemeral DB; geliştiricinin/veri sağlayıcının kalıcı DB'sini resetlemez.
- `db:stop`: servis durdurma; volume silme ayrı explicit local işlem, normal stop'a eklenmez.

M3 öncesi production oyun şeması yok; M0.2 yalnızca harness/scratch akışını kanıtlar.
M3 private schema/grants, Auth adapter ve domain migrations ekler. PostgreSQL major'ı gerçek
Supabase projesinden doğrulanıp local/CI pinine yazılır; bu oturumda major uydurulmadı.

## Environment sözleşmesi

[.env.example](../.env.example) bir tasarım sözleşmesidir; loader M0.1'de eklenecek.
Blank secret'lar bilerek blank. Başlatılan modülün gereken alanı yoksa sadece değişken adı
ile fail-fast; kimlik özelliği gelmeden doc/core komutları provider secret istemez.

- **Bootstrap:** `NODE_ENV` development/test/production; `HOST`, `PORT`, `APP_ORIGIN`
  kesin izinli public origin; `LOG_LEVEL`, `BUILD_SHA`. Production HOST `0.0.0.0`, PORT
  platformdan, APP_ORIGIN gerçek HTTPS alan adı. Development localhost cookie istisnası
  explicit; production Secure/HttpOnly/SameSite=Lax/path=/host-only zorunlu.
- **DB gerekli (M0.2/M3):** `DATABASE_URL` least-privilege uygulama bağlantısı;
  `DATABASE_MIGRATION_URL` DDL kimliği; `TEST_DATABASE_URL` yalnızca disposable test hedefi.
  DDL URL çalışan production uygulamasına verilmez. TLS verification kapatılmaz.
- **Auth gerekli (M3):** `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY` server adapter'da;
  `SUPABASE_SECRET_KEY` yalnızca privileged identity deletion/private storage gereken
  server adapter'da. Provider key adları seçilen SDK/proje ile M3'te doğrulanır;
  legacy service_role ile normal DB sorgusu yapılmaz.
- **Session refresh şifreleme (M3):** `SESSION_ENCRYPTION_KEY_BASE64` 32 rastgele byte'ın
  base64 hali; `SESSION_ENCRYPTION_KEY_ID` ciphertext key version'ı. Secret manager'da üret,
  sohbete/commit'e basma. M3'te AEAD + unique nonce ve rotation testi; eski key ile açılan
  kaydı yeni key'e taşıma ya da oturumları revoke etme politikası release öncesi açık olmalı.
- **Storage (M3 export, M5 büyük evidence):** `SUPABASE_EXPORT_BUCKET` / `SUPABASE_EVIDENCE_BUCKET`
  private bucket adları; imzalı URL süre/temizlik kuralları ARCHITECTURE §11'de.
- **Opsiyonel gözlem:** `SENTRY_DSN` server, `VITE_SENTRY_DSN` public browser DSN;
  `VITE_BUILD_SHA` public sürüm. DSN kimlik bilgisi değildir ama PII scrub zorunlu.
  Boşsa SDK kapanır. `SENTRY_AUTH_TOKEN` yalnızca CI source-map upload, runtime'a verilmez.
- **Kapasite (M8):** `ADMISSION_MAX_CONNECTIONS` ve `ADMISSION_MAX_RUNNING_MATCHES` pozitif
  tam sayı; staging/prod rated açılırken ölçülen cap gerekir. Blank değer sınırsız kapasite
  demek değildir. M4–M7 test ortamı explicit sentetik limit kullanır, production iddiası yok.

Google client secret ve Resend SMTP credentials Supabase provider/SMTP ayarlarındadır;
uygulama doğrudan Resend API çağırmadığından RESEND_API_KEY eklenmez. DB/Auth/Sentry hesapları
bu iskeleti doğrulamak için gerekmez. Staging/prod ayrı proje/keys/redirect allowlist kullanır.
Elo/ruleset/time-window gibi iş kuralları env toggle değildir; sürümlü domain policy'dir.

## Gelecek doğrulama komutları

`test:integration`, `test:realtime`, `test:e2e`, `test:load` ilgili ilk feature ile eklenecek;
[TESTING](TESTING.md) kapsam ve milestone sahipliğini belirtir. Dokümanda listelenmiş olmak
script'in mevcut olduğu anlamına gelmez. STATUS mevcut komutları güncel tutar.

## Belgeler ve uygulamaya başlama sırası

[AGENTS](../AGENTS.md) → [STATUS](STATUS.md) → [ROADMAP M0](ROADMAP.md) sırasını izle.
İlk görev M0.1: exact-pinned araç zinciri, strict TypeScript/lint/test/build ve boş
web/server bootstrap. Typing/auth/DB/realtime özellikleri ayrı görevlerde uygulanır.
Shared UI web paketinde, DB/rating server paketinde kalır; dört paket dört servis değildir.

Ürün kapsamının sahibi [ürün belgesi](../competitive_typing_platform_project.md),
etkileşimlerin sahibi [UX belgesi](../competitive_typing_platform_ui_ux.md), rating ve
kuyruk kurallarının sahibi [ranking](RANKING_MATCHMAKING.md), protokol ve veri kurallarının
sahibi [mimari](ARCHITECTURE.md) belgesidir. [Validation](VALIDATION_ROADMAP.md)
ölçüm kapılarını; [kararlar ve kaynaklar](DECISIONS_SOURCES.md) ile
[ADR dizini](adr/README.md) karar gerekçelerini tutar. Arşivdeki hükümler yürürlükte değildir.

Açık uygulama kapıları: tam 1K corpus kaynağı/lisansı, paket patch sürümleri (M0.1),
gerçek Supabase PostgreSQL major'ı, pilot RTT ve kullanıcı grubu, incident/review sorumlusu,
ölçülmüş kapasite/admission cap ve hedef pazar/yaş/consent koşulları.
Görsel token/font seçimi M2'de yapılır. Yayın öncesi rozet aralıkları alfa verisiyle
incelenir; rating kuralları sessizce değiştirilmez. Güncel takip STATUS'tadır.

## GitHub repo kontrolü

`Repository checks` workflow'u repo/doküman yapısını ve son commit'in boşluk hatalarını
kontrol eder. Checkout iki commit getirir; böylece son commit ebeveyniyle karşılaştırılır.
Değiştirilmeden korunan `docs/archive/` snapshot'ları boşluk kontrolünden hariçtir;
güncel dosyalar kontrol edilmeye devam eder. Bu workflow uygulama test/build kanıtı değildir.
