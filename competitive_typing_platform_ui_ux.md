# Competitive Typing Platform — yapısal UI/UX kararı

**25 Eylül 2026 · Revizyon 1 · Görsel mockup veya çalışan arayüz değildir.**

[Ürün kapsamı](competitive_typing_platform_project.md) hangi özelliklerin açık olduğunu belirler. Bu belge ekranların işini, hiyerarşisini ve hata davranışını belirler. Önceki 113 bölümlük [UX taslağı](docs/archive/2026-09-25-drafts/competitive_typing_platform_ui_ux.md) arşivdir.

## 1. Ana değişiklik

Başlangıç deneyimi bir oyun portalı değil, doğrudan kullanılabilir yazma alanıdır. Home, Play, Practice ve Quick Play'in aynı seçenekleri tekrarlaması kaldırılır. "Solo mu, Duel mi, Ranked mi?" ara ekranı yok.

İlk ziyaretçinin ana işi yazmaya başlamak; geri dönen rekabetçi oyuncunun ana işi bir sonraki maça girmektir. Bu iki ihtiyaç açık yollarla çözülür; son kullanılan modu hatırlamak kullanılabilir ama açıklanmayan zorunlu redirect yapılmaz.

Ana ilkeler: bağlama göre görünürlük, ekran başına bir baskın eylem, normal klavye gezinmesi, durumu saklamayan hata mesajları, rank puanının tek anlamı. Teknik bağlantı ayrıntıları istek üzerine açılır; ana akışta MMR aralığı, speed bracket veya altyapı terimi gösterilmez.

## 2. Uygulama kabuğu ve gezinme

### MVP rotaları

- `/`: kısa değer önerisi ve doğrudan 30 saniyelik solo alanı. Ayrı dashboard yok.
- `/practice`: aynı solo alanına kalıcı bağlantı; `/` ile aynı motor ve görünüm.
- `/ranked`: rank, sabit format, bağlantı uygunluğu, son maçlar; birincil "Rakip bul".
- `/duel/:code`: davet bekleme/katılma lobisi; bağımsız menü öğesi değil.
- `/match/:id`: ortak canlı maç ve ardından sonuç. Refresh aynı sunucu durumunu getirir.
- `/leaderboard`: tek ranked listesi, kendi satırına gitme.
- `/u/:username`: public minimum rank kartı; sahibine özel geçmiş bağlantısı.
- `/me/history`: özel maç/solo geçmişi; farklı kurallar filtreyle ayrılır.
- `/settings`: kalıcı ayarlar.
- `/auth`: giriş ve email doğrulama, dönüş hedefi korunur.

Desktop header: marka, **Pratik / Ranked / Sıralama**, hesap menüsü. Bu kapsam için kalıcı sidebar gerekli değil. Top bar'a arkadaş sayacı, para, sezon, bildirim, ses/tema ikonları eklenmez. Gelecekte navigasyon büyürse Compete altında gruplanır; tüm eski feature listesi sidebar'a taşınmaz.

Mobilde aynı üç hedef etiketli kompakt navigasyonla erişilir; hesabın altında profil ve ayarlar. Beş-altı kalemli bottom bar ve ikinci "More" sistemi MVP için gereksiz. Aktif yazma sırasında chrome görsel olarak sadeleşir; kaçış ve odak erişilebilir kalır.

Başlık hiyerarşisi, skip link, görünür focus, geri düğmesi ve tarayıcı history davranışı ortaktır. Rastgele mouse hareketi navigasyonu açıp metni kaydırmaz.

## 3. Home / ilk ziyaret

Ana odak hazır metindir; başlama eylemi ilk karakter veya "Yazmaya başla" ile aynı işi yapar. Solo için kayıt veya modal onboarding yok. Tek cümle: "Hızını çalış. Canlı rakibe karşı dene." Ranked menüden keşfedilir.

Test bitince WPM + accuracy + doğru karakter ve tekrar dene birincildir. "Canlı rekabeti dene" ikincildir; kullanıcı bilinçli seçerse ranked açıklaması ve gerekli giriş açılır. Davetle gelen kullanıcıya solo turu zorunlu kılınmaz.

Geri dönen ranked oyuncu `/ranked` bağlantısını kullanır; tek tıkla kuyruğa girebilir. Büyük welcome alanı, günlük görev ve dört eşit CTA yok. Public açıklamalar yalnızca mevcut özellikleri anlatır; henüz olmayan adaptif çalışma ve 50 kişilik yarış pazarlanmaz.

## 4. Practice ve typing alanı

Üstte üç süre: 15 / **30** / 60; sabit içerik etiketi. Tek havuz varken havuz/dil dropdown'ı yok. İlk tuşta solo süre başlar; ranked ortak countdown ile başlar.

