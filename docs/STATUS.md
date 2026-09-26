# Uygulama durumu

**Son güncelleme: 26 Eylül 2026.** Tek ilerleme kaydı bu dosyadır.

- Tamamlandı: mimari aktarımı, workspace sınırları, ADR'ler, görev grafiği ve repo kontrolü.
- Aktif milestone: **M0 — çalıştırılabilir geliştirme tabanı**.
- Sıradaki görev: **M0.1 — araç zinciri ve boş uygulama bootstrap'ı**.
- Başlamayanlar: typing motoru, UI özellikleri, auth, DB şeması, realtime ve deployment.
- Mevcut komutlar: `pnpm install --frozen-lockfile`, `pnpm check:repo` ve `git diff --check`.
- Uygulama typecheck/lint/test/build komutları henüz yok; M0.1 bunları kuracak.

## Sonraki ajan için

1. AGENTS ve roadmap M0'ı oku; çalışma ağacını kontrol et.
2. M0.1'de her yeni bağımlılığın sürüm/Node 24 uyumunu resmî kaynakla kontrol et;
   tam sürümü ve lockfile'ı kaydet. Ürün özelliği geliştirmeden araç zincirini doğrula.
3. M0.2 ile disposable gerçek PostgreSQL/Supabase geliştirme yolunu kur.
4. M0.3 corpus kararı alınana kadar yalnızca açıkça test amaçlı küçük fixture kullan;
   fixture'ı English 1K veya yayınlanabilir corpus diye sunma.

## Açık kapılar

- M0.3: tam 1K corpus kaynağı/lisansı/hash'i henüz seçilmedi; ranked içerik yayınını engeller.
- M0.4/M9: gerçek pilot RTT/browser ölçümü ve incident/review sorumlusu atanması.
- M3: sağlayıcı proje/domain/SMTP kurulumu; sırları kullanıcıdan sohbete isteme.
- M9: hedef pazar/yaş/consent politikası; kapasite ve adalet doğrulaması.

## Aktarım doğrulaması

- `pnpm install --frozen-lockfile`: geçti; dört paket + kök, uygulama bağımlılığı yok.
- `pnpm check:repo`: geçti; 27 güncel Markdown dosyasının yerel dosya bağlantıları,
  manifestler ve env örneği kontrol edildi. Başlık anchor/external URL taraması değildir.
- Geçici kopyada bozuk link ve dolu secret örneği: kontrol ikisini de reddetti;
  secret değeri hata çıktısında görünmedi.
- `git diff --check` ve staged diff whitespace kontrolü: geçti.
- CI dosyası eklendi; GitHub üzerinde çalıştırılmadı. Ürün test/build/deploy yapılmadı.

## Güncelleme biçimi

### REPO-CI-README — done — 26 Eylül 2026

- README proje tanıtımı, planlanan deneyim ve mevcut durum etrafında düzenlendi;
  uygulama başlangıç sırası ve açık teknik kapılar DEVELOPMENT'a taşındı.
- GitHub run `36135516615`: repo kontrolleri geçti, depth=1 checkout nedeniyle
  arşivdeki tarihsel satır sonu boşlukları `git show --check` adımını düşürdü.
- Workflow `Repository checks` olarak adlandırıldı; fetch-depth=2 ve yalnızca
  değişmeden saklanan `docs/archive/` için whitespace istisnası eklendi.
- Geçici temiz clone'da eski hata tekrarlandı, yeni komut geçti; güncel dosyaya
  eklenen whitespace hatası yine reddedildi. `pnpm check:repo` ve
  `git diff --check` geçti. GitHub [run 36231020131](https://github.com/GalipEfeOncu/competitive-typing/actions/runs/36231020131)
  `601fd24` commit'inde başarılı tamamlandı.
- Bağımlılık, ürün kodu, veri veya telemetry değişikliği yok; uygulama test/build
  henüz mevcut değil. Deployment yapılmadı. Sıradaki görev **M0.1** olarak kalır.

### GTM-RESEARCH — done — 25 Eylül 2026

- Kullanıcının ayrı araştırma isteği tamamlandı: [GO_TO_MARKET](../GO_TO_MARKET.md)
  ve README bağlantısı; 25 başlıkta rakip/topluluk araştırması, kanal öncelikleri,
  eşzamanlı oyuncu planı, bütçe deneyleri, içerik takvimi ve metrik tanımları.
- Kaynak gözlemleri, tarihsel örnekler, bilinmeyenler ve deney önerileri ayrıldı;
  Season 1/adaptif çalışma/grup yarışı MVP taahhüdüne dönüştürülmedi.
- `pnpm check:repo`: geçti; 28 güncel Markdown dosyası ve mevcut repo kontrolleri.
  `git diff --check`: geçti. Harici kaynaklar araştırıldı; tüm dış URL'lerin
  erişilebilirliğini kontrol eden otomatik bir tarama çalıştırılmadı.
- Kod, bağımlılık veya mimari değişmedi. Uygulama test/build, canlı edinim deneyi,
  topluluk/creator mesajı, reklam harcaması ve deployment yapılmadı.
- Kalan GTM kapıları: çalışan ürün, gerçek pilot/retention, topluluk izinleri,
  creator teklifleri, hedef pazar ve operasyon sahipleri. **Sıradaki mühendislik
  görevi M0.1 olarak kalır.**

### GTM-PUBLISH — done — 26 Eylül 2026

- Bekleyen GO_TO_MARKET, README bağlantısı ve GTM durum kaydı birlikte incelendi.
  README bağlantısı proje belgeleri listesine alındı; uzun araştırma özeti kaldırıldı.
- Kapsam, queue/pair kuralları ve retention tanımları canonical belgelerle
  karşılaştırıldı. Dış kaynak gözlemleri 25 Eylül tarihli araştırma olarak korundu;
  bu yayın incelemesinde dış kaynakların güncelliği yeniden doğrulanmadı.
- `pnpm check:repo` ve staged whitespace kontrolü geçti; uygulama kodu/bağımlılığı
  değişmedi. Ürün test/build/deploy uygulanabilir değil; sıradaki görev M0.1.

### Kayıt şablonu

Her biten task için kısa satır ekle: `ID — durum — değişen dosyalar/commit — çalıştırılan
kontroller ve sonuç — kalan engel`. Ardından sıradaki ID'yi değiştir. Durumlar:
`todo`, `in_progress`, `blocked`, `done`; `done` yalnızca kabul kanıtıyla.
Engellenen iş için gereken girdiyi ve bağımsız devam edebilen task'ı yaz; bütün milestone'ı
ölçülmemiş bir varsayımla tamamlanmış sayma. Kanıt gerekiyorsa ilgili değişiklik/CI kaydına bağla.
