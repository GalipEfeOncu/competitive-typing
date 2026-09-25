# ADR 0005 — Tek Elo ve sürümlü rekabet politikası

- **Durum:** Kabul edildi; implementasyon henüz yok.
- **Tarih:** 25 Eylül 2026.
- **Bağlam:** Ürün aynı 30s English 1K formatında adil rakip ve anlaşılır rank sunar; bağımsız hız merdiveni/RP veya performans bonusu puanın anlamını bozar.

## Karar

Tek kesirli Elo, başlangıç 1200, ilk 10 rated sonuç K64 sonra K32; kazanan doğru önek C ile belirlenir. Tek public ranked queue; private/rematch/ghost unrated. Eşikler, pair cap ve eligibility RANKING_MATCHMAKING belgesinin sahibidir; burada ikinci constants listesi yok.

## Değerlendirilen alternatifler

Glicko-2 belirsizlik modelleyebilir ancak predictive avantajı gösterilmedi. TrueSkill launch 1v1 için fazla kapsamlı. WPM seeding/hybrid performance veya ayrı RP reddedildi. Sezon reseti MVP ihtiyacı değil.

## Sonuçlar

Mixed K rating toplamını korumaz; drift izlenir. Düşük nüfus pair cap yüzünden ranked bulamayabilir; sessiz istisna yapılmaz. Değişiklik önce offline değerlendirme, versioned policy, public açıklama ve gerekiyorsa ayrı ruleset/ladder migration ister.

## Kaynak ve değişiklik disiplini

[Canonical belge](../RANKING_MATCHMAKING.md) §1–8. Bu ADR gerekçeyi saklar; sayısal/protokol
kurallarının ikinci kopyası değildir. Değişiklikte gerekçe/test kanıtı ve ilgili canonical
belge güncellenir; bu kayıt superseded olacaksa yeni ADR'ye bağlanır. Önceden kabul edilen
seçimler bu oturumda tekrar tasarlanmadı; 0001 paket sınırlarını somutlaştırır.
