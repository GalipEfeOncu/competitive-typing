# Competitive Typing — uygulamaya hazırlık

**25 Eylül 2026 · Mimari + agent rehberi + workspace iskeleti hazır. Ürün implementasyonu başlamadı.**

Bu aktarım, kararlaştırılmış ürün ve mimariyi uygulama görevlerine dönüştürür. Sayısal eşikler ürün kararları veya test hedefleridir; kullanıcı verisi, ölçülmüş kapasite ya da doğrulanmış ticari başarı değildir.

## Sol için başlama noktası

Önce [AGENTS.md](AGENTS.md) → [STATUS](docs/STATUS.md) → [ROADMAP M0](docs/ROADMAP.md).
**İlk görev M0.1:** exact-pinned araç zinciri, strict TypeScript/lint/test/build ve boş
web/server bootstrap. Typing/auth/DB/realtime özelliklerini aynı işe katma.

```sh
pnpm install --frozen-lockfile
pnpm check:repo
git diff --check
```

Node sürümü `.node-version`, pnpm sürümü `package.json` içinde sabit. Bugünkü kontrol
repo/doküman iskeletini doğrular; uygulama typecheck/lint/test/build henüz yoktur.
[DEVELOPMENT](docs/DEVELOPMENT.md) mevcut ve eklenecek komutları açıkça ayırır.

Paketler: `apps/web`, `apps/server`, `packages/typing-core`, `packages/contracts`.
Shared UI web'de, DB/rating server'da. Tek runtime/deploy; dört servis değildir.
[TESTING](docs/TESTING.md), [DEPLOYMENT](docs/DEPLOYMENT.md), [SECURITY](SECURITY.md)
ve [ADR dizini](docs/adr/README.md) ilgili işin operasyon rehberidir.

## Canonical belgelerin okuma sırası

1. [Ürün, MVP ve sonraki aşamalar](competitive_typing_platform_project.md)
2. [Yapısal UI/UX kararları](competitive_typing_platform_ui_ux.md)
3. [Rating ve matchmaking](docs/RANKING_MATCHMAKING.md)
4. [Teknik mimari, stack, veri, güvenlik ve maliyet](docs/ARCHITECTURE.md)
5. [Ölçüm, riskler ve uygulama bağımlılık sırası](docs/VALIDATION_ROADMAP.md)
6. [Eski kararlardaki değişiklikler ve araştırma kaynakları](docs/DECISIONS_SOURCES.md)

Ürün kapsamının sahibi ürün belgesi; etkileşimlerin sahibi UX belgesi; rating ve kuyruk kurallarının sahibi ranking belgesi; protokol ve veri kurallarının sahibi mimari belgesidir. Bir değişiklik diğer belgelerdeki özeti de güncellemelidir. Arşivdeki hükümler yürürlükte değildir.

İlk iki dosyanın değiştirilmemiş kopyaları [taslak arşivinde](docs/archive/2026-09-25-drafts/competitive_typing_platform_project.md) ve [UX taslak arşivinde](docs/archive/2026-09-25-drafts/competitive_typing_platform_ui_ux.md) saklanır.

## Yönetici özeti

- Ürün testi: insanlar adil bir rakip ve anlamlı bir rank için farklı günlerde tekrar düello oynuyor mu?
- MVP: güçlü ama dar solo deneyimi; tek ranked 1v1 kuyruğu; puansız davet düellosu; açıkça etiketli kayıtlı rakip; temel profil/geçmiş/sıralama; rapor ve operasyon araçları.
- Format: 30 saniye, sürümlü English 1K havuzu, aynı metin, hatayı düzeltmeden ilerlememe, doğru karakter sayısıyla sonuç.
- Rank: tek Elo değeri; ilk 10 maç geçici değerlendirme; ayrı hız rankı, gizli puan merdiveni veya sezon reseti yok.
- Mimari: React + Vite + TypeScript; Node.js 24 LTS + Fastify + Socket.IO; Supabase PostgreSQL/Auth; Render üzerinde tek yetkili süreç. Redis ve mikroservis yok.
- Canlı yazma yerelde anlık; rakip ilerlemesi sunucudan; nihai skor ve rating yalnızca sunucuda. Yeniden bağlanma, idempotent sonuç kaydı ve süreç çökmesi ayrı kurallara sahip.
- Anti-cheat: deterministik doğrulama, sınırlı olay kaydı, açıklanabilir şüphe sinyalleri, inceleme ve itiraz. İnsanlık garantisi veya kusursuz bot tespiti iddiası yok.
- Sezon, adaptif pratik ve küçük grup yarışları doğrulama sonrası; mağaza ve Pro daha sonra. Temel gelişim araçları, okunabilirlik ve rekabet kalitesi ücretsiz.
- Ana risk: oyuncu yoğunluğu. Global erişim, her bölgede düşük gecikmeli ranked hizmeti anlamına gelmez.

Teknik ve ürün eşikleri kapalı alfa ile sınanacak. Depo planlama belgeleri ve lightweight workspace iskeleti içerir; uygulama henüz geliştirilmedi veya yayınlanmadı.

## Bilinçli açık kalanlar

Tam 1K corpus kaynağı/lisansı; paket patch sürümleri (M0.1'de doğrulanacak); gerçek
Supabase PostgreSQL major'ı; pilot RTT ve kullanıcı grubu; incident/review sorumlusu;
ölçülmüş node kapasitesi/admission cap; hedef pazar/yaş/consent koşulları.
Bunlar stack veya ranking'i yeniden seçme izni değil, ilgili milestone kapılarıdır.
Exact görsel token/font seçimi M2'de UX kuralları içinde yapılır. Public launch öncesi
rozet aralıkları/format alfa verisiyle son kez değerlendirilir; sessiz rating değişimi yok.
