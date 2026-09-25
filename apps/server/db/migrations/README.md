# SQL migrations

Henüz migration veya üretim şeması yok. [M0.2 ve M3](../../../../docs/ROADMAP.md)
Drizzle migration akışını kurar. Drizzle'ın seçilen sürümünün journal/snapshot biçimini
koru; üretilen metadata ile SQL birlikte commit edilir. Elle SQL gerekiyorsa aynı runner'a kaydet.

Applied migration değiştirilmez; düzeltme yeni migration'dır. Runtime ve DDL rolleri ayrı.
Her değişiklik empty-DB ve önceki sürümden upgrade testinden geçer. Review'da FK/check/unique,
NULL semantiği, index/kilit süresi, grant/RLS ve rollback/forward-fix notu bulunur.
Production schema push yasaktır. Migration yalnızca release adımıdır; her server boot'unda koşmaz.
