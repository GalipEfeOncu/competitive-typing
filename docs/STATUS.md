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

Her biten task için kısa satır ekle: `ID — durum — değişen dosyalar/commit — çalıştırılan
kontroller ve sonuç — kalan engel`. Ardından sıradaki ID'yi değiştir. Durumlar:
`todo`, `in_progress`, `blocked`, `done`; `done` yalnızca kabul kanıtıyla.
Engellenen iş için gereken girdiyi ve bağımsız devam edebilen task'ı yaz; bütün milestone'ı
ölçülmemiş bir varsayımla tamamlanmış sayma. Kanıt gerekiyorsa ilgili değişiklik/CI kaydına bağla.
