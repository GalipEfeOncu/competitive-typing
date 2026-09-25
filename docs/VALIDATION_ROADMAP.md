# Doğrulama, analytics, riskler ve uygulama sırası

**25 Eylül 2026 · Revizyon 1 · Gelecekte yapılacak işlerin kabul planıdır.**

Bu oturum uygulama geliştirme, load test, gerçek kullanıcı testi veya deployment yapmaz. Aşağıdaki eşikler başlangıç kararlarıdır; sektör benchmark'ı veya kanıtlanmış ürün başarısı değildir.

## 1. Başarı sorusu ve kanıt sınırı

**Kullanıcı, yakın seviyeli canlı rakip ve anlaşılır rank nedeniyle farklı günlerde geri dönüyor mu?**

North-star: haftada en az **2 farklı günde** geçerli ranked maç tamamlayan kullanıcı sayısı ve aktif ranked oyuncular içindeki oranı. Maç sayısı, aynı rakiple uzun seri veya event günü trafiği tek başına yeterli değildir.

Üç ayrı şeyi ayır:

- Ürün kullanılabildi mi? Giriş, input, bağlantı ve sonuç güvenilirliği.
- Uygun rakip bulundu mu? Queue kalitesi, süre ve maç dengesi.
- Kullanıcı yeniden rekabet istedi mi? Bağımsız günlerde geri dönüş ve söylediği gerekçe.

Sadece ranked sevenleri solo kullanıcılarla karşılaştırmak rank'ın nedensel etkisini ispatlamaz; kendiliğinden seçilim vardır. MVP olumlu ilişkiyi ve kullanıcının algısını doğrular. Causal iddia için daha sonra önceden tasarlanmış deney gerekir; düşük nüfusu iki ayrı queue'ya bölme.

## 2. Event sözleşmesi

Her event: `event_id`, `schema_version`, `name`, `occurred_at`, güvenilir `received_at`, `source=client|server`, purpose/consent, kısa ömürlü session id, varsa pseudonymous account id, ruleset/mode, build ve policy version. Yalnızca olay için gereken alanlar eklenir; tüm global context her olaya doldurulmaz.

Client olayları davranış niyetidir, finansal/rekabet gerçeği değildir. Match, puan ve queue sonuçlarının kaynağı server outbox/operasyon kayıtlarıdır. `event_id` tekilleştirilir; server olayları commit'ten sonra at-least-once gelir, consumer retry aynı sayımı artırmaz. Client timestamp süre analizi için tek otorite olamaz.

Email, yazılan metin, ham key stream, invite secret, tam URL/query, başka kişinin kimliği ve IP product analytics alanı değildir. Acquisition kaynağı allowlist'li UTM/referrer domain; hassas URL parametreleri tutulmaz. Guest→account ilişkilendirme yalnızca kullanıcının izin verdiği aynı tarayıcı akışı; fingerprint/cross-device tahmin yok. Consent yoksa opsiyonel funnel olaylarının kapsama kaybı raporlanır; bunu tüm kullanıcıların davranışı gibi sunma.

### MVP event kataloğu

**Acquisition / onboarding:**

- `landing_viewed` (client, izin kapsamına göre): kaynak sınıfı ve landing variant.
- `auth_started` (client), `auth_completed` (server): sağlayıcı, süre/başarı; OTP veya email değeri yok.
- `typing_started` (client): duration/ruleset, local/server_observed ayrımı.
- `typing_completed` / `typing_abandoned`: summary ve completion reason; client_reported sonuç açıkça işaretli.
- İlk test/ilk duel/ilk ranked flags ayrı client bool'u değil, ilgili tamamlanmalardan türetilir.

**Queue / maç:**

