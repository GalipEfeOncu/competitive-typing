# Competitive Typing Platform — Proje Konsept Dokümanı

> **Çalışma adı:** Belirlenecek  
> **Konsept:** Monkeytype / 10FastFingers kalitesinde yazma deneyimini; gerçek zamanlı düellolar, toplu yarışmalar, ranked matchmaking, sezonlar, sosyal özellikler ve kozmetik monetizasyon ile birleştiren global rekabetçi typing platformu.

---

## 1. Projenin Temel Fikri

Platformun amacı yalnızca kullanıcının ne kadar hızlı yazdığını ölçmek değil, **yazmayı rekabetçi bir oyuna dönüştürmek**.

Mevcut typing sitelerinde çoğunlukla şu döngü vardır:

1. Testi başlat.
2. Metni yaz.
3. WPM / doğruluk skorunu gör.
4. Kendi rekorunu geliştirmeye çalış.

Bu projede ise temel döngü:

1. Pratik yap.
2. Rakip bul.
3. Düello kazan.
4. Rank kazan / kaybet.
5. Sezon sıralamasında yüksel.
6. Arkadaşlarla ve toplulukla rekabet et.
7. Profilini ve hesabını geliştir.
8. Yeni sezonda tekrar yarış.

Platform iki farklı kullanıcı tipine aynı anda hitap edebilir:

- **Solo kullanıcı:** Hızını geliştirmek, test yapmak, istatistiklerini takip etmek ister.
- **Rekabetçi kullanıcı:** İnsanlara karşı yarışmak, rank kasmak, leaderboard'a çıkmak ve sezonluk hedefler kovalamak ister.

Ana ürün farkı:

> **Typing test + competitive game**

---

# 2. Ürün İlkeleri

Platform tasarlanırken şu ilkeler korunmalı:

### 2.1. Anında Kullanılabilirlik
Kullanıcı siteye girip saniyeler içerisinde yazmaya başlayabilmeli.

- Gereksiz onboarding olmamalı.
- Solo test hesap gerektirmemeli.
- Casual duel mümkünse guest olarak oynanabilmeli.
- Ranked ve kalıcı ilerleme için hesap istenebilir.

### 2.2. Rekabet Ön Planda
Ranked sistem yalnızca eklenti değil, ürünün ana kimliklerinden biri olmalı.

### 2.3. Adil Matchmaking
60 WPM yazan biri sürekli 150 WPM oyuncularla eşleşmemeli.

Ancak sistem yalnızca WPM'e göre eşleştirip rank sistemini anlamsızlaştırmamalı.

### 2.4. Kolay Öğrenilir, Derinleşebilir
İlk maç çok basit anlaşılmalı; ilerleyen kullanıcı ise rating, istatistik, sezon, turnuva ve gelişmiş analiz gibi katmanlar bulmalı.

### 2.5. Global Odak
Başlangıçtan itibaren altyapı:

- Çoklu dil,
- farklı klavye düzenleri,
- bölgesel leaderboard,
- global matchmaking

destekleyebilecek şekilde kurulmalı.

---

# 3. Ana Oyun Modları

## 3.1. Solo Speed Test

Monkeytype benzeri temiz ve hızlı test ekranı.

### Test seçenekleri

#### Süre bazlı
- 15 saniye
- 30 saniye
- 60 saniye
- 120 saniye
- Özel süre

#### Kelime bazlı
- 10 kelime
- 25 kelime
- 50 kelime
- 100 kelime
- Özel kelime sayısı

#### İçerik türü
- En yaygın kelimeler
- English 200
- English 1K
- English 5K
- English 10K
- Punctuation
- Numbers
- Mixed
- Quotes
- Kod yazma modu
- Özel kelime havuzu
- Kullanıcının yapıştırdığı metin

#### Dil
İlk sürüm İngilizce ile başlayabilir.

Sonrasında:
- Türkçe
- İspanyolca
- Almanca
- Fransızca
- Portekizce
- Diğer diller

eklenebilir.

---

# 4. Solo Test Sonuçları ve Analiz

Her test sonunda temel metrikler:

- WPM
- Raw WPM
- Accuracy
- Correct characters
- Incorrect characters
- Missed characters
- Extra characters
- Test süresi
- Yazılan toplam karakter
- Hata sayısı
- Consistency

### Gelişmiş analiz

Grafikler:

- Zaman içinde WPM
- Zaman içinde Raw WPM
- Accuracy grafiği
- Anlık hata noktaları
- Kelime bazlı hız
- En yavaş kelimeler
- En çok hata yapılan karakterler
- En çok hata yapılan bigram / trigram kombinasyonları
- Hız düşüşlerinin yaşandığı noktalar
- Backspace kullanımı
- Ritm / consistency analizi

### Ücretsiz / VIP ayrımı

**Ücretsiz kullanıcı:**
- Temel sonuç ekranı
- Basit WPM grafiği
- Son testler
- Temel kişisel istatistikler

**VIP / Pro kullanıcı:**
- Uzun dönem gelişim grafikleri
- Kelime bazlı detaylı analiz
- Zayıf karakter analizi
- Gelişim trendleri
- Özel karşılaştırmalar
- Daha uzun test geçmişi
- Gelişmiş filtreler
- Kişisel performans raporları

Temel typing deneyiminin kendisi paywall arkasına konmamalı.

---

# 5. 1v1 Duello Sistemi

Platformun ana özelliklerinden biri.

## Akış

