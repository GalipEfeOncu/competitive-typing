# Architecture Decision Records

Yalnız tekrar sorgulanma veya yanlışlıkla geri alınma riski yüksek kararlar kaydedilir.
Kabul edilmiş tasarım, uygulanmış/test edilmiş sistem demek değildir. Canonical belgeler
ayrıntı ve sabitlerin sahibi; ADR bağlam/alternatif/sonuçların sahibidir.

- [0001 — Küçük workspace ve modüler monolit](0001-workspace-boundaries.md)
- [0002 — React SPA ve taşınabilir typing motoru](0002-web-and-portable-engine.md)
- [0003 — Tek owner, Socket.IO ve PostgreSQL settlement](0003-authoritative-runtime.md)
- [0004 — Server BFF, managed Auth ve tek origin hosting](0004-auth-and-deployment.md)
- [0005 — Tek Elo ve sürümlü rekabet politikası](0005-rating-and-policy.md)
- [0006 — Birinci taraf ölçüm ve sınırlı evidence](0006-telemetry-and-data-minimization.md)

Yeni karar: context, decision, alternatives considered, consequences, status ve tarih.
Kozmetik dosya taşıma için ADR gerekmez; stack, trust/owner sınırı, rating veya release
modelini değiştiren iş gerekçeli ADR ve ilgili acceptance testlerini günceller.
