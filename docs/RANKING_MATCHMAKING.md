# Rating ve matchmaking kararı

**25 Eylül 2026 · Revizyon 1 · Varsayılanların sahibi bu belgedir.**

## 1. Karar: tek Elo, tek anlam

Rank, `standard-en-v1` formatında başka oyunculara karşı kazanma becerisinin tahminidir. Aynı formatta WPM ile güçlü korelasyon normaldir. "Yavaş ama kendi hız grubunda iyi" kişiyle "global olarak güçlü" kişi aynı leaderboard iddiasında birleştirilmez.

Launch modeli: maç sonucuyla güncellenen tek sayısal Elo; görünür puan bunun yuvarlanmış hali, rozet bunun sabit aralık etiketidir. Gizli MMR + ayrı RP, promotion serileri, korumalı demotion, speed bracket ve performans çarpanı yok.

### Değerlendirilen seçenekler

- **Sabit K'lı Elo:** 1v1 kazan/kaybet/beraberlik için anlaşılır ve kolay test edilir. Yeni oyuncuyu yavaş öğrenir; belirsizliği matematiksel modellemez. Seçim: Elo + sınırlı provisional K politikası.
- **Glicko-2:** rating deviation ve volatility ile yeni/inaktif kullanıcı belirsizliğini modeller. Bu gerçek bir avantajdır. Ancak rating period tasarımı ve volatility çözümü gerekir. Orijinal yöntem periyotta birden çok oyun üzerinden anlatılır; her maçı tek period saymak otomatik olarak iyi ayar değildir. Bu ürün için sayısal kazanımı gösterilmeden eklenmez. [Orijinal Glicko-2 açıklaması](https://glicko.net/glicko/glicko2.pdf).
- **TrueSkill:** takım ve çok oyunculu sıralamalarda yararlı, ortalama ve belirsizlik modeli var. Launch yalnızca 1v1; factor graph ve ek ayarlar ürün ihtiyacını aşar. İleride paket/lisans uygunluğu ayrıca incelenir. [Microsoft Research](https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/).
- **Gizli MMR + görünür rank:** farklı bir rating algoritması değil, sunum katmanıdır. Gerçek eşleşme puanı ile gösterilen ilerleme ayrışırsa kullanıcı "kazandım ama neden bu kadar az?" sorusunu çözemez. Launch için ayrım gereksiz.
- **Solo calibration / WPM seeding:** ilk maç kalitesine yardım edebilir; yalnızca aynı kurallı, sunucu izlemeli testler anlamlıdır. Launch'ta doğrulanmış WPM→Elo dönüşümü yok; keyfi bir dönüşüm uydurulmaz.
- **Hybrid performance:** Elo beklentisine WPM eklemek aynı beceriyi iki kere sayabilir; solo testte bilerek yavaş yazmayı ve maçta puan formülünü oynamayı teşvik edebilir. Launch'ta reddedilir.

## 2. Tam puan kuralı

Başlangıç `r = 1200`. Veritabanı kesirli değeri korur; ekranda en yakın tam sayıya yuvarlar. Formül logistic Elo uyarlamasıdır; FIDE'nin turnuva/yeni oyuncu kurallarını birebir uygulamıyoruz.

```text
E_A = 1 / (1 + 10 ^ ((r_B - r_A) / 400))
E_B = 1 - E_A
S = 1 (galibiyet), 0.5 (beraberlik), 0 (mağlubiyet)
r_A' = r_A + K_A × (S_A - E_A)
r_B' = r_B + K_B × (S_B - E_B)
```

- İlk 10 rated sonuç: K=64. 11. maçtan itibaren K=32.
- Karşılıklı pre-match rating ve maç başındaki rated maç sayısı kullanılır; bir tarafın yeni değeri diğer tarafın hesabına girmez.
- No-contest, canceled, ghost, davet ve rövanş: rating ve provisional sayacı değişmez.
- Doğrulanmış start sonrası tek taraflı terk: rated loss; ek puan kesme yok, yalnızca ayrı queue cooldown.
- İlk 10 maça forfeit sonuçları dahildir; tekrar AFK account integrity sinyalidir. Sayacı kötüye kullanmak leaderboard için yeterli değildir.
- K kişiye göre farklı olduğunda toplam rating değişimi sıfır olmayabilir. Bunu gizlemiyoruz: newcomer kaynaklı merkez/dağılım kayması haftalık izlenir. Otomatik merkezleme, gizli puan silme veya K'yı rakibe göre elle düzeltme yok.
- Score margin, accuracy, streak, event, para ve solo performans Elo değişimini etkilemez.
- Bir kullanıcı aynı anda yalnızca bir unresolved rated maça bağlı olabilir; sonuç/inceleme çözülene kadar yeni rated maç yok. Dolayısıyla rating snapshot eskiyemez.

### Sayısal örnekler

**120 WPM ve 100 WPM; ikisi de 1500:** model henüz farkı bilmiyorsa beklenti %50/%50'dir. İki yerleşik oyuncuda kazanan +16, kaybeden −16 alır. 100 WPM oyuncu kazanırsa da aynı sonuç geçerlidir. WPM farkı yüzünden ek upset bonusu yoktur. Kalıcı hız farkı varsa sonuçlar rating'i ayırmalıdır.

**A 1600, B 1400:** A'nın model beklentisi yaklaşık %75,97. K=32 iken A kazanırsa +7,69 / B −7,69; B kazanırsa +24,31 / A −24,31. Beklenmeyen sonucun daha fazla puan getirmesini Elo zaten sağlar. Bunlar formül çıktısıdır; gerçek typing kazanma olasılığının ölçümü değildir.

**A yeni, B yerleşik; ikisi 1200:** A kazanırsa A +32, B −16. Fark K politikasından gelir ve maç sonucunda açıklanır. İki yeni oyuncu aynı puanda karşılaşırsa kazanan +32, kaybeden −32.

**Beraberlik:** iki eşit puanlı oyuncu için 0 değişim; farklı puanlarda düşük oyuncu puan kazanabilir. Beraberlik, C eşitliğidir; belirsiz ağ sınırıyla iptal bundan farklıdır.

## 3. Placement, smurf ve inaktivite

İlk 10 maç "Değerlendirme 3/10" etiketi taşır; puan değişimi yine okunabilir. Ayrı gizli placement puanı veya tüm yeni hesapları ayrı kuyrukta tutma yok.

İlk ranked öncesi 30 saniyelik sunucu izlemeli ısınma önerilir, zorunlu değildir. Sıradan istemci solo geçmişi başlangıç rating'ini belirlemez. Isınma yalnızca yeni oyuncu eşleşmesinde yumuşak güvenlik sinyali verir. Temel ranking akışı ısınma olmadan da çalışır.

Smurf tamamen engellenemez. Doğrulanmış hesap, K=64, tekrar rakip kontrolleri ve art arda ezici performans sinyali yardımcıdır. Solo'da yavaş yazarak Elo düşürülemez; ama kötü niyetli kullanıcı maç kaybederek sandbag yapabilir. Anomali tek başına ban değildir; tekrar örüntüsü ve inceleme gerekir.

30 gün oynamayan kullanıcının rating'i azaltılmaz veya sıfırlanmaz. Profilde eski performans tarihi, girişte ısınma önerisi gösterilir. Elo gerçek RD üretmediği için sahte güven aralığı gösterilmez; `provisional/stale/established` operasyon etiketleridir, matematiksel belirsizlik değil.

Glicko-2'ye geçiş tetikleyicisi: out-of-time değerlendirmede daha iyi Brier/log loss, daha hızlı newcomer yerleşmesi ve daha az tek taraflı maç; mevcut Elo'ya karşı ayrılmış zaman aralığında gösterilmeli. Sırf birkaç upset veya yüksek MAU algoritma değiştirme sebebi değildir.

## 4. Görünür rank, leaderboard ve sezon

Launch rozetleri, yalnızca sabit sunum aralıkları:

- Bronze: 1000 altı.
- Silver: 1000–1199,99.
- Gold: 1200–1399,99.
- Platinum: 1400–1599,99.
- Diamond: 1600 ve üzeri.

İlk 10 maç bitene kadar provisional etiketi rozetin yerini alır. Bunlar gerçek nüfus yüzdelikleri değildir; kapalı alfa dağılımına göre public launch öncesi son kez gözden geçirilir. Public sürümde sınırlar sessizce değiştirilmez. RP/division katmanı ve animasyon için ayrı ilerleme puanı yoktur.

Leaderboard: aynı ruleset, en az 20 rated maç, en az 5 farklı rakip, son 14 günde en az 1 rated sonuç, inceleme/ban dışında hesap. Rating eşitliğinde ortak sıra; sayfalama için user_id yalnızca teknik sıralama sağlar. Kullanıcının geçmişi ve verisi gizli olabilir; ranked'e katılım takma ad + rating kartının public olmasını gerektirir ve önceden söylenir. Kartlar MVP'de arama motoruna açılmaz.

Yeni sistemde 5 farklı rakibe ulaşılamıyorsa sıralama boş kalabilir; eşik gizlice kaldırılmaz. Kişisel rating ve maçlar yine çalışır. İlk Top 10 adaylarının puanı canlı profilde görünse de listeye girişi kısa manual review sonrası olur; para/ödül yoktur.

MVP'de sezon yok. Post-MVP sezonları 8 haftalık sunum/arşiv dönemidir: rating değişmeden devam eder, yalnızca o sezon aktif ve yeterli maç oynayanlar listelenir. Snapshot, ruleset ve eligibility birlikte sürümlenir. Soft/hard reset ve re-placement varsayılan değildir; reset isteyen motivasyon ihtiyacı başka UX çözümleriyle sınanır. Büyük ruleset değişikliği ayrı rating havuzu veya açıkça ilan edilmiş migration gerektirir.

## 5. Matchmaking — düşük nüfusu temel alan algoritma

### Kuyruğa giriş

Oturum, hesap durumu, format, tek aktif ticket/maç, minimum istemci sürümü ve sunucu sağlığı kontrol edilir. Rating snapshot sunucudan alınır. Bölge kullanıcı ülkesinden değil mevcut maç sunucusuna ölçülen RTT'den seçilir; MVP tek bölgedir.

İlk dağıtım Frankfurt varsayılanıdır; hedef alfa grubunun gerçek ölçümü bunu doğrulamazsa public açılıştan önce değiştirilir. Bu seçim dünyanın her yerinde adil ping vaadi değildir.

Başlangıç uygunluk sınırı: son 10 saniyelik örneklerde RTT p95 ≤200 ms, p95−median ≤80 ms. İki oyuncunun median RTT farkı ≤100 ms. Yetersiz ölçüm varsa kısa bağlantı kontrolü bitmeden queue açılmaz. Bu eşikler test edilecek politikalardır; kullanıcıya raw teknik filtre dökümü yerine bağlantının uygun olup olmadığı gösterilir.

### Aday arama

Her 500 ms'de önce en uzun bekleyen ticket ele alınır. Ticket yaşı kuyruğa ilk girişten gelir; teknik retry sıfırlamaz, kullanıcı iptal edip yeniden girerse sıfırlanır.

- 0–15 saniye: en fazla ±100 Elo.
- 15–30 saniye: ±200 Elo.
- 30–60 saniye: ±300 Elo.
- 60 saniye: arama otomatik biter; yeniden ara, solo veya kayıtlı rakip seçilir. Sonsuz bekleme/sonsuz tolerans yok.

Bir çift ancak **her iki ticket'ın** o andaki aralığına uyuyorsa eşleşir; yaşlı ticket yeni girenin tercihini geçersiz kılamaz. Karşılıklı Elo farkı en fazla 300; modelde zayıf tarafın beklentisi yaklaşık %15,1'e kadar düşebilir. Bu düşük nüfus ödünleşmesidir; eşik altında daha büyük fark hiçbir zaman sessizce açılmaz.

İlk 10 maçında olan adaylar için, iki tarafta da son 7 günde aynı ruleset'ten en az 2 sunucu izlemeli geçerli skor varsa, median WPM farkı ≤35 olan aday tercih edilir. İlk 30 saniyede daha büyük farkla eşleşme yapılmaz; sonra bu yumuşak koruma kaldırılabilir. Yerleşik iki oyuncuda WPM filtresi kullanılmaz. Veri eksikse hayali bir tahmin üretilmez; normal Elo araması yürür. Provisional koruma rating formülünü değiştirmez.

Uygun adaylarda önce Elo yakınlığı, sonra bekleme süresi, sonra RTT farkı kullanılır; tam eşitlikte rastgele seçim. En eski ticket'a hiç aday yoksa sonraki ticket denenir; kuyruk bir kişi yüzünden durmaz. Adaylar atomik reserve edilir; duplicate giriş/iki eşleştirici aynı kişiyi iki maça alamaz.

### Hazır olma ve geri alma

Rakip bulunduğunda iki tarafa 10 saniyelik hazır onayı. Yanıtlamayan taraf queue'dan çıkar; diğer kullanıcı hâlâ bağlantılıysa ilk ticket yaşı korunarak geri döner. Manuel iptal veya gizli sekmeden onaysız rated start yok.

Hazır onayından sonra sunucu maç/content kaydını oluşturur; iki taraf metni aldığını onaylar; ortak start planlanır. Bağlantı/start bütünlüğü sağlanmazsa puansız iptal. Detaylı durum makinesi [mimari belgesinde](ARCHITECTURE.md).

## 6. Tekrar rakip ve boosting

- Davetler ve doğrudan rövanşlar her zaman puansız.
- Ranked sonuçtaki "Yeni rakip" public queue'ya döner; önceki rakiple 120 saniye rated eşleşme yok.
- Aynı sırasız hesap çifti için kayan 24 saatte en fazla 3 rated start. İptal edilmiş start öncesi teklifler sayılmaz. Bir start rezervasyonu sonucu beklenirken de sayılır; yarış durumu yaratılmaz.
- Sınır dolunca azaltılmış rating gibi gizli istisna yok; eşleşme bulunamazsa açık puansız alternatif.
- İki kişilik nüfus bu sınırda ranked oynayamaz hale gelebilir. Bunu kabul ediyoruz: birbirini farm ederek sahte ladder yaratmak ürün doğrulaması değildir. Pilot daha çok bağımsız rakip toplamalıdır.
- Aynı IP tek başına boosting veya ban sebebi değildir. Hesaplar arası tekrar, sıra dışı forfeit, yönlü puan aktarımı ve davranış birlikte değerlendirilir.
- Invite block ranked rakip seçme filtresi değildir; aksi halde güçlü rakibi bloklayarak ladder manipüle edilir. Ranked'de iletişim zaten yok; sistematik taciz raporla/incelemeyle çözülür.

## 7. Kopma, iptal, sonuç politikası

Maç başlamadan kopma puansız iptal; tekrar no-show için cooldown. Başladıktan sonra zaman durmaz. Yeniden bağlanma toleransı 5 saniye; geri dönüşte yalnızca sunucu onaylı önekten devam edilir, offline yazılar bulk kabul edilmez.

Sonuç karşılaşma süresi ve 5 saniyelik dönüş süresi nedeniyle en fazla maç bitiminden 5 saniye sonrasına kadar bekleyebilir. Tek kişi dönmezse forfeit; iki kişi de dönmezse double-abandon no-contest ve her iki tarafa davranış sinyali. Bunun collusion kaçış yolu olabileceği açık risk olarak izlenir.

Sunucu sahipliği kaybı, genel kesinti veya eksik doğrulama verisi kullanıcıya otomatik loss yazmaz. Sunucu kaynaklı no-contest iki tarafın puanını korur. Bağlantı hatasının kasıtlı olup olmadığı güvenilir biçimde bilinemez; cooldown davranışa uygulanır, niyet iddiasına değil.

Başlangıç cooldown politikası: 30 dakika içinde 2 ready no-show → 60 saniye; 2 post-start abandon → 5 dakika; 24 saatte 5 abandon → inceleme ve en fazla 30 dakika otomatik bekleme. Genel sunucu olayı sırasında bunlar bastırılır. Tek kopma otomatik ban sebebi değildir.

## 8. Launch öncesi değerlendirme

Elo sabitleri, provisional süresi, arama pencereleri, WPM koruması, pair cap ve RTT politikası tek `matchmaking_policy_version` ile kaydedilir. Kullanıcı başına gizli deneysel rating formülü yok. Araştırma gerekiyorsa önce offline replay/simulation.

Zorunlu senaryolar: 120/100 WPM eşit rating, güçlü newcomer, yavaş yeni oyuncu, sandbag, 30 gün inaktif dönüş, 2/10/50 kişilik kuyruk, geniş RTT, saatlik yoğunlaşma, tekrarlanan çiftler, karşılıklı terk ve 50/50 gerçek performanslı oyuncular. Simülasyon davranış varsayımlarını kanıtlamaz; hangi politikanın hangi varsayımda bozulduğunu gösterir.