- `queue_joined` (server): ticket id, policy, region, provisional state, RTT bucket, rating bucket.
- `queue_search_ended` (server): ticket id, wait_ms, `matched|canceled|timeout|unavailable|disconnect|ghost_switch`; canceled ve timeout'lar örneklemden düşmez.
- `match_offered`, `match_ready_response`, `match_started` (server): match id, ready/no-show, ruleset ve aggregate skill/ping farkı.
- `match_connection_changed` (server): reason, downtime bucket; düşük hacimli state değişimi, heartbeat başına event değil.
- `match_finalized` (outbox): outcome, validation status, ranked/private, duration ve teknik error reason.
- `match_result_viewed` (client): kesin sonucu gerçekten gördü mü? Finalize ile aynı değildir.
- `new_opponent_requested` (server), `rematch_requested` / `rematch_accepted` (server): kaynak match, puansız mode. Kendi başına kabul edilmiş rövanş completed maç sayılmaz.
- `ghost_started` / `ghost_completed` (client): ghost id, tekrar deneme; ranked tamamlanması değildir.

**Davet / güven:**

- `challenge_created` (server), `challenge_share_clicked` (client), `challenge_opened` (client), `challenge_joined` (server), `challenge_expired` (server).
- Paylaş butonuna basmak gönderildiğini kanıtlamaz; share API sonucu varsa ayrı outcome, alıcının açması asıl acquisition kanıtıdır. Link görüntüleme botları completed participant olarak sayılmaz.
- `report_submitted` ve `moderation_resolved` ayrı erişimli güvenlik kayıtları; public growth event'lerine kanıt eklenmez.
- `settings_changed` yalnızca gerçekten gerekli özellik kullanımında, tercihin hassas değerini göndermeden. Açık metin settings araması MVP'de yok.

### İlgili özellik çıkınca eklenecekler

Post-MVP: `adaptive_recommendation_shown`, `adaptive_session_started/completed`, `control_probe_completed`, `friend_request_sent/accepted`, `season_participation`, `race_joined/completed`. Sosyal büyümede davet edilen kişi gerçekten maç tamamladı mı ve başka gün döndü mü ölçülür.

Growth: `store_item_viewed`, `checkout_started`, `purchase_succeeded`, `refund_issued`, `subscription_canceled`. Satın alma başarısı yalnızca doğrulanmış ödeme webhook'u ve unique provider event id'den gelir. Bugün bu event'lerin veya tabloların boş implementasyonu yapılmaz.

## 3. Funnel ve metrik tanımları

### İlk değer

Landing → typing_started → typing_completed; time-to-first-input ayrı, tüm test süresiyle karışmaz. Consent kapsamı, cihaz ve client_reported güven düzeyi raporda görünür. Guest davet akışı ayrı: challenge_opened → joined → private match started → finalized → account created.

### Rekabet aktivasyonu

Auth complete → first queue_joined → first match_started → first valid ranked finalized → second valid ranked on another UTC day. İlk duel metriği private/ranked olarak ayrılır; ghost bu denominator'a girmez. Teknik iptaller aktivasyon başarısı değildir ama kullanıcı deneyimi başarısızlığı olarak raporlanır.

### Queue kalitesi

- Match yield: matched biten ticket / tüm terminal ticket.
- Median/p95 bekleme yalnızca matched için **ve** tüm terminal ticket için ayrı verilir. Timeout/cancel sağ sansürlü beklemeyi gösterir; genel bekleme başarısı sanılmaz.
- 30/60 saniye içinde match oranı, cancel/timeout, ready no-show, RTT bucket ve provisional/yerleşik ayrımı.
- Denge: pre-match model expected win dağılımı, score gap, rakip çeşitliliği ve tekrar çift oranı. Model beklentisini gerçek fair match diye etiketleme.
- Yeni oyuncular ilk 3/10/20 maçta kaç tek taraflı sonuç görüyor? Aşırı fark için başlangıç işareti `max(C)/max(1,min(C)) > 1.5`, AFK/forfeit ayrı. Bu ölçüt kusursuz eğlence ölçümü değildir.

### Tamamlama ve rövanş

Teknik completion: başladıktan sonra normal win/draw sonucu üretilen maç / started maç; forfeit, no-contest ve pending ayrıca görünür. User completion ile server terminal-state üretme oranı ayrı; bir forfeit'i "başarıyla tamamlandı" diye UX hesabına ekleme.

Rövanş talebi: istek / iki oyuncuya da kesin sonuç sunulan uygun maç. Kabul: accepted / requested. Gerçek rövanş: completed private rematch / accepted. Ranked loop için asıl metrik: yeni rakiple rated maç başlatma ve farklı gün dönüş; puansız rövanş bunların yerine kullanılmaz.

