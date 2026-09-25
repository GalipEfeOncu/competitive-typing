# ADR 0001 — Küçük workspace ve modüler monolit

- **Durum:** Kabul edildi; implementasyon henüz yok.
- **Tarih:** 25 Eylül 2026.
- **Bağlam:** Browser ve authoritative server aynı typing kurallarını ve public payload tiplerini kullanacak. Tek deploy sınırını çok servisli bir repo ile karıştırmamak gerekir.

## Karar

pnpm workspace: apps/web, apps/server, packages/typing-core ve packages/contracts. Shared UI web içinde; rating domain ve DB server içinde. Kaynak kod oluşana kadar manifestler private placeholder. Nx/Turborepo ve generic shared/utils paketi yok.

## Değerlendirilen alternatifler

Tek package basit başlar fakat browser/server secret ve core sınırını zayıflatır. Ayrı repolar ortak kuralları sürümleme maliyeti getirir. Ayrı UI/database/rating workspace paketleri bugün bağımsız tüketiciye sahip değildir.

## Sonuçlar

Dört küçük paket build/import sınır kontrolü gerektirir; M0.1 bunu kurar. Tek Fastify süreci deployment birimi olmaya devam eder. Yeni paket ancak somut bağımsız tüketici/sorumlulukla gerekçelendirilir.

## Kaynak ve değişiklik disiplini

[Canonical belge](../ARCHITECTURE.md) §15. Bu ADR gerekçeyi saklar; sayısal/protokol
kurallarının ikinci kopyası değildir. Değişiklikte gerekçe/test kanıtı ve ilgili canonical
belge güncellenir; bu kayıt superseded olacaksa yeni ADR'ye bağlanır. Önceden kabul edilen
seçimler bu oturumda tekrar tasarlanmadı; 0001 paket sınırlarını somutlaştırır.
