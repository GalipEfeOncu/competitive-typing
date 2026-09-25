# Competitive Typing — planlama paketi

**Karar tarihi: 25 Eylül 2026. Durum: mimari kararlaştırıldı; uygulama geliştirilmedi.**

Bu çalışma, iki ilk taslağın tamamını yeniden değerlendirir. Sayısal eşikler ürün kararları veya test hedefleridir; kullanıcı verisi, ölçülmüş kapasite ya da doğrulanmış ticari başarı değildir.

## Okuma sırası

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

Teknik ve ürün eşikleri kapalı alfa ile sınanacak. Depo şu anda planlama belgelerini içerir; uygulama henüz geliştirilmedi veya yayınlanmadı.
