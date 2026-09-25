# Competitive Typing Platform — ürün kararı

**25 Eylül 2026 · Revizyon 1 · Uygulama öncesi**

Bu belge önceki konseptin yerine geçer. [İlk taslak](docs/archive/2026-09-25-drafts/competitive_typing_platform_project.md), [değişiklik gerekçeleri](docs/DECISIONS_SOURCES.md) ve [teknik mimari](docs/ARCHITECTURE.md) birlikte okunabilir.

## 1. Ürün tezi ve düzeltilen varsayımlar

**Yazmak, adil rakiplerle tekrar oynanan bir beceri oyunu olabilir.** Bunu henüz bilmiyoruz. Geniş özellik listesi bu tezin kanıtı değildir.

İlk hedef kitle: fiziksel klavyeyle İngilizce kelime testleri yapan, kişisel rekorun yanında doğrudan rakip isteyen masaüstü kullanıcıları. Dünyanın her dilindeki tüm typing kullanıcılarını aynı anda hedeflemiyoruz. İngilizce içerik dil becerisi etkisi taşır; rating genel zekâyı, profesyonel üretkenliği veya diller arası yazma kapasitesini ölçmez.

Düzeltilen varsayımlar:

- Rank ile yazma performansının ilişkili olması hata değildir. Aynı standart formatta daha iyi yazan kişinin zaman içinde daha yüksek rank alması beklenir. Hızından bağımsız, herkesin kendi hız liginde yüksek rank kazandığı ikinci sistem kurulmaz.
- Aynı WPM her havuzda aynı başarı değildir. Rekabet, kişisel rekorlar ve analizler `ruleset_version` ile karşılaştırılır.
- Yeterli MAU, yeterli eşzamanlı rakip demek değildir. İlk operasyon tek bölge ve ilan edilmiş buluşma saatleri etrafında yürür.
- Solo kalitesi kritik; Monkeytype'ın bütün ayarları kritik değil. Düşük input gecikmesi, okunabilirlik ve doğru sonuç hesabı kapsamdan önce gelir.
- Özel antrenmanı ücretli yapmak doğrudan stat satışı olmasa da gelişim avantajı algısı yaratır. Temel kişisel antrenman daha sonra da ücretsizdir.
- Web istemcisi güvenilir bir sensör değildir. Replay tutmak veya paste engellemek insan tarafından yazıldığını kanıtlamaz.
- Sezon reseti kendiliğinden retention yaratmaz; yerleşmiş eşleşmeleri bozabilir. Önce devamlı rating, sonra reset gerektirmeyen sezon sunumu.

İlk çekirdek döngü: **yaz → adil düello → anlaşılır sonuç ve rating → yeni rakip → başka gün geri dön.**

## 2. MVP — tezi ölçmek için gerekenler

### Yazma ve solo

- Hesapsız, doğrudan kullanılabilir solo test; varsayılan 30 saniye, ek 15/60 saniye.
- Tek lisansı doğrulanmış English 1K kelime havuzu; küçük harf ve boşluk; sayı/noktalama/özel metin yok.
- Aynı typing motoru solo, ranked, davet ve kayıtlı rakipte kullanılır.
- Düzeltme gerektiren kurallar, yerel anlık caret, açık hata işareti, klavyeyle tekrar başlatma.
- Sonuç: WPM, accuracy, doğru karakter sayısı ve saniyelik hız grafiği. Raw WPM ikincil açıklamada; tanımı olmayan consistency yüzdesi yok.
- Guest son sonuçları bu tarayıcıda saklanır. Hesap açınca yerel sonuçlar otomatik doğrulanmış rekabet verisine dönüşmez.

### Rekabet

- **Tek public queue: ranked 1v1, 30 saniye, English 1K.** Ayrı public casual kuyruğu yok.
- Hesap ve doğrulanmış kimlik sağlayıcısı gerekir. İlk 10 sonuçlanan rated maç provisional; ayrı placement kuyruğu yok.
- Tek Elo puanı; görünür rank bunun etiketidir. Kullanıcı puan değişiminin sebebini görebilir.
- Canlı rakip ilerlemesi, aynı metin ve süre, sunucu hesaplı sonuç, kopma/yeniden bağlanma, anlaşılır puansız iptal.
- Temel ranked geçmişi ve tek aktif ranked leaderboard. Public speed/accuracy/win-streak tabloları yok.
- Sonuçta birincil eylem yeni rakip. Aynı kişiye rövanş puansızdır.

### Düşük nüfusta oynanabilirlik ve paylaşım

