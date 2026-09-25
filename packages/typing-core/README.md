# @competitive-typing/typing-core

M1'de saf TypeScript reducer, replay, C/A/I ve skor türetimi eklenecek. Henüz kod yok.
React/DOM/Fastify/DB/schema doğrulama kütüphanesi veya ambient clock bağımlılığı yok.
Metin, olay ve süre açık girdidir. RNG gerekiyorsa seed/enjekte edilen kaynak kullanılır.
Unit/property testleri `src/*.test.ts` yanında; ortak test vektörleri bu paketin `test/fixtures`
alanında. Web ve server aynı public entry point'i kullanır; üretim bağımlılığı test fixture'ı almaz.
[Ürün §3](../../competitive_typing_platform_project.md) skor tanımının tek sahibidir.
