# Competitive Typing

**Yazma pratiğinden bire bir rekabete.**

Competitive Typing, İngilizce yazma pratiğini kısa düellolarla birleştirmeyi amaçlayan
bir web projesi. Hedef, kendi hızını takip ederken benzer seviyedeki oyuncularla
aynı metin üzerinde yarışabilmek ve ilerlemeni anlaşılır bir Elo puanıyla görmek.

> **Proje durumu:** Planlama ve workspace iskeleti hazır. Oynanabilir uygulama henüz
> geliştirilmedi; aşağıdakiler ilk sürüm için planlanan deneyimdir.

## Planlanan deneyim

- **Hemen pratik:** Hesap açmadan 15, 30 veya 60 saniyelik solo testler;
  hız, doğruluk ve sonuç geçmişi.
- **30 saniyelik düellolar:** İki oyuncu, aynı İngilizce kelimeler ve aynı süre.
  Tek ranked kuyruğu, maç sonuçlarına dayanan tek Elo puanı.
- **Davetle oyna:** Bir bağlantıyla özel, puansız düello ve rövanş.
- **Kayıtlı rakibe karşı dene:** İzinle kaydedilmiş geçmiş bir performansla puansız
  yarış; kayıtlı rakip olduğu her zaman açıkça belirtilir.
- **Gelişimini takip et:** Temel profil, maç geçmişi ve ranked sıralaması.

İlk ranked deneyimi masaüstü ve fiziksel klavye için tasarlanıyor. Solo pratik ve
hesap ekranlarının mobilde de kullanılabilir olması hedefleniyor.

## Rekabetin temeli

Sonuçlar doğru yazılan karakter sayısına dayanır; hatayı düzeltmeden ilerlenmez.
Ranked maçlarda süre, skor ve puan değişiminin yetkisi sunucudadır. Solo sonuçlar,
özel düellolar ve kayıtlı rakipler Elo puanını etkilemez.

Temel pratik ve erişilebilirlik araçları ücretsiz olacak. Ücretli rekabet avantajı
sunulmayacak. İlk sürüm kısa, anlaşılır ve tekrar oynanabilir bir deneyime odaklanıyor.

## Projeyi incele

- [Ürün kapsamı ve oyun kuralları](competitive_typing_platform_project.md)
- [Ekranlar ve kullanıcı deneyimi](competitive_typing_platform_ui_ux.md)
- [Elo ve eşleştirme kuralları](docs/RANKING_MATCHMAKING.md)
- [Yol haritası](docs/ROADMAP.md) · [Güncel geliştirme durumu](docs/STATUS.md)
- [Pazara giriş ve kullanıcı edinimi araştırması](GO_TO_MARKET.md)

## Geliştirme

Planlanan stack: **React, TypeScript ve Vite**; **Node.js, Fastify ve Socket.IO**;
**Supabase PostgreSQL/Auth**. Uygulama bağımlılıkları henüz eklenmedi.

Kurulum ve mevcut komutlar için [geliştirme rehberine](docs/DEVELOPMENT.md),
katkı kuralları için [AGENTS.md](AGENTS.md) dosyasına bakabilirsin.
[Teknik mimari](docs/ARCHITECTURE.md), [test stratejisi](docs/TESTING.md),
[deployment rehberi](docs/DEPLOYMENT.md) ve [güvenlik politikası](SECURITY.md)
ayrı belgelerde tutuluyor.
