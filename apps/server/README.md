# @competitive-typing/server

Tek Fastify/Socket.IO süreci; henüz uygulama kodu yok. [M0](../../docs/ROADMAP.md)
bootstrap yapar; auth/realtime/domain implementasyonu sonraki milestone'lardadır.

İhtiyaç oldukça: `src/app.ts` (test edilebilir app factory), `src/main.ts` (listen/lifecycle),
`src/config` (tek env validation), `src/http`, `src/realtime` (transport adapters),
`src/modules/{identity,content,solo,matchmaking,match-runtime,results,ratings,moderation,analytics,jobs}`,
`src/db` (Drizzle schema/repositories/transaction), `db/migrations` (SQL), `db/seeds` (local only).
Bu yollar şimdi boş servisler halinde üretilmez. Modülde saf domain ve I/O adapter'ları
ayrılır; HTTP/socket handler'ı rating veya SQL transaction politikasının sahibi değildir.

Rating ve matchmaking saf fonksiyonları server modülünün `domain` bölümünde kalır;
DB/clock/socket açmadan unit test edilir. Realtime, aynı domain servislerini çağırır.
Settlement tek transaction sahibidir; modüller bağımsız commit açıp iki oyuncuyu ayıramaz.
Domain testleri colocated; DB/integration/realtime testleri kök `tests` altında.
