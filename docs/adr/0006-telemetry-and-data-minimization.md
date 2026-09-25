# ADR 0006 — Birinci taraf ölçüm ve sınırlı evidence

- **Durum:** Kabul edildi; implementasyon henüz yok.
- **Tarih:** 25 Eylül 2026.
- **Bağlam:** Ürün tezi gerçek ranked geri dönüş ile sınanmalı; ham tuş kaydı analytics değildir. Opsiyonel davranış verisi, competitive truth ve integrity evidence farklıdır.

## Karar

Allowlist first-party product endpoint + PostgreSQL aggregate/versiyonlu SQL; server gerçekleri committed outbox, consumer dedupe. Sentry/Pino scrubbed operasyon görünürlüğü; replay SDK kapalı. Bounded evidence/TTL, ayrı consent ve withdraw/export/deletion işleri. TTL sahibi ARCHITECTURE §11.

## Değerlendirilen alternatifler

PostHog yönetilen cohort/experiment ihtiyacı büyürse yeniden değerlendirilebilir; self-hosted analytics veya özel dashboard framework launch işi değil. Tuş başına event ve süresiz raw replay hem hot-path hem mahremiyet maliyeti yaratır.

## Sonuçlar

Consent kapsam kaybı raporda belirtilir; client completion doğrulanmış match sayılmaz. Event emitter ilgili milestone ile gelir; M8 sadece toplu doğrulama. Privacy restore/tombstone ve ghost withdrawal testleri data modelinin parçasıdır.

## Kaynak ve değişiklik disiplini

[Canonical belge](../VALIDATION_ROADMAP.md) §1–4. Bu ADR gerekçeyi saklar; sayısal/protokol
kurallarının ikinci kopyası değildir. Değişiklikte gerekçe/test kanıtı ve ilgili canonical
belge güncellenir; bu kayıt superseded olacaksa yeni ADR'ye bağlanır. Önceden kabul edilen
seçimler bu oturumda tekrar tasarlanmadı; 0001 paket sınırlarını somutlaştırır.
