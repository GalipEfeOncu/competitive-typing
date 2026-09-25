# @competitive-typing/contracts

M0.1 araç zinciri; ilgili özellik geldiğinde sürümlü TypeBox/JSON Schema HTTP/Socket.IO
payload ve response şemaları, bu şemalardan türeyen TS tipleri eklenecek. Henüz kod yok.
Aynı bilgiyi ayrı elle yazılmış interface ve runtime schema halinde çoğaltma.

Yalnızca public wire sözleşmeleri. DB row, provider token, cookie, private detector eşiği,
server config veya SQL burada bulunmaz. `typing-core` public tipine type-only bağ kurulabilir;
core tersine contracts'a bağlanamaz. Tarayıcıda kullanılabilir ESM çıktısı ve server build'inin
import edebildiği export map M0.1'de doğrulanır. Enum/schema değişikliklerinde protokol
uyumluluğu ve eski istemci davranışı test edilir. Tüm gelecekteki endpoint'leri şimdi üretme.