1. Kullanıcı **Play Duel** seçer.
2. Mod seçilir.
3. Matchmaking kuyruğuna girilir.
4. Rakip bulunur.
5. Kısa geri sayım başlar.
6. İki oyuncu aynı içerikte yazar.
7. Sonuç hesaplanır.
8. Kazanan belirlenir.
9. Ranked ise rating güncellenir.
10. Rematch seçeneği sunulur.

---

# 6. Duello Modları

### Standard Duel
Örneğin:
- 30 saniye
- English 1K
- punctuation kapalı

Ranked için varsayılan ve standartlaştırılmış mod olabilir.

### Sprint Duel
15 saniyelik yüksek hız odaklı yarış.

### Endurance Duel
60–120 saniyelik yarış.

### Accuracy Duel
Hataların daha ağır cezalandırıldığı mod.

### Quote Duel
Aynı gerçek metin / alıntı iki kullanıcıya verilir.

### Elimination
Belirli aralıklarla geride olan oyuncunun elendiği mod.

### Best of 3 / Best of 5
Birden fazla round üzerinden karşılaşma.

---

# 7. Kazanan Nasıl Belirlenmeli?

Bu konu test edilmesi gereken önemli bir oyun tasarımı kararıdır.

Yalnızca WPM kullanmak kolaydır fakat accuracy'yi yeterince ödüllendirmeyebilir.

Olası yöntemler:

### Model A — Net WPM
Hatalar WPM hesaplamasında zaten cezalandırılır.

### Model B — WPM + Accuracy Skoru
Örnek:

`Performance Score = speed component + accuracy component`

### Model C — Tamamlama Yarışı
Aynı metni ilk tamamlayan kazanır.

### Model D — Mod Bazlı
- Sprint → hız öncelikli
- Accuracy → doğruluk öncelikli
- Quote → tamamlama süresi
- Standard Ranked → normalize edilmiş performans skoru

**Öneri:** MVP için mümkün olduğunca anlaşılır bir sistem kullanılmalı. Ranked skor formülü sonradan telemetriye göre optimize edilebilir.

---

# 8. Skill Level ve Rank Birbirinden Ayrılmalı

Projenin önemli tasarım kararlarından biri budur.

Bir oyuncunun:

1. **Typing skill seviyesi**
2. **Competitive rank / rating seviyesi**

aynı şey değildir.

Örnek:

- Oyuncu A: Ortalama 125 WPM
- Oyuncu B: Ortalama 102 WPM

A doğal olarak daha hızlı yazmaktadır.

Fakat B, kendi seviyesindeki oyunculara karşı çok istikrarlı olabilir ve yüksek bir competitive rating'e sahip olabilir.

Bu nedenle sistem iki sinyali birlikte kullanabilir.

---

# 9. Typing Skill Rating

Sistem kullanıcının gerçek yazma kapasitesini tahmin eden gizli veya görünür bir **Typing Skill Rating** oluşturabilir.

Örneğin:

- Son 20–50 geçerli test
- Ortalama WPM
- Median WPM
- Accuracy
- Consistency
- Competitive maç performansı

üzerinden hesaplanabilir.

Aşırı yüksek tek bir personal best doğrudan oyuncunun skill seviyesini belirlememeli.

---

# 10. Speed Bracket Sistemi

Oyuncular yaklaşık hız kategorilerine ayrılabilir.

Örnek taslak:

| Bracket | Ortalama hız |
|---|---:|
| Beginner | < 40 WPM |
| Casual | 40–69 |
| Intermediate | 70–99 |
| Advanced | 100–129 |
| Expert | 130–159 |
| Elite | 160–199 |
| Extreme | 200+ |

Bu değerler **kesin değildir** ve gerçek kullanıcı dağılımı görüldükten sonra değiştirilmelidir.

Bracket'ın amacı rank yerine geçmek değildir.

Amaç:

> Matchmaking sistemine oyuncunun doğal typing seviyesini anlatmak.

Örneğin 135 WPM oyuncunun 55 WPM oyuncuyla ranked maç yapması mümkün olduğunca engellenir.

---

# 11. Competitive Rating / MMR

Her oyuncunun görünür rankından ayrı bir **MMR** değeri olabilir.

Örneğin:

- 1000 başlangıç MMR
- Sistem maç sonucuna göre günceller.
- Görünür rank MMR aralıklarına karşılık gelir.

Ancak typing oyununda klasik ELO tek başına yeterli olmayabilir.

Çünkü oyuncuların doğal hızları doğrudan ölçülebiliyor.

Bu yüzden hibrit sistem kullanılabilir.

---

# 12. Özel Rank Puanı Mantığı

Kullanıcının önerdiği sistemin geliştirilmiş hali:

### Örnek

Oyuncu A:
- Ortalama 120 WPM
- Rating: 1500

Oyuncu B:
- Ortalama 100 WPM
- Rating: 1500

Sistem A'nın kazanma ihtimalini doğal olarak daha yüksek kabul eder.

### A kazanırsa
Beklenen sonuç gerçekleştiği için:
- A az rating kazanır.
- B az rating kaybeder.

### B kazanırsa
Upset gerçekleştiği için:
- B çok rating kazanır.
- A daha fazla rating kaybeder.

Bu sistem:

- Rakibin MMR'ını,
- iki oyuncunun tahmini typing skill seviyesini,
- mümkünse maç içi performansı

birlikte değerlendirebilir.

---

# 13. Potansiyel Rating Formülü