- Hesaplı kullanıcı kısa ömürlü özel düello linki oluşturur; alıcı guest olarak katılabilir. İki kişi hazır olmadan maç başlamaz. Link rating vermez.
- Link yaşam süresi başlangıçta 24 saat; aktif lobi 10 dakika; yalnızca iki katılımcı; herkese açık oda listesi yok. Host yoksa bunu söyle, sahte canlı rakip başlatma.
- Ranked kuyruğu uzarsa kullanıcı açık seçimle kuyruktan çıkarak **Kayıtlı rakiple oyna — puansız** seçeneğine geçebilir. Otomatik geçiş ve insan taklidi yapan bot yok.
- Ghost, oyuncunun izniyle alınmış anonim, doğrulanmış geçmiş ilerleme eğrisidir. Her ghost kendi orijinal metniyle oynatılır; başka metne WPM eğrisi yapıştırılmaz. İçerik/kurallar sürümü eşleşir; ikinci deneme rekor/rating üretmez.
- Başlangıçta uygun kayıt yoksa solo ve davet kullanılabilir; kayıt varmış gibi gösterilmez. Kapalı alfa gerçek izinli kayıtları sağlar.
- İlk buluşma saatleri elle ilan edilir, aynı ranked kuyruğu kullanır. Ayrı etkinlik servisi, ödül sistemi veya otomasyon motoru gerekmez.
- Paylaşım için link ve kısa sonuç metni yeterli. Sosyal görsel üreticisi MVP koşulu değildir.

### Hesap, güven ve işletim

- Email OTP ve Google ile giriş; takma ad, hazır avatar, sınırlı public rank kartı; özel kişisel geçmiş.
- Hesap dışa aktarma/silme; oturum kapatma; profil gizliliği; erişilebilirlik ve typing tercihleri.
- Maç/oyuncu raporlama, davet engelleme, minimum yetkili inceleme ekranı; yaptırımlar kayıtlı ve itiraz edilebilir.
- Rate limit, kaynak sınırları, sonuç tekilleştirme, yedek/geri yükleme planı ve kuyruk kalite ölçümü MVP'nin parçasıdır.

### MVP'de kesinlikle bulunmayanlar

Arkadaş grafiği ve online presence, chat, ayrı Duel hub, public casual queue, 3+ kişilik yarışlar, sezon resetleri/ödülleri, XP, günlük görevler, achievement sistemi, mağaza/ödeme, Pro, özel avatar yükleme, bildirim merkezi, AI metin üretimi, adaptif antrenman, ikinci ranked dil/format, spectator, turnuva, clan, native mobil uygulama.

Bu özelliklerin yokluğu menüde kilitli sekmelerle sergilenmez. Kodda boş servisler veya tablolara dönüştürülmez.

## 3. Oyun kuralları — standard-en-v1

- Ranked süre tam 30 saniyedir; ilk tuşla değil ortak sunucu başlangıcıyla başlar.
- Sunucu lisanslı, sürümlü havuzdan iki oyuncuya aynı kelime dizisini verir. Seed, içerik hash'i ve tam metin maç kaydına bağlanır.
- Havuz kelimeleri düzenli küçük ASCII harflerden oluşur; tek boşlukla ayrılır. Sonraki diller ayrı normalizasyon ve input testlerinden geçer.
- Metin motoru sırayla ekleme ve sondan silme destekler. Yanlış karakterler hata kuyruğunda görünür; yanlış kısmı silmeden doğru ilerleme artmaz. Seçimle değiştirme, ileri atlama ve paste ranked girdisi değildir.
- `C`: mevcut tamponun hedefle eşleşen en uzun kesintisiz doğru önekinin karakter sayısı; boşluklar dahil. Geri silmek C'yi azaltabilir. En yüksek anlık C veya toplam doğru basış sayısı sonuç değildir.
- Kazanan süre sonunda daha yüksek C'ye sahip oyuncudur. Aynı C beraberliktir; milisaniye veya accuracy ile gizli tiebreak uygulanmaz.
- `WPM = (C / 5) / (süre_saniye / 60)`. 30 saniyede 300 doğru karakter = 120 WPM; 250 = 100 WPM.
- `I`: ekleme girişimlerinin sayısı; silme girişimleri dahil değildir. `A`: hata kuyruğu boşken sıradaki hedef karakteri doğru ekleyen girişimler. `accuracy = 100 × A/I`; I=0 için accuracy gösterilmez. Düzeltmek önceki hatayı metrikten silmez. `raw = (I/5)/(süre/60)` yalnızca açıklayıcıdır.
- Hata hem boşa giden zaman hem düzeltme maliyeti getirir; ayrıca belirsiz bir accuracy katsayısı eklenmez. Accuracy/Raw puan değildir ve tekrar sil-yaz yoluyla yükseltilmeleri rank kazandırmaz.
- Saniyelik grafik kümülatif WPM'i gösterir; ara örnekler geçicidir. Sunucunun son C değeri belirleyicidir.
- Girdi alınmazsa maç normal 0 skorla tamamlanabilir; iki sıfır beraberliktir. Bağlantı terk kuralları bundan ayrıdır. Tekrarlanan AFK incelemeye/cooldown'a gider; kazananı yeniden tanımlayan ayrı ceza formülü yok.
- Content, input ve skor değişikliği yeni ruleset sürümüdür. Sezon/rekor karşılaştırmaları karışmaz. Maç içindeki kurallar değiştirilmez.

