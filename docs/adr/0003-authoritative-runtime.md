# ADR 0003 — Tek owner, Socket.IO ve PostgreSQL settlement

- **Durum:** Kabul edildi; implementasyon henüz yok.
- **Tarih:** 25 Eylül 2026.
- **Bağlam:** Client skoruna güvenilemez. Ağ retry/crash ve deploy overlap iki rating etkisi ya da yanlış owner yaratabilir; başlangıç yükü dağıtık sistem gerekçesi değildir.

## Karar

Node 24/Fastify 5/Socket.IO 4 WebSocket-only, tek owner ve DB lease/epoch. pg/Drizzle + Supabase PostgreSQL; result/rating/outbox tek transaction. Score server receive window, monotonic clock; resume seq/generation fence; ACK durable sonuç değildir. Redis/microservices yok.

## Değerlendirilen alternatifler

Native ws ack/reconnect protokolünün daha fazlasını elde gerektirir. Supabase Realtime/managed fanout scoring otoritesi sağlamaz. Go/Phoenix/DO alternatifleri kanıt olmadan ikinci runtime/transaction modeli getirir. Firestore bu SQL tutarlılık ihtiyacını ortadan kaldırmaz.

## Sonuçlar

Process RAM kaybında eksik kanıtlı maç no-contest; zero-downtime match migration yok. Load ve fault testleri zorunlu. Database constraints/ledger immutable, corrections append-only. Scaling kararı sadece ölçülmüş darboğazla açılır.

## Kaynak ve değişiklik disiplini

[Canonical belge](../ARCHITECTURE.md) §4–10. Bu ADR gerekçeyi saklar; sayısal/protokol
kurallarının ikinci kopyası değildir. Değişiklikte gerekçe/test kanıtı ve ilgili canonical
belge güncellenir; bu kayıt superseded olacaksa yeni ADR'ye bağlanır. Önceden kabul edilen
seçimler bu oturumda tekrar tasarlanmadı; 0001 paket sınırlarını somutlaştırır.