Kesin formül geliştirme sırasında simülasyon ve gerçek veriyle belirlenmeli.

Temel mantık:

`Expected Win Probability = f(MMR difference, typing skill difference)`

Sonra:

`Rating Change = K × (Actual Result - Expected Result)`

Ek faktörler:

- Placement maçları
- Oyuncunun rating belirsizliği
- Yeni hesap
- Uzun süre oynamamış hesap
- Rakibin seviyesi
- Disconnect
- Hile şüphesi

Glicko-2 / TrueSkill benzeri sistemler incelenebilir.

**Amaç:** Rank sistemini yalnızca WPM leaderboard'una dönüştürmemek.

---

# 14. Görünür Rank Sistemi

Örnek:

- Unranked
- Bronze
- Silver
- Gold
- Platinum
- Diamond
- Master
- Grandmaster
- Champion

Alt ranklar division içerebilir:

- Gold III
- Gold II
- Gold I

Üst ranklarda doğrudan rating ve global sıra gösterilebilir.

Örneğin:

> Grandmaster — #483 Global

---

# 15. Placement Sistemi

Yeni kullanıcı doğrudan Bronze'a atılmak zorunda değildir.

Örneğin:

- İlk 5 veya 10 maç placement.
- Solo test geçmişi varsa sistem yaklaşık skill tahmini yapar.
- Placement rakiplerinin seviyesi dinamik değişir.
- Sonunda başlangıç rankı belirlenir.

Smurf sorununu azaltmak için hesap açıldıktan sonra kısa bir calibration testi de yapılabilir.

---

# 16. Sezon Sistemi

Rank sistemi sezonlara ayrılır.

Örnek:

- 8 hafta
- 10 hafta
- 12 hafta

Season 1, Season 2 vb.

Sezon sonunda:

- Rank snapshot alınır.
- Profilde sezon rozeti kalır.
- Seasonal leaderboard arşivlenir.
- Ödüller dağıtılır.
- Rank soft reset uygulanır.

---

# 17. Season Reset

Valorant / MLBB benzeri **soft reset** tercih edilebilir.

Örneğin:

Diamond oyuncu yeni sezonda tekrar Bronze başlamaz.

MMR tamamen silinmez.

Yeni sezon:
- birkaç placement maçı,
- kısmen sıkıştırılmış MMR,
- yeni görünür rank

ile başlar.

Bu hem rekabeti tazeler hem de skill-based matchmaking'i bozmaz.

---

# 18. Seasonal Rewards

Sezon sonunda:

- Rank badge
- Profile frame
- Animated avatar border
- Title
- Name effect
- Chat badge
- Exclusive theme
- Trophy
- Seasonal profile background

verilebilir.

Örneğin:

> **S3 Diamond**

rozeti kullanıcı profilinde kalıcı olabilir.

Bu sistem rank kasmayı anlamlı hale getirir.

---

# 19. Leaderboards

### Global
- En yüksek MMR
- En yüksek WPM
- En yüksek accuracy
- En fazla ranked win
- En uzun winstreak

### Sezonluk
- Season ranking
- Weekly ranking
- Monthly ranking

### Bölgesel
- Country leaderboard
- Region leaderboard

### Arkadaşlar
- Friends leaderboard

---

# 20. Arkadaş Sistemi

Kullanıcılar:

- Arkadaş ekleyebilir.
- Online durumunu görebilir.
- Düelloya davet edebilir.
- Arkadaş profiline bakabilir.
- Arkadaş leaderboard'unu görebilir.
- Son maçlarını görebilir.

İleride:

- Party sistemi
- Takım yarışları
- Clan / club

eklenebilir.

---

# 21. Challenge Link

Viral büyüme açısından önemli özellik.

Kullanıcı özel challenge link oluşturabilir:

`site.com/challenge/ABCD12`

Linki alan kişi hesap açmadan veya hızlı guest girişiyle meydan okumaya katılabilir.

Örnek paylaşım:

> I type 137 WPM. Beat me.

Challenge sonucunda:
- sonuç kartı,
- rematch,
- hesap oluşturma CTA

sunulur.

---

# 22. Toplu Yarışmalar

2 kişiden fazla oyuncunun aynı anda yarıştığı odalar.

Örneğin:

- 5 oyuncu
- 10 oyuncu
- 25 oyuncu
- 50 oyuncu

Aynı metin üzerinden canlı sıralama.

Ekranda oyuncuların progress bar'ları gösterilebilir.

---

# 23. Public Race Rooms

Kullanıcıların katılabileceği açık yarışmalar:

- Casual
- Ranked Event
- Language specific
- Speed bracket specific
- Quote race
- Custom race

---

# 24. Otomatik Scheduled Events

Platform belirli saatlerde otomatik yarışmalar oluşturabilir.

Örneğin:

- Every hour
- Daily 18:00 UTC
- Daily 21:00 UTC
- Weekend Championship

Bu yarışmalar standart matchmaking'den daha görünür olabilir.

---

# 25. Rank Boosted Events

Belirli yarışmalarda kazanılan ranked puanı artırılabilir.

Örnek:

> **Friday Night Rush**  
> 20:00–22:00 UTC  
> Ranked rewards: +25%

Ancak bunun doğrudan MMR inflation yaratmaması gerekir.

Daha sağlıklı alternatif:

- Normal MMR değişimi
- Ek seasonal points
- Event XP
- Reward tokens

vermek olabilir.