Bu stop-on-error tercihi akıcılık maliyeti taşır; kapalı alfada özellikle denenir. Beğenilmezse public rank birikmeden format değiştirilir. Ürün "Monkeytype skoruyla birebir aynı" iddiası taşımaz.

## 4. Post-MVP — çekirdek doğrulandıktan sonra

Giriş koşulu [doğrulama planındaki](docs/VALIDATION_ROADMAP.md) rekabet/retention ve güvenilirlik değerlendirmesinin olumlu olmasıdır; takvim tarihi değildir.

Öncelik talep ve veriyle seçilir; hepsi aynı anda açılmaz:

1. **Deterministik adaptif pratik:** yeterli kullanıcı verisi varsa kişisel gelişim döngüsü. Temel analiz ve hedefli çalışma ücretsiz.
2. **Arkadaşlık ve davet yönetimi:** mevcut link davetleri düzenli kullanılıyorsa. Chat ayrı bir moderasyon kararıdır.
3. **Basit sezon görünümü:** ilk 8 haftalık dönem, geçmiş snapshot ve kazanılmış rozet; rating korunur, yeni sezonda sıfırlanmaz. Süre bir ürün denemesidir.
4. **4–8 kişilik puansız özel/saatli yarışlar:** yalnızca talep ve eşzamanlılık varsa; aynı maç çekirdeği, ayrı rated takım matematiği yok.
5. **Daha ayrıntılı kişisel grafikler ve paylaşılabilir sonuç görselleri.**

## 5. Growth stage — anlamlı kullanım ve işletim kapasitesi

- Ücretsiz çekirdek korunarak profil kozmetiği ve açık fiyatlı Pro denemesi.
- Bölge ekleme; yeterli oyuncusu olan bölgelere maç sahipliği taşıma.
- Public race odaları, arkadaş sıralaması, opt-in online durumu, sınırlı bildirimler.
- Yeni solo diller, quotes ve özel metin; lisans/mahremiyet/IME desteği hazır olduğunda.
- İkinci ranked ruleset ancak mevcut kuyruğun bekleme süresi bozulmayacağını gösteren yoğunluk varsa; ayrı rating havuzu gerekir.
- İnceleme yükü ve içerik güvenliği hazırsa küçük etkinlik/creator araçları; yetişkin veya çocuk kitlesi ve hedef pazar kapsamı ayrıca değerlendirilir.
- Ölçümle gerekirse Redis, ayrı worker ve bölgesel match owner. MAU sayısı tek başına mimari geçiş tetiklemez.

## 6. Mature platform — gerçekten ölçek gerektirirse

Turnuva bracket'ları, gecikmeli spectator, creator monetizasyonu, kulüpler/takımlar, bölgesel ligler, büyük etkinlik orkestrasyonu, daha gelişmiş anti-cheat operasyonu. Takım/çok oyunculu rating için TrueSkill/OpenSkill benzeri yeni karar bu aşamada verilir; 1v1 rating geriye dönük sessizce dönüştürülmez.

Battle pass varsayılan roadmap değildir. İleride ancak kullanıcı yararı gösterilirse; süresi dolan satın alınmış hak, zorunlu günlük grind veya kayıp korkusuna dayanan tasarım kullanılmaz.

## 7. Adaptif pratik — gelecek tasarımı

MVP yalnızca veri sınırlarını ve sürümlü input modelini hazırlar; tüm olası analizi şimdiden toplamaz.

### Sinyaller ve yeterlilik