### Retention

Ranked cohort başlangıcı kullanıcının ilk geçerli finalized ranked sonucunun server zamanı `t0`:

- D1: `[t0+24saat, t0+48saat)` içinde en az bir geçerli ranked sonuç.
- D7: `[t0+168saat, t0+192saat)`.
- D30: `[t0+720saat, t0+744saat)`.

Takvim günü değil bu kayan pencere tanımı kullanılır. "7 gün içinde geri dönme" ayrı ölçüdür ve D7 diye adlandırılmaz. Weekly two-day metric için UTC takvim günleri kullanılır; iki tanımın farkı açık etiketlenir. Olgunlaşmamış cohort D7/D30 denominator'ına girmez.

All-mode retention da raporlanır ama ranked ile karıştırılmaz. Buluşma saati katılımcıları, dışarıdan organik gelenler, yeni/geri dönenler ve ping dışlanmışlar ayrılır. Küçük örneklemde n, pay/payda ve güven aralığı verilir; sadece yüzde yok.

### Gelecekte gelişim ve gelir

Adaptive usage: recommendation→start→completion, next-week voluntary reuse ve eş zorluk kontrolündeki değişim. Kullanıcı hangi zayıflığı çalıştığına göre seçildiğinden regression-to-mean etkisine dikkat; bir seans farkı nedensel iyileşme diye pazarlanmaz.

Conversion: ödeme başarılı hesap / ödeme için uygun aktif ücretsiz hesap; iade ve subscription churn ayrı. ARPU gelir tanımıyla, ARPPU ödeyen kullanıcıyla; tek bir paylaşıma basma viral katsayı değildir. Invite growth: davetten gelen ve ilk gerçek maçı bitiren yeni kullanıcı / paylaşan aktif kullanıcı; spam click temizliği ve attribution kaybı belirtilir.

## 4. Kapalı alfa ve devam/düzelt/dur kararı

Önerilen pilot: farklı hız seviyelerinden kullanıcılar, tek bölge ve iki ilan edilmiş yoğun saat dilimi. En az 100 ilk-ranked tamamlaması ve D7'si olgunlaşmış en az iki haftalık cohort hedeflenir. 100 kullanıcı nedensellik veya yüksek kesinlik garantisi değildir; güven aralığı genişse pilot uzatılır. Bekleme verisi yetersizse ürün tezi reddedilmiş sayılmaz, önce erişilebilir rakip arzı sağlanır.

Önceden kaydedilecek **karar hedefleri**:

- Input/okunabilirlikten dolayı sürekli bırakma yok; 5–8 kullanıcı görev testinde ana akışlar açıklamasız tamamlanabiliyor.
- İlan edilmiş yoğun saatlerde queue ticket'larının ≥%80'i 30 saniye içinde match buluyor; aynı raporda tüm gün oranı da gösteriliyor.
- Started maçların ≥%98'i teknik olarak normal tamamlanıyor; server no-contest <%1; duplicate rating 0.
- Ranked aktive kullanıcıların ≥%30'u ilk 7 günde en az iki farklı günde ranked oynuyor; D7 exact-day hedefi ≥%20. Bunlar pazar benchmark'ı değil başlangıç devam sinyalleri.
- İlk 10 maçta aşırı tek taraflı normal sonuçların oranı ≤%20 hedefi; provisional/yerleşik karşılaştırması ve düşük hız cohort'u ayrı incelenir.
- Rapor/cheat incelemesi 24 saat hedefinde yürütülebiliyor; açık tekrar eden kritik exploit yok.

**Devam:** teknik güvenilirlik + rakip arzı + dönüş birlikte olumlu; oyuncular görüşmede tekrar geliş nedenini rekabet/rank ile ilişkilendiriyor. Sonra tek bir Post-MVP dilimi seç.

**Düzelt:** solo iyi ama queue bozuksa önce yoğun saat, newcomer/latency ve davet edinimi; store veya sezon ekleme. Queue iyi ama retention düşükse kural/maç uzunluğu/sonuç algısını incele. Stop-on-error zayıf deneyim yaratıyorsa public ladder öncesi ruleset'i değiştir ve yeniden test et.