Metin yüksek okunabilirlikte sabit genişlikli yazı karakteriyle sunulur. Web font geç gelirse test boyunca font değiştirilmez. Büyük metin yığını yerine birkaç satırlık kontrollü viewport; satır kaydırma caret'i takip eder. Hatalar renk yanında şekil/alt çizgi ve yerel açıklamayla anlaşılır. Yanlış kısmı silme gereği ilk kullanımda bir satırda açıklanır.

Yerel caret/input ağ cevabını beklemez. UI render'ı tüm geçmişi her tuşta yeniden oluşturmaz. Aşırı animasyon, hareketli arka plan ve canlı grafiğe odak yok. Rakip ilerlemesi typing alanının geometrisini değiştirmez.

Solo aktifken süre değişimi sonraki teste uygulanır; mevcut testi sessizce yeniden puanlamaz. Ranked oyun kuralları değiştirilemez; format etiketindeki açıklama bunu söyler.

## 5. Ranked hub, queue ve hazır onayı

Hub'da rank/puan veya "Değerlendirme 3/10", 30 saniye English 1K bilgisi, "Hataları düzelterek ilerlersin" kuralı ve **Rakip bul** bulunur. Geçmiş ikincildir. Season paneli ve hayali yüzdelik yok.

Yeni kullanıcı kısa kuralları okur; hesap gerektiğinde nedenini görür. 30 saniyelik bağlantı/ısınma testi önerilebilir; ranking açıklaması uzun tutorial değildir. Aynı oturumda tekrarlanmaz.

Queue sırasında:

- "Rakip aranıyor · 18 sn" ve her zaman erişilir iptal.
- Yeterli güncel örnek varsa tahmini bekleme aralığı; örnek yoksa "Şu an tahmin için yeterli veri yok". Tek başına loader ve uydurulmuş 12 saniye yok.
- 30 saniyede "Uygun rakip az. Arama biraz genişledi." Kayıtlı rakibe geçme ikincil seçimdir; seçildiğinde ranked ticket atomik olarak iptal edilir.
- 60 saniyede "Bu aramada uygun rakip bulunamadı." Birincil tekrar ara; solo/kayıtlı rakip seçenekleri. Süresi dolmuş kuyruk gizlice çalışmaz.
- Kayıtlı rakip yoksa bu seçenek gösterilmez; solo ve davet kullanılabilir.

Eşleşince iki kişinin 10 saniyelik hazır onayı vardır. Otomatik oynatılan ses yok; önceden kullanıcı etkileşimi ve ayarı varsa kısa uyarı. Onay verilmezse bu taraf queue'dan çıkar. Bekleyen diğer tarafın önceliği korunur.

Rakibin adı, rank/provisional durumu ve format yeterli. Start öncesi karşılaştırmalı 200 WPM afişi veya özel RP tahminiyle kaygı üretilmez. Sonra sabit 3 saniyelik countdown; metin hazırlanamazsa maç başlamaz.

## 6. Canlı maç

Merkezde metin ve süre; üstte iki kompakt ilerleme çizgisi ve rakip adı. Rakibin tuşları, profil efektleri, accuracy grafiği ve geçmişi gösterilmez. Rakip çizgisi sunucunun son doğruladığı bilgidir; aradaki animasyon sonucu belirlemez.

Kendi C/WPM sayısı geçicidir; yerel akıcılık korunur. Nihai sunucu skoru geç gelen son girdiler nedeniyle küçük fark taşıyabilir; sonuç ayrıntısında "Süre içinde sunucuya ulaşan girişler sayılır" açıklaması vardır. Ağ gecikmesi, sınırsız telafi veya gizli handicap verilerek çözülmez.

Kopma halinde "Bağlantı yeniden kuruluyor; süre devam ediyor" mesajı ve kalan dönüş süresi. Yeniden bağlanınca sunucunun doğruladığı konuma dönülür; kaybolan girişler kısaca işaretlenir. Offline yazıp sonradan yükleme yok. Rakibe bağlantı durumu gösterilir; gerçekleşmemiş galibiyet ilan edilmez.

Tarayıcı sekmesi değişince ranked durmaz. Escape çıkış diyaloğunu açabilir; maç saati devam eder. Escape tek başına teslim olmaz; Tab doğal focus gezintisidir. Tarayıcı kapanış onayı yalnızca yardımcıdır, güvenilir oyun mekanizması sayılmaz.

## 7. Sonuç: kesinlik ve sonraki eylem

Sonuç bileşeni dört şeyi bu sırayla gösterir:

1. Sonuç durumu: doğrulanıyor / kazanıldı / kaybedildi / beraberlik / puansız iptal / incelemede.
2. İki oyuncunun son doğru karakter sayısı ve açıklayıcı WPM/accuracy.
3. Ranked ise eski → yeni tek puan ve değişim gerekçesi. Ayrı RP yok.
4. **Yeni rakip**; ikincil **Puansız rövanş**. Rapor ve profil daha düşük önceliktedir.

