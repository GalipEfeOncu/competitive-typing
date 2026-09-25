# Güvenlik çalışma sözleşmesi

Henüz çalışan uygulama veya güvenlik denetimi yok. [ARCHITECTURE](docs/ARCHITECTURE.md)
§5–12 tehdit/veri kurallarının; [TESTING](docs/TESTING.md) saldırı ve failure kabulünün sahibidir.
Bu dosya uygulama ve bulgu yönetimi için kısa operasyon girişidir.

## Güven sınırları

Browser kontrol edilebilir: skor, zaman, identity, isTrusted ve input insanlık kanıtı değildir.
Her HTTP/WS komutunda runtime schema, principal, üyelik, phase/generation ve kaynak sınırı.
Cookie BFF + CSRF/Origin/nonce; provider refresh server'da encrypted; logout/deletion/ban
aktif socket'leri revoke eder. Public DTO allowlist; SQL parametreli; XSS-safe text render/CSP.
Private schema ve en az yetkili DB role; privileged provider key genel DB client olamaz.
Server state/ledger atomikliği ve owner fencing güvenlik sınırıdır, yalnız performans konusu değil.

## Değişiklik incelemesi

Auth/DB/realtime/admin/privacy değişikliğinde somut abuse case, ilgili test ve eksik kanıtı
change description'a yaz. Yeni bağımlılığın gerekçesi, resmi kaynağı, sürümü, lisansı ve
bilinen güvenlik sorunları kontrol edilir. Yalnız audit komutunun sıfır çıkması denetim değildir.
Secret, raw input/email/cookie/invite URL/log/IP test artifact'ine de sızamaz; sentetik veri kullan.
`.env.example` gerçek değer içermez; Vite'a entire process.env verilmez. Browser bundle'da
server adapter/key/private detector eşiği kontrolü yapılır. Anti-cheat anomaly tek başına ban değil.

## Bulgu bildirme ve müdahale

Public launch öncesi maintainer özel güvenlik bildirim kanalını açıp README/SECURITY'ye
kesin adresi eklemeli (M9). Şu anda doğrulanmış security email/bug bounty/SLA yoktur;
adres uydurma. Secret veya çalışır exploit'i public issue'ya koyma; maintainer ile özel kanalı
netleştir. Özel kanalda minimum repro, etkilenen commit/ruleset ve redacted impact paylaş.

Credential sızıntısında ilgili anahtarı revoke/rotate et, oturum etkisini incele, log/artifact
sızıntı yolunu temizle ve olay/audit kaydı tut. Git'ten silmek anahtarı geçersiz kılmaz.
Rating/data integrity incident'ında rated admission kapat, evidence erişimini sınırla,
ledger/compensation ve restore runbook'unu izle. Exploit'in giderilmesi için kullanıcıya
sessiz rating reseti veya kalıcı suçlama uygulanmaz.

Retention, consent, ghost withdrawal, export/deletion ve backup tombstone uygulaması MVP
işidir. Sayısal TTL'leri burada çoğaltma; ARCHITECTURE §11 tek kaynak. Hedef pazar/yaş ve
hukuki dayanak M9 kapısıdır; bu belge hukuki uygunluk sertifikası değildir.
