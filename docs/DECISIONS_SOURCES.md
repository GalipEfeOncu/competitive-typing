# Değişiklik kaydı ve araştırma dayanakları

**25 Eylül 2026 · Revizyon 1**

İki taslak bütünüyle okundu: ürün 1.950, UX 2.449 satır. Bu inceleme uygulama audit'i değil; ürün varsayımları ve teknik tasarım incelemesidir. Güncel yazılım/fiyat araştırması birincil sağlayıcı ve yöntem kaynaklarıyla yapıldı. Tercihler kaynakların otomatik sonucu değil, bu MVP için mühendislik değerlendirmesidir.

## 1. Büyük karar değişiklikleri

### D01 — İki ayrı beceri/rating eksenini kaldır

Eski ürün §8–15, §69: typing skill, speed bracket ve competitive rating birlikte puanlamayı etkileyebiliyordu. **Yeni:** tek sonuç bazlı Elo; WPM yalnızca provisional matchmaking için sınırlı güvenlik sinyali. Aynı formatın sonucunu iki defa ödüllendirmeyi, solo sandbag teşvikini ve iki rakibin aynı puanın neden farklı anlama geldiğini açıklama yükünü azaltır. Kabul edilen bedel: ilk rating tahmini kusurlu; uncertainty için Glicko-2 ileride veriyle gerekebilir.

### D02 — Sonuç formülünü uygulama aşamasına bırakma

Eski ürün §7, §13, §64: net WPM, accuracy hibriti veya normalize skor açık kalıyordu. **Yeni:** ortak 30 saniyede doğru kesintisiz önek C; yanlış kısmı düzeltmeden ilerleme yok, eşit C draw. WPM/accuracy açık tanımlı. Metrik ve backend sözleşmelerini kesinleştirir; UX maliyeti kapalı alfada sınanır.

### D03 — Placement'ı MVP'ye al, ikinci rank sistemini alma

Eski §15 placement önerirken §57 bunu v0.2'ye bırakıyordu. **Yeni:** ilk 10 rated maç provisional, tek queue, K=64 sonra 32. Yeni oyuncuyu rastgele kalıcı low rank'a sabitlemez; ayrı placement havuzu açmaz. K farkının rating toplamını korumadığı açıkça yazılır.

### D04 — Sezonun reset gerektirdiği varsayımını kaldır

Eski ürün §16–18/§57/§67 sezonun farklı aşamalarda bulunmasına yol açıyordu. **Yeni:** MVP'de sezon yok; sonra snapshot/aktiflik ve rozet, rating reseti yok. Eşleşmeyi bozarak yapay grind üretmez. Sezon sunumu ile skill tahmini ayrı sorumluluktur.

### D05 — Public casual kuyruğu ve çok modlu başlangıcı çıkar

Eski ürün §6/§39–41/§56; UX §9/§24/§98: tek ranked yanında quick casual seçimleri vardı. **Yeni:** tek public ranked, davetle puansız düello ve açık ghost. Düşük concurrency bölünmez; private link novice deneyimini yine sağlar.

### D06 — Sonsuz widening'i sınırla

Eski §39/§40: 30 saniye sonrası en yakın herkesi bulma ihtimali, global latency varsayımı. **Yeni:** karşılıklı Elo pencereleri, ±300 hard cap, RTT/jitter koşulu, 60 saniye timeout. Uygun oyuncu yokken adaletsiz maçı zorlamaz. Maliyet: bazı saatlerde ranked bulunamayabilir; bu ölçülür ve söylenir.

### D07 — Rated rematch kazancını azaltmak yerine ayrı tut

Eski §42 belirsiz diminishing gain öneriyordu. **Yeni:** direct rematch unrated; public queue'da 120 saniye çift beklemesi ve kayan 24 saatte 3 rated start sınırı. Puan hesabı şeffaf kalır, koordineli farm zorlaşır. Az nüfusta erişimin daralması bilinçli ödünleşmedir.

### D08 — Arkadaş sistemi yerine link daveti

Eski ürün §56 ve UX §98–100 arkadaşlık/social MVP'deydi. **Yeni:** guest link düellosu; arkadaş grafiği, presence ve mesajlar Post-MVP. İki kişinin oynaması sosyal platform altyapısı gerektirmez. Sosyal talep link tekrarından ölçülür.

