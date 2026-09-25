# ADR 0002 — React SPA ve taşınabilir typing motoru

- **Durum:** Kabul edildi; implementasyon henüz yok.
- **Tarih:** 25 Eylül 2026.
- **Bağlam:** Private maç uygulaması düşük input gecikmesi ister; public SEO yüzeyi dar, realtime için sürekli sunucu zaten gerekir.

## Karar

Mevcut React/Vite/TypeScript, Router/Query, CSS Modules/custom properties ve seçili Radix kararı korunur. Core saf TS; yerel typing external store/frame ile UI adapter üzerinden işler. Query HTTP cache içindir. English launch localization keys korunur.

## Değerlendirilen alternatifler

Next.js SSR/RSC bu MVP için ilave cache/runtime modeli getirir. Svelte/Vue/Solid mümkün ama stack yeniden seçimini gerektiren kanıt yok. Global Redux/store per-key state ve büyük UI kit ihtiyaç dışıdır.

## Sonuçlar

Public /, rules/help HTML ve gerçek 404 ayrı sorumluluktur. Browser input/IME/a11y adapter testleri zorunlu; React veya Radix tek başına performans/uygunluk garantisi vermez.

## Kaynak ve değişiklik disiplini

[Canonical belge](../ARCHITECTURE.md) §2. Bu ADR gerekçeyi saklar; sayısal/protokol
kurallarının ikinci kopyası değildir. Değişiklikte gerekçe/test kanıtı ve ilgili canonical
belge güncellenir; bu kayıt superseded olacaksa yeni ADR'ye bağlanır. Önceden kabul edilen
seçimler bu oturumda tekrar tasarlanmadı; 0001 paket sınırlarını somutlaştırır.