**Dur veya yön değiştir:** yeterli adil maç deneyimi ve güvenilirlik sağlandığı halde iki yinelemede farklı gün dönüş zayıf; yeni feature sayısıyla tezi gizleme. Kullanıcıların asıl isteği solo/adaptif olabilir; bu ayrı ürün kararıdır.

## 5. Başlıca ürün riskleri

**P1 — Rakip arzı:** tek format bile düşük nüfusta boş kalabilir; pair cap erişimi daha da azaltır. Sahibi ürün/operasyon. Sinyal: all-day yield, peak/off-peak farkı, timeout; karşılık: gerçek buluşma saatleri, davet, dürüst ghost. Başarı kriterini yalnızca etkinlik saatine saklama.

**P1 — Hızın belirleyiciliği ve rank tavanı:** 100 WPM kişi 120 WPM kişiyi az yenebilir; format monotonlaşabilir. Sinyal: skill-gap terk ve plateau cohort retention; karşılık: daha iyi eşleşme ve ücretsiz pratik. Gizli WPM handicap ile başarı illüzyonu yaratma.

**P1 — Yeni oyuncunun ezilmesi/smurf:** Elo'nun ilk öğrenmesi sınırlı; WPM ısınması manipüle edilebilir. Sinyal: first-3/10 maç farkları; karşılık: provisional K, örnekli güvenlik tercihi, inceleme. Başarı kanıtı yoksa calibrated seeding/Glicko shadow evaluation; para ile avantaj yok.

**P1 — Rekabete güvensizlik:** yanlış forfeit, deadline tuş kaybı veya cheat algısı rank'ı değersizleştirebilir. Sinyal: sonuç itirazı, delayed drops, yüksek RTT retention; karşılık: açık kurallar, dar latency alanı ve geri alınabilir kayıtlı yaptırım.

**P2 — Scope ve solo beklentisi:** çok ayar isteyen kitle minimum solo'yu yetersiz bulabilir. Hedef kullanıcıların gerçekten kullandığı ayarları araştır; bütün Monkeytype parity'si hedefleme.

**P2 — Monetizasyonun sosyal değeri yok:** kozmetiği görecek topluluk yoksa mağaza geliri oluşmayabilir. Sinyal: profil/davet tekrarı ve gerçek ödeme denemesi; karşılık: satış işini büyümeden yapmamak. Ücretli training ile free çekirdeği zayıflatma.

**P2 — Global sözün yerel gerçeklikle çatışması:** dil ve tek bölge erişimi daraltır. Latency nedeniyle reddedilen kullanıcı oranını ülke tahmini yerine ölç; doğru iletişim ve sonraki bölge yatırımına kanıt üret.

## 6. Başlıca teknik riskler

**P0 — Çift rating/yarım settlement:** timeout retry ve eşzamanlı finalize. Sahibi backend; unique ledger + tek transaction + row-lock sırası, fault injection. Tek örnek public ranked'i kapatma sebebidir.

**P0 — Yetkisiz input veya oda erişimi:** user_id spoof, eski socket, cross-site WS, duplicate seq. Sahibi backend/security; origin/session/phase/member/generation kontrolü, adversarial protokol testi.

**P1 — Browser insanlık kanıtı yok:** autoplayer kendi geçerli akışını üretir. Sahibi integrity; replay + anomaly + review, sınırlı leaderboard iddiası. Kalıcı ban yalnızca ham WPM eşiğiyle verilmez.

**P1 — Receive deadline adaleti:** son input kaybı RTT/batching'e göre değişebilir. Sahibi realtime; ölçülmüş boundary sapması, uygunluk tavanı, gerekiyorsa launch erteleme. Eşit countdown görüntüsü eşit skor kabulünü tek başına kanıtlamaz.

**P1 — Owner crash/deploy split-brain:** RAM state kaybı veya iki süreç iki queue açabilir. Sahibi operations; lease/fencing/drain/recovery no-contest. Redis adapter tek başına çözüm değildir.