### D09 — Home/Play/Practice/Duel tekrarını kaldır

Eski UX §3–9/§24/§100/§111 farklı navigasyon ağaçları sunuyordu. **Yeni:** Pratik / Ranked / Sıralama, hesap menüsü. Ana sayfa doğrudan solo; davet bağlamsal rota. Başlangıçtan uzun sidebar ve dashboard bakım maliyeti kalkar.

### D10 — Primary CTA ve tek puan sunumunu düzelt

Eski UX §2 tek primary isterken §7 üç eşit CTA ve §22 ayrı RP barı öneriyordu. **Yeni:** ekrana göre tek baskın eylem; maç sonunda yeni rakip, puansız rövanş ikincil; Elo eski→yeni. Sahte paralel ilerleme ve karar yükü azalır.

### D11 — Ayar sahipliğini netleştir

Eski UX §11 içerik dilini global sayarken §12/§42 local/global aynı ayarları çoğaltıyordu. **Yeni:** UI dili global, içerik dili ruleset; kişisel display tercihi tek key; dört bölüm; henüz tek seçenek olan ayara dropdown/search yok. Aktif ranked kuralları kullanıcı ayarıyla değişmez.

### D12 — Mobil kapsamını ve erişilebilirlik sınırını açıkla

Eski UX §45–46 companion fikrine rağmen ranked bottom bar öneriyordu. **Yeni:** desktop fiziksel klavye ranked; mobil solo/companion; donanım tespitinin güvenilir olmadığı açık. Desteklenmeyen experience'i navigation üzerinden vaat etmez; zoom/keyboard/screen reader ayrı kabul testleridir.

### D13 — “Server validation = insan” varsayımını reddet

Eski ürün §43–44 input replay ve paste block'u listeliyor fakat güven sınırını tanımlamıyordu. **Yeni:** replay skor tutarlılığını kanıtlar; script/macro hâlâ mümkündür. Sinyal, inceleme, itiraz, TTL ve false-positive politikası eklenir. Geri alınamaz otomatik ban riski azaltılır.

### D14 — Ağ/süre/sonuç tutarlılığını ürün kuralına dönüştür

Eski §45 “belirli koşullarda win” diyordu. **Yeni:** ready/cancel, receive deadline, 5 saniye dönüş, gen/seq fence, server no-contest, transaction ve correction ledger. Score grace kullanmadan ağ etkisi açıklanır. Yerel akıcılık ve server sonucu birbirine karıştırılmaz.

### D15 — Ücretsiz kişisel gelişimi koru, AI'yı ertele

Eski §4/§31/§69.10 bazı temel zayıflık içgörülerini ve güçlü antrenmanı VIP'ye ayırıyordu. **Yeni:** temel weakness/adaptive free; ücret kolaylık ve kozmetik. Deterministik corpus, yeterli örnek, kontrol seansı, sürümlü üretici. Öğrenme avantajı algısı, inference faturası ve sahte nedensel öneriler azalır.

### D16 — İlk leaderboard'u tekleştir

Eski ürün §19 ve UX §29 çok sayıda tablo/filter öneriyordu. **Yeni:** aktif, yeterli maç/rakip sahibi, aynı ruleset ranked listesi. PB speed/accuracy/winstreak tabloları ve global yüzdelik MVP'de yok. Küçük nüfus ve şüpheli rekorların ürünün vitrini olması riski azaltılır.

### D17 — Mağaza, Pro, XP ve battle pass'ı çekirdekten çıkar

Eski vizyonda gelir/retention fikirleri kapsamı genişletiyordu. **Yeni:** MVP'de ticaret yok; doğrulama sonrası profil kozmetiği/kolaylık. Başarı unvanı, queue önceliği, okunabilirlik ve rank avantajı satılamaz. Rank boost event'i yasak; ayrı event ödülü bile ihtiyaç kanıtlanınca eklenir.

### D18 — Teknolojiyi görev sınırlarına göre seç