**Öneri:** Gerçek skill rating'i boost etmek yerine ayrı event ödülü vermek rekabet bütünlüğü açısından daha sağlıklıdır.

---

# 26. Tournament Sistemi

İleri sürüm özelliği.

Örneğin:

- 16 kişi
- 32 kişi
- 64 kişi
- Single elimination
- Double elimination
- Swiss

Turnuvalar:

- Platform tarafından
- Topluluk tarafından
- Creator tarafından

oluşturulabilir.

---

# 27. Profil Sistemi

Her kullanıcının public profili olabilir.

Gösterilebilecek bilgiler:

- Username
- Avatar
- Country
- Current rank
- Peak rank
- Current MMR
- Global rank
- Average WPM
- Personal best
- Accuracy
- Total tests
- Ranked W/L
- Win rate
- Best winstreak
- Current winstreak
- Matches played
- Account age
- Seasonal history
- Achievements
- Badges
- Titles

---

# 28. Profil Özelleştirme

Monetizasyon için güçlü alan.

Satılabilecek veya kazanılabilecek öğeler:

- Avatar frames
- Profile banners
- Profile backgrounds
- Animated backgrounds
- Username effects
- Name colors
- Profile themes
- Custom badges
- Titles
- Emotes
- Typing cursor skins
- Result screen effects
- Victory effects
- Seasonal cosmetics

Önemli:

> Satılan hiçbir item competitive avantaj vermemeli.

---

# 29. Title Sistemi

Profil ve chat yanında görülebilir.

Örnek:

- Speed Demon
- Precision Master
- Top 100
- Season 3 Diamond
- 200 WPM Club
- 1000 Wins
- Tournament Winner
- Founder
- Early Adopter

Bazıları satın alınabilir, bazıları yalnızca achievement ile kazanılabilir.

Skill gösteren title'ların satın alınamaması daha sağlıklıdır.

---

# 30. Chat ve Sosyal Alanlar

İlk sürüm için zorunlu değildir.

Sonrasında:

- Global chat
- Region chat
- Friend chat
- Race lobby chat
- Clan chat

eklenebilir.

### VIP Chat Cosmetics
VIP kullanıcı:

- özel isim rengi,
- profil rozeti,
- animated name,
- özel emoji,
- daha fazla reaction

gibi kozmetik ayrıcalıklara sahip olabilir.

Moderasyon araçları başlangıçtan düşünülmelidir.

---

# 31. VIP / Pro Abonelik

Platform pay-to-win olmamalı.

VIP daha çok:

### Analitik
- Gelişmiş performans raporu
- Uzun dönem istatistik
- Detaylı hata analizi
- Daha fazla geçmiş veri

### Görsel
- VIP badge
- Ek profil özelleştirme
- Özel tema
- Özel cursor / efekt
- Ek username seçenekleri

### Sosyal
- Daha fazla custom room seçeneği
- Daha fazla profile showcase slotu

### Konfor
- Reklamsız deneyim
- Cloud settings/history
- Ek filtreler

**Ranked avantaj verilmemeli.**

---

# 32. Tek Seferlik Kozmetik Satışları

Aboneliğe ek gelir modeli.

Satılabilir:

- Profile banner
- Avatar border
- Theme pack
- Cursor pack
- Victory animation
- Username effect
- Profile card
- Emote pack

Seasonal / limited cosmetics kullanılabilir fakat aşırı FOMO yaklaşımından kaçınılabilir.

---

# 33. Battle Pass — Opsiyonel

Ürün yeterince büyürse sezonluk pass düşünülebilir.

### Free Track
- Basit cosmetics
- Titles
- Profile XP rewards

### Premium Track
- Exclusive cosmetics
- Animated effects
- Premium profile items

Competitive güç verilmez.

MVP için gerekli değildir.

---

# 34. Achievement Sistemi

Retention sağlayabilir.

Örnek:

- First Blood — İlk ranked galibiyet
- On Fire — 5 win streak
- Untouchable — %100 accuracy
- Speedster — 100 WPM
- Supersonic — 150 WPM
- Machine — 200 WPM
- Veteran — 1000 maç
- Challenger — 100 farklı oyuncuya karşı maç
- Giant Killer — Kendinden belirgin yüksek skill oyuncuyu yen

Achievement'lar profile konabilir.

---

# 35. Daily / Weekly Challenges

Örnek:

- 3 ranked maç kazan.
- %98+ accuracy ile 120 WPM yap.
- 5 farklı oyuncuyla yarış.
- Quote modunda 3 yarış tamamla.

Ödül:

- XP
- Cosmetic currency
- Profile item
- Badge progress

---

# 36. XP / Account Level

Rank'tan tamamen ayrı account level kullanılabilir.

Rank:
> Oyuncunun competitive performansı.

Level:
> Platformda ne kadar aktif olduğu.

Örneğin:

- Level 1–100+
- Maçlardan XP
- Solo testlerden sınırlı XP
- Daily missions

Level kozmetik içerik açabilir.

---

# 37. Typing Content Sistemi

## Random Words

Monkeytype benzeri havuz.

Örnek:
- English 200
- English 1K
- English 5K
- English 10K

## Quotes

Kitap, film, public-domain metin vb.

Telif konusunda kaynak lisansları dikkatle yönetilmelidir.

## Custom Text

Kullanıcı kendi metnini yapıştırabilir.

Custom içerik:
- Solo'da serbest
- Ranked'da kullanılmamalı

## Curated Competitive Pools

Ranked için sabit ve adil içerik havuzu.

