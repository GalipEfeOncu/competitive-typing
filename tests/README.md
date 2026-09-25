# Cross-boundary tests

Henüz ürün testi yok. Tier, komut, fixture ve acceptance matrisi [TESTING](../docs/TESTING.md)
içindedir. İlgili milestone geldiğinde `integration`, `db`, `realtime`, `e2e`, `load`,
`fixtures` ve `helpers` açılır. Unit/property testleri kaynak modülün yanında kalır.

Testler isolated sentetik principal, port ve disposable DB kullanır. Real-user verisi,
production URL ve auth secret commit edilmez. Test harness production DB resetleyemez.
