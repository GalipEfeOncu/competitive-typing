# ADR 0004 — Server BFF, managed Auth ve tek origin hosting

- **Durum:** Kabul edildi; implementasyon henüz yok.
- **Tarih:** 25 Eylül 2026.
- **Bağlam:** Hesap/OTP/OAuth işletimi satın alınabilir; provider tokenlarını browser storage ile yaymak seçilen güven sınırına uymaz. Realtime sürekli süreç gerektirir.

## Karar

Supabase Auth Google + email OTP, Resend SMTP; özel opaque HttpOnly session BFF, server encrypted refresh. Render paid tek web service aynı origin HTTP/WSS/static; Supabase aynı bölge, Frankfurt RTT ile doğrulanacak ilk aday. Private app schema ve ayrı runtime/DDL role.

## Değerlendirilen alternatifler

Browser Supabase auth token storage, kendi parola sistemi, self-hosted identity ve SMS launch kapsamına uymaz. Vercel frontend + ayrı WSS backend üçüncü host katmanı; VPS ek işletim sorumluluğu; free sleeping servis ranked güvenilirliği sağlamaz.

## Sonuçlar

BFF refresh/CSRF/revoke kendi implementasyon/test işidir. Local dev proxy/cookie farkı explicit olmalı. SMTP ve gerçek provider smoke, backup/restore ve drain zorunlu. Auth sağlayıcı değişimi gerçek migration projesidir.

## Kaynak ve değişiklik disiplini

[Canonical belge](../ARCHITECTURE.md) §2, 9, 11–12. Bu ADR gerekçeyi saklar; sayısal/protokol
kurallarının ikinci kopyası değildir. Değişiklikte gerekçe/test kanıtı ve ilgili canonical
belge güncellenir; bu kayıt superseded olacaksa yeni ADR'ye bağlanır. Önceden kabul edilen
seçimler bu oturumda tekrar tasarlanmadı; 0001 paket sınırlarını somutlaştırır.