Amaç herkesin aynı dağılımdan içerik almasıdır.

---

# 38. Competitive Fairness

Ranked ortamında metinlerin zorluk dağılımı standardize edilmelidir.

Örneğin:

- Benzer ortalama kelime uzunluğu
- Benzer karakter dağılımı
- Benzer punctuation yoğunluğu

Aksi halde maç sonuçlarında RNG etkisi artabilir.

---

# 39. Matchmaking Sistemi

Matchmaking birden fazla parametre kullanabilir:

1. Competitive MMR
2. Typing Skill Rating
3. Region / ping
4. Queue süresi

### Örnek

0–10 sn:
- Çok yakın MMR
- Benzer speed bracket

10–20 sn:
- Aralık genişler

20–30 sn:
- Daha geniş MMR

30+:
- Sistem uygun en yakın rakibi bulur

Bu değerler kullanıcı yoğunluğuna göre dinamik ayarlanmalıdır.

---

# 40. Queue Population Problemi

Yeni platformlarda en kritik sorunlardan biri boş matchmaking'dir.

Çözüm seçenekleri:

### Casual Ghost
Geçmiş bir gerçek oyuncunun kayıtlı typing replay'i ile yarışma.

Mutlaka **Ghost** olarak açıkça belirtilmeli.

### Challenge
Arkadaş linkleri ile doğrudan oyuncu getirme.

### Scheduled Events
Kullanıcıları belirli saatlerde aynı yere toplama.

### Tek Ranked Queue
Başlangıçta çok fazla mod açıp kullanıcı havuzunu bölmemek.

### Global Matchmaking
Ping typing oyunlarında FPS kadar kritik olmadığı için bölgesel sınırlar nispeten geniş tutulabilir.

---

# 41. Ranked Queue Tasarımı

MVP için öneri:

> **1v1 Ranked — 30s — English 1K — Standard**

Tek ranked mod.

Neden?

- Matchmaking nüfusu bölünmez.
- Rating karşılaştırılabilir olur.
- Oyuncular formatı öğrenir.
- Balancing kolaylaşır.

İleride ikinci queue açılabilir.

---

# 42. Rematch Sistemi

Maç sonunda:

- Rematch iste
- Friend ekle
- Profile bak
- Report et

seçenekleri.

Ranked'da aynı rakiple sonsuz rematch abuse önlenmelidir.

Örneğin belirli sayıdan sonra rating gain azaltılabilir veya eşleşme tekrar queue üzerinden yapılabilir.

---

# 43. Anti-Cheat

Competitive typing'de kritik.

Olası saldırılar:

- Auto typer
- Script
- Paste injection
- Browser automation
- Macro
- Bot
- Modified client

Önlemler:

- Paste engeli
- Key event analizi
- İmkânsız input timing tespiti
- İnsan dışı düzenlilik analizi
- Raw keystroke pattern analizi
- Anormal WPM artışları
- Server-side validation
- Replay sistemi
- Report sistemi

Yüksek leaderboard oyuncuları için ek doğrulamalar düşünülebilir.

---

# 44. Input Replay

Maçın input zaman çizelgesi tutulabilir.

Faydaları:

- Replay
- Anti-cheat
- Dispute inceleme
- Advanced analytics

Privacy ve veri saklama süresi açık biçimde tasarlanmalıdır.

---

# 45. Disconnect / AFK Sistemi

Ranked için kurallar:

- Maç başlamadan disconnect → iptal
- Maç sırasında kasıtlı çıkış → loss
- Server problemi → no contest
- Rakibin disconnect'i → belirli koşullarda win

Tekrarlanan disconnect:
- queue cooldown
- geçici ranked restriction

---

# 46. Live Spectating

İleri sürüm.

Kullanıcılar:
- üst rank maçları,
- arkadaş maçları,
- turnuvalar

izleyebilir.

Typing progress gerçek zamanlı gösterilir.

Bu özellik creator içerikleri için de değerlidir.

---

# 47. Shareable Result Cards

Her test / duel sonunda paylaşılabilir kart oluşturulabilir.

Örnek:

> **VICTORY**
>
> Galip — 142 WPM — 99.1%  
> Neo — 134 WPM — 98.4%
>
> Diamond II • +21 RP

Kart:
- Discord
- Reddit
- X
- Instagram
- WhatsApp

üzerinden paylaşılabilir.

Bu özellik doğal acquisition kanalı olabilir.

---

# 48. Public User Profiles ve SEO

Opsiyonel public profiller:

`site.com/@username`

Google tarafından indexlenebilir.

Ek public sayfalar:
- leaderboards
- challenges
- tournaments
- typing tests
- language pages

organik trafik getirebilir.

---

# 49. Referral Sistemi

Kullanıcı davet linki oluşturabilir.

Arkadaş kayıt olduğunda:

- Cosmetic currency
- Badge
- Profile item

gibi ödüller.

Rank / MMR ödülü verilmemeli.

---

# 50. Creator / Community Özellikleri

İleride:

- Creator badge
- Custom tournaments
- Community events
- Stream overlay
- Spectator link
- Private league
- Discord integration

sunulabilir.

Typing YouTuber / TikTok creator'ları için özel tournament odaları güçlü büyüme kanalı olabilir.

---

# 51. Custom Rooms

Kullanıcı oda oluşturabilir.

Ayarlar:

- Player count
- Duration
- Word count
- Language
- Word pool
- Quotes
- Punctuation
- Numbers
- Public / private
- Password
- Spectators