Sunucu kaydı tamamlanmadan victory/rank-up animasyonu veya kesin puan gösterilmez. Yanlış sonuç vaat etmek yerine en fazla birkaç saniyelik doğrulama durumu kullanılır. Olağan dışı bekleme için tekrar kontrol ve desteğe referans numarası verilir.

Şüpheli sonuçta "Sonuç inceleniyor; puan henüz değişmedi". Kesin karar olmadan rakip "hileci" olarak etiketlenmez. Kullanıcı solo/puansız oynayabilir. İnceleme normalde 24 saat içinde bitirilir; geçerse puansız iptal politikası uygulanır ve bildirim hesap içindeki sonuçta kalır.

Animasyon kısa ve atlanabilir; reduced motion'da doğrudan durum değişir. Bekleyen sonucu başka cihazdan açınca aynı karar görülür. Tekrar tıklamak rating'i iki kez işlemez.

## 8. Davet düellosu ve ghost

Davet oluşturma ranked hub'da ikincil linktir; ayrı Duel seçim sayfası yok. Varsayılan standart format, "Link oluştur" ve kopyala yeterlidir. MVP oda ayar paneli gerektirmez.

Alıcı: kimin daveti olduğu, **puansız** olduğu, format ve "Katıl". Guest adı güvenli sınırlarla alınır; host ve alıcı hazır onayı verir. Host yok/oda dolu/link süresi geçmiş/davet iptal/bağlantı uygun değil durumları ayrı açıklanır. Kayıt zorlaması maç sonuna bırakılır; guest maç ranked geçmişine dönüştürülmez.

Ghost ekranı ve sonucu sürekli "Kayıtlı rakip · canlı değil · puansız" etiketi taşır. Gerçek oyuncu avatarıyla "online" izlenimi yaratılmaz. Ghost aynı kaydın aynı metnini kullanır; tekrar deneme pratik olarak işaretlenir. Kayıt kaldırılırsa ilgili link açıklamalı kapanır.

## 9. Leaderboard, profil ve geçmiş

MVP leaderboard tek liste: sıra, takma ad, rank, puan. Ülke, skin, win streak, accuracy, global percentile kolonları yok. Mobilde puan ve ad öncelikli; sayfalama erişilebilirdir. Kendi yerini bulma birincil eylemdir.

Sıralamaya uygun değilse eksik maç/rakip sayısı açıklanır; sıfırıncı sıra veya yanlış global derece gösterilmez. Review nedeniyle listede olmayan hesap açıkça kendi durumunu görür, başkalarına suçlama yayınlanmaz.

Public profil minimum rank kartıdır. Owner özel geçmişinde test/maç, format, tarih, sonuç ve rating değişimi görür. Yerel solo kayıt "bu cihazda / istemci sonucu" olarak ayrılır. Public profil ile gizli kişisel analiz tek endpoint'in alan gizlemesine bırakılmaz.

Account menüsü profil, geçmiş ve ayarlar içerir. Store, achievements ve seasons boş tabları yok.

## 10. Ayarların tek sahipliği

Ayarlar tam sayfadır; dört kısa bölüm yeterlidir:

- **Hesap ve veri:** email/bağlı kimlik, oturum kapatma, dışa aktarma, silme.
- **Yazma:** varsayılan solo süresi, metin boyutu, caret görünümü, canlı metrik görünürlüğü.
- **Görünüm ve erişilebilirlik:** sistem/açık/koyu tema, kontrast, reduced motion, klavye yardımı; ses kontrolü aynı bölümün küçük alt alanı.
- **Gizlilik:** kişisel geçmiş görünürlüğü, davet engelleri, opsiyonel analitik, ghost paylaşım izni.

Aynı ayarın farklı kopyaları oluşturulmaz. Metin boyutu gibi bağlamsal kısayol ilgili ayarın aynı anahtarını açar. **UI dili** global tercih, **typing içerik dili** test kuralıdır; gelecekte bu ikisi ayrı adlandırılır. Ranked içerik dili ayarlardan değişmez.

MVP'de tek UI dili English; metinler localization anahtarlarında tutulur. Türkçe dokümantasyon, uygulamanın Türkçe yayınlandığı anlamına gelmez. Dil seçeneği tekken boş seçim sunulmaz.

Az seçenek varken settings search gereksizdir. Kategoriler büyüyüp bulunabilirlik sorunu ölçülürse eklenir. Guest ayarları cihazda; hesaplı ayarlar sunucuda küçük sürümlü belge olarak saklanır. Aktif maçta okunabilirlik değişebilir; skor kuralı değişemez. Save/failed durumları görünür; sessiz kayıp yok.