Eski ürün §60 genel framework/data listesi veriyordu. **Yeni:** tek TypeScript runtime ve authoritative owner, PostgreSQL transaction, managed Auth, küçük first-party analytics. Redis/microservices/serverless dağıtımı olmadan operasyon anlaşılır. Tek süreç arızası ve tek bölge gecikmesi saklanmaz; büyüme eşikleri tanımlı.

### D19 — Eksik veri yönetişimini ve doğrulama planını ekle

Eski §44 privacy notu yeterli sözleşme değildi; entity listesi immutable/projection ayrımı yapmıyordu. **Yeni:** süreli kanıt, consent, silme/export, backup kapsamı, compensation ledger, outbox, owner lease, queue/retention denominator'ları. Uygulama sırası feature listesi değil bağımlılık ve kabul kanıtıdır.

## 2. Araştırma kaynakları ve neye dayanak oldukları

Tüm bağlantılar bu oturumda web aracıyla açıldı veya resmî arama sonucunda doğrulandı. Dinamik fiyat sayfalarının görünmeyen alanları kesin okunmuş sayılmaz. Kütüphane patch sürümleri uygulama başladığında güvenlik/uyumluluk kontrolüyle pinlenecek; bu belge lockfile değildir.

### Rating

- [Glicko-2 — Mark Glickman](https://glicko.net/glicko/glicko2.pdf): rating/RD/volatility ve period yöntemi. Belge üzerindeki tarih 22 Mart 2022; arama motorunun daha yeni crawl tarihini yayın tarihi saymadık.
- [TrueSkill — Microsoft Research](https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/): belirsizlik ve çok oyunculu/takım ranking kapsamı. Belgede verilen oyun sayıları bu ürün için convergence garantisi değildir.
- [FIDE rapid/blitz rating düzenlemesi](https://handbook.fide.com/chapter/B02RBRegulations2024): rating uygulamalarının kendi policy kuralları bulunduğuna örnek. Bu platform FIDE başlangıç/cap kurallarını veya satranç havuzunu kopyalamaz; kendi logistic Elo politikası açıkça belirtilmiştir.

### Runtime, frontend ve veri

- [Node Release Working Group](https://github.com/nodejs/Release): 24.x LTS seçiminin destek takvimi. Current kanal yerine LTS tercih edildi.
- [Fastify LTS](https://fastify.dev/docs/latest/Reference/LTS/): destek politikası ve sürüm doğrulama sorumluluğu; Node24/Fastify kombinasyonunun proje CI'ında test edilmesi gerekir.
- [React — from scratch](https://react.dev/learn/build-a-react-app-from-scratch): Vite/SPA yolunun SSR/SSG gibi özelliklerde ek sorumluluk getirdiği; bu seçim bedelsiz sayılmaz.
- [Vite guide](https://vite.dev/guide/): statik build, React/TypeScript ve runtime uyumluluğu.
- [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview): HTTP server-state sorumluluğu.
- [Radix accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility): erişilebilir primitives; uygulama QA'sının yerine geçmez.
- [PostgreSQL explicit locking](https://www.postgresql.org/docs/current/explicit-locking.html): sonuç/rating transaction'ında kilit sahipliği.
- [Drizzle transactions](https://orm.drizzle.team/docs/transactions): seçilen veri katmanının transaction desteği.

### Realtime ve hosting

- [Socket.IO delivery guarantees](https://socket.io/docs/v4/delivery-guarantees/): order ve varsayılan at-most-once; uygulamada seq/ack/snapshot/idempotency gerekir.
- [Socket.IO multiple nodes](https://socket.io/docs/v4/using-multiple-nodes/): multi-node fanout/transport yönlendirme gereksinimleri. Adapter maç durumunun otoritesini otomatik çözmez.
- [Render WebSockets](https://render.com/docs/websocket): WSS, shutdown/reconnect davranışı, outbound kullanımının ücret etkisi.
- [Cloudflare Durable Objects WebSocket](https://developers.cloudflare.com/durable-objects/best-practices/websockets/): stateful alternatif ve hibernation modeli; bugün seçilmedi.
- [Vercel limits](https://vercel.com/docs/limits): frontend/serverless hizmet sınırlarını değerlendirirken bakılan kaynak. Vercel'i frontend'de kullanmak mümkün, bu MVP için ikinci app host'u gereksiz.

### Auth, privacy ve operasyon

- [Supabase server-side auth](https://supabase.com/docs/guides/auth/server-side): server tarafı auth entegrasyonu. Özel HttpOnly BFF tasarımı helper varsayılanlarıyla eş tutulmaz.
- [Supabase custom SMTP](https://supabase.com/docs/guides/auth/auth-smtp): production email servisi ihtiyacı.
- [Supabase backups](https://supabase.com/docs/guides/platform/backups): backup/restore kapsamı; storage object ve restore drill ayrı ele alındı.
- [OWASP WebSocket Security](https://cheatsheetseries.owasp.org/cheatsheets/WebSocket_Security_Cheat_Sheet.html): origin/session/message authorization ve kaynak sınırları.
- [MDN isTrusted](https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted): browser property semantiği; remote insanlık kanıtı değildir.
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/): erişilebilirlik hedefleri; uygulanmış uygunluk iddiası değil.

Privacy'de pazara özgü hukuki görüş üretilmedi. Avrupa Komisyonu bireysel veri hakları sayfasının web erişimi hata verdi; sayfanın içeriği doğrulanmış gibi kullanılmadı. Teknik silme/export/consent tasarımı yapıldı; hedef pazar ve çocuk kullanıcı kapsamı launch gate olarak açık tutuldu.

### Fiyat dayanakları

- [Supabase pricing](https://supabase.com/pricing) ve [auth MAU](https://supabase.com/docs/guides/platform/manage-your-usage/monthly-active-users): $25 başlangıç /100k dahil/$0,00325 aşım; ürün MAU ile auth MAU farkı.
- [Render pricing](https://render.com/pricing) ve [resmî karşılaştırma](https://render.com/articles/render-vs-railway): küçük compute planları; dinamik fiyat kartlarının tamamı görünmediği için kesin full-stack teklif çıkarılmadı.
- [Resend pricing](https://resend.com/pricing) ve [resmî email karşılaştırması](https://resend.com/migrate/sendgrid): auth email maliyet sürücüsü; güncel seçilecek plan ve günlük sınır launch'ta yeniden doğrulanacak.
- [Sentry pricing](https://sentry.io/pricing/): developer/free ve paid/usage model; yıllık gösterilen fiyat aylık ödeme fiyatıyla karıştırılmadı.
- [PostHog pricing](https://posthog.com/pricing): event/analytics maliyeti ve gelecekteki seçenek; MVP bütçesine zorunlu servis olarak eklenmedi.

## 3. Henüz bilinmeyenler ve değiştirecekleri kararlar

- Gerçek oyuncu sayısı/yoğun saatler: queue kalitesi ve başlangıç bölgesini belirleyecek.
- Lisansı doğrulanmış kesin 1K corpus: ruleset'in public sürümünü belirleyecek; lisans uydurulmadı.
- Stop-on-error hissi, 30 saniye formatının varyansı ve deadline sapması: public ladder açılış kapısı.
- Elo predictive quality/newcomer süresi: performance seeding veya Glicko gerekip gerekmediği.
- Load test: node kapasitesi, admission cap, buffer ve object storage'a geçiş.
- Hedef pazarlara göre consent/yaş/retention hukuku: launch policy ve gerekiyorsa ürün erişimi.
- Paid cosmetics'e gerçek talep: monetizasyonun zamanı ve biçimi.

Bunlar mimarinin kararsız bırakılmış çekirdeği değildir; hangi verinin hangi kararı yeniden açacağı tanımlanmıştır. Bu oturumda corpus indirimi, altyapı satın alma, hesap bağlantısı, migration, uygulama kodu veya deployment yapılmadı.

## 4. Arşiv bütünlüğü

İlk dosyaların SHA-256 özetleri:

```text
competitive_typing_platform_project.md
8bd0117e648c15973441aa6bb2b0cb505637d299af8b45e3770aefe1759a1374

competitive_typing_platform_ui_ux.md
1a2e61d9b7bb90f5880b2770451a75c384600712c45f1b0313afae38ded682e7
```

Arşiv kopyaları aynı byte içeriğini korur. Çalışma klasöründe Git metadata bulunmadığı için commit veya push iddiası yoktur.