VIP kullanıcıya daha gelişmiş oda ayarları verilebilir.

---

# 52. Clubs / Clans — İleri Sürüm

Topluluk sistemi.

Clan:
- isim
- tag
- logo
- üyeler
- clan XP
- clan leaderboard
- clan wars

İlk sürüm için gerekli değildir.

---

# 53. Takım Modları — İleri Sürüm

Örnek:

### 2v2
Takımın toplam performansı.

### Relay
Oyuncular metnin farklı bölümlerini sırayla yazar.

### Clan War
Toplam skor üzerinden rekabet.

---

# 54. Ranked Integrity

Para ile satın alınamaması gerekenler:

- MMR
- Rank boost
- Placement avantajı
- Ranked multiplier
- Daha kolay matchmaking
- Stat buff

Competitive sistemin güvenilirliği ürünün en önemli varlıklarından biri olmalıdır.

---

# 55. Monetizasyon Özeti

Potansiyel gelir kaynakları:

1. VIP / Pro subscription
2. Cosmetic store
3. Seasonal pass
4. Profile customization
5. Creator / tournament premium tools
6. İsteğe bağlı reklamlı free tier

Temel typing ve competitive gameplay ücretsiz kalmalıdır.

---

# 56. MVP

İlk sürüm özellikle küçük tutulmalı.

## MVP v0.1

### Solo
- 15 / 30 / 60 sec test
- English 1K
- WPM
- Raw
- Accuracy
- Basic graph

### Account
- Register/login
- Username
- Basic profile

### Multiplayer
- 1v1 casual duel
- Real-time opponent progress
- Challenge link
- Rematch

### Competitive
- Tek ranked queue
- MMR
- Basit visible ranks
- Match history
- Leaderboard

### Social
- Friend add
- Duel invite

MVP'nin cevaplaması gereken soru:

> **İnsanlar rank kazanmak için tekrar tekrar typing duel oynuyor mu?**

---

# 57. MVP Sonrası — v0.2

Ürün traction alırsa:

- Season 1
- Placement matches
- Better matchmaking
- Speed skill rating
- Profile cosmetics
- Detailed analytics
- Scheduled races
- Public race rooms
- Achievements
- Daily challenges
- Friends leaderboard

---

# 58. v0.3

- VIP
- Cosmetic store
- Tournament system
- Spectating
- Public profiles
- Result sharing
- Regional leaderboard
- Multiple languages
- More typing modes

---

# 59. v1.0 Vizyonu

Platform artık üç ana sütuna sahip:

### Practice
Monkeytype seviyesinde güçlü solo typing sistemi.

### Compete
Competitive ranked typing.

### Social
Friends, profiles, events, tournaments ve community.

---

# 60. Teknik Ürün Gereksinimleri — Yüksek Seviye

Detaylı teknik mimari ayrı dokümanda tasarlanmalı ancak sistem muhtemelen şunları gerektirir:

### Frontend
- Çok hızlı client
- Responsive
- Minimum input latency
- Keyboard-first UX

### Backend
- Authentication
- User/profile
- Statistics
- Match history
- Rating service
- Leaderboards
- Events

### Real-Time Layer
WebSocket veya benzeri gerçek zamanlı bağlantı:

- Matchmaking
- Race state
- Progress
- Countdown
- Results
- Rematch

### Veri
- User
- TestResult
- Match
- MatchPlayer
- Rating
- Season
- Leaderboard
- Friendship
- Cosmetic
- Inventory
- Event
- Achievement

---

# 61. Ölçülmesi Gereken Ana Metrikler

Ürünün tutup tutmadığını anlamak için:

### Acquisition
- New users/day
- Challenge link conversion
- Referral rate

### Activation
- İlk testi tamamlayan oran
- İlk duelloya giren oran
- İlk ranked maçını oynayan oran

### Engagement
- Matches/user/day
- Tests/user/day
- Rematch rate
- Sessions/week

### Retention
- D1
- D7
- D30

### Competitive
- Queue wait time
- Match skill difference
- Rematch rate
- Ranked games/session
- Season participation

### Monetization
- Free → VIP conversion
- ARPU
- Cosmetic purchase rate

---

# 62. En Büyük Riskler

## 62.1. Boş Matchmaking
Competitive platform yeterli eşzamanlı oyuncuya ulaşamayabilir.

## 62.2. Anti-Cheat
Auto typing rank sistemini bozabilir.

## 62.3. Rank Sistemi
Rating adil hissettirmezse kullanıcı rekabeti ciddiye almaz.

## 62.4. Aşırı Scope
Monkeytype'ın tüm özelliklerini ve competitive sistemi aynı anda yapmak projeyi gereksiz büyütebilir.

## 62.5. Retention
Fikir ilginç olsa bile kullanıcıların rank için tekrar gelip gelmeyeceği doğrulanmalıdır.

---

# 63. Projenin Temel Hipotezleri

İlk kullanıcılar geldikten sonra doğrulanması gerekenler:

### Hipotez 1
Typing kullanıcıları insanlara karşı rekabet etmeyi seviyor.

### Hipotez 2
Rank sistemi tekrar oynama isteğini artırıyor.

### Hipotez 3
Oyuncular kendi hızlarına yakın rakiplerle yarıştığında daha fazla eğleniyor.

### Hipotez 4
Challenge links organik kullanıcı getiriyor.

### Hipotez 5
Profil / seasonal cosmetics monetizasyon için yeterli sosyal değer yaratıyor.