**P1 — Event-loop ve logging yükü:** her tuşa render/DB/log/fanout gecikmeyi büyütür. Sahibi frontend/realtime; frame/batch, bounded buffer, tracing sample ve yük testi. Load test olmadan socket kapasitesi sözü yok.

**P1 — Yanlış fraud flag ve review birikimi:** hızlı oyuncu veya jitter hile sanılabilir. Sahibi moderation; düşük güvenli sinyallerde sonucu bloke etmeme, 24 saat hedef/timeout, itiraz ve false-positive sayımı.

**P1 — Kanıt/privacy/backup çatışması:** raw metin veya silinen hesap yedekten geri gelebilir. Sahibi data/operations; minimum capture, TTL, tombstone reapply, export/erasure testleri.

**P2 — Provider outage ve e-posta:** login/DB kesilince reconnect/result etkilenir. Sahibi operations; yerel solo, queue fail-closed, durable result retry, SMTP health ve restore drill.

**P2 — Input/IME/erişilebilirlik:** keydown mapping farklı klavye ve composition'da yanlışlık yapabilir. Sahibi frontend; ASCII launch sınırı, beforeinput/composition ve browser matris testleri. Donanım türünü UA'dan kesin bilme iddiası yok.

Bu sahipler rol tanımıdır; bugün atanmış ekip varmış gibi kabul edilmez. Kapalı alfa başlamadan gerçek sorumlular belirlenir.

## 7. Uygulama bağımlılık sırası

Bu bölüm fazların gerekçeli özetidir. Ayrıntılı task ID, dependency graph, test/telemetry/UX
kabulü [ROADMAP](ROADMAP.md) içinde; gerçek ilerleme [STATUS](STATUS.md) içindedir.

Aşağıdaki adımlar bu oturumda başlatılmadı. Her adım, öncekinin kabul çıktısı üzerine kurulur; kapsam bitmeden başka faza sıçranmaz.

### 0 — Karar tabanı ve alfa hazırlığı

Çıktı: bu belgeler, lisansı doğrulanmış 1K havuz, hedef pilot grubu/bölge, incident-review sorumlusu ve ölçüm amaçları. İlk açık işler corpus seçimi, actual RTT ve browser matrix'tir. Giriş: ürün/kurallar incelemesi. Kabul: lisans belirsizliği ve çelişkili skor tanımı yok.

### 1 — Saf typing ve skor çekirdeği

Bağımlılık: 0. Aynı insert/delete akışını client/server'da üreten deterministic reducer; sayaç/formül/input normalization sözleşmeleri.

Kabul: 300 karakter/30s=120 WPM, hatayı silmenin C/A/I etkisi, boş test, sil-yaz, kelime sınırı, uzun hata suffix'i; property tests ile prefix/sayaç invariants. Bu adım auth/DB/UI katalogları gerektirmez.

### 2 — Solo dikey dilim ve temel UX

Bağımlılık: 1. 15/30/60 solo, yerel sonuç, focus/klavye/tema, üç browser ve küçük ekran davranışı.

Kabul: gerçek kullanıcı ana akışı, input-to-paint ölçümü, font/layout shift ve zoom; gerçek ekran görüntüleri. Henüz ranked/ödeme/sosyal yok. Gereken UI design system yalnızca kullanılan bileşenlerden çıkar.

### 3 — Kimlik, veri ve operasyon tabanı

Bağımlılık: 1; UI bağlama için 2. PostgreSQL migrations/constraints, Auth BFF/SMTP, sessions, minimum profile, rate limits, RLS/grant sınırı, secrets, logs, backup/restore, temel admin yetkisi.

Kabul: diğer kullanıcının verisine erişememe, revoked session WS reddi, gerçek SMTP login, export/deletion akışı, restore provası. Migration uygulanması build başarısından ayrı doğrulanır.

### 4 — Puansız gerçek iki oyunculu maç

Bağımlılık: 1–3. Challenge invite, ready, content ack, ortak countdown, WSS input/ack, server progress/result.