## 11. Responsive ve erişilebilirlik

Launch rekabet desteği masaüstü fiziksel klavyedir. Telefonlarda solo, davet bilgisi, profil ve sıralama okunur; ekran klavyesi ranked için desteklenmez. Ekran boyutu veya User-Agent donanımı kanıtlamaz. Fiziksel klavyeli tablet de uyumluluk testleri yapılmadan desteklenmiş sayılmaz. Donanım tespiti anti-cheat sinyali değildir.

320/390 px, tablet, laptop ve geniş masaüstünde overflow; %200 zoom ve %400 reflow; mobil viewport/klavye açılması test edilir. Küçük ekranda typing alanı yüksekliği ve CTA'lar klavye altında kalmamalı. Dokunma hedefi tasarım hedefi 44 CSS px; WCAG'nin bütün koşulları tek sayıdan ibaret değildir.

[WCAG 2.2](https://www.w3.org/TR/WCAG22/) AA hedefi: görünür focus, klavye erişimi, renk dışında hata sinyali, yeterli kontrast, erişilebilir dialog/label ve hareket azaltma. Süreli rekabetin doğası ile erişilebilirlik seçenekleri açık anlatılır; companion UI'nin erişilebilir olması oyunun tüm yardımcı teknolojilerle eşdeğer olduğu iddiası değildir. Screen reader kullanıcısıyla typing akışı ayrıca test edilir; unsupported davranış gerçek hata olarak kaydedilir.

Canlı WPM'i her 100 ms'de screen reader'a okutma. Countdown/bağlantı/sonuç dönüm noktalarını ölçülü duyur. Gelecekte solo limitsiz çalışma erişilebilir alternatif olabilir, ranked rating'e karışmaz. Global printable-key shortcut yok; test alanı dışındayken input yakalama yok. Kısayollar görülebilir ve değiştirilebilir olduğunda browser/OS kısayollarıyla çakışma kontrol edilir.

## 12. Minimum durum sözlüğü

- İlk yükleme: typing kaynakları için kısa metin; uzun beklerse yenile ve hata açıklaması.
- Hesap servisi yok: solo çalışabilir; ranked/login durumu doğru gösterilir.
- Queue boş: süre + iptal + sonlandırılmış arama; sahte online sayaç yok.
- Match bulunmuş ama ready eksik: onaylayan kişinin sırası korunur.
- Sunucu bakımda: queue kapalı, solo açık; aktif maç drain davranışı mimariyle aynı.
- DB sonucu kaydedemedi: sonuç beklemede, yeni rated maç kilitli; retry aynı maç içindir.
- Yeniden bağlanma başarısız: gerekçeli forfeit veya sunucu kaynaklı no-contest.
- Rapor alındı: "Rapor alındı"; "Oyuncu cezalandırıldı" gibi doğrulanmamış söz yok.
- Ayar/export/silme başarısız: işlem durumu korunur, tekrar deneme idempotenttir.
- Desteklenmeyen tarayıcı/giriş: solo/companion yolu ve açık neden; sessiz tuş kaybı yok.

## 13. Sonraki aşamaların yerleşimi

Adaptif çalışma Practice altında ikincil sekme olur; başlangıçta doğrudan normal test açılır. Veri yeterliyse tek öneri ve neden, yetersizse normal pratik yolu. "JU yüzünden 8 WPM kaybediyorsun" gibi nedenselliği kanıtlanmamış ifadeler yerine "Bu oturumlarda JU geçişleri daha yavaştı" denir.

Races ve Events önce Ranked/Compete altında yer alır; başka ana kategori açmadan büyür. Friends, link düellosu kullanımı doğrulanınca profil/davet bağlamına eklenir; sürekli açık sağ panel değildir. Profilde sezona/başarıya ait içerik varsa ilgili sekme görünür.

Store yalnızca satış başladığında account/özelleştirme bağlamında eklenir. Ürün büyürse ayrı sayfa olabilir; ranked queue ve aktif maç içine upsell girmez. Pro'nun ayar veya accessibility işlevlerini kilitlemesi yasaktır.

## 14. Uygulama öncesi UX kabul görevleri

5–8 gerçek hedef kullanıcıyla: açıklamasız solo başlatma, ilk ranked'e girme, puan değişimini açıklama, queue iptali, davet oluşturma/katılma, puansız ghost'u canlıdan ayırt etme, kopma sonrası ne olduğunu anlama, tema değiştirme ve rapor bulma.

Bunlar yapılmış testler değildir. İlk prototipte görev başarısı ve takılma noktaları kaydedilecek. İmpeccable'ın hiyerarşi/bağlam/progressive disclosure ilkeleri doküman değerlendirmesine uygulandı; çalışan UI bulunmadığından piksel puanı, detector sonucu veya görsel QA başarısı ileri sürülmez.