---

# 64. Şimdilik Netleştirilmemesi Gerekenler

Aşağıdaki kararları gerçek kullanıcı verisi olmadan fazla optimize etmemek gerekir:

- Tam rank formülü
- WPM bracket sınırları
- Rank isimleri
- Season süresi
- Rating reset oranı
- VIP fiyatı
- Cosmetics fiyatları
- Turnuva formatları
- Ranked test süresi
- Exact matchmaking toleransları

Önce kullanım davranışı gözlenmeli.

---

# 65. Ürünün En Güçlü Olası Konumlandırması

Platformun mesajı yalnızca:

> “Typing test yap.”

olmamalı.

Daha güçlü konum:

> **Competitive typing.**

veya konsept olarak:

> **Practice your speed. Prove your skill.**

Ürünün temel ayrımı:

> Solo test sana ne kadar hızlı olduğunu söyler.  
> Ranked sistem, kendi seviyendeki insanlara karşı ne kadar iyi olduğunu gösterir.

---

# 66. Önerilen İlk Ürün Döngüsü

```text
Siteye gir
    ↓
Solo test / Quick Duel
    ↓
İlk sonuç
    ↓
Ranked dene
    ↓
Rakip bul
    ↓
Maç
    ↓
Rank değişimi
    ↓
Rematch / yeni rakip
    ↓
Profil / leaderboard
    ↓
Tekrar oyna
```

Sosyal büyüme döngüsü:

```text
Düello
    ↓
Sonuç kartı
    ↓
Paylaş / Challenge link
    ↓
Yeni kullanıcı gelir
    ↓
Guest duel
    ↓
Hesap açar
    ↓
Ranked'e girer
```

---

# 67. Proje İçin Şimdilik En Mantıklı Öncelik

İlk geliştirme aşamasında bütün vizyonu yapmak yerine:

1. Çok iyi typing engine
2. Çok iyi 1v1 duel
3. Hızlı matchmaking
4. Güvenilir rating
5. Temiz leaderboard
6. Güzel profile
7. Challenge links
8. Basit sezon sistemi

çalışıyorsa ürünün çekirdeği doğrulanmış olur.

Bundan sonra analytics, monetizasyon ve sosyal sistemler büyütülebilir.

---

# 68. Tek Cümlelik Vizyon

> **Dünyadaki en iyi rekabetçi typing platformunu oluşturmak: kullanıcıların pratik yapabildiği, eşit seviyedeki oyuncularla gerçek zamanlı yarışabildiği, rank ve sezon kasabildiği, başarılarını sergileyebildiği global bir typing oyunu.**

---

## Not

Bu dokümandaki rating formülleri, speed bracket'ları, sezon süreleri ve monetizasyon ayrımları **nihai kararlar değildir**. Bunlar ürün geliştirme sırasında test edilecek tasarım seçenekleridir.

Özellikle **Typing Skill Rating + Competitive MMR** ayrımı projenin araştırılmaya değer ana mekaniklerinden biridir.


# 69. Adaptive Practice / Weakness Training

Platform yalnızca kullanıcının hangi hızda yazdığını ölçmekle kalmamalı; **nerede yavaşladığını ve hangi karakterlerde zorlandığını tespit edip buna göre kişiselleştirilmiş çalışma içeriği sunabilmeli.**

Bu özellik özellikle solo practice tarafını güçlendirir ve kullanıcıya tekrar gelmesi için somut bir gelişim nedeni verir.

## 69.1. Harf Bazlı Zayıflık Analizi

Sistem her karakter için ayrı performans verisi tutabilir:

- Harfe basma gecikmesi
- Harf öncesi bekleme süresi
- Yanlış basma oranı
- Backspace oranı
- Harfin geçtiği kelimelerde ortalama WPM
- Harfin farklı kombinasyonlardaki performansı

Örnek:

```text
J
Accuracy: 91.4%
Average key latency: 182 ms
Global character average: 104 ms
Weakness score: High
```

Kullanıcı özellikle **J** harfinde zorlanıyorsa sistem bunu otomatik fark eder.

---

## 69.2. Harf Kombinasyonu Analizi

Sorun her zaman tek bir harf olmayabilir.

Örneğin kullanıcı:

- `th`
- `ing`
- `tion`
- `qu`
- `ju`
- `str`
- `sch`

gibi bigram veya trigram kombinasyonlarında yavaşlıyor olabilir.

Bu nedenle analiz katmanı:

- tek karakter,
- bigram,
- trigram,
- kelime

seviyesinde çalışabilir.

Bu yaklaşım yalnızca "J harfinde kötüsün" demekten çok daha faydalı sonuç üretir.

---

## 69.3. Zayıf Kelime Analizi

Sistem kullanıcının sık hata yaptığı veya belirgin şekilde yavaşladığı kelimeleri belirleyebilir.

Örnek:

```text
Weak Words

1. jurisdiction
2. journey
3. adjustment
4. conjunction
5. javascript
```

Kullanıcı bu kelimelerde:

- düşük accuracy,
- yüksek key latency,
- fazla correction,
- düşük WPM

gösteriyorsa practice havuzuna daha sık eklenebilir.

---

## 69.4. Kişiye Özel Practice Metni

Analiz sonucunda sistem otomatik çalışma metni oluşturabilir.

Örnek:

> Kullanıcının `j` harfinde zorlandığı tespit edildi.