Kabul: iki ayrı gerçek tarayıcı hesabı/guest, aynı metin, 30s skor, normal retry ve late input. Client'ın gönderdiği winner/WPM sonucu değiştiremez. Yalnızca mock socket testi yeterli değildir.

### 5 — Failure ve integrity sertleştirme

Bağımlılık: 4. Reconnect/generation, multi-tab, owner lease/deploy drain, bounded input, evidence TTL, reports/review.

Kabul: 1s/4s/6s network kaybı, refresh, eski socket, seq duplicate/gap/çelişki, both-disconnect, DB down, crash before/after commit, deploy overlap, finish sınırı. 20/100/200 ms RTT ve jitter farklılıklarında aynı scripted input'un skor farkı kaydedilir. Rate-limit testleri input doğruluğu testlerinden ayrıdır.

### 6 — Elo, queue ve settlement

Bağımlılık: 5. Offline politika simülasyonu, provisional, tek rated queue, pair cap, rating transaction ve leaderboard eligibility.

Kabul: bu paketteki sayısal örnekler, iki tarafın atomik değişmesi, 100 kez finalize retry ile tek ledger etkisi, eşzamanlı ticket ve cap reservation testleri. 2/10/50 kişilik sentetik queue koşulları ve newcomers/inactivity simülasyonu. Simülasyon çıktısı varsayımlarıyla raporlanır.

### 7 — Sonuç, geçmiş ve düşük nüfus fallback'i

Bağımlılık: 6. Tek puan UX, yeni rakip, puansız rövanş, izinli ghost, truthful queue state, minimum profile/leaderboard.

Kabul: ghost/live ayrımı, cap nedeniyle çıkış, boş leaderboard nedeni, review sonucu ve correction görünümü. Raporlamanın kullanıcı akışı çalışır; kapalı alfa ghost izinli veriyle açılır.

### 8 — Ölçüm ve kapasite kapısı

Bağımlılık: 3–7. Event/outbox/aggregation, funnel SQL, consent kapsama raporu, alerts/admission cap. Analytics sözleşmeleri 0'dan bilinir; emit'ler ilgili dilimle eklenir, bütün ölçüm en sona bırakılmaz.

Kabul: duplicate event sayımı yok; matched-only bekleme yanlılığı yok; test kullanıcıları rapordan ayrılır. Önce 100 concurrent connection /50 running match, sonra seçilen node'un sınırını bulana kadar kontrollü ramp; 60 dakikalık soak. Başlangıç üretim cap'i ölçülen sürdürülebilir sınırın %50'si veya daha düşük. Bu sayılar hedef load senaryosudur, bugün ölçülen kapasite değildir.

### 9 — Kapalı alfa ve launch kararı

Bağımlılık: 8. Gerçek farklı hız/ping grupları; iki haftalık olgunlaşan cohort; UX görüşmeleri; cheat/incident tatbikatı.

Kabul: bölüm 4'teki devam/düzelt/dur değerlendirmesi ve açık sınırlar. Public launch öncesi ruleset/rozet aralıkları dondurulur, review kapasitesi doğrulanır, yedek/mahremiyet/SMTP/corpus koşulları tamamlanır. App dağıtımı, backend/DB migration ve gerçek iki tarayıcı E2E ayrı onay kanıtlarıdır.

### 10 — Tek bir doğrulanmış genişleme

Bağımlılık: 9 olumlu. Kullanım nedenine göre adaptif pratik veya arkadaş/davet iyileştirmesi ya da basit sezon görünümü. Yük ve talep varsa küçük puansız race. Store, multi-region ve turnuva kendi talep/operasyon kapılarını bekler.

## 8. Geliştirmeye aktarılacak kabul değişmezleri

Aynı metin/aynı ruleset; tek aktif rated katılım; server-owned clock/score; bir settlement etkisi; duplicate/old socket input yok; start öncesi cancel puansız; offline input backfill yok; server failure kullanıcıya otomatik loss değil; private/ghost/rövanş rank vermez; daha hızlı rakibi block ile kaçırma yok; raw input analytics sağlayıcısına gitmez; hiçbir ücret gameplay avantajı vermez.

Bu invariants ve riskler çözülmeden daha fazla özellik kalite açığını kapatmaz.
