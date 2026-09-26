# Competitive Typing — pazara giriş ve kullanıcı edinimi

**Araştırma: 25 Eylül 2026 · Uygulama öncesi strateji · Dil: Türkçe; kullanıcıya yönelik metinler İngilizce.**

## Karar özeti

İlk hedef, İngilizce kelime testlerini zaten yapan ve başka insanlarla tekrar rekabet etmek isteyen masaüstü oyuncuları. Önce Frankfurt pilotuna bağlantısı uygun tek bir topluluğu ilan edilmiş saatlerde buluştur. Ana teklif: **30 saniyelik, aynı metin üzerinde ranked 1v1**. İlk büyüme birimi kayıt veya görüntülenme değil, **başka gün yeniden geçerli ranked maç tamamlayan oyuncu**.

“Typing artık bir oyun” veya “ilk ranked typing platformu” özgün konumlandırma değildir. TypeRacer, Nitro Type ve Keymash eski örnekler; TypeGG'nin 19 Eylül 2026 tarihli yeni Duels modu da rekabetin hâlen geliştiğini gösteriyor. Fırsat, geniş özellik listesinden çok belirli oyuncular için güvenilir kısa maç ve sürdürülebilir rakip arzıdır. Bu henüz doğrulanmış pazar boşluğu değildir. [TypeRacer](https://play.typeracer.com/), [Keymash'in 2021 duyurusu](https://www.reddit.com/r/typing/comments/lzzsar/), [TypeGG Duels](https://typegg.io/news/duels).

İlk harcama kararı bugün **$0 medya**. Çalışan ürün, güvenilir sonuç, ölçüm ve geri dönüş kanıtı oluşunca ilk $100'ü tek, küçük, uygun kitleli creator/topluluk oturumunda dene. Organik Reddit dağıtımı sınırlı: r/MechanicalKeyboards typing uygulaması tanıtımını yasaklıyor; r/typing koşullu. Büyük subreddit üye sayısını edinim kapasitesi sayma. [r/MK kararı](https://www.reddit.com/r/MechanicalKeyboards/comments/1niq537/rules_update_media_only_post_typing_apps_games/), [r/typing kuralları](https://www.reddit.com/r/typing/).

### Okuma yolu

- Ürün ve pazar: §1–5.
- İlk 100/1.000/10.000 ve eşzamanlılık: §6–8.
- Reddit, Discord, creator ve video: §9–13.
- Para, SEO ve lansman platformları: §14–17.
- Fazlar, Season 1, referral, retention ve takvim: §18–23.
- Ölçüm ve nihai kararlar: §24–25; kaynak sınırları son özetten önce.

### Kanıt türleri ve sınırlar

**Gözlem:** Açılmış resmî sayfa, kamuya açık topluluk kuralı veya tarayıcıda görülen arayüz. **Kullanıcı sinyali:** tarihli, kendiliğinden seçilmiş yorum; yaygınlık/arıza kanıtı değildir. **Öneri:** bu proje için stratejik seçim. **Senaryo:** açık varsayımla aritmetik; tahmin veya benchmark değildir. Belgedeki bütçe ve yeni deney eşikleri öneridir; mevcut ürün kabul eşikleri kendi canonical belgelerinden gelir.

Rakip MAU/DAU, gerçek queue nüfusu, dönüşüm, gelir, reklam CPC/CPM/CAC, creator ücretleri ve arama hacimleri doğrulanamadı. Ads Manager/Keyword Planner hesap verisi veya özel Discord kanalları kullanılmadı. Toplulukların kanal içi aktivitesi çoğunlukla bilinmiyor. Discord üye/online sayıları indekslenmiş yaklaşık görüntülerdir; oyun CCU'su değildir. Reddit'in metin çıktısındaki etiketsiz sayaçlar üye sayısı olarak kullanılmadı. Hiçbir toplulukla iletişime geçilmedi, kampanya yayımlanmadı, harcama yapılmadı.

## 1. Gerçekte pazarlanacak ürün

Kaynaklar: [ürün](competitive_typing_platform_project.md), [UX](competitive_typing_platform_ui_ux.md), [ranking](docs/RANKING_MATCHMAKING.md), [mimari](docs/ARCHITECTURE.md), [validation](docs/VALIDATION_ROADMAP.md), [roadmap](docs/ROADMAP.md), [status](docs/STATUS.md). Arşiv taslakları gereksinim olarak kullanılmadı.

Bugün uygulama çalışmıyor; aktif iş M0.1. Bu belge GTM araştırmasıdır, milestone tamamlanması veya özellik geliştirme talimatı değildir. Mimari, Elo ve queue sabitlerini değiştirmez; ürün/ölçüm sahiplerinin yerine geçmez.

**MVP ile vaat edilebilecekler, ancak ilgili dilim gerçekten çalışınca:**

- Hesapsız 15/30/60 saniyelik solo; varsayılan 30 saniye, English 1K.
- Tek public ranked 1v1: hesap, 30 saniye, aynı metin, hatayı düzelterek ilerleme; tek Elo, ilk 10 rated sonuç provisional.
- Sonucu süre sonundaki doğru karakter sayısı belirler; WPM bunun sunumudur. Client solo rekoru rank kazandırmaz.
- Guest alıcılı, iki kişilik, puansız özel davet. Hesaplı host gerekir; link 24 saat, aktif lobi 10 dakika; host yoksa asenkron yarış değildir.
- Oyuncu izniyle gerçek kayıttan üretilmiş, açıkça etiketli puansız ghost; veri yoksa solo/davet.
- Minimal profil/rank kartı, özel geçmiş, ranked leaderboard, raporlama ve operasyon.

**Post-MVP ve koşullu:** adaptif çalışma, arkadaş yönetimi, reset içermeyen sezon görünümü, özel küçük grup yarışları, otomatik sonuç görselleri. **Daha ileri:** turnuva bracket'ı, spectator, creator araçları, kozmetik/Pro. Bunları MVP menüsüne, reklama veya lansman taahhüdüne ekleme.

En güçlü mevcut paylaşım mekanizması canlı bir arkadaşın guest katılabildiği davet; en güçlü retention adayı yeni rakip ve başka gün ranked dönüşü. Ghost boş saatte yararlı deneyim sağlar ama canlı oyuncu arzı değildir. Global erişim, dünya çapında düşük gecikmeli ranked garantisi değildir.

## 2. Rekabet haritası

Aşağıdaki “zayıflık” değerlendirmeleri ilgili oyuncu ihtiyacı açısından yorumdur; rakiplerin tüm kullanıcıları için kusur iddiası değildir. Ana sitelerin varlığı doğrulandı; gerçek maç, ödeme ve hile dayanıklılığı uçtan uca test edilmedi.

### Monkeytype — solo kalitesi ve alışkanlık rakibi

**Gözlem:** Minimal ve çok özelleştirilebilir test; süre/dil/quote seçenekleri, geçmiş, temalar ve challenge'lar. Resmî repo isteğe bağlı reklam, bağış/Patreon/merch ve Discord performans rolleri açıklıyor; missed/slow words pratiği de ürün sayfasında mevcut. Açık kaynak katkısı ve Reddit'ten başlayan geri bildirim hikâyesi gözlenebilir dağıtım yolları. [Resmî repo](https://github.com/monkeytypegame/monkeytype), [ürün](https://monkeytype.com/about).

**Kitle/güç:** PB kovalayanlar, ayarlarına önem veren typist'ler, klavye meraklıları. **Bizim sınırımız:** solo özellik parity'sinde yarışmak pahalı. “Monkeytype sosyal değil” demek yanlış; GitHub tartışmasında multiplayer sorusuna “tribe” referansı da var. Mevcut multiplayer kapsamı ayrıca doğrulanmalı. **Şikâyet sinyali:** 2026'da quote submission kuyruğu sorusu ve resmî yanıtı var; büyük bir göç fırsatı kanıtlamaz. [Multiplayer tartışması](https://github.com/monkeytypegame/monkeytype/discussions/7452), [quote sorusu](https://github.com/monkeytypegame/monkeytype/discussions/7864).

### 10FastFingers — çok dilli test ve karşılaştırma

**Gözlem:** 40'tan fazla dil, 60 saniye/top 200 test, 24 saatlik competition, gerçek zamanlı multiplayer, custom/text practice; 2026 ana sayfası v3 yenilenmesini ve points/levels sistemini duyuruyor. Blog, feedback forumu, paylaşım ve çok dilli arama sayfaları gözlenebilir dağıtım yüzeyleri. [Resmî ürün](https://10fastfingers.com/).

**Kitle/güç:** hızlı ölçüm, yerel dilde pratik, arkadaşla skor kıyası. **Zayıflık yorumu:** test ve 24 saatlik yarış niyeti, devamlı 30 saniyelik Elo düellosuyla aynı değil. **Monetizasyon:** güncel paket/fiyat doğrulanamadı; ücretsiz çekirdek görünür. **Şikâyet:** 17 Nisan 2026 thread'inde yeniden tasarım, ağırlık ve eski pratik modlarını bulamama eleştirileri var; olumlu karşı görüşler de var. “Herkes terk ediyor” sonucu çıkmaz. [Kullanıcı tartışması](https://www.reddit.com/r/typing/comments/1soe8lo/the_new_10fastfingers_redesign_feels_like_an_end/).

### TypeRacer — yerleşik canlı yarış ve metin topluluğu

**Gözlem:** Kitap/film vb. alıntılarla canlı yarış; private racetrack, geçmiş, ghost/practice ve topluluk yarışmaları. Güncel upgrade sayfasında yıllık Core $12, Premium $19, Ultimate $79; reklam kaldırma, kayıt limitleri ve özelleştirme katmanları var. Eski blog fiyatları güncel fiyat yerine kullanılmadı. [Ürün](https://play.typeracer.com/), [güncel paketler](https://data.typeracer.com/pit/upgrade_account).

**Kitle/güç:** quote uzmanları ve uzun süredir yarışan oyuncular; Discord, özel yarış, indeksli metin/sonuç sayfaları ve topluluk etkinlikleri. **Zayıflık yorumu:** tek formatlı kısa Elo deneyimi için başka bir tercih alanı olabilir; canlı yarışın kendisi farklılaşma değil. **Şikâyet:** Ağustos 2026'da geç sonuç/rakip görünürlüğü; 2025–26'da reklam kaynaklı ekran kayması iddiaları. Bunlar bağımsız tekrar test edilmedi. [Güncelleme thread'i](https://www.reddit.com/r/Typeracer/comments/1vhlpse/new_typeracer_is_full_of_bags/), [reklam thread'i](https://www.reddit.com/r/Typeracer/comments/1n6sddc/ads_interfering_with_race/), [topluluk etkinliği örneği, 2021](https://blog.typeracer.com/2021/12/10/happy-holidays-from-typeracer-discord-events-and-contests-chance-to-win-typeracer-premium-t-shirts-and-more/).

### Nitro Type — koleksiyon ve sosyal tekrar

**Gözlem:** Yarış, kozmetik, Gold ve sezon/event sunumu. Teaching.com ekosisteminin ürünü. Kasım 2025 duyurusu topluluk isteği üzerine uzun sezonların geri döndüğünü açıklıyor; Eylül 2026'nın aktif sezon adı bu araştırmada doğrulanmadı. Gold güncel fiyatı bilinmiyor. [Resmî destek](https://www.nitrotype.com/support?mobile-app=true&theme=false), [sezon dönüşü](https://www.nitrotype.com/news/read/273/twilight-harvest-drift-into-seasons--return).

**Kitle/güç:** öğrenci/eğitim çevresi, koleksiyon ve takım motivasyonu; öğretim ekosistemi, haberler ve oyuncu toplulukları dağıtım yüzeyleri. **Zayıflık yorumu:** bizim sade beceri sıralaması teklifimiz koleksiyon beklentisini karşılamaz. **Şikâyet:** Ocak 2026 grind ve Mart 2026 eski takım/leaderboard özlemi thread'leri var. Bot iddiaları doğrulanmış oran değildir. [Grind tartışması](https://www.reddit.com/r/Nitrotype/comments/1qifep9/i_grind_day_and_night_including_morning_at_least/), [topluluk nostaljisi](https://www.reddit.com/r/Nitrotype/comments/1ria7az/og_nitrotype/).

### Keymash / Keyma.sh — en önemli tarihsel uyarı

**Gözlem:** keyma.sh bugün keymash.io'ya yönleniyor. 25 Eylül tarayıcı kontrolünde Quick Play (quotes/dictionary), custom, leaderboard, competitions, günlük challenge ve merch görüldü; yakın zamanda oluşturulmuş skor satırları vardı. Bu, tüm oyunun “ölü” olduğunu söylemeyi desteklemez. Anlık “Browse 0” yalnızca görünen custom oda sayısıdır. [Canlı site](https://keymash.io/), [FAQ](https://keymash.io/about/faq/).

**Tarihsel:** 7 Mart 2021 geliştirici duyurusu Glicko2, best-of-five ranked 1v1, 10 placement, sezon ve turnuva anlatıyor. Monkeytype shoutout'undan iki saatte 500 Discord üyesi geldiği geliştirici beyanıdır, retention kanıtı değildir. [Duyuru](https://www.reddit.com/r/typing/comments/lzzsar/).

**Kitle/güç:** hardcore hız oyuncuları; topluluk işbirliği ve turnuva tecrübesi. **Belirsizlik:** bugünkü ranked erişimi/nüfusu, abonelik ve yaygın şikâyetler doğrulanamadı; guest menüde ranked görülmemesi kaldırıldığına kanıt değil. “Ranked'i biz icat ettik” iddiasını kesin olarak eler. Keymash.com farklı içerikli bir site; rakiple karıştırma.

### TypeGG — güncel ve doğrudan izlenecek rakip

**Gözlem:** 27 Haziran 2026 beta duyurusu; solo/Quickplay, topluluk quote'ları, profil/leaderboard, forum/Discord. 19 Eylül Duels: iki kişinin quote kartlarını seçip elemesi, HP ve çok turlu düello; lobi daveti ve izleyici. Performance/nWPM yaklaşımı, bizim tek Elo sistemimizle aynı metrik değildir. [Ana sayfa](https://typegg.io/), [Duels](https://typegg.io/news/duels), [leaderboard](https://typegg.io/leaderboard), [wiki](https://wiki.typegg.io/Main_Page).

**Kitle/güç:** rekabetçi typist ve quote topluluğu; format çeşitliliği, topluluk içerikleri, creator kurucu. **Zayıflık yorumu:** daha fazla seçim isteyen oyuncuya güçlü; basit ve sabit 30 saniye isteyenin tercihi ayrı olabilir. **Monetizasyon:** GG+ ismi görüldü; fiyat/özellikleri doğrulanmadı. **Şikâyet:** güvenilir güncel örneklem yok. Geliştirici Reddit beta paylaşımı var; bunun edinim verimi bilinmiyor. [Beta paylaşımı](https://www.reddit.com/r/SideProject/comments/1uh9847/after_15_years_my_competitive_speedtyping_site/).

### Keybr — gelişim ihtiyacının güçlü alternatifi

**Gözlem:** Kişinin harf performansına göre ders üreten eğitim; profil/istatistik, high scores, multiplayer, Discord ve açık kaynak bağlantıları. Arayüz reklam kaldırmak için premium sunuyor; fiyat doğrulanmadı. [Eğitim yöntemi](https://www.keybr.com/help), [ürün](https://www.keybr.com/). Bu bilgiler 25 Eylül'de çalışan tarayıcı arayüzünden de okundu.

**Kitle/güç:** öğrenenler, yeniden klavye düzeni öğrenenler, odaklı çalışma isteyenler. **Zayıflık yorumu:** ana iş eğitim; bizim MVP adaptif eğitim rakibi değil. **Şikâyet sinyali:** r/typing akışında harf açma ve hız platosu soruları görülüyor; üründe hata veya eğitim etkisizliği kanıtı değil. Büyüme yüzeyleri ücretsiz pratik, paylaşılabilir profil ve topluluk önerileri. “Kişiselleştirilmiş pratik piyasada yok” iddiası kullanılamaz. [İncelenen topluluk akışı](https://www.reddit.com/r/typing/).

### Yeni oyunlar ve yakın alternatifler

- **TypeDuel.io:** Kendi sayfası best-of-three Quick Duel, Climb ve skill-rating ranked tanımlıyor. Doğrudan 1v1 kelime alanında rakip; canlı nüfus, monetizasyon ve şikâyet örneklemi bilinmiyor. [Ürün](https://typeduel.io/).
- **KeyFight:** Saldırı puanı, metni bozma/dondurma, private rooms ve ranked vaat ediyor. Eğlenceli saldırı mekaniği arayan gamer'a hitap eder; bizim müdahalesiz skor formatımız farklı tercih. Vaat edilen eşleşme hızını doğrulamadık; fiyat/topluluk büyüklüğü bilinmiyor. [Ürün](https://www.keyfight.io/).
- **TypingBattle:** Ücretsiz/no-signup private/public multiplayer ve paylaşılabilir sertifika anlatıyor. “Arkadaşınla ücretsiz yarış” sahiplenilebilir bir boşluk değil. Sınırsız oyuncu ve paste engelinin dürüstlük sağladığı iddiaları test edilmiş kapasite/integrity kanıtı sayılmadı. [Ürün](https://typingbattle.com/).
- **Typing Rivals:** Bir dakikalık test/24 saatlik liste yanında birebir yarış, arkadaşla oyun ve ranked leagues tanıtıyor. Özellik kapsamı farklı; bizim dar biçimimizi seçme gerekçesini daha da önemli kılıyor. [Ürün](https://typingrivals.com/en/).
- **Glyphica:** Tek oyunculu typing roguelite; Steam demosu, satın alma ve oyun medyası/creator alıntıları mevcut. Sayfada $9.99 görüldü; bölgesel fiyat farklı olabilir. Doğrudan matchmaking rakibi değil, oyuncunun zamanına rakip. Genel gamer “oyun” beklentisinin düz WPM testinden daha geniş olduğunu gösterir. Şikâyet örneklemi incelenmedi. [Resmî Steam mağazası](https://store.steampowered.com/app/2400160/Glyphica_Typing_Survival/).

### Gerçek boşluk adayları ve onları çürütecek kanıt

1. **Kısa, sabit, anlaşılır rekabet:** Aynı formatta tek puan isteyen kullanıcı olabilir. Çürütücü kanıt: 10–12 görüşmede kullanıcıların mevcut TypeGG/Keymash/TypeRacer deneyimini yeterli görmesi veya quote çeşitliliğini sabit formata tercih etmesi.
2. **Öngörülebilir rakip arzı:** Yeni özellikten çok belirli saatte insan bulmak değerli olabilir. Çürütücü kanıt: yeterli uygun rakip sağlandığında bile farklı gün geri dönüşün düşük kalması.
3. **Güven ve akıcılık:** Net sonuç, stabil typing alanı ve itiraz yolu güçlü tercih sebebi olabilir. Rakip şikâyetleri bunu araştırmaya değer kılar; bizim daha iyi olduğumuzu kanıtlamaz. Gerçek karşılaştırmalı görev testi gerekir.

İlk görüşmelerde “ranked ister misin?” yerine son oynanan siteyi, bırakılan anı, arkadaşla yarış davranışını ve bir sonraki buluşmaya gerçekten katılma isteğini sor. Beş power user'ın coşkusunu pazar büyüklüğü sayma; farklı hız seviyelerini ve geri dönmeyenleri dahil et.

## 3. Öncelikli topluluklar ve erişim koşulları

Öncelik ilgi × aynı saate katılabilme × izin × hedef bölge uyumuyla verildi. Boyutlar ayrı kaynak görüntüleridir; birleştirilerek erişilebilir kullanıcı havuzu hesaplanamaz. “Aktif” aşağıda kamuya açık sinyal demektir; okunmamış özel mesaj trafiği değildir.

### P1 — Önce izin/uygunluk doğrulanacak, yüksek niyetli yerler

**1. Monkeytype Discord — typing/PB topluluğu.** Çok yüksek ilgi. İndeksli bir davet görüntüsünde yaklaşık 62,9 bin üye/10 bin online; iki aylık crawl, güncel kesin sayı değil. Resmî repo Discord performans rolleri ve desteği doğruluyor; kanal içi etkinlik ölçülmedi. Promotion izni bilinmiyor. Yaklaşım: admin'e ürünün alternatif olduğunu açıkça söyleyen, bir geri bildirim oturumu için izin isteyen taslak; izin varsa belirlenen tek kanal. Üyelere DM/poaching yapılmaz. Spam riski yüksek. [Davet](https://discord.com/invite/monkeytype), [sayı görüntüsü](https://discord.com/invite/uDfPrdRwdZ).

**2. TypeRacer Discord — canlı yarış oyuncuları.** Çok yüksek ilgi; yaklaşık 48,4 bin üye/2,1 bin online görünen resmî Discovery görüntüsü, son hafta indekslenmiş. Üçüncü taraf tanıtım izni ve iç aktivite bilinmiyor. Yaklaşım: karşılaştırma/eleştiri açık olan admin onaylı küçük playtest; “sitenizi bırakın” mesajı değil. Aynı saat ve uygun RTT taahhüdü değerli. Spam riski yüksek. [Resmî sunucu sayfası](https://discord.com/servers/typeracer-175964903033667585).

**3. r/typing — Reddit.** Çok yüksek konu ilgisi; üye sayısı bu okumada güvenilir biçimde ayrıştırılamadı. Güncel akışta PB, handcam, teknik sorular ve Cyber Saturday projeleri var; günlük post hacmi ölçülmedi. For-profit tanıtım kısıtlı, cumartesi paylaşımı kurallara ve mod takdirine bağlı, AI içerik ayrıca kısıtlı. Bizim gelecekte kozmetik/Pro niyetimiz var: “şu an ücretsiz” diyerek non-profit gibi sunma. Önceden açık mod onayı yoksa acquisition hedefi **0**. Spam/ban riski yüksek. [Kurallar ve akış](https://www.reddit.com/r/typing/), [Cyber Saturday duyurusu](https://www.reddit.com/r/typing/comments/1q8ggp4/introducing_cyber_saturday/).

**4. r/monkeytype — Reddit.** Yüksek ilgi, PB/challenge ağırlıklı açık akış. Güvenilir üye sayısı alınmadı. Görünen kurallar toksiklik ve özgün olmayan spam'i yasaklıyor; rakip ürün tanıtımına açık izin göstermiyor. Mod onayıyla format karşılaştırması/geri bildirim; sıradan PB gönderisinin yorumuna link bırakma. Rakip topluluğu olduğu için spam riski yüksek. [Topluluk](https://www.reddit.com/r/monkeytype/).

### P2 — Küçük, kontrollü denemeler

**5. r/SideProject — Reddit / geliştiriciler.** Oyuncu niyeti orta, ürün geri bildirimi yüksek. Güncel akışta çalışan proje demoları var; üye/aktivite hacmi bilinmiyor, açık ayrıntılı kural metni alınamadı. Bir çalışan demo ve belirli kullanıcı sorunu etrafında paylaş; güncel kuralları gönderimden önce doğrula. Yapıcıların ilgisi ranked retention değildir. Spam riski orta. [Topluluk](https://www.reddit.com/r/SideProject/), [2026 TypeGG örneği](https://www.reddit.com/r/SideProject/comments/1uh9847/after_15_years_my_competitive_speedtyping_site/).

**6. r/IndieGaming — Reddit / oyun keşfi.** Orta ilgi; görünür akışta gameplay/devlog var, ölçülmüş sıklık yok. Bir haftalık hesap ve gerçek gönderi geçmişi, iki haftada en fazla bir submission; GenAI kullanımını geliştirme veya tanıtımda varsa açıklama şartı, yoğun GenAI'ye bağımlı oyunlara yasak. Bu projede gerçek geliştirme kapsamını dürüstçe açıklayıp uygunluğu doğrula; belirsizse kullanma. Bağlamlı gerçek oynanış demosu uygun aday, stream/Let's Play paylaşımı değil. Spam riski orta-yüksek. [Kurallar](https://www.reddit.com/r/IndieGaming/).

**7. Geekhack — forum / mekanik klavye meraklıları.** Orta ilgi; 25 Eylül görüntüsünde 140.516 toplam kayıtlı üye, aynı gün post var. Yazılım/oyun için Other Geeky Stuff bölümü görünüyor; tanıtım izinleri doğrulanmadı. Bölüm yöneticisinin yönlendirmesiyle teknik typing hissi incelemesi, tek güncellenen thread. Donanım başlıklarına link dağıtmak yüksek spam riski. [Forum ve istatistik](https://geekhack.org/index.php).

**8. QwertyKeys Discord — klavye ürün topluluğu.** Orta ilgi; resmî Discovery görüntüsünde yaklaşık 60,4 bin üye/11 bin online, son hafta crawl. Sunucu ürün duyuru/destek odaklı; promotion izni ve gerçek typing katılımı bilinmiyor. Yalnızca admin'in sahip çıktığı bir klavye gecesi işbirliği adayı. Satın alınmış klavyenin hız avantajı vaat edilmez. Spam riski yüksek. [Sunucu](https://discord.com/servers/917981019095846972).

**9. Keyboard Builders' Digest — site/newsletter.** Orta ilgi; Ağustos 2026 içerikleri ve güncel incelemeler var. Güncel abone sayısı, reklam envanteri/fiyatı doğrulanmadı. Editöre gerçek bir klavye/input deneyimi hikâyesi uygun olabilir; hazır sponsor slot'u varsayma. Bağış editoryal kapsama satın almaz. Spam riski orta. [Yayın](https://kbd.news/).

### P3 — Sonra veya acquisition dışında

**10. Keyboard Club @ UC San Diego — öğrenci/klavye Discord'u.** Yaklaşık 1.873 üye/545 online görünen Discovery görüntüsü; sunucu kendi açıklamasında dönemlik buluşmalar söylüyor. İç aktivite ve promotion izni bilinmiyor. Kulüp yöneticili oturum ilginç, ancak Frankfurt'a RTT uygunluğu kanıtlanmadan ranked edinim hedefi yapılmaz. İlk hedef okullar değil, yetişkin gönüllü kulüp oyuncuları. Spam riski orta. [Kulüp](https://discord.com/servers/keyboard-club-uc-san-diego-1072686830518009917).

**11. r/learnprogramming — geliştiriciler.** Aktif soru/öğrenme akışı; güvenilir üye sayısı alınmadı. Uygulama showcase/review talepleri yasak; ilk katılımı self-promo olan hesaplar da yasak. Oyunu pazarlama kanalı olarak **kullanma**. Kod yazma hızının yazılım kalitesini artırdığını iddia etme. [Kurallar](https://www.reddit.com/r/learnprogramming/).

**12. r/productivity — öğrenci/üretkenlik kitlesi.** Görünür soru akışı var; hacim/üye sayısı doğrulanmadı. Reklam, ürün anketi, self-promo ve reklam amaçlı DM yasak. Acquisition kanalı **değil**; kamuya açık ihtiyaçları okumakla yetin. [Kurallar](https://www.reddit.com/r/productivity/).

**13. r/MechanicalKeyboards — hedef persona var, dağıtım izni yok.** Güncel klavye/build akışı ve Eylül 2026 günlük thread'i var; üye sayısı alınmadı. Typing apps/games/extensions tanıtımı açıkça yasak. “Promotional flair haftada bir” genel kuralı typing yasağını geçersiz kılmaz; yorum veya donanım fotoğrafıyla yasağı dolanma. Acquisition hedefi **0**. [Özel kural güncellemesi](https://www.reddit.com/r/MechanicalKeyboards/comments/1niq537/rules_update_media_only_post_typing_apps_games/).

İlk pilotta bu 13 yerin hepsine gitme: iki izinli typing topluluğu + bir küçük creator/klavye grubu yeterli. Erişim izni çıkmazsa planı SideProject demo geri bildirimi ve mevcut oyuncuların birebir arkadaş davetleriyle yürüt; rakip sunucuların işbirliği yapacağını varsayma.

## 4. Edinim personaları

**P1 — Düzenli typist, PB dışında rekabet isteyen.** Mevcut alışkanlık: haftada birden fazla typing testi; İngilizce kelimeler ve fiziksel klavye. İşi: “Bir test daha yapmak yerine yakın seviyeli birini yenmek istiyorum.” Engel: boş queue, tek taraflı ilk maç, şüpheli skor. Giriş: izinli typing topluluğu, gerçek düello klibi, tanıdığı oyuncudan davet. Aktivasyon: geçerli ranked sonuç ve başka gün dönüş. Hız şartı koyma; yalnızca elit oyuncuları toplama. Öncelik bu personada.

**P2 — Klavye meraklısı ve arkadaş grubu.** İşi: yeni klavyeyle keyifli bir ortak etkinlik. Giriş: creator'ın klavye POV'si veya topluluk saati. İlk değer: guest davet maçı; ranked'e gönüllü geçiş. Risk: sadece ses/estetikle ilgilenip ladder'a dönmemesi. Üç kişiden oluşan kapalı çevre, pair cap nedeniyle ranked arzını çözmez.

**P2 — Typing alışkanlığı olan geliştirici.** Mesleği tek başına yeterli segment değil. İşi: kısa mola ve ölçülebilir oyun. Giriş: SideProject/HN çalışan demo veya ekip içi gönüllü arkadaş daveti. Risk: teknik projeyi beğenip oyuna dönmemesi. “Daha hızlı kod yaz” veya mesleki performans vaadi yok.

**P3 — Ranked seven genel gamer.** İşi: rekabet, ilerleme ve gerilim. Mekanik derinlik beklentisi daha yüksek; ilk 100 için geniş gamer hedeflemesi yapma. Typing içeriklerine zaten tepki veren mikro creator kitlesiyle koşullu test.

**P3 — Öğrenci / üretkenlik kullanıcısı.** Çoğu için amaç eğitim veya sınav; MVP'nin English 1K formatı ve adaptif eğitim yokluğu sınırlayıcı. İlk aşamada yetişkin üniversite kulüpleri düşünülebilir; çocuk/eğitim kurumu edinimi hedef yaş/consent kararı ve ayrı ürün ihtiyacı nedeniyle ertelenir.

Önerilen ilk 100 aktive kullanıcı için işe alım dengesi: 60 düzenli typist, 25 klavye/arkadaş grubu, 15 typing alışkanlığı olan geliştirici. Bu bir araştırma kotasıdır, dönüşüm tahmini değil; aynı kişi tek baskın segmente atanır. Çok düşük ve çok yüksek hızdaki gönüllüleri özellikle dışlamadan cohort sonuçlarını ayrı incele.

## 5. Konumlandırma ve kullanılabilir metinler

**Ana konumlandırma:** İngilizce typing testini zaten sevenler için kısa, standart ranked düello. Differentiation paketi: aynı 30 saniye/kurallar, tek anlaşılır puan, sade typing alanı ve belli saatlerde birlikte oynayan topluluk. Bileşenlerin hiçbiri tek başına benzersiz değildir; tercih ve hizmet kalitesiyle kazanılmalı.

**Kısa ürün tanımı:** “A typing game built around 30-second ranked duels. Practice solo, challenge a friend, and compete on one ladder.” Yalnızca ilgili MVP tamamlanınca kullan.

**Home değer önerisi:** “Practice your speed. Put it to the test.” Alt satır: “Start with a free 30-second typing test. Then try a live duel.” Ana iş hazır solo alanıdır; CTA “Start typing”, ranked menüde/solo sonuçta ikincil. Pazarlama uğruna home'u seçenek kataloğuna çevirme.

**Ranked/etkinlik mesajı:** “Same text. 30 seconds. Your next opponent.” Alt satır: “Ranked 1v1 typing in English. Correct mistakes as you go. Join the announced play window for the best chance of finding a match.” “Best chance” kesin eşleşme garantisi değildir.

**Başlık adayları ve kullanılacağı yer:**

- “Your next typing test has an opponent.” — soğuk kitleye geçiş fikri; reklam/demo başlığı.
- “30 seconds. One typing duel.” — basit format; etkinlik duyurusu.
- “Practice your speed. Prove it in a duel.” — rekabetçi kitle; “prove” genel zekâ/üretkenlik anlamına getirilmez.

“Think you're fast?” yalnızca gönüllü challenge klibinde test edilebilir; yeni oyuncuyu aşağılayan ana konumlandırma yapma. “The first”, “cheat-proof”, “always instant matches”, “scientifically proven improvement”, “global low latency” yok. Elo değişiminin açık olması adaletin kusursuz olduğunu kanıtlamaz.

**MVP öncesi metin:** “We're building 30-second typing duels and looking for early playtesters.” Henüz çalışan ranked yoksa “Play ranked now” kullanılmaz. Marka adı/domain kararı verilmediğinden uydurma ürün adı/URL eklenmedi.

**SEO meta adayı, yayın sonrası:** Title: “30-Second Ranked Typing Duels | [Brand]”. Description: “Practice typing without an account, challenge a friend, or join 30-second ranked duels in English. See the next community play window.” `[Brand]` yayın öncesinde gerçek adla değiştirilir.

## 6. İlk 100, 1.000 ve 10.000 kullanıcı

Bu plandaki büyüme aşaması sayıları **ilk geçerli ranked sonucunu tamamlamış benzersiz hesaplar** içindir. Kayıtlı kullanıcı, solo guest, Discord üyesi, ziyaretçi ve private duel oyuncusu ayrı raporlanır. Hesap sayısıyla bu hedef tamamlanmış sayılmaz. Sayılar aşama etiketidir; başarı kararı §24 kapılarına bağlıdır.

### İlk 100: kurucu tarafından taşınan dar pilot

5–8 görev testi ve 10–12 ihtiyaç görüşmesinden sonra, 20–30 kişilik oturum gruplarıyla hedefe ilerle. İzinli iki typing topluluğu ve bir creator/arkadaş ağı; Frankfurt RTT uygunluğu gerçek bağlantıda ölçülür. Her gruba ikinci bir oyun günü önerilir, zorunlu tutulmaz. Oyuncu sayısı değil tekrar geliş nedeni sorulur.

Bir operasyon senaryosu: dört oturum grubunun her birinde 25 **yeni** ranked aktivasyonu hedeflemek = 100. Önceki oyuncular sonraki oturumlarda rakip arzı sağlar ama yeni aktivasyon diye tekrar sayılmaz. Kaç aday gerektiği bilinmiyor; ilk grupta gözlenen davet→katılım→uygunluk→aktivasyon oranları sonraki grubun alımını belirler. Organik görüşmelere katılana olumlu yorum/rank/referans karşılığı ödül verilmez.

### İlk 1.000: aynı bölgede kanıtlanmış kanalın tekrarı

100'den sonra 900 yeni aktivasyon için **18 × 50** kişilik edinim cohort'u bir iş yükü senaryosudur; 18 yeni topluluk veya 18 ayrı queue demek değildir. Ortak pencereye katılan küçük partner gruplarıyla yürüt. Bir cohort 50'ye ulaşmıyorsa süre uzar; trafik satın alarak sayı zorlanmaz.

Tek topluluk/creator sürecini yazılı hale getir: izinli duyuru → gerçek demo → solo veya davet → ilan edilmiş ranked saati → ikinci gün. Her partnere ayrı allowlist campaign etiketi, aynı ranked havuzu. Haftalık 2–3 faydalı klip ve bir sonuç/patch özeti üret. İlk 1.000'de organik kaynakların D7 ve iki-gün performansı bilinir; sonra küçük paid deneyle kitle genişletme sınanır.

### İlk 10.000: saat kapsamasını büyüt, havuzu erken bölme

Kanıtlanmış partner playbook'u, tekrar kullanılan gerçek oyun içerikleri, yüksek niyetli search ve seçilmiş paid kanalı büyüt. Toplam hesaptan değil gün içi queue yoğunluğu/skill dağılımından hangi saatlerin desteksiz yaşayabildiğini bul. Yeni bölgede yeterli oyuncu yoğunluğu ve operasyon ölçümü olmadan yeni queue/format açılmaz. 10.000 aktivasyon tek başına ikinci bölge, sezon, mobil ranked veya büyük reklam bütçesi gerekçesi değildir.

Growth aşamasında ekip zamanı, moderasyon ve hosting maliyetini edinim maliyetine ekle. Gelir modeli MVP'de bulunmadığı için “pozitif ROAS” veya geri ödeme süresi hesaplanamaz.

## 7. Cold start: oyuncu yoğunluğu işletim planı

### Neden toplam kullanıcı sayısı yetmez?

**Yalnızca aritmetik senaryo:** 100 kişiden bir günde %30'u gelirse ve her biri 20 dakika rekabet çevresinde kalırsa toplam 600 oyuncu-dakika oluşur. Bunu 24 saate yaymak ortalama **0,42**, bir saate toplamak **10** eşzamanlı oyuncu eder. Kayıtlı 1.000 kişiye aynı varsayımı uygulamak 4,17 ve 100 verir. Bunlar davranış tahmini veya sunucu kapasitesi değildir; ölçülecek değişkenlerdir.

Genel formül: ortalama aktif oyuncu = gelen benzersiz oyuncu × ortalama aktif dakika / pencere dakikası. Aktif oyuncu; maç, sonuç, ready ve queue arasında dağılır; aynı anda kuyrukta olan ve birbirine uygun rakip sayısı daha düşüktür. Elo, RTT, newcomer koruması ve çift sınırı arzı küçültür.

**Politikanın gerçek etkisi:** aynı çift kayan 24 saatte en fazla 3 rated start; önceki rakiple 120 saniye ranked bekleme. Tamamen birbirine uygun 10 kişilik kapalı grubun teorik pair-cap üst sınırı `3 × 10 × 9 / 2 = 135` toplam ranked start'tır. Kişi başına en fazla 27; gerçek sayı süre, rating ve bağlantı nedeniyle daha düşük olabilir. Bu yüzden iki arkadaşın bütün akşam birbirini rated oynaması cold start çözümü değil. [Ranking §6](docs/RANKING_MATCHMAKING.md).

### İlk işletim biçimi

**Önerilen pilot saatleri:** hafta içi 19:00–20:00 UTC, hafta sonu 16:00–17:00 UTC. İstanbul için sırasıyla 22:00 ve 19:00. Bunlar ilan edilecek aday saatler; mevcut oyuncu ölçümüyle seçilmiş değiller. Frankfurt pilotuna uygun İngilizce konuşan kitleyle başlanır. Bölge uygunluğunu milliyet/UA değil bağlantı testi belirler. İki saat dilimini farklı günlerde kullanmak eşzamanlı iki topluluk kuyruğu oluşturmaz.

Alfada her gün personel bulunamıyorsa önce art arda iki gün ve sonraki haftanın aynı günleri için saat ilan et; mevcut olmayan günlük hizmeti vaat etme. D1/D7 tam pencereleriyle buluşma takvimini birlikte değerlendir. Katılmayanı hatırlatma bombardımanına tutma.

- Oturumdan 48 saat önce hedef **20–30 teyitli katılımcı**; bu bir işe alım hedefi, eşleşme garantisi değil. Benzer saat isteyenleri ortak ilk 15 dakikaya çağır.
- Bir sorumlu akışı izler, ayrı inceleme erişimi olan sorumlu itirazları ele alır; isimler atanmadı. Gerçek sorumlu ve kapasite doğrulanmadan public ranked etkinliği duyurulmaz.
- İlk 5 dakika solo/kurallar; sonra tek public ranked havuzu. Creator'ın takipçisiyle doğrudan maçı private ve puansızdır. Creator'a ranked rakip seçtirme.
- Aktif ranked oynayanlar, kuyrukta bekleyenler, eligible adaylar ve skill bucket'ları ayrı gözlenir. Başlangıç operasyon deneyi olarak 20–40 eşzamanlı ranked katılımcıyı hedefle; asıl kabul ≥%80 ticket'ın 30 saniyede eşleşmesidir.
- Arama 60 saniyede canonical olarak biter; reklam kampanyası için süreyi/±300 Elo sınırını değiştirme. Kullanıcı solo, davet veya açıkça puansız ghost seçer.
- Ghost için izinli gerçek kayıt havuzu oluştur; kayıt yokken içerik uydurma, canlıymış gibi bot gösterme. Ghost oynayanı ranked CCU'ya ekleme.
- Düşük katılımda yeni trafik çağrısını durdur, bir sonraki gerçek saati duyur, o an solo/private alternatifi sun. Hazır olmayan oyuncuları otomatik yeniden kuyruğa sokma.

**İlk etkinlik bir “ranked play night”tır.** MVP'de bracket, 8 kişilik race, spectator veya ödül sistemi yapılmaz. İstenirse topluluk tarafında manuel puansız gösteri yapılır; bunu ürünün turnuva özelliği gibi anlatma. Başarıyı yalnızca etkinlik tepesinden değil, tüm gün bekleme ve organik cohort'tan da raporla.

## 8. Organik büyüme döngüleri

Her döngüde sıralama: **tetikleyici → paylaşılan şey → alıcı eylemi → dönüşüm → geri dönüş**. İlk aşamada yalnızca ilk iki mekanizmayı işlet; kalanlar sıralı fırsatlardır.

1. **Özel arkadaş daveti — MVP, en yüksek öncelik.** Birlikte oynama isteği → kısa ömürlü private link → alıcı host varken guest olarak katılır ve hazır olur → ilk normal private maç tamamlanır → hesap açıp ilan edilmiş saatte ranked dener veya tekrar arkadaşını davet eder. Host yok/expired/full durumları açık. Linki public reklam CTA'sı yapma: iki kişilik oda kalabalık creator trafiğini taşımaz.
2. **Kısa sonuç paylaşımı — MVP.** Gerçek bitmiş maç/PB → sonuç metni veya kullanıcının ekran görüntüsü, süre/havuz/mode etiketi ve genel ürün linki → alıcı solo dener → ilk tamamlanmış test; ardından isteğe bağlı duel/ranked → başka gün tekrar. Local solo sonucu server-verified veya rank diye etiketlenmez. “Share clicked” gönderildi/okundu demek değil.
3. **Public rank kartı/profil — MVP.** Kullanıcı rank'ını göstermek ister → `/u/:username` minimal public kartı → alıcı profili ve oyunu görür → solo/ilk ranked → kendi profilini paylaşır. Gizli profil ve özel geçmiş sınırı korunur; boş hesapları SEO envanteri sayma.
4. **Leaderboard görünürlüğü — MVP.** Gerçek bir başarı → mevcut tek leaderboard linki + izinli oyuncu highlight'ı → alıcı kuralları inceler → ilk geçerli ranked → aynı ladder'da farklı gün geri döner. İlk 10/provisional ve eligibility kuralları bypass edilmez; yeni bir haftalık WPM tablosu yaratılmaz.
5. **“Beat my score” / ghost linki — kısmen gelecek.** İzinli kayıt seçimi → kayıtlı rakip etiketiyle paylaşım → aynı orijinal metinde puansız deneme → tamamlanan ghost → canlı pencereye gönüllü geçiş. MVP'de public ghost-link sözleşmesi kesinleştirilmiş değil: mevcut ghost seçimini kullan, özel URL özelliğini launch gereği yapma. Tekrar denemeler rank/rekor üretmez.
6. **Rank-up / score card görseli — post-MVP.** Commit edilmiş gerçek yükselme → görsel kart → alıcı ürün/kurallara gelir → ilk maç → ilerlemesini başka gün takip eder. Otomatik görsel üretici manuel paylaşımın getirdiği yeni oyuncu kanıtından sonra; rozet rank ile tutarlı olur.
7. **Etkinlik daveti — MVP'de dış koordinasyon.** Sonraki oyun saati → Discord scheduled event veya genel duyuru linki → opt-in hatırlatma/katılım → aynı public queue'da maç → bir sonraki oyun günü. Bu public race/tournament özelliği değildir. Topluluk adıyla ayrı ladder veya rakip filtresi açılmaz.
8. **Sezon rozeti / tournament invite — koşullu gelecek.** Onaylı sezon başarısı veya ileri aşama turnuva → gerçek rozet/etkinlik bilgisi → alıcı katılım kurallarını görür → uygun maçı tamamlar → sonraki gün/dönem döner. Season 1 ayrıntısı §19; bracket ve ödül motoru bugün yok.
9. **Ödüllü referral — MVP'de yok.** Sonraki aşamada memnun oyuncu → gönüllü davet → yeni kişinin gerçek private maçı → izinli hesap ilişkilendirme ve başka gün dönüş → küçük katılım kozmetiği. §20'deki abuse/işletim kapısından önce rewards ekleme.

Loop değerlendirmesi: alıcının gerçek maç tamamlaması, yeni olması ve geri dönmesi gerekir. Share rate, toplam link açılışı ve referral code kullanımı tek başına viral büyüme kanıtı değildir.

## 9. Reddit: izinli, tartışmaya değer, tek seferlik giriş

**Öncelik sırası:** r/typing yalnızca moderasyonun bu proje için açıkça uygun bulduğu biçimde; sonra r/monkeytype için izin kontrolü; maker geri bildirimi için r/SideProject; oynanabilir oyun demosu olduğunda r/IndieGaming. r/MechanicalKeyboards, r/learnprogramming ve r/productivity bu ürünün organik tanıtım listesinde değil. İlgili güncel kural bağlantıları ve topluluk bilgileri §3'te.

Gözlenen içerik sinyalleri; kişisel rekorlar, tekniğe ilişkin sorular, ürün değişikliği tartışmaları ve geliştiricinin oynanabilir demosudur. Bunlar hangi biçimin konuşma başlattığını gösterir; post örnekleri arasında kontrollü performans karşılaştırması yapılmadı. Oy sayısını siteye gelen veya retained oyuncuya çevirme. TypeGG'nin maker duyurusu bir demo/anlatı örneği, edinim sonucu kanıtı değil. [TypeGG geliştirici paylaşımı](https://www.reddit.com/r/SideProject/comments/1uh9847/after_15_years_my_competitive_speedtyping_site/).

**Tek gönderi playbook'u:**

1. Kuralları gönderileceği gün yeniden oku. Varsa özel weekly/showcase konusu kullan. Ticari niyeti ve geliştirici ilişkisini moderatöre açıkla; “şimdilik ücretsiz” olmak nonprofit olmak değildir. İzin bilinmiyorsa post yayımlama.
2. Önce topluluğun sorularına kendi deneyiminle faydalı yanıt ver; bunu mekanik karma kasma veya örtülü reklam rutini yapma. AI içerik kuralı olan yerde bu belgedeki metni otomatik yapıştırma.
3. Tek somut soru seç: “30 saniyede stop-on-error sizi nasıl etkiledi?” veya “Kaybettikten sonra yeni rakip istemenize ne sebep oldu?” Ekran kaydı, format ve bilinen eksikler görünür olsun. “Rate my startup” ve rakipleri küçümseyen başlıktan kaçın.
4. Uygun yerde 20–30 kişilik ilan edilmiş oyun saatini ekle. Public gönderide private iki kişilik link dağıtma. Kullanıcının ürünü ve saati kendi seçmesini sağla.
5. İlk oturum sonrası yalnızca anlamlı düzeltme/öğrenme varsa aynı thread'de güncelle. Kaldırılan postu farklı hesapla tekrar yükleme; insanlara DM gönderme, oy isteme, toplulukları birbirine yönlendirerek oy toplama.

**Format seçimi:** Typist topluluğunda gerçek duel + geri bildirim sorusu; SideProject'te eşzamanlı oyuncu problemi ve çalışan anonim demo; IndieGaming'de kısa gameplay ve açık geliştirme durumu. Benchmark ancak aynı metin, süre, hata kuralı ve cihaz koşulları açıklanmışsa; farklı sitelerin WPM'sini ürün üstünlüğü kanıtı diye kullanma. Turnuva/community competition talebi MVP'de ortak oyun saati olarak uygulanır, yeni ürün modu olarak değil.

Her izinli post için 7 günlük kaynak cohort'u tut: anlamlı yorum, izinli ölçülebilen ziyaret, ilk normal maç, ilk ranked ve olgun D7. İki iyi hazırlanmış izinli denemede katılanlardan hiçbiri geri gelmiyorsa başlık üretimini artırmadan görüşme yap. Mod reddi veya negatif topluluk geri bildirimi sayısal eşiği beklemeden kanalı durdurur.

## 10. Discord: rakip arzını aynı saate getirme

Önce typing odaklı Monkeytype/TypeRacer ekosistemleri; sonra QwertyKeys gibi klavye topluluklarının uygun alt kanalları ve yerel kulüpler. Rakip ürünün Discord'u hazır reklam envanteri değildir. Kamuya açık invite, geliştiricilere tanıtım izni vermez; sunucuya katılınca görülebilecek kurallar bu araştırmada doğrulanmadı.

**Partner teklifi:** admin'e kendi onaylı iletişim kanalı üzerinden, kitlesine uygun 45–60 dakikalık bir playtest öner. Admin'in kontrolünde tek duyuru, açık beta durumu, bir moderatör, aynı oyun havuzu, raporlanan sorunların özeti. Admin kabul etmezse üyelere ulaşarak etrafından dolaşma. Duyuru/hatırlatma sayısını admin belirler; varsayılan bir duyuru ve opt-in event hatırlatmasıdır. Ürün hesabı için Discord üyeliği şartı koyma.

**Ürünün kendi Discord'u:** bugün boş bir “community” sunucusu büyütme işi başlatma. Kapalı alfada gerçekten destek verecek en az bir sorumlu ve ilk 20–30 oyuncu hazırken küçük sunucuyu aç. Başlangıçta dört alan yeterli: kurallar/destek yönlendirmesi, duyurular ve oyun saatleri, maç buluşması, geri bildirim. Özel moderasyon başvurularını public kanala yönlendirme; rol/rank senkronizasyon botu launch gereği değil. Üyelik, ping ve player highlight tamamen gönüllü.

**Partnerlik mi sponsorluk mu?** İlk turda para değil birlikte düzenlenen deneme oturumu. Organik oturum gerçekten ranked aktivasyon ve başka gün dönüş üretirse, küçük sabit ücretli bir sonraki oturum test edilebilir. Turnuva sponsorluğu; bugün cash prize/bracket kurmak yerine mevcut ve güvenilir bir etkinlikte onaylı demo oturumu olabilir. Katılım veya ödül için ranked sonucunu etkileme, reklam karşılığı olumlu değerlendirme şartı koyma.

**Bir oturumun akışı:** 5 dakika format/solo → 30–40 dakika public ranked → isteyenlerle puansız creator/arkadaş gösterisi → 5 dakika gönüllü üç soruluk değerlendirme. Sorular: ne bekledin, nerede zorlandın, başka gün gelmen için ne gerekiyor? Sonraki gerçek saat duyurulur. Ertesi gün yalnızca opt-in kanalda bir hatırlatma; saat dışı queue durumu saklanmaz. Ölçüm: event RSVP değil gerçek katılım, ilk ranked, ertesi gün ve D7 dönüşü, queue kalitesi.

## 11. Creator stratejisi

### Kimi, hangi sırayla?

1. **Aktif küçük typing creator'ı veya topluluk host'u:** en iyi problem/kitle uyumu; eşzamanlı 15–30 kişiyi aynı saatte getirme ihtimali görüşmeyle sınanır. Takipçi sayısı yerine son yayınlardaki gerçek konuşma ve topluluk etkileşimi.
2. **Küçük/orta klavye creator'ı:** doğal keyboard POV + gerçek duel; sadece ses/switch arayan seyirci ranked'e dönüşmeyebilir. Takvim uyumu ve masaüstü izleyici davranışı incelenir.
3. **Kodlama içerik üreticisi:** kısa ara/arkadaş meydan okuması; hızlı yazmanın daha iyi kodlama demek olduğunu iddia etme. İlk kitle küçük tutulur.
4. **Productivity/study creator'ı:** solo daha uygun; adaptif gelişim veya eğitim sonucu vaat edilmez. Ranked retention kanıtından önce öncelikli değil.
5. **Genel gaming/short-form büyük creator:** çok geniş ama dağınık trafik; canlı kapasite ve yeniden gelme kanıtı olmadan pahalı bir yoğunluk şoku olabilir.

Çalışma sınıflaması olarak micro 1–25 bin, mid-size 25–250 bin, large 250 bin+ kullanılabilir; evrensel sektör tanımı değildir. Küçük Discord host'u bu aralığın altında da iyi aday olabilir.

### Gerçek aday incelemesi: sayıdan çok güncellik

- **Chyrosran22 — orta ölçekli klavye adayı.** 28 Ağustos 2026 tarihli KeyMouse Keytrak videosunda yaklaşık 129 bin abone ve 15,2 bin izlenme görünüyordu; typing demo bölümü var. Güncel yayın kanıtı mevcut. Teknik/hardware izleyicisi için gerçek klavye POV deneyi makul; ücret, ülke dağılımı, dönüşüm ve işbirliği isteği bilinmiyor. İlk $100'e sığdığı varsayılmaz. [Doğrudan video](https://www.youtube.com/watch?v=9aFQLyH-JZc).
- **shaz / @shazity — micro, yeniden etkinlik kontrolü gerekli.** 25 Eylül tarayıcı görünümünde 3,91 bin abone, 50 video; en yeni uzun video beş ay önce, typing/Roblox spelling bee içeriği. Kitle yakın ama son 60 gün upload kriterini karşılamıyor; Shorts/canlı yayın etkinliği ayrıca doğrulanmadı. Şu an ilk ücretli tercih değil. [Kanal](https://www.youtube.com/channel/UCft1wntnfvqt17X6u3fwQjQ/videos).
- **Slekap / @slekap9850 — micro, tarihsel referans.** Aynı gün kanal görünümünde 4,43 bin abone; en yeni videolar dört yıl önce. Eski 250 WPM handcam videosunun yüksek toplam izlemesi güncel erişim anlamına gelmez. Yaratıcı format referansı; doğrulanmış aktif sponsor adayı değil. [Kanal](https://www.youtube.com/channel/UC-IGQyYujTBNyrjJX-9cHPQ/videos).
- **Hipyo Tech — geniş hardware kitlesi için daha sonraki keşif adayı.** Resmî bağlantı sayfasında YouTube, klavye affiliate ve merch kanalları var; ticari içerik yüzeyi doğrulanıyor. Bu araştırmada güncel takipçi/izlenme sayısı ve ücret doğrulanmadı; büyük creator bütçesi veya kapasitesi varmış gibi plan yapılmaz. [Resmî bağlantılar](https://linktr.ee/Hipyo).

**Sonuç:** Araştırılan isimler arasında hem son 60 gün aktifliği hem bütçe/RTT/saat uyumu doğrulanmış bir micro sponsor yok. Bu boşluk uydurma bir “top 10” listesiyle doldurulmadı. İlk partner, izinli pilotun aktif host'larından ve admin önerilerinden seçilmeli; büyük isimlere otomatik bütçe ayırmamalı.

### Teklif ve eleme biçimi

Beş adaylık kısa liste için son beş ilgili içeriği, son 60 gün etkinliğini, izleyici saatlerini, gerçek yorumları ve sponsor örneklerini kontrol et. Tekliften önce adayın ürünü oynaması, bağlantısının uygunluğu ve beta sorunlarını dürüstçe aktarabilmesi gerekir. Kamusal performans kayıtlarını “hile yapamaz” kanıtı sayma.

**Önerilen ilk deliverable:** creator'ın kendi sesiyle 20–35 saniyelik bir gerçek oyun daveti, bir 45 dakikalık ortak oyun saati, yayın sonunda kısa feedback. Sabit ücret ve toplam tavan; olumlu yorum, belirli WPM, rank veya minimum kazanma sözü yok. Klip kullanım hakkı, yayın tarihi ve sponsor açıklaması anlaşılır biçimde önceden belirlenir. Ücretler henüz teklif alınmamış deney tavanlarıdır.

- **Free access:** çekirdek ürün zaten ücretsiz; bunu parasal karşılık gibi sunma. Erken test ve gönüllü tasarım geri bildirimi fırsatı var.
- **Affiliate:** MVP'de satılan ürün yok; revenue share anlamsız. Signup başına ödeme farming teşvik eder. Ertele.
- **Creator code:** indirim veya ayrı queue değil, gizlilik koşullarına uyan campaign etiketi. Özel referral altyapısını launch şartı yapma.
- **Sponsored challenge:** uygun; gösteri private/unrated, ortak ranked normal havuzda. Seyirci creator'la kesin eşleşme satın almaz.
- **Tournament:** MVP için uygun değil; host'lu play night kullan. Büyük paid integration ancak küçük iki cohort'ta tekrar gelen kullanıcı kanıtı oluşunca.

Taslak ilk mesaj — gönderilmedi:

> Hi [name] — your [specific recent clip] is why I’m reaching out. We’re testing a 30-second ranked typing game with one shared ladder. Would a small, scheduled playtest fit your audience? You’d try it first; there’s no requirement for a positive review. I can share the working build, current limitations, time window and a fixed-fee brief before you decide.

Bu metin yalnızca gerçek yakın tarihli örnek ve çalışan build olduğunda kullanılır; toplu kişiselleştirilmiş spam yapılmaz.

## 12. TikTok / Reels / Shorts: görünür oyun kanıtı

İlk yaratıcı tercih **gerçek ekran + mümkünse izinli el/klavye görüntüsü**. Yalnızca 200+ WPM elit videoları yayınlamak ürünü çoğu yeni oyuncu için erişilmez gösterir; yakın seviyeli sıradan maçları da kullan. Kazananı/dönüşü önceden uydurma. WPM gösterilirken süre, English 1K ve mod etiketi görünür olsun.

**Önerilen tekrar kullanılabilir kurgu:** 0–2 saniye gerçek gerilim veya soru; 2–6 saniye kuralı görsel olarak anlama; 6–18 saniye tek karar/hata; 18–24 saniye commit edilmiş gerçek sonuç; son 2–3 saniye tek CTA. 15–30 saniye genel deneme aralığı, öğretici hata analizi 30–45 saniye. Bunlar platform performans benchmark'ı değil test tercihidir. Tam 30 saniyelik maç ayrı, kesintisiz sürüm olarak paylaşılabilir. Hızlandırılmış görüntüyü açıkça belirt; kayıt hızını değiştirip rekor kanıtı sunma.

**İlk altı format:**

- **Yakın bitiş:** “One typo. Two characters behind.” Son 8–12 saniye + sonuç; ancak gerçekten öyle biten maçta. CTA: “Try a 30-second duel.”
- **Keyboard POV:** klavye sesi, eller ve küçük okunur oyun alanı; ses kapalıyken de sonucu anlatan altyazı. CTA: “Bring a friend for an unrated match.”
- **Hata analizi:** “The mistake that cost me this round.” Bir yanlış karakterin ilerlemeyi nasıl durdurduğunu göster. Otomatik weakness analytics varmış gibi ekran üretme.
- **Rank yolculuğu:** gerçek oyuncunun ilk 10 provisional maçtan bir öğrenmesi; bir kötü sonuçla utandırma. CTA: “Start your first ranked match.”
- **Arkadaş meydan okuması:** aynı formatta private karşılaşma; invite açma ve hazır olma basitçe görünür. CTA: “Challenge someone you actually know.”
- **Farklı hız gösterisi:** 200 vs 150 WPM yalnızca aynı koşullarda ölçülmüş oyuncular varsa ve private/unrated etiketiyle; böyle dengesiz bir ranked maçı normal eşleştirme örneği yapma. “Fastest typist” yerine doğrulanabilen kişisel format rekorunu söyle.

“Can you beat this?” CTA'sı ghost-link özelliği gelmeden sahte replay sayfasına götürmez; solo skor denemesi veya gerçek host'lu private davet olarak açıklanır. Adaptif weakness reveal MVP reklamı değildir. Kaybedilen rank'a sahte öfke değil gönüllü oyuncunun gerçek tepkisi; kişiyi hedef gösterme yok.

**Üretim ritmi:** haftada iki iyi klip, en fazla bir ek gerçek highlight. Aynı ham kayıttan platforma uygun üç dağıtım; her yere ayrı günlük içerik çekme. İlk iki hafta bir sesli açıklama, bir sessiz keyboard POV formatını dene. İngilizce kısa altyazı, okunur büyük metin ve ekranda hareket için güvenli boşluk kullan; yoğun ses/gösterişli geçiş typing alanını örtmesin.

CTA oyun saatinde ranked'e, saat dışında anonymous solo veya arkadaş challenge'ına gider. Mobil izleyiciye desteklenmeyen ranked deneyimi vaat edilmez; mobile solo ve isteğe bağlı masaüstünde devam açıkça ayrılır. Kaydedilen video/izlenme iyi yaratıcı sinyalidir; kanalın asıl sonucu yeni normal maç ve başka gün ranked dönüşüdür.

## 13. AI kreatif: yardımcı prodüksiyon, sahte oyun değil

**Güncel araç gözlemi:** Higgsfield ticari video üretim akışları ve kamera/motion araçları sunuyor; Runway referans görsellerle tutarlı video üretimini anlatıyor; Descript metin üzerinden video düzenleme ve altyazı çıkarma sağlıyor; Remotion kodla kontrol edilen motion graphics için kullanılabilir. Bunlar araç kabiliyetleri, bu ürün için dönüşüm artışı kanıtı değil. [Higgsfield commercial generator](https://higgsfield.ai/ai-commercial-generator), [motion](https://higgsfield.ai/ai/video/motion), [Runway Academy](https://academy.runwayml.com/courses/gen-4), [Descript](https://www.descript.com/video-editing), [altyazı](https://www.descript.com/tools/subtitles-generator), [Remotion](https://www.remotion.dev/).

**Format karşılaştırması — bu ürüne özgü değerlendirme:**

- **Gerçek UI kaydı:** işlevi ve maç gerilimini en doğrudan kanıtlar; çalışan build'den sonra düşük ek maliyet. İlk tercih. Mobilde okunurluk için kırpma gerekir; gerçek sonucu koru.
- **Gerçek insanın UGC tarzı anlatımı:** motivasyon, hata ve arkadaş ilişkisini gösterir; host/çekim zamanı gerekir. UI kaydıyla birlikte ikinci ana format. Oyuncunun sözü senaryolaştırılmış testimonial'a dönüştürülmez.
- **AI sinematik:** dikkat çekici ama klavye parmakları, harfler ve UI gerçekliği güvenilmez olabilir; render/deneme maliyeti ve “oyun böyle görünmüyor” riski. İlk edinim deneyi için gerekli değil.
- **Motion graphics:** aynı metin, 30 saniye, gerçek sonuç ve oyun saati gibi bilgileri açıklamakta yararlı; basit template yeterli. Rank transition yalnızca gerçekten değişen rank'ı gösterir. Animasyon üründe varmış gibi sunulmaz.

**Higgsfield'in olası dar rolü:** organik gerçek UI klibi zaten oyuncu getiriyorsa, aynı klibin başına açıkça stilize 1–2 saniyelik keyboard cinematic veya ışık geçişi eklenmiş alternatif üret. Ardından hemen gerçek oyun. İlk $100'ün bütçesini buna harcama; olası ücretli araç aboneliği ayrı maliyet kararıdır. AI intro yüzünden demo geç başlıyorsa kaldır.

**Test:** mümkünse aynı kitle/saat/CTA'da platformun kontrollü deney aracıyla gerçek oyun başlangıcı vs stilize başlangıç. Yeterli örnek yoksa sadece yaratıcı keşif de; performans farkını neden-sonuç diye sunma. 3 saniyelik izlenme/CTR ikincil, maliyet/ilk normal maç ve ranked dönüş ana çıktı. Daha çok tıklama ama daha az gerçek oyuncu getiren AI varyantı kazanmış sayılmaz.

AI image yalnızca isteğe bağlı kapak/arka plan keşfi; gerçek skor, oyuncu, testimonial, el hareketi veya çalışan özellik uydurmak için kullanılmaz. Otomatik editör altyazı, sessizlik temizliği ve yeniden boyutlandırmayı hızlandırabilir; oyun anındaki süre/karakter kanıtını bozacak kesimleri açıklamasız yapma. Otomatik altyazıyı insan kontrol eder. Bu GTM işi için uygulama reposuna video bağımlılığı eklenmedi.

## 14. Paid acquisition: kapı açıldıktan sonra tek hipotez

Bugün çalışan ürün ve baseline olmadığı için paid edinim başlatılmaz. Ön koşul: organik cohort'larda §18/24 ürün kapıları, kaynak ölçümü, gerçek aktif saat ve bütçeyi izleyen sorumlu. Tam attribution yoksa “kanıtlanmış CAC” raporu verilmez. Aşağıdaki maliyet değerlendirmeleri **göreli bütçe/öğrenme riski**dir; canlı CPC/CPM tahmini değildir.

1. **Küçük creator/topluluk host'u — ilk deney.** Kitle: zaten typing yapan, uygun saatte masaüstünde olanlar. Format: gerçek demo + ortak oyun saati. Niyet yüksek olabilecek bir bağlam; sabit teklif küçük harcamayı sınırlar. Dezavantajı host'a bağımlılık, dar örnek ve organik/paid ayrımının zorluğu. Bir teklifle gerçek fiyat öğrenilir; ucuz olduğu varsayılmaz. Community beta sonrası.
2. **Reddit Ads — ilk self-serve aday.** Kitle: typing/klavye ilgisi olan, pilot bağlantısına uygun pazarlardaki desktop kullanıcıları. Gerçek 15–25 saniye duel veya formatı açık statik görüntü; tek kitle/tek teklif. Reddit'in community/interest/keyword ve cihaz/coğrafya hedeflemesi var; community targeting reklamın yalnızca o subreddit'te veya sadece üyelerine gösterileceği garantisi değil. Reklam organik gönderi iznini ortadan kaldırmaz. Niyet orta; ucuz gösterim mümkün olsa da qualified aktivasyon maliyeti bilinmiyor. [Resmî targeting](https://www.business.reddit.com/advertise/targeting).
3. **Google Search — dar, yüksek niyetli sorgular.** “ranked typing”, “typing 1v1”, “multiplayer typing” gibi tam/ifade eşleşme başlangıcı; eğitim sertifikası, iş testi, download/typing jobs gibi ilgisiz niyetler arama terimi incelemesiyle dışlanır. Gerçek ranked formatına açılan sayfa. Hacim düşük olabilir; büyük test siteleriyle head term açık artırmasına girme. CPC, hacim ve rekabet Keyword Planner hesabında pilot ülkeye göre ölçülmeden rakam yok. Planner'ın reklamveren rekabeti SEO zorluğu değildir. İlk 1.000'e giden aşamada. [Google Keyword Planner](https://support.google.com/google-ads/answer/3022575?hl=en-CA).
4. **Newsletter/topluluk sponsorluğu — seçici alternatif.** Kbd.news gibi keyboard bağlamı; gerçek demo, kayıt değil ilan edilmiş oyun saati. Sabit ücret erişim riskini alıcıya bırakır; güncel kitlenin bölgesi, son gönderilerin tıklaması, sponsor etiketi ve fiyat doğrudan teklif olmadan bilinmiyor. Garanti ziyaret veya oyuncu satın alınmış sayılmaz. Creator deneyi işe yararsa test; ilk $100'e sığdığı doğrulanmadı. [Kbd.news](https://kbd.news/).
5. **YouTube — kanıtlı demoyu genişletme.** Keyboard/typing izleyen kitle; gerçek insan ve UI, 15–30 saniye. Organik creator işbirliğinden daha soğuk trafik; masaüstüne geçiş kaybı ve üretim maliyeti var. Device/geo seçenekleri kampanya tipine göre değişir; conversion video kampanyasında belirli kanal placement'ı garanti önerilmez. İlk 1.000 sonrası sınırlı deney. [Google video ayarları](https://support.google.com/google-ads/answer/2375497?hl=en), [content targeting sınırları](https://support.google.com/google-ads/answer/2470108?hl=en-AU).
6. **Meta Ads — erken dönemde düşük öncelik.** Keyboard/gaming ilgisi ve gerçek insanlı kısa video; keşif niyeti, mobil ağırlıklı görüntüleme ve geniş sinyaller qualified desktop oyuncu başına maliyeti yükseltebilir; bu ürün için hipotezdir, ölçülmüş fiyat değil. Basit conversion hacmi yokken algoritmanın ucuz tıklamaya gitmesi başarı sayılmaz. Bir bölgedeki organik ve Reddit öğrenmesi sonrası; hesap hedefleme/teklif seçenekleri bu araştırmada doğrulanmadı.
7. **TikTok Ads — ilk bütçelere uygun değil.** Keyboard POV ve gerçek reaction organikte denenebilir. Soğuk mobile izleyiciyi desktop ranked saatine taşımak ek adım. Resmî dokümanda campaign budget $50 üstü, ad group günlük $20 üstü; lifetime ad group minimumu gün sayısıyla büyüyor. Böyle bir tabanda $100 çok kısa bir test satın alır. TikTok'a özel organik içerik kaliteli oyuncu üretmeden paid deneme yok. [TikTok bütçe koşulları](https://ads.tiktok.com/resources/help/article/about-lifetime-budgets?lang=en-GB).

Retargeting launch'ın varsayılanı değil: consent, yeterli uygun audience ve ihtiyaç kanıtı gerekir. İlk pazar/yaş/consent politikası halen M9 kapısı; öğrenci kitlesi veya reklam platformu yaş hedeflemesi bu kararı kendiliğinden çözmez. Kanıtlanmayan ülke, sponsor veya reklam hesabı uygunluğu için kampanya takvimi taahhüt edilmez.

**Göreli maliyet kararı:** küçük sabit ücretli host ve dar Reddit deneyi harcama kontrolü açısından ilk sırada; Search'te niyet daha yüksek olabilir ama tıklama rekabeti/hacim bilinmiyor. Newsletter sabit bedeli ve YouTube üretimi daha büyük başarısız deneme riski taşır. Meta/TikTok'ta ucuz görüntülenme, mobil→masaüstü geçişi nedeniyle ucuz ranked aktivasyon demek olmayabilir. Bu sıralama medya fiyat tahmini değil, mevcut küçük bütçeyle kaliteli oyuncu öğrenmesi için stratejik değerlendirmedir.

## 15. $100 / $300 / $1.000 deneyleri

**Ortak sözleşme:** aşağıdaki eşikler ticari varsayımın sınanması için öneridir, sektör benchmark'ı veya gelirle doğrulanmış unit economics değil. Deneyler alternatif bütçe seviyeleridir; toplam $1.400 harcama talimatı değildir. Harcama tavanı zorunlu ücret/vergiler dahil planlanır; teklif uymuyorsa kapsam daralır veya para harcanmaz. Mevcut cohort/organik sonuç karşılaştırması bağlam sağlar, randomize incremental lift kanıtı sağlamaz.

İlk valid ranked tamamlayan benzersiz yeni kullanıcı = aktivasyon. Paid cohort'a yeni kullanıcı olduğunu ve kaynağını izinli ölçümle gösterebildiklerimizi dahil et; bilinmeyeni ayrı say. Site içi account/sonuç toplamı, reklam panelinin modeled conversion'ı ve post-click cohort aynı veri değildir. 7 günlük aktivasyon penceresi ve son aktivasyondan **192 saat** sonra olgun D7 değerlendirmesi; harcama biter bitmez retention sonucu çıkarma.

### $100 — bir host, bir oturum, bir dönüş sorusu

- **Kanal/kitle:** uygun aktif micro creator veya admin onaylı typing host'u; pilot bağlantısına uygun, aynı saatte gelebilen masaüstü typist'ler. Tek partner.
- **Alım:** toplam en fazla $100 sabit ücretle §11'deki kısa davet + 45 dakikalık oturum. Bu fiyata uygun teklif yoksa başka platforma körlemesine aktarılmaz; organik devam edilir.
- **Creative/landing:** çalışan gerçek yakın duel; genel ürün linkindeki allowlist campaign etiketi; home solo hazır alanı + mevcut ranked girişinde doğru saat bilgisi. Host private linki kitle landing'i değil. Test için yeni landing mimarisi gerekmez.
- **Başarı önerisi:** ≥10 yeni ranked aktivasyon, bunların ≥3'ü ilk 7 günde farklı ikinci UTC günde ranked ve ≥2'si tam D7 penceresinde geri gelir; attribution kapsamı açıklanır. Tam $100 harcanırsa CPA ≤$10. Ürün queue/integrity kapıları da geçer.
- **Kill:** 7 günlük edinim sonunda <5 yeni aktivasyon veya cohort olgunlaşınca <2 ikinci-gün dönüş; aynı host'a tekrar ödeme yok. 5–9 aktivasyon ya da diğer eşikleri kaçırma: belirsiz, ölçekleme yok; neden görüşmesi. Daha önce kalite/ölçüm bozulursa harcama ve yeni duyurular hemen durur.
- **Öğrenme:** izleyici aynı anda gerçek rakip olabilir mi, host ayrılınca geri gelir mi? 10 kişilik sonuçta 2/10 D7, istatistiksel %20 retention doğrulaması değildir.

### $300 — tekrar edilebilirlik, yeni kanala dağılmadan

- **Kanal:** ilk $100 tipindeki deney iyi sinyal verdiyse aynı kitle tipinde iki ayrı, en fazla $150'lik host oturumu. Aksi halde paid için hazır değiliz; sırf daha büyük bütçe var diye bu deneye geçme.
- **Kitle/creative/landing:** aynı pilot bölge/saat, aynı gerçek demo ve aynı landing; her oturum yeni oyuncu cohort'u. Mevcut oyuncular rakip olur ama edinime yeniden yazılmaz. Partner değişiyorsa bunun kontrollü A/B olmadığını raporla.
- **Başarı:** toplam ≥30 yeni ranked, her oturumda ≥10; toplam ≥9 ikinci-gün, ≥6 olgun D7 dönüşü. Tam harcamada CPA ≤$10. İki cohort'ta da queue kapısı korunur.
- **Kill:** ilk $150'lik oturumun 7 günlük penceresinde <5 aktivasyon çıkarsa ikinci satın alma yok. İlk cohort olgunlaşınca hiç D7 dönüşü yoksa önce retention sorununu çöz. İki oturum sonunda <15 aktivasyon veya <3 ikinci-gün dönüş olursa kanal durur. Aradaki sonuçlar “başarılı” değil belirsizdir.
- **Zaman:** ikinci ücretli oturum, ilkinin D7 ölçümü olgunlaşmadan alınmaz. Bu nedenle deney 30 günlük içerik takviminden uzun sürebilir; takvim harcama mecburiyeti yaratmaz.

### $1.000 — kazananı tekrarla, tek challenger ekle

**Bütçe: $300 creator tekrarı + $300 Reddit desktop deneyi + $400 koşullu rezerv = $1.000.** İlk iki parça ayrı cohort; rezerv başarı görülmeden açılmaz. Bu plan $300 deneyinin sonucunun iyi olduğu varsayımıyla başlar; başka kanallara yedi parçalı dağıtım yapılmaz.

1. **$300 kontrol/tekrar:** yukarıdaki iki host cohort'u; aynı eşikler. Bu tranche organik baseline'ı ve aynı anda rakip arzını da korur; bunun Reddit sonucunu etkileyebileceği raporlanır.
2. **$300 Reddit challenger:** bir ilgili interest/community kitle tanımı, desktop, doğrulanmış pilot pazar; iki hook'tan organikte daha anlaşılır olan **tek** gerçek oyun kreatifi, aynı landing. Günlük tavan ≤$30, en fazla 10 gün; delivery/minimumlar hesapta uygun değilse kurulum değiştirilmeden test başlamaz. Ads'i yanlış “live now” iddiasıyla saat dışına taşıma. Platform programlaması yetersizse saat bilgisi daima doğru kreatif/landing kullan.
3. **$400 rezerv:** yalnızca nitelikli kazananın sonraki cohort'una; $200'lük iki parça. Her parçadan sonra kalite ve CPA kontrolü. İlk $600 sonuç vermiyorsa rezerv harcanmaz.

**Reddit başarı:** $300 içinde ≥30 yeni ranked, ≥9 ikinci-gün ve ≥6 olgun D7 dönüşü, CPA ≤$10; safety/queue kapıları geçer. **Erken kill:** $100 harcamada sıfır aktivasyon veya en az 50 izinli ölçülebilir landing ziyaretinde sıfır tamamlanmış normal maç varsa durdurup hedefleme/landing/ölçümü incele. **Son kill:** bütçe sonunda <15 yeni ranked veya olgun cohort'ta ikinci-gün oranı <%15; yeni reklam satın alma. 15–29 aktivasyon/olgunlaşmamış retention: sonuç belirsiz, rezerv kapalı.

Bu küçük örnekte iki kreatif ve iki kitleyi birden A/B test etmeye çalışma. Minimum ≥30 aktivasyon bile güçlü istatistiksel kanıt değil; iki olgun haftalık cohort ve canonical ≥100 pilot toplamı olmadan geniş ölçek kararı yok. Reklam panelinde click yüksek, ürün olayında yoksa önce ölçüm/uygunluk sorunu; bütçe artırma.

**Bütçeden bağımsız durdurma:** duplicate rating >0, açıklanamayan sonuç farkı, ciddi veri olayı, kapasite/admission ihlali veya ranked kalite kapısı bozulması. İnceleme tamamlanana kadar acquisition durur; oyunculara sahte queue hızı veya hayalî rakip gösterilmez.

## 16. SEO: ilk 100'ün kaynağı değil, zamanla biriken keşif

Araştırmadaki genel sorgularda Monkeytype, 10FastFingers, TypeRacer ve TypingTest gibi yerleşik ürünler; multiplayer/ranked aramalarında da yeni doğrudan rakipler bulunuyor. Sonuçlar ülke ve zamana göre değişir; bu çalışma sabit SERP sıralama raporu değil. Hacim, Keyword Difficulty veya ilk sayfaya çıkma süresi ölçülmedi. Rekabetin güçlü olduğu yorumu görünen ürün olgunluğu ve niyet örtüşmesine dayanıyor. [TypingTest](https://www.typingtest.com/), [10FastFingers](https://10fastfingers.com/), [TypingRivals](https://typingrivals.com/en/).

**Sorgu kümeleri ve öncelik:**

- **“typing test”, “WPM test”, “typing speed”, “keyboard speed test”:** geniş ölçüm niyeti, güçlü yerleşik araçlar; aynı home/solo deneyimi bu ihtiyacı dürüstçe karşılar. Dört aynı sayfa üretme. Erken ücretli/SEO ana bahis değil.
- **“typing race”, “multiplayer typing”, “typing game”:** oyuncu niyeti daha yakın fakat race; kalabalık araç yarışı, kelime oyunu veya solo oyun da demek olabilir. 1v1 ve 30 saniye netliğiyle uygun ziyaretçiyi seç; grup yarışı varmış gibi title yazma.
- **“typing competition”:** event, sertifika, turnuva veya ladder anlamları karışır. Gerçek oyun gecesi duyurusu faydalı; çalışmayan tournament kayıt sayfası değil.
- **“ranked typing”, “1v1 typing game”, “30 second typing duel”:** en yakın niyet, hacim bilinmiyor; `/ranked` deneyimi ve mevcut kurallar içeriğinde gerçek formatı anlat. Yeni kategoriye sahip çıkma iddiası yok.
- **Açıklayıcı long-tail:** “why is my WPM different on different sites?”, “what counts as a correct character?”, “typing accuracy vs speed in a duel”. Kendi kural örneklerini gösteren az sayıda iyi yardım yazısı; dönüşüm hedefi aynı formatı denemek.

**Sayfa politikası:**

1. **Home/practice:** ana araç ve açık title/description; anonymous başlangıcı marketing metniyle aşağı itme. Aynı araç için `/wpm-test`, `/speed-test`, `/keyboard-test` kopyaları oluşturma. Mevcut route/canonical kararlarını koru.
2. **Ranked/kurallar/yardım:** live şartları, aynı metin, stop-on-error, skor ve provisional bilgisini açık anlat. MVP'nin mevcut statik HTML gereksinimleri yeterli başlangıç; SEO için framework/SSR mimarisi değiştirme. [Mimari SEO sınırı](docs/ARCHITECTURE.md).
3. **Public profiller:** kişisel link paylaşımında yararlı; boş veya gizli profillerden arama envanteri üretme. Varsayılan özel geçmişi ifşa etme. Public kartın index politikası ve kullanıcı bilgilendirmesi ilgili ürün/gizlilik çalışmasında kararlaştırılır; public URL bulunması otomatik geniş indexleme izni değil. Özel profil/match noindex kuralı korunur.
4. **Leaderboard:** gerçekten eligible oyuncu ve format bilgisi olan mevcut tablo; veri tarihi ve provisional anlamı açık. Boş tablo, sonsuz sıralama filtresi, günlük kopyalar ve her WPM değeri için ayrı sayfa yok. Tek Elo ladder'ı SEO için bölme.
5. **Dil sayfaları:** launch English 1K; oynanamayan 40 dil için landing sayfası yapılmaz. Sonraki dil desteği ürün/yoğunluk kararıdır, çeviriyle talep yaratma bahanesi değil. Yardım metni çevirisi ranked dil desteği gibi sunulmaz.
6. **Practice ve programmatic:** ancak gerçekten farklı iş yapan, yararlı ve desteklenen egzersiz/format varsa. MVP'de adaptive exercise library olmadığı için weakness'e özel yüzlerce sayfa yok. İzinli gerçek veriyle yararlı profil/leaderboard artışı daha sonra değerlendirilebilir; boş şablon büyümesi başarı sayılmaz.

Google'ın güncel politikası, kullanıcıya değer sağlamadan sıralama için çok sayıda benzer sayfa üretimini ve doorway yaklaşımını hedefliyor; AI veya insan üretimi olması tek başına ayrım değil. Bu yüzden strateji “100 AI blog” değil, ürünle birebir örtüşen birkaç iyi sayfa. [Spam politikası](https://developers.google.com/search/docs/essentials/spam-policies), [people-first içerik rehberi](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

**İlk SEO işi:** gerçek ürün çalışınca indexlenebilir home/kurallar/yardım, doğru canonical/404/sitemap ve Search Console kontrolü; sonra iki açıklayıcı yazı. İlk 30 gün organik sırayı KPI yapma. 8–12 haftada indekslenen yararlı sayfa, markasız ilgili query, organikten test/ranked aktivasyonu ve retained cohort incelenir. Gösterim artıp oyuncu oluşmuyorsa yeni sayfa sayısı artırılmaz. Backlink satın alma veya topluluk yorumuna link bırakma SEO planı değildir.

## 17. Product Hunt, Hacker News ve Indie Hackers

**Show HN — çalışan anonymous demo sonrasında en uygun maker lansmanı.** HN kuralı kullanıcıların gerçekten deneyebileceği ürün ister; signup/landing sayfası tek başına uygun değil. Hikâye: “A 30-second typing duel game — and what it takes to keep a small ranked queue playable.” Ana deneyim ilk tıkta solo çalışır, canlı saat ve sınırlar açık; geliştirici sorulara cevap verir. Beklenen kitle mühendisler ve ürün meraklıları, temsilî competitive typist örneklemi değil. Oy koordinasyonu yok. Ani trafik/admission ve olumsuz teknik ilk izlenim riski; community beta kapıları geçmeden kullanma. [Show HN kuralları](https://news.ycombinator.com/showhn.html).

**Product Hunt — public beta için isteğe bağlı vitrin.** Kısa gerçek video, çalışan demo, format ve eksikler; tek günlük oyun penceresi ayrıca görünür. Launch materyali ve maker anlatısı için uygundur, kalıcı eşzamanlı oyuncu kaynağı olduğu gösterilmedi. Büyük post trafiği ve upvote'un oyun retention'ıyla karıştırılması riski. İlk 100 için öncelik değil; 1.000'e giden aşamada hazır materyalle düşük ek iş yükü varsa kullan. “#1 Product” hedefi yerine platform cohort'unda first-ranked ve D7 ölç. [Resmî launch rehberi](https://www.producthunt.com/launch).

**Indie Hackers — oyuncudan çok kurucu öğrenmesi.** Gerçek pilotun queue/retention ve başarısız acquisition deneyini şeffaf yazmak; partner host veya benzer ürün kurucusundan geri bildirim almak için. “Yeni siteme gelin” yerine gerçek sayıları, örneklem sınırını ve bir soruyu sun. Topluluğun güncel self-promo kuralları bu araştırmada doğrulanmadı; uygun bölüm/izin yeniden kontrol edilir. İlk 100 rakibi buradan bekleme. [Indie Hackers](https://www.indiehackers.com/).

Üçünü aynı hafta zorunlu launch paketi yapma. Önce yeterli ürün ve kullanıcı kanıtı, sonra en uygun tek platform. HN/PH günü trafik kapandıktan sonra retained cohort ölçümü için en az 192 saat daha bekle.

## 18. Fazlara göre uygulama planı

Bu fazlar GTM kapılarıdır; mevcut M0–M9 mühendislik roadmap'ini değiştirmez. Kullanıcı sayıları hedef aralığı, tarih taahhüdü değil. Engineering tamamlanmadan calendar launch günü başlamaz. Her fazın ürün/operasyon sorumlusu atanır; şu an isim atanmadı.

### A. Private prototype — 5–8 görev testi, 10–12 görüşme

**Kitle/topluluk:** kurucunun erişebildiği typist'ler, izinli birebir araştırma katılımcıları; birkaç farklı hız seviyesinden kişi. **Ürün gereği:** görev için gerçekten gereken çalışan solo/private dilimi; henüz olmayan ranked UI'sına dair prototip açıkça prototip diye gösterilir. Bu çalışma server güvenilirliğini ispatlamaz.

**Edinim/eşzamanlılık:** planlı ikili randevu; açık queue vaadi yok. **Başarı:** katılımcıların çoğunun formatı doğru açıklaması, tekrar oynamak için somut nedeni ve ana görevdeki engellerin kaydı; ölçülen `x/n` açıkça yazılır, nitel bulgu pazar talebi sayılmaz. **Başarısızlık:** solo/duel/rank ayrımı anlaşılmıyor veya oyunun kendisi tekrar istenmiyor; mesaj/UX problemini çözmeden kitle büyütme. **Sonraki kapı:** gerçek iki tarayıcı uçtan uca maç ve altyapı testleri.

### B. Closed alpha — ilk 100 ranked aktivasyona doğru

**Kitle:** typing odaklı, düşük/orta/yüksek hız dağılımlı ilk 20–30 teyitli katılımcı grupları; izinli bir typing partneri ve küçük host ağı. **Ürün gereği:** solo, private, auth, authoritative ranked, rapor/review, ghost ayrımı, profil ve temel telemetry; lisanslı corpus, gerçek migration/deploy/E2E kanıtı, kapasite/admission, gizlilik/export/silme ve incident sorumlusu. İlgili roadmap kabul maddeleri eksikse duyuru bekler.

**Edinim:** elle destekli davet ve tek partner playtest. **Concurrency:** §7 ortak saatleri, yeterli teyit yoksa yeni edinim oturumu ertelenir; gelen kullanıcıya solo/private alternatifi. **Başarı:** en az 100 ilk ranked tamamlaması, en az iki haftalık olgun D7 cohort'u ve §24 canonical devam kapıları. **Başarısızlık:** önce queue/reliability yetersizliği çözülür; güvenilir/adil deneyime rağmen iki yinelemede başka gün dönüş zayıfsa ürün tezi yeniden değerlendirilir. Ücretli büyüme yok.

### C. Community beta — 100–300 toplam aktivasyon

**Kitle:** ikinci izinli typing topluluğu, bir keyboard host'u; aynı bölgede aynı havuz. **Ürün gereği:** alpha sorunlarının giderilmesi, doğru queue durumu, stable ruleset, ölçülen incident/review kapasitesi. **Edinim:** reusable host kit, haftada iki gerçek klip, iki anlamlı izinli topluluk gönderisi; ürün kapıları geçerse §15 ilk $100 deneyi.

**Concurrency:** partner event'lerini ortak saatlere bindir; yeni küçük özel public havuz yaratma. **Başarı:** iki bağımsız edinim cohort'unda D7/iki-gün ve queue hedefleri korunur; yalnızca kurucunun arkadaşları oynamaz. Creator ayrıldıktan sonraki dönüş ayrıca görünür. **Başarısızlık:** herkes yalnızca event sırasında geliyor veya düşük hız oyuncusu hızla ayrılıyor; yeni partner eklemeden bu cohort'la görüş.

### D. Public beta — 300–1.000 toplam aktivasyon

**Kitle:** kanıtlı typist/keyboard segmenti; sınırlı developer ve search denemesi. **Ürün gereği:** canonical launch kapıları, gerçek load/soak sonucu, destek ve bildirim kapasitesi; oynanabilir anonymous demo. **Edinim:** partner tekrarı; seçilirse tek Show HN/PH denemesi; iyi sonuçtan sonra $300, sonra $1.000 tavanlı test.

**Concurrency:** ölçümle eklenen saatler; önce mevcut pencerenin iki yanına genişlet, ülke/format havuzunu bölme. **Başarı:** ≥100 yeni first-ranked'lik en az iki olgun haftalık cohort'ta kalite/retention korunur; yeni oyuncuların bir kısmı planlı etkinlik olmadan da dönüyor. Bu son pay için önce baseline ölç, keyfî “organik %50” hedefi üretme. **Başarısızlık:** trafik artarken yield/retention düşüyor veya host başına maliyet sürdürülemez; yeni harcamayı durdur, pencereyi yeniden yoğunlaştır.

### E. Season 1 — koşullu post-MVP kampanyası

**Kitle/hedef:** mevcut aktifler + örneğin 1.000–3.000 toplam ranked aktivasyona giden partner cohort'ları; 1.000 sayısı sezonun otomatik başlaması için kapı değil. **Ürün gereği:** doğrulama sonrası üç seçenekten sezon görünümü gerçekten seçilmiş, uygulanmış ve test edilmiş olmalı; geçmiş snapshot/rozet, açık takvim, retained Elo, destek kapasitesi. İlk tercih adaptive veya friends olursa Season 1 kampanyası ertelenir.

**Edinim/concurrency:** yedi günlük açılış haftasında ortak saat, creator private gösterisi ve tek ladder; aşağıdaki §19. **Başarı:** sezon öncesi karşılaştırılabilir cohort'a göre kalite bozulmadan artan haftalık iki-gün oyuncu sayısı; yalnızca ilk hafta peak değil 3–4. hafta dönüşü. **Başarısızlık:** rozet alanlar dönmüyor, rank anlaşılmıyor veya ödül farming başlıyor; yeni ödül eklemek yerine sorunu incele. Causal retention artışı iddiası için ayrı deney gerekir.

### F. Growth — 1.000'den 10.000 aktivasyona

**Kitle:** kanıtlı ilk segmenti büyüt; ikinci bölge/segment yalnızca ayrı talep ve bağlantı kanıtıyla. **Ürün gereği:** mevcut mimarinin ölçülen kapasite/operasyon sınırları; yeni dil, store, native app otomatik gereksinim değil. **Edinim:** partner playbook'u, retained CPA'sı ölçülen tek paid kazanan, sınırlı yüksek niyetli search ve yararlı SEO.

**Concurrency:** all-day heatmap'te uygun oyuncu/skill yoğunluğunu ölç, ek saatleri sırayla aç. **Başarı:** cohort kalitesi korunurken haftalık iki-gün oyuncu ve desteklenebilen saat artar; maliyet ve moderasyon yükü birlikte raporlanır. **Başarısızlık:** gelir/finansman sınırını aşan edinim maliyeti, kötü off-peak deneyimi, segment bazlı churn veya incident kapasite aşımı; edinim sınırlandırılır. 10.000 kullanıcıya takvim garantisi verilmez.

## 19. Season 1: sekiz haftalık görünür dönem, Elo reseti yok

**Koşul:** sezon görünümü canonical post-MVP seçimi olarak onaylanmadan bu kampanya yayınlanmaz. Ürün belgesi ilk sekiz haftalık görünüm, snapshot ve kazanılmış rozet tarif ediyor; mevcut Elo korunur. Sezon, mağaza/XP/bracket geliştirme izni değildir. [Ürün sonraki aşaması](competitive_typing_platform_project.md).

**Kampanya fikri:** “Season 1: find your rivals.” Alt metin: “Eight weeks. One ladder. Your rating carries on.” Aciliyet gerçek ortak başlangıç saatinden ve haftalık buluşmadan gelir; sahte sayaç, son şans satın alımı veya oynamayınca kaybolan streak yok.

**Önerilen akış:**

- **T−14:** tarihler, eligibility, puanın korunduğu ve rozetin neyi temsil ettiği açık kurallar. İki creator ve partner admin'le yalnızca kapasite dahilinde slot planla; isimler anlaşılmadan ilan edilmez.
- **T−7:** gerçek normal oyuncu/elit karışımı 2–3 kısa klip ve opt-in event. İlan edilen dil/format dışında “global eşit gecikme” sözü yok.
- **Açılış haftası:** her gün önceden ilan edilmiş mevcut pencerede normal ranked; bir creator'ın private/unrated gösterisi. “Launch tournament” yerine play week; bracket/spectator vaat edilmez.
- **Hafta 2–7:** tek ladder'dan izinli highlight, kısa düzeltme notu, bir ortak saat. Sadece en çok maç oynayanı ödüllendiren grind kampanyası yok; düşük hız ve öğrenme hikâyelerine yer ver.
- **Hafta 8:** gerçek kapanış snapshot'ı ve önceden yayımlanmış eligibility'ye göre kazanılmış rozet; inceleme/itiraz sonuçları netleşmeden tartışmalı kazanan ilanı yok. Sonraki dönemde Elo sıfırlanmaz.

**Founder badge ve limited cosmetic kararı:** ayrı bir founder kozmetiği bugün launch şartı değil. Sezon özelliği seçildiğinde katılım rozeti düşünülürse tarih/kriter açık, ücretsiz, rank/skill rozetinden farklı, trade edilemeyen ve oyun avantajı sağlamayan bir sunum olmalı; exact kriter ürün sahibinin ayrı kararıdır. “Bir daha asla alamazsın” baskısı veya davet yarışı yerine geçmiş katılımı dürüstçe kaydeder. Mağaza ve cosmetic currency eklenmez.

**Global challenge:** farklı saatlerde aynı ladder'daki toplu katılım özeti olabilir; takımlara/ülkelere ayrı queue veya toplu rated room açılmaz. İnsanlar uygun bağlantı ve kendi saatlerinde katılabilir. Başarının ölçüsü hashtag/rekor kayıt değil, sezon sonrası da farklı gün oynayan oyuncudur. Ödül havuzlu turnuva ancak ayrı ürün ve operasyon talebi kanıtından sonra.

## 20. Referral: önce davetin çalıştığını gör

**MVP kararı:** ödüllü referral programı yok. Zaten var olan private challenge en doğal arkadaş edinimidir: linki aç, host varken katıl, hazır ol, puansız maç oyna. Basit sonuç metni ve profil linki ikinci paylaşım biçimi. Özel referral code altyapısı, ödül veya leaderboard'u launch'a eklemek deneyin hangi mekanizmayla işe yaradığını da karıştırır.

**Devam sinyali:** en az iki olgun cohort'ta farklı gerçek davetçiler yeni alıcıların maç tamamlamasını ve başka gün dönüşünü getiriyorsa, ekonomik ödül olmadan bu akış iyileştirilir. Viral katsayı: etkin davetçi başına yeni maç tamamlayan alıcı × bu alıcıların daha sonra etkin davetçiye dönüşme oranı. Aynı arkadaşla tekrar maç ve mevcut hesaplar “yeni” değildir; kimlik bağlanamayan alıcılar tahminle dedupe edilmez.

**Koşullu sonraki deneme:** kozmetik altyapısı ürünce zaten seçilmişse, en fazla bir küçük ücretsiz profil title/frame; skill/rank rozeti gibi görünmez. Öneri: ilk gerçek yeni alıcı normal private maçı tamamlayıp daha sonra başka bir UTC günde döndüğünde, dönem başına yalnızca bir katılım kozmetiği. Exact dönem, ölçüm ve abuse kuralı implementation öncesi canonical owner'da tanımlanır; bu belge aktif reward sözleşmesi değildir.

Ödül; Elo, queue önceliği, daha kolay rakip, training/accessibility ayrıcalığı, retention bilgisine erişim veya sınırsız kozmetik para vermez. Çok hesap/spam kârlı hale gelmesin: düşük ekonomik değer, tek cap, gecikmeli doğrulama, kullanıcıya görünen eligibility ve itiraz. IP/cihaz tek başına dolandırıcı veya kalıcı ban kanıtı değil; fingerprint/referral amacıyla yeni hassas veri toplama. İstenmeyen DM veya topluluk spam'i üreten sistem, acquisition artmış görünse de kapatılır.

## 21. Topluluk retention: tekrar gelmek için oyun ve insan

İlk neden adil maç ve anlamlı sonuçtur; Discord aktivitesini ürün retention'ı yerine kullanma. Bir arkadaş veya tanıdık rakibin aynı saatte geleceğini bilmek yardımcı olabilir, fakat ürün topluluğa katılmayan için de çalışmalı.

**Hafif haftalık ritim:** bir sabit ana buluşma, ikinci gün kısa devam penceresi, bir anlamlı changelog, izinli bir oyuncu hikâyesi. Günlük ping veya görev/streak zinciri yok. İlk hafta destek verilen saatler görünür, sonraki hafta yalnızca gerçekten sürdürülebilecek saat ilan edilir.

- **Discord:** isteğe bağlı koordinasyon ve geri bildirim; oyuncu şikâyetini tartışmaya açıp topluluk mahkemesi kurma. Bug raporuna yanıt ve takip, boş meme kanalından daha yüksek öncelik.
- **Haftalık tournament:** MVP'de uygulanmaz; aynı ihtiyacı normal ranked play night + private gösteri karşılar. Tekrarlanan talep ayrı turnuva kararını besler.
- **Leaderboard post:** tek mevcut ladder'dan sınırlı ve izinli highlight; yüksek WPM dışındaki öğrenme/geri dönüş hikâyeleri de. Özel geçmiş ve real name paylaşılmaz.
- **Patch notes/devlog:** “neden değişti, oyuncu ne hissedecek, bilinen sorun” biçiminde kısa. Gerçek değişiklik yoksa haftalık içerik zorunluluğu yok. Kurallar/Elo sessiz değişmez.
- **Season update:** yalnızca §19 sonrasında, gerçek takvim ve snapshot. Retention düşükken sezon duyurusuyla problemi saklama.
- **Poll:** tek karar hakkında, seçeneği gerçekten değerlendirebileceksek. Oylamayı bağlayıcı söz veya temsili araştırma sayma. “Daha fazla özellik?” yerine “Son oturumda neden ayrıldın?” gibi deneyime yakın soru.
- **Creator event:** ilk edinimden bir hafta sonra, creator olmadan normal ranked dönüşünü ayrıca ölç. Her hafta ücretli ünlü getirmeden kimse gelmiyorsa topluluk kendi başına yaşamıyor.

**Geri dönüş araştırması:** farklı gün gelen 5 ve gelmeyen/ayrılan 5 gönüllüyle kısa görüşme; “rank iyi mi?” yönlendirmesi yerine son oyun anını sor. Queue, seviye farkı, stop-on-error, teknik sorun ve hayata/saatlere uymama ayrı nedenler. Kullanıcıya ulaşma yalnızca uygun araştırma izni/kanalı üzerinden; ürün olaylarından gizli contact list üretme.

## 22. Kanala göre İngilizce mesaj taslakları

Ürün ismi ve canlı URL kesinleşmedi; metinlerde ürün markası uydurulmadı. Köşeli parantezli alanlar yayın öncesi gerçek bilgilerle doldurulur. İzin ve AI içerik kuralları geçerlidir; özellikle Reddit taslakları otomatik yayın metni değil, geliştiricinin kendi gerçek deneyimiyle yazacağı yapıdır.

**Reddit / typist geri bildirimi:**

> I’m building a 30-second ranked typing game. Both players get the same English text, and you have to correct mistakes before moving on. I’d like feedback on one thing: after losing a close round, did you want another opponent — and why? Here’s a real clip and the current beta limitations. [Demo and scheduled play time]

**Discord / admin onaylı etkinlik:**

> Ranked playtest — [date], [time UTC]. We’ll meet in one shared 30-second queue. English 1K; desktop with a physical keyboard is the supported ranked setup. You can try solo first. Friend matches are unrated. We’ll be around for feedback during the session. [General product link]

**TikTok / kısa yakın bitiş:**

> I was ahead. Then I missed one character.
> Same text. 30 seconds. That was enough.
> Try it with a friend. [Profile link]

Yalnızca videodaki gerçek olay bunu destekliyorsa. “Bet you can’t” ile kişiyi küçümsemek yerine gerçek gerilim göster.

**YouTube / keyboard + oyun açıklaması:**

> What happens when a typing test has an opponent? I tried a 30-second duel on the same text. Here’s the full round, the mistake I made, and what the result actually measures. You can practice without an account; ranked play needs one. [Demo / current play hours]

Sponsor varsa açık sponsor açıklaması; oyuncunun gerçek deneyimi farklıysa metin ona göre değiştirilir.

**X / tek somut build gözlemi:**

> A ranked typing game has a problem a solo test doesn’t: both players have to show up. We’re testing one scheduled queue, one format, and 30-second rounds. [Real clip] Next playtest: [time].

**Mechanical keyboard topluluğu / izinli kanal:**

> Same keyboard, different pressure. This is one real 30-second typing duel, with the keyboard audio left in. Curious whether your accuracy changes when there’s another player? We’re running a small playtest at [time].

Bu metin r/MechanicalKeyboards'a gönderilmez; §3'te kuralları uygunluğu teyit edilen forum/Discord/creator bağlamı için.

**Developer kitlesi / ara verme ve ölçüm:**

> A 30-second break with a measurable result. Practice anonymously, or challenge a friend on the same text. It won’t make you a better programmer — it’s a typing game. [Working demo]

**Competitive gamer / ranked sayfası:**

> One opponent. The same text. 30 seconds.
> Correct your mistakes, finish with more correct characters, and find your place on one ranked ladder. Your first 10 rated matches are provisional. [Play ranked]

**Landing ana anlatı:** “Practice your speed. Put it to the test.” Destek: “Start with a 30-second typing test. Challenge a friend, or join a ranked 1v1 match on the same English text.” Ana solo CTA ürünün hazır typing alanını engellemez; ranked CTA ikincil. Saat/erişilebilirlik iddiaları canlı duruma dayanır. “Instant match”, “cheat-proof”, “everyone is online” veya garanti gelişim yok.

## 23. Hafif 30 günlük launch içerik takvimi

**Gün 1, bugün değildir:** community beta kapıları geçince başlar. İçerik sorumlusu kurucu/atanmış tek editör; oyuncu kaydı ve paylaşım izni önce alınır. Hedef haftada iki özgün kısa video + bir faydalı topluluk güncellemesi; her gün paylaşım yok. Operasyon/inceleme süresi bu içerik üretiminin dışında kapasite planlanır.

**Gün 1–7 — formatı anlaşılır kıl:**

- **G1:** doğru launch durumu, format ve ilan edilmiş saat; kendi duyuru kanalı + uygun partnerin onaylı duyurusu. Tek CTA: solo dene veya oyun saatine gel.
- **G2:** ilk gerçek keyboard POV kısa video; Shorts/Reels/TikTok'a aynı çekimin okunur sürümü. Ölç: tamamlanan test/maç, görüntülenme ikincil.
- **G3:** yayın yok; ilk oyuncuların nerede takıldığını incele, gönüllü 2–3 görüşme.
- **G4:** bir hata/stop-on-error anlatan klip. Çalışmayan adaptive özelliği gösterme.
- **G5:** izin varsa tek typist feedback gönderisi; izin yoksa mevcut feedback kanalında bir soru. Yeni kanallara seri crosspost yok.
- **G6:** planlı ortak oyun saati; yalnızca opt-in hatırlatma. Gerçek eşleşme yoğunluğu yetersizse duyuruda bunu açıkla.
- **G7:** bir kısa “öğrendik/düzelttik” notu; değişiklik yoksa istatistik uydurmak yerine gelecek saat bilgisi. Cohort henüz olgun değil.

**Gün 8–14 — arkadaş daveti ve güven:**

- **G8:** private invite'ın host + guest akışını gösteren 20–30 saniyelik demo.
- **G9–10:** yeni post yok; expired/host-away/hesap geçişi sorunlarını gözle, ilk cohort'un olgun D7'sini zamanı geldikçe hesapla.
- **G11:** izinli normal hız oyuncusunun yakın maçı; elit WPM zorunluluğu yok.
- **G12:** varsa tek gerçek düzeltme notu ve sonraki buluşma saati.
- **G13:** ilk creator/admin playtest'i; paid ancak kapılar geçtiyse. Creator'a bağlı gelmeyen oyuncuları da cohort'ta ayrı gör.
- **G14:** genel ürün anketi yerine bir soru: “What made you come back — or not?”; gönüllü yanıtlar, public score/kimlik ifşası yok.

**Gün 15–21 — işe yarayan biçimi tekrar et:**

- **G15:** önceki iki haftanın en çok gerçek oyuncu getiren formatından yeni bir klip; sadece en çok izlenene göre seçme.
- **G16:** izinli tek player highlight; yakın geçmişi/gerçek adı paylaşma.
- **G17–18:** yayın yok; görüntüden oyuna, mobile'dan desktop'a ve ilk maçtan ertesi güne kayıpları incele. Sonuç düşükse paid rezerv açma.
- **G19:** “WPM neden farklı görünebilir?” bir gerçek kural örneği; yardım içeriği ve kısa video aynı çekirdekten.
- **G20:** ortak oyun gecesi, yeni public race/turnuva gerektirmez.
- **G21:** hata/patch özeti; gönüllü bir sonraki partner için program bilgisi. Spam davet ödülü yok.

**Gün 22–30 — kanıtı toparla:**

- **G22:** ilk iki cohort'u karşılaştır; kamuya sayısal sonuç konacaksa denominator, tarih ve eksik ölçüm açıklanır. İç rapor için yeni pazarlama postu gerekmez.
- **G23:** bir gerçek tam 30 saniye maç veya kısa yorumlu sürüm; product proof arşivi oluştur.
- **G24:** uygunluk varsa ikinci toplulukta izinli demo/öğrenme yazısı. İlk platformun postunu aynen yeniden kullanma.
- **G25–26:** yayın yok; sonraki ay için oyuncu geri bildiriminden iki konu seç. Yeni signup cohort'larının D7 olgunlaşmadığını işaretle.
- **G27:** aynı creator'sız normal ranked oturumu; topluluğun bağımsız dönüşünü gözle.
- **G28:** son gerçek highlight, gelecek ayın sürdürülebilir saatleri.
- **G29:** içerik üretim maliyeti, aktivasyon ve retained oyuncu karşılaştırması; iyi görünen ama oyuncu getirmeyen formatı çıkar.
- **G30:** kısa public beta durum notu; ne çalışıyor, ne değişecek, sıradaki gerçek saat. Season 1 hazır değilse duyurma. D7 raporu son yeni aktivasyondan 192 saat sonrasına kadar açık kalır.

Önerilen üretim tavanı haftada yaklaşık 3–4 saat; ekip buna uyamıyorsa iki yerine bir iyi klip. Bu tahmini operasyon bütçesidir, ölçülmüş üretim süresi değil. Güncel ihtiyaç olmayan günler bilinçli olarak boş bırakılmıştır.

## 24. Ölçüm sözleşmesi ve karar panosu

Kaynak sahibi [VALIDATION_ROADMAP](docs/VALIDATION_ROADMAP.md). Bu bölüm oradaki olayları kullanır; yeni büyüme event'leri sessizce uygulamaya eklenmez. Henüz çalışan telemetry yok. Temel ölçüm ve consent/redaction doğrulaması yapılmadan bu panodaki metrikler ölçülmüş sayılmaz.

### Asıl başarı ve canonical devam kapıları

**North star:** bir UTC haftasında en az iki ayrı UTC günde geçerli ranked maç tamamlayan benzersiz oyuncu **sayısı**; yanında aynı haftanın aktif ranked oyuncuları içindeki **oranı**. Hem mutlak arz hem geri gelme görünür. Haftanın tanımını raporda sabitle; cohort D7 ile karıştırma. Solo, private ve ghost değerli deneyimlerdir ama bu sayıya girmez.

Canonical pilot devam hedefleri, pazar benchmark'ı değildir:

- En az 100 first-ranked ve D7'si olgun en az iki haftalık cohort.
- İlan edilen yoğun saatlerde tüm terminal queue ticket'larının ≥%80'i ≤30 saniyede eşleşir; tüm gün oranı aynı raporda verilir.
- Started maçların ≥%98'i teknik olarak normal tamamlanır; server-caused no-contest <%1; duplicate rating **0**.
- Ranked aktive kullanıcıların ≥%30'u ilk 7 günde en az iki farklı gün oynar; exact D7 ≥%20.
- İlk 10 maçın aşırı tek taraflı normal sonuç oranı ≤%20; tanım validation belgesindeki doğru karakter oranıdır. Düşük hız, provisional ve yerleşik gruplar ayrı görülür.
- 5–8 görev testinde ana akış açıklamasız tamamlanabilir; rapor/cheat incelemesi 24 saat hedefinde yürütülür, açık tekrar eden kritik exploit yoktur.
- Performans hedefleri referans cihazda input-to-paint p95 ≤16,7 ms, bağlı rakip ilerlemesi yaşı p95 ≤300 ms, normal sonuç p95 ≤2 saniye. Ölçülmeden reklam iddiası yapılmaz.

**Retained cohort saatleri:** t0 ilk geçerli ranked finalized server zamanıdır. D1 = `[t0+24 saat, t0+48 saat)`; D7 = `[t0+168 saat, t0+192 saat)`; D30 = `[t0+720 saat, t0+744 saat)`. Pencere içinde en az bir valid ranked gerekir. Henüz pencereyi kapatmayan oyuncu ilgili retention denominator'ına girmez. “İlk 7 günde herhangi bir gün geri geldi” = D7 değildir. UTC gün metriği gece yarısını geçerek şişebileceğinden exact D1/D7 ayrıca görünür.

### Acquisition funnel: pay/payda ve pencere

Attribution için öneri: izinli kaynak etiketiyle ölçülebilen ilk ziyaret cohort'u; first touch'tan 7 gün içindeki ilgili aksiyon. Aynı-browse guest→account ilişkilendirmesi yalnızca izinli sınırda; cross-device veya consent dışı kullanıcıları fingerprint ile tamamlama. Raporlarda bilinen kaynak, direct/unknown, consent coverage ve cihaz sınıfı ayrı. Yalnızca consenting örnekten çıkan oran bütün ziyaretçilerin dönüşümüymüş gibi sunulmaz.

- **Visitor → test start:** 7 günde en az bir `typing_started` olan ölçülebilir benzersiz ziyaretçi / ölçülebilir landing ziyaretçisi. **Visitor → completed test:** aynı payda, en az bir `typing_completed`; ikisini ayrı raporla. Solo sonucu client_reported; valid ranked değil.
- **Visitor → duel:** 7 günde ilk normal private veya valid ranked finalized'a ulaşan ölçülebilir ziyaretçi / aynı landing cohort'u. Private ve ranked payları ayrı; ghost hariç. `match_started` ve finalized arasındaki teknik kayıp ayrıca.
- **Duel → signup:** ilk normal private guest maçını tamamlayanlardan sonraki 7 günde hesabı tamamlayanlar / ilişkilendirilebilir yeni guest private completer'lar. Ranked zaten hesap gerektirdiği için ranked'i bu metriğe katma. Guest join sırasında signup gerektirmeyen akışı ölçüm için zorlaştırma.
- **Challenge recipient → match:** invite ömründe `challenge_opened` yapan ölçülebilir benzersiz alıcılardan o davetin normal private sonucuna ulaşanlar / aynı alıcılar. Host'un kendi açılışı hariç, consent/dedupe sınırı belirtilir. Ayrıca invite bazında “en az bir alıcı maçı tamamladı / paylaşılmış veya açılmış invite” raporu; kişi ve invite paydaları karıştırılmaz.
- **Signup → ranked:** `auth_completed` cohort'undan 7 günde ilk valid ranked finalization'a ulaşan benzersiz yeni hesap / yeni hesaplar. Queue hiç denemeyen, RTT/eligibility nedeniyle giremeyen ve teknik olarak tamamlayamayan ayrılır; hepsi edinimin gerçek sürtünmesidir.
- **Share rate:** invite için `challenge_share_clicked` olan benzersiz host / aynı dönemde invite oluşturan host. Ayrıca click / oluşturulan invite. Native share açılması gönderim kanıtı değildir. Genel sonuç kartı/profil paylaşım ölçümü için bugün canonical event yoksa bu metrik **ölçülemiyor** yazılır; instrumentation ayrı owner incelemesi ister.
- **Invites/user:** haftada oluşturulan challenge sayısı / o hafta aktif hesaplı kullanıcı; yanında invite oluşturanların payı ve yeni tamamlayan alıcı sayısı. Boş/expired invite'ları gizleme. “Viral coefficient” için gerçek yeni alıcının sonraki davet davranışı gerekir.
- **Matches/user:** haftalık valid ranked participant-completion sayısı / haftalık ranked completer. Tek maç iki kişinin katılımını üretir; “toplam match” sayısında iki kez sayılmaz. Private ayrı, ghost ayrı; ortalama yanında median/p90 ve farklı rakip sayısı.

### Queue, eşzamanlılık ve maliyet

- **30 saniyede eşleşme:** `matched && wait_ms <= 30000` terminal ticket / **tüm** terminal ticket. `canceled`, `timeout`, `unavailable`, `disconnect`, `ghost_switch` başarısız paydadan çıkarılmaz. İlan edilen saat ve all-day, skill/RTT cohort'ları ayrı.
- **Wait p50/p95:** matched-only ve tüm terminal ticket süreleri ayrı. Timeout/cancel süresi, o kişi beklemeye devam etse kaç saniyede eşleşirdi sorusunu cevaplamaz; sansürlü örnek olduğu yazılır. Ready reddi → start kaybı ayrıca.
- **CCU:** ops raporunda her dakika aktif match participant sayısı, queue'daki kişi, eligible aday, lobby/solo/ghost ayrı. Aynı kullanıcının birden fazla socket'i çift sayılmaz; bağlantı sayısı oyuncu sayısı değil. Ortalama, tepe ve p10/p50 yoğunluk; ilan edilmiş saat / tüm gün. “Online Discord üyesi” queue CCU'su değildir.
- **Coverage:** ilan edilen pencerenin kaç dakikasında ve hangi rating aralığında gerçek eşleşme kalitesi sağlandı? Tek 5 dakikalık peak tüm akşam canlılık iddiası oluşturmaz. Admission nedeniyle dışarıda kalan talep ayrıca görünür.
- **Acquisition CPA:** harcama / kaynak cohort'unda yeni first-ranked. **İki-gün CPA:** harcama / ilk 7 günde ikinci UTC günde dönen yeni ranked oyuncu. **D7 retained CPA:** harcama / olgun D7 geri dönen yeni oyuncu. Payda sıfırsa “tanımsız; 0 dönüş”, sıfır maliyetli başarı değil.
- **Tam maliyet:** medya + creator bedeli + araç/lisans + üretim/moderasyon zamanının açık saat-maliyet varsayımı. MVP'de ödeme yapan müşteri yok; bu değerler customer CAC, LTV, ROAS veya kârlılık kanıtı değil. Ücretli ürün gelince gerçek customer CAC ayrıca tanımlanır.

### Olay sahipliği, gizlilik ve karar sıklığı

Client: consent kapsamındaki `landing_viewed`, `typing_started/completed/abandoned`, `challenge_opened/share_clicked`, `match_result_viewed`, ghost özetleri. Server: auth completion, challenge create/join/expire, queue search terminali ve match lifecycle. Committed sonuç/rating olayı outbox'tan, event ID dedupe ile; UI ACK veya score ekranını durable sonuç sayma. Security/moderation kaydı growth analytics'e ham kanıt taşımaz.

Raw input/tuşlar, e-posta, IP, invite secret/full URL, özel oyuncu geçmişi ve session replay edinim ölçümüne gitmez. UTM/referrer allowlist; adı/kişiyi içermeyen campaign etiketleri. Optional analytics consent'i geri alındığında ilgili mapping/retention sözleşmesi korunur; yeni marketing pixel kurulumu bu dokümanın uygulanmış işi değildir. Creator'a kişisel oyuncu listesi değil küçük hücreleri ifşa etmeyen toplu sonuç verilir.

**Günlük ops:** teknik completion, no-contest, duplicate settlement, queue yield/timeout, kapasite ve inceleme backlog'u. **Haftalık growth:** first-ranked, iki-gün sayısı/oranı, olgun D1/D7, kaynak/skill/cihaz cohort'ları, CPA ve görüşme bulguları. **Aylık:** olgun D30, içerik/partner zamanı ve saat kapsamı. Olay sahibi ürün/engineering/ops rolleri henüz gerçek kişilere atanmadı; launch öncesi atanır. Bu doküman değişikliği için üretim telemetry/performance/UX testi uygulanabilir değil.

Karar sırası: **ölçüm doğru mu → oyun güvenilir mi → uygun rakip var mı → başka gün geliyor mu → hangi kanal bu kişileri getiriyor?** Queue kötüyken reklamı, retention kötüyken sezon/ödülü, attribution eksikken creator'ı suçlayarak sonuca atlama.

## Kaynak sınırları ve yenileme planı

**Kaynak yaklaşımı:** özellik/fiyat için resmî ürün, repo ve duyuru; reklam/SEO için platformun kendi dokümanı; topluluk için gerçek rules/invite/directory; şikâyet için tarihli kullanıcı thread'i. Her önemli gözlemin bağlantısı ilgili paragrafta. Keymash ve keybr gibi metin çekimi eksik yüzeyler tarayıcıda; creator aktivitesi doğrudan YouTube kanalında incelendi. Satın alma, ranked maç ve private Discord içerikleri test edilmedi.

**Tarih ayrımı:** 2021 Keymash ve TypeRacer kampanyaları yalnızca tarihsel dağıtım örneği; 2025 Nitro Type sezon duyurusu güncel sezon adı değildir. İndekslenmiş Discord sayaçlarının gecikmesi §3'te belirtilir. Reddit şikâyetleri temsilî örneklem değil; gerçek churn/MAU çıkarılamaz. Creator son video tarihleri, araştırma anındaki görünür listeye dayanır; başka platformlarda aktif olmadıkları iddia edilmez.

**Uygulama öncesi yeniden doğrulanacak beş şey:** topluluk kuralları ve admin kararı; creator son yayın/izleyici saati/teklif; ad hesabı minimumları ve targeting; keyword hacim/teklif verisi; pilotun gerçek RTT/kapasite/saat uygunluğu. Ücret veya kanal verisi bulunamazsa bilinmiyor yazılır; rakam uydurularak bütçe doldurulmaz.

**Hangi kanıt planı değiştirir?** Typist'ler güvenilir maça rağmen dönmüyor, fakat private arkadaşlar dönüyorsa edinim mesajını ve ürün hipotezini ayrı ele al. Queue yoğun ama düşük hız cohort'u terk ediyorsa daha geniş reklam çözüm değil. Paid cohort organiğe yakın kaliteyi sürdürüyor ve bütçe içindeyse tek kazananı büyüt. Yeni sezon/format ancak kendi ürün kapısından geçer.

**Teslim sınırı:** bu belge strateji ve deney tasarımıdır. Henüz müşteri görüşmesi, topluluk izni, creator anlaşması, canlı analytics, reklam harcaması, kampanya yayını, deployment veya acquisition sonucu yok. Mühendislikte sıradaki görev M0.1 olarak kalır; marketing'in şu anki bağımsız işi aday görüşmeleri için soru/brief hazırlığı ve izinli araştırma planıdır.

## 25. Nihai GTM planı — 15 karar

1. **Pazar:** typing testi ve rekabet boş bir kategori değil. TypeGG Duels gibi yeni girişler de var; “ilk ranked” savı kullanılmaz.
2. **Konumlandırma:** kısa, anlaşılır ürün teklifi: aynı metin, 30 saniye, ranked 1v1; solo ile başla, arkadaşınla dene.
3. **İlk kitle:** zaten typing yapan, İngilizce format ve pilot bağlantısı uygun masaüstü oyuncuları; sonra keyboard meraklıları. Öğrenci/productivity/genel gamer eşit öncelik değil.
4. **İlk beş edinim kanalı:** izinli typing Discord ortak oturumu; doğal arkadaş challenge'ı; aktif küçük creator/host; kuralları uygun Reddit demo/geri bildirim; gerçek UI + keyboard POV kısa video. SEO ve PH ilk beşte değil.
5. **İlk topluluklar:** Monkeytype/TypeRacer Discord admin'leriyle uygunluk araştırması, r/typing için koşullu izin, r/monkeytype için açık kural kontrolü. İkinci dalga Geekhack/QwertyKeys ve maker öğrenmesi için SideProject. Rakip sunucuda izinsiz tanıtım yok; r/MK dışarıda.
6. **Cold start:** tek queue, tek bölge pilotu, ortak saat, 20–30 teyitli katılımcı alımı; gerçek kapı ≥%80 ticket'ın ≤30 saniyede eşleşmesi. Ghost kayıtlı ve puansızdır.
7. **Growth loop:** önce private arkadaş daveti → normal maç → başka gün ranked; ikinci olarak gerçek sonuç/profil paylaşımı. Otomatik kart/referral motoru sonraya.
8. **Short-form:** haftada iki gerçek klip; yakın maç, hata ve keyboard POV. İnsan/ürün kanıtı, tek CTA; yalnızca elit WPM gösterisi değil.
9. **AI kreatif:** altyazı/düzenleme ve basit motion yardımcı olur. Higgsfield isteğe bağlı 1–2 saniyelik stilize hook; oyun/skor/testimonial üretmez, ilk bütçeyi almaz.
10. **Paid:** bugün $0; önce reliability, ölçüm ve olgun retention. Sonra bir host deneyi; ilk self-serve challenger Reddit desktop. Büyük Meta/TikTok yayılımı erken değil.
11. **İlk $100:** tek uygun host ve 45 dakikalık oturum; önerilen ≥10 aktivasyon, ≥3 ikinci-gün ve ≥2 D7; küçük örnek açıkça belirtilir. Uygun ücret/aday yoksa harcama yok.
12. **İlk 1.000:** ilk 100 pilot kapısını geçtikten sonra aynı havuza yeni partner cohort'ları; 900 ek aktivasyon için 18 × 50 yalnızca operasyon senaryosu. Kullanıcı sayısı kadar canlı saat ve skill kapsamı büyür.
13. **Season 1:** gerçekten seçilen/uygulanan post-MVP görünümü; sekiz hafta, tek ladder, Elo korunur; açılış play week. Bracket/store/reset vaat edilmez.
14. **İzlenecekler:** haftalık iki ayrı gün valid ranked oynayan kişi ve oranı; first-ranked; exact D1/D7/D30; tüm-ticket queue; teknik completion; segment retention; retained CPA.
15. **En büyük riskler:** boş havuz; haksız/dengesiz maç; yeni ürün diye eski özelliği satmak; topluluk spam'i; mobile video trafiğini desktop ranked sanmak; event katılımını kalıcı retention sanmak; ölçümsüz paid/season ile temel problemi örtmek.