- Karakter: doğru/yanlış deneme sayısı, düzeltme sıklığı; tek harfe "tepki süresi" atfetmekten kaçın.
- Bigram/trigram: önceki doğru karakter ile sonraki doğru karakter arasındaki süre; kelime sınırı, hata düzeltmesi, composition ve focus kaybı etiketlenir.
- Kelime: doğruluk, tamamlanma süresi, karakter başına süre; uzun kelimeyi sırf uzun olduğu için zayıflık sayma.
- Latency: ağ RTT'si değil yerel tuşlar arası süre. Okuma ve düşünme de bu süreye dahildir; nedensel kayıp hesabı değildir.
- Consistency: temiz geçişlerdeki süre dağılımı veya saniyelik hız değişkenliği; tanımlı metrik, örnek sayısı ve belirsizlikle sunulur. Rastgele bir yüzde üretilmez.
- Dil, ruleset ve giriş yöntemi ayrılır. Klavye düzeni kullanıcı tarafından isteğe bağlı belirtilir; QWERTY koordinatları herkese dayatılmaz.
- Başlangıç eşikleri: karakter için 30, bigram/trigram için 20, kelime için 10 gözlem ve en az 3 farklı oturum. Bunlar araştırılmış evrensel sınırlar değil, test edilecek ürün korumalarıdır.

### Seans üretimi

Son 14 gündeki aynı format verisinden; az örnekli sinyalleri kullanıcı ortalamasına yaklaştır, median/robust dağılım kullan. Hata oranı yüksek kalıplar öncelikli; benzer doğrulukta yavaş geçişler ikinci sinyal. Kamuya "bilimsel weakness score" sunma.

En fazla 3 odak seç. 3 × 60 saniyelik kısa bloklar ve isteğe bağlı ara sun. Başlangıç ağırlığı %60 genel kelime, %25 hedef kalıp, %15 geçmişte hata yapılan kelime; tekrar sayısını sınırla ve kategoriler çakıştığında tek kelimeyi iki kez sayma. Her kategori boşsa ağırlığını genel havuza aktar. Seed, generator sürümü ve seçim nedeni saklanır.

İyileşme ölçümü aynı seçilmiş zor metnin skoruna bakmaz: ayrı, eş zorlukta kontrol kelimeleri ve sonraki normal seanslar kullanılır. Örnek azsa "henüz yeterli veri yok" denir. Rastgele dalgalanmaya gelişme rozeti verilmez. Ağrı/yorgunluk hissinde mola vermek kolaydır; zorunlu streak yok.

### AI kararı

Curated kelime listeleri ve lisanslı şablonlar yeterli: maliyet düşük, tekrar üretilebilir, yoğunluk denetlenebilir. LLM gerekmiyor. İleride doğal pasaj kalitesini kör kullanıcı testinde belirgin iyileştirirse yalnızca offline üretim + insan/içerik denetimi; ranked metni canlı LLM'den gelmez.

## 8. Monetizasyon sınırı

MVP'de ödeme yok. Ücretli çekirdek, reklam, mağaza veya sahte fiyat talep testi yok.

Doğrulama sonrası ilk tercih profil çerçevesi/banner ve destekçi Pro: kozmetik, rapor sunumu, kayıtlı filtreler ve kolaylıklar. Veri dışa aktarma, güvenlik/gizlilik ayarları, temel geçmiş, hata bilgisi ve adaptif çalışma ücretsiz kalır. Uzun ham input saklamayı ücretli ürün vaadine çevirmeyiz.

Satılamaz: Elo/MMR, düşük gecikme veya queue önceliği, kolay rakip, calibration avantajı, XP'nin rank'a dönüşümü, okunabilir font/kontrast, competitive içeriği önceden görme, doğruluğu değiştiren caret, gerçek başarı izlenimi veren unvan.

Rakip ekrandaki kozmetiği susturabilir; maçta animasyon ve profil efektleri gizlenir. Cosmetics önce/sonra preview ile, gerçek para toplamı ve açık iade/iptal akışıyla sunulur. Yeni sezon kozmetiği gerçek beceri rozetiyle karışmaz. Creator/turnuva araçları ancak gerçek yönetim ihtiyacı ve destek kapasitesi olduğunda satılır.

## 9. Kapsam kontrolü

Her ek özellik şu soruyu yanıtlar: **Bu, tekrar rekabet etmeyi mi doğruluyor, yoksa doğrulanmış talebi mi karşılıyor?** İkisine de cevap veremeyen iş bekler.

MVP başarı kararı sadece maç sayısına dayanmaz: aynı gün seri maç, turnuva günü yoğunluğu veya puansız rövanşlar bağımsız günlerde ranked geri dönüşün yerine sayılmaz. Metrik tanımları, eşikler, riskler ve uygulama sırası [doğrulama planındadır](docs/VALIDATION_ROADMAP.md).
