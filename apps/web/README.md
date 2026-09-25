# @competitive-typing/web

Tarayıcı uygulaması sınırı; henüz uygulama kodu yok. [M0.1](../../docs/ROADMAP.md)
Vite/React bootstrap'ı ekler; ürün ekranları M2 ile başlar.

İlk ihtiyaçta açılacak dizinler: `src/app` (router/providers), `src/features`
(practice, ranked, match, account vb.), `src/ui` (ortak bileşenler), `src/styles`
(tokenlar), `src/lib` (HTTP/Socket.IO/browser adapters), `src/locales/en`.
Ortak UI ayrı workspace paketi değildir. Unit/component testleri ilgili modül yanında.
Typing çekirdeği DOM'dan bağımsızdır; browser input/composition adapter'ı burada yaşar.
Server source, DB tipleri, auth provider tokenları ve private policy import edilmez.