Platform buna göre `j` içeren kelimelerin yoğun olduğu doğal bir metin seçebilir veya oluşturabilir.

Örnek yapı:

```text
James joined the journey just after June.
The project required major adjustments before the judges arrived.
```

Amaç anlamsız şekilde:

```text
j j j j j j
```

yazdırmak değil; zayıf karakteri **gerçek kelime ve cümle bağlamında tekrar ettirmek** olmalıdır.

---

## 69.5. Adaptive Word Pool

Normal random word test yerine kullanıcıya özel dinamik kelime havuzu oluşturulabilir.

Örneğin:

```text
%60 normal kelimeler
%25 zayıf karakter veya kombinasyon içeren kelimeler
%15 daha önce hata yapılan kelimeler
```

Böylece practice doğal kalırken zayıflıklar sürekli çalıştırılır.

Bu oranlar kullanıcının performansına göre dinamik değişebilir.

---

## 69.6. Auto Practice Mode

Tek buton:

> **Train My Weaknesses**

Kullanıcı herhangi bir ayar yapmak zorunda kalmadan teste başlar.

Sistem otomatik olarak:

1. Son testleri analiz eder.
2. En problemli karakterleri bulur.
3. Problemli bigram / trigramları bulur.
4. Zayıf kelimeleri belirler.
5. Uygun kelime veya metin havuzu oluşturur.
6. Practice testi başlatır.
7. Test sonunda gelişimi ölçer.

Bu özellik ürünün güçlü farklılaştırıcılarından biri olabilir.

---

## 69.7. Weakness Score

Her karakter / kombinasyon için basit bir skor üretilebilir.

Örneğin skor şu faktörlerden oluşabilir:

- Accuracy farkı
- Ortalama key latency farkı
- Hata oranı
- Correction oranı
- Tekrar eden hatalar

Sonuç kullanıcıya anlaşılır şekilde gösterilir:

```text
Needs Work
J
Q
TION

Improving
TH
ING

Strong
ER
RE
ST
```

---

## 69.8. Gelişim Takibi

Kullanıcı belirli bir zayıflığın zamanla düzelip düzelmediğini görebilir.

Örnek:

```text
J accuracy

Last week: 89.2%
This week: 95.6%

+6.4%
```

veya:

```text
"tion" average latency

Previous: 214 ms
Current: 151 ms

-29.4%
```

Bu, kullanıcıya yalnızca "daha hızlı oldun" değil, **tam olarak nerede geliştiğini** gösterir.

---

## 69.9. Practice Recommendations

Test sonunda platform otomatik tavsiye verebilir:

> You are losing the most speed on words containing **J** and **JU**.

Butonlar:

- Practice J
- Practice JU
- Practice Weak Words
- Start Adaptive Session

---

## 69.10. VIP / Free Dağılımı

Bu özelliğin temel hali ücretsiz tutulabilir çünkü ürünün gerçek değerini gösterir.

### Free
- En zayıf birkaç harfi görme
- Basic Weakness Practice
- Son dönem zayıf kelimeler
- Basit öneriler

### VIP / Pro
- Detaylı karakter heatmap
- Bigram / trigram analizi
- Uzun dönem weakness history
- Gelişim karşılaştırmaları
- Otomatik kişisel antrenman planı
- Daha gelişmiş adaptive test üretimi
- Zayıflık bazlı özel raporlar

Bu şekilde VIP avantajı competitive değil, **analitik ve gelişim odaklı** kalır.

---

## 69.11. Kişisel Antrenman Döngüsü

```text
Test yap
    ↓
Hatalar analiz edilir
    ↓
Zayıf harf / kombinasyon bulunur
    ↓
Kişiselleştirilmiş practice oluşturulur
    ↓
Practice tamamlanır
    ↓
Gelişim ölçülür
    ↓
Yeni zayıflıklar tespit edilir
```

Bu döngü platformun solo tarafında çok güçlü bir retention mekanizması oluşturabilir.

---

## 69.12. İleri Seviye: Otomatik Metin Üretimi

İleride sistem kullanıcının zayıflıklarına göre tamamen özel metinler üretebilir.

Örneğin kullanıcı:

- `j`
- `q`
- `tion`
- `ment`

kombinasyonlarında zorlanıyorsa sistem doğal görünen fakat bu kalıpları yüksek frekansta içeren kısa practice parçaları hazırlayabilir.

Burada dikkat edilmesi gerekenler:

- Metin doğal okunmalı.
- Zayıf karakter yoğunluğu kontrollü olmalı.
- Aynı kelimeler sürekli tekrar etmemeli.
- Zorluk kademeli artmalı.
- Kullanıcının dili dikkate alınmalı.

Bu özellik ileride AI destekli olabilir fakat MVP için önceden hazırlanmış akıllı kelime havuzları yeterlidir.

---

# 70. Adaptive Practice'in Ürün İçindeki Rolü

Bu özellik platformun üç ana sütununu daha güçlü hale getirir:

### Practice
Kullanıcı yalnızca test yapmaz, gerçekten gelişir.

### Compete
Kullanıcı ranked maçlarda neden kaybettiğini anlayıp belirli zayıflıkları çalışabilir.

### Retention
Sistem kullanıcıya her gün kişisel bir çalışma nedeni verir.

Örnek:

> Your biggest weakness today: **J + JU combinations**  
> 5-minute focused practice available.

Bu nedenle Adaptive Practice uzun vadede ürünün en güçlü farklılaştırıcı özelliklerinden biri olabilir.

