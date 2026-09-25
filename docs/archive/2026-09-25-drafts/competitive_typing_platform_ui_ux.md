# Competitive Typing Platform — UI/UX Architecture Document

> **Amaç:** Competitive Typing Platform için yüksek ölçeklenebilirliğe sahip, sade görünen ancak derin fonksiyonlar sunabilen profesyonel bir UI/UX mimarisi oluşturmak.  
> **Bu doküman ürün özellik dokümanının tamamlayıcısıdır.**  
> Ürün dokümanı “ne yapılacağını”, bu doküman ise “kullanıcıya nasıl sunulacağını” tanımlar.

---

# 1. UX Vizyonu

Bu ürün çok fazla özelliğe sahip olacaktır:

- Solo speed test
- Ranked
- Duels
- Multiplayer races
- Adaptive practice
- Friends
- Social systems
- Leaderboards
- Seasons
- Events
- Profile customization
- Cosmetics
- Store
- VIP / Pro
- Advanced analytics
- Settings
- Tournaments
- Achievements

Bu nedenle en büyük UI riski:

> **Özellik bolluğunu kullanıcıya özellik karmaşası olarak yansıtmak.**

Ana hedef:

> **Basit giriş, derin sistem.**

Yeni kullanıcı siteyi açtığında ne yapabileceğini birkaç saniye içinde anlamalıdır.

Power user ise ayarlar, detaylı istatistikler, rekabet sistemleri ve sosyal özelliklere derinlemesine ulaşabilmelidir.

---

# 2. Temel UX İlkeleri

## 2.1. Progressive Disclosure

Her özellik ilk ekranda gösterilmemelidir.

Kullanıcıya yalnızca o anda ihtiyaç duyabileceği seçenekler gösterilmelidir.

Örnek:

Ranked ekranında:

- Rank
- Queue
- Match history
- Season info

gösterilebilir.

Ancak aynı ekranda:

- Tema
- Font
- Language
- Cursor
- Audio
- Privacy
- Store

gibi ilgisiz seçenekler gösterilmemelidir.

---

## 2.2. Contextual UI

Arayüz, kullanıcının bulunduğu moda göre değişmelidir.

Örneğin:

### Solo test ekranı
- typing area
- timer
- live WPM
- restart
- test-specific settings

### Ranked lobby
- rank
- queue
- expected wait
- season progress

### Result screen
- performance
- RP/MMR change
- rematch
- analytics

Her ekran yalnızca kendi bağlamına odaklanmalıdır.

---

## 2.3. One Primary Action

Her ana ekranda mümkünse yalnızca bir baskın primary CTA olmalıdır.

Örnek:

### Ranked
> **Find Match**

### Adaptive Practice
> **Train My Weaknesses**

### Duel
> **Start Duel**

### Solo
> **Start Test**

Bu yaklaşım karar yorgunluğunu azaltır.

---

## 2.4. Advanced Options Hidden by Default

Gelişmiş kullanıcı ayarları mümkün olmalıdır ancak başlangıç deneyimine müdahale etmemelidir.

Örnek:

```text
Test Mode
30 Seconds

Advanced
- punctuation
- numbers
- quote source
- word pool
- input restrictions
```

---

## 2.5. Game UI + Productivity UI Dengesi

Ürün:

- ne tamamen oyun gibi,
- ne de tamamen dashboard gibi

hissetmelidir.

Hedef:

> Modern game launcher + Discord + high-end SaaS + Monkeytype sadeliği.

---

# 3. Bilgi Mimarisi

Ana özellikler önce birkaç büyük kategoriye ayrılmalıdır.

Önerilen ana kategori sistemi:

```text
PLAY
PRACTICE
COMPETE
SOCIAL
PROFILE
STORE
SETTINGS
```

Ancak tüm kategoriler doğrudan navigation'da görünmek zorunda değildir.

---

# 4. Desktop Global Navigation

Desktop için önerilen temel yapı:

## Sol Sidebar

```text
[Logo]

Play
Practice

Ranked
Duels
Races
Events

Leaderboard

Social

Store

────────

Profile
Settings
```

Alternatif olarak bazı öğeler gruplanabilir.

Örneğin:

```text
PLAY
  Quick Play
  Practice

COMPETE
  Ranked
  Duels
  Races
  Events

COMMUNITY
  Leaderboards
  Social

ACCOUNT
  Profile
  Store
  Settings
```

Ancak sidebar aşırı uzun olmamalıdır.

---

# 5. Sidebar Tasarım Kuralları

Sidebar:

- Desktop'ta persistent olabilir.
- Compact / expanded mod destekleyebilir.
- Icon + text kullanılabilir.
- Aktif sayfa net biçimde belirtilmelidir.
- Alt menüler yalnızca gerektiğinde açılmalıdır.
- Navigation ayarlarla karıştırılmamalıdır.

## Sidebar'a konmaması gerekenler

- Theme switcher
- Language dropdown
- Sound toggle
- Quick cosmetic options
- Random configuration buttons

Bunlar settings içinde yer almalıdır.

---

# 6. Top Bar

Top bar yalnızca global durum bilgileri için kullanılmalıdır.

Örneğin:

Sol:
- Breadcrumb / page name

Sağ:
- notifications
- queue status
- friends online
- profile avatar

Opsiyonel:
- currency balance
- season timer

Top bar ayar çöplüğü haline gelmemelidir.

---

# 7. Home / Dashboard

Home ekranının amacı:

> Kullanıcıyı hızlı biçimde aksiyona geçirmek.

Home, platformdaki her özelliği listelememelidir.

## Önerilen yapı

### Hero Area

```text
Welcome back, Galip

[ QUICK TEST ]
[ PLAY RANKED ]
[ DUEL A FRIEND ]
```

### Secondary
- Continue Adaptive Practice
- Current Rank
- Daily Challenge
- Upcoming Event

### Compact widgets
- recent performance
- friends online
- season progress

---

# 8. Home'da Olmaması Gerekenler

- Tüm test seçenekleri
- Full leaderboard
- Full match history
- Store catalogue
- Settings
- Achievement library
- Detailed analytics
- Event archive

Home yalnızca portal görevi görmelidir.

---

# 9. Play / Quick Play

Quick Play tek yerde hızlı seçim sunabilir.

Örnek:

```text
What do you want to do?

[ Solo Test ]
[ Quick Duel ]
[ Ranked ]
[ Multiplayer Race ]
```

Bu sayfa özellikle yeni kullanıcı için kullanılabilir.

Power user sidebar üzerinden doğrudan istediği moda geçebilir.

---

# 10. Solo Test UI

Solo test ekranı ürünün en sade ekranlarından biri olmalıdır.

## Default görünüm

Üst:
- mode
- duration / words
- compact settings

Orta:
- typing text
- caret
- progress

Alt:
- minimal stat line

Örneğin:

```text
105 WPM     98% ACC     19s
```

---

# 11. Solo Test Quick Settings

Typing sırasında erişilebilecek hızlı ayarlar sınırlı olmalıdır.

Örneğin:

- Test duration
- Word count
- Word pool
- Punctuation
- Numbers

Ancak:

- theme
- font family
- language
- notification
- privacy

gibi genel tercihler burada bulunmamalıdır.

---

# 12. Full Test Settings

Daha fazla seçenek isteyen kullanıcı:

> Advanced Test Settings

açabilir.

Burası drawer veya modal olabilir.

Örnek:

```text
CONTENT
- Language
- Word list
- Quotes
- Numbers
- Punctuation

BEHAVIOR
- Stop on error
- Confidence mode
- Restart behavior

DISPLAY
- Live WPM
- Live accuracy
- Progress style
```

Bu ayarlar yine de global settings'ten ayrılmalıdır.

---

# 13. Typing Focus Mode

Test başladığında arayüz mümkün olduğunca sadeleşmelidir.

Sidebar:
- küçülebilir
- tamamen gizlenebilir

Top bar:
- minimize olabilir

Amaç:

> Yazı alanı tüm dikkati almalı.

Escape veya mouse movement ile kontroller geri getirilebilir.

---

# 14. Result Screen — Solo

Sonuç ekranı iki katmanlı olmalıdır.

## Üst bölüm — Instant Summary

```text
132 WPM
98.7% Accuracy
91% Consistency
```

### CTA
- Retry
- New Test
- Analyze

---

## Alt bölüm — Detailed Analysis

Tabs:

```text
Overview
Speed
Errors
Weaknesses
History
```

VIP kullanıcıya bazı gelişmiş tab'ler açılabilir.

---

# 15. Adaptive Practice UI

Adaptive Practice ayrı ana sayfa olmalıdır.

Ana mesaj:

> **Train what slows you down.**

## Ana kart

```text
Your biggest weaknesses

J
JU
TION

[ TRAIN MY WEAKNESSES ]
```

Altında:

- recommended session
- recent improvement
- weak words
- weakness heatmap

---

# 16. Adaptive Practice Session

Adaptive session başlamadan kullanıcıya kısa özet:

```text
Today's focus

J / JU combinations
Estimated time: 5 min
Difficulty: Medium
```

Ardından normal typing arayüzü açılır.

Bu modun UI'ı solo testten tamamen farklı olmamalıdır.

---

# 17. Ranked Hub

Ranked platformun en önemli ekranlarından biri olacaktır.

## Üst bölüm

```text
DIAMOND II
1,842 MMR
Top 8.4%

Season 3 • 23 days remaining
```

## Ana CTA

> **FIND MATCH**

---

# 18. Ranked Hub Secondary Content

Queue butonunun altında:

- recent ranked matches
- rank progress
- win/loss
- season peak
- leaderboard position

Sağ panel varsa:
- friends online
- current event
- queue population

---

# 19. Queue UI

Queue başladıktan sonra kullanıcı ne olduğunu net görmelidir.

Örnek:

```text
Finding opponent...

Estimated wait: 12 sec

Searching:
MMR ±100
Skill bracket: Advanced
Region: Auto
```

Queue süresi uzadıkça genişleyen kriter gösterilebilir.

---

# 20. Match Found Screen

Net, hızlı ve dramatik.

```text
MATCH FOUND

GALIP
Diamond II
126 Avg WPM

VS

NEO
Diamond III
131 Avg WPM
```

Sonrasında:

```text
3
2
1
TYPE
```

---

# 21. Duel Match UI

Ana odak yazı alanı.

Yan veya üst panelde:

- opponent name
- rank
- progress
- WPM
- accuracy

gösterilebilir.

Rakibin her tuşu canlı gösterilmemeli; yalnızca performans/progress sinyali yeterli olabilir.

---

# 22. Match Result Screen

Result screen oyuncuya üç şeyi hemen anlatmalıdır:

1. Kazandım mı?
2. Ne kadar iyi oynadım?
3. Rankım ne kadar değişti?

Örnek:

```text
VICTORY

137 WPM
99.1% ACC

+22 RP

Diamond II
72 → 94 RP
```

Sonra:

```text
[ REMATCH ]
[ NEW OPPONENT ]
[ ANALYZE ]
```

---

# 23. Rank Change Animation

Ranked sistemde animasyon önemlidir.

Ancak abartılı olmamalıdır.

Örnek:

- progress bar fill
- +RP animation
- division promotion
- rank-up cinematic

Rank-up anları özel hissettirilmelidir.

---

# 24. Duel Hub

Casual ve arkadaş düelloları Ranked'dan ayrı tutulmalıdır.

Ana seçenekler:

```text
Quick Duel
Challenge Friend
Create Private Room
Join Code
```

Bu şekilde ranked ve casual zihinsel olarak ayrılır.

---

# 25. Challenge Link UX

Challenge oluşturmak mümkün olduğunca hızlı olmalıdır.

Örnek:

```text
Create Challenge

30 sec
English 1K
Standard

[ CREATE LINK ]
```

Ardından:

```text
Challenge ready

site.com/d/82KJ2

[ COPY LINK ]
[ SHARE ]
```

---

# 26. Multiplayer Races

Races ekranı:

- upcoming
- live
- public rooms
- private rooms

şeklinde ayrılabilir.

Örnek:

```text
LIVE NOW

50 Player Sprint
32 / 50
Starts in 01:12

[ JOIN ]
```

---

# 27. Race Lobby

Lobby içinde:

- player list
- race format
- start timer
- chat
- room settings

bulunabilir.

Private room host'una daha fazla kontrol verilebilir.

---

# 28. Scheduled Events UI

Events ana navigation kategorilerinden biri olabilir.

Tabs:

```text
Featured
Upcoming
Live
Past
```

Event kartı:

```text
FRIDAY NIGHT RUSH

Global Sprint Event
Starts in 03:42:18

Rewards:
Event XP
Exclusive Badge

[ VIEW EVENT ]
```

---

# 29. Leaderboards

Leaderboards büyük veri yığını gibi görünmemelidir.

Tabs:

```text
Ranked
Speed
Accuracy
Season
Friends
Country
```

Filtreler:

- region
- language
- season
- mode

---

# 30. Leaderboard Row

Her row:

- rank
- avatar
- username
- country
- main stat
- badge / rank

gösterebilir.

Kullanıcı kendi satırını kolayca bulabilmelidir.

---

# 31. Social Hub

Social ekranı ayrı olmalıdır.

Tabs:

```text
Friends
Requests
Recent Players
Blocked
```

İleride:

```text
Clubs
Parties
```

eklenebilir.

---

# 32. Friends Sidebar / Drawer

Arkadaşlar sistemi tüm UI'ı ele geçirmemelidir.

Desktop'ta sağdan açılan compact friends drawer kullanılabilir.

İçerik:

- Online
- In Match
- Offline

Quick actions:

- Invite
- Challenge
- Message
- Profile

---

# 33. User Profile

Profil kullanıcı kimliğinin merkezi olmalıdır.

Üst:

- avatar
- username
- title
- country
- rank
- seasonal badge

---

# 34. Profile Sections

Tabs:

```text
Overview
Stats
Matches
Achievements
Seasons
Cosmetics
```

Owner kendi profilinde:

```text
Edit Profile
Customize
```

görebilir.

---

# 35. Profile Overview

Gösterilebilecek ana bilgiler:

- current rank
- peak rank
- average WPM
- PB
- win rate
- favorite mode
- recent achievements

Detaylı istatistik ayrı Stats tabında tutulmalıdır.

---

# 36. Profile Customization

Profil özelleştirme ayrı editor görünümünde yapılmalıdır.

Örnek layout:

Sol:
- item categories

Orta:
- live profile preview

Sağ:
- selected item info

Categories:

```text
Avatar
Frame
Banner
Background
Title
Name Effect
Badges
Theme
```

---

# 37. Store

Store ayrı bir navigation alanı olmalıdır.

Ana kategoriler:

```text
Featured
Profile
Avatars
Frames
Banners
Effects
Themes
```

Store ile ranked ekranının karışmaması önemlidir.

---

# 38. Store Item UX

Item preview mümkün olduğunca gerçek context içinde gösterilmelidir.

Örneğin profile frame:

> Kullanıcı profil kartı üzerinde preview.

Name effect:

> Chat / leaderboard örneğinde preview.

---

# 39. VIP / Pro Page

VIP avantajları tek sayfada açıklanmalıdır.

Örnek gruplar:

### Analytics
### Customization
### Social
### Convenience

Competitive avantaj veriliyormuş izlenimi yaratılmamalıdır.

Açık şekilde:

> Pro does not affect rank, matchmaking or competitive performance.

yazılabilir.

---

# 40. Settings — Genel Yaklaşım

Settings bu ürün için küçük bir modal olmamalıdır.

> **Dedicated full-page settings architecture kullanılmalıdır.**

Discord benzeri yapı uygun olabilir.

---

# 41. Settings Layout

Desktop:

Sol:
- category navigation

Orta:
- settings content

Sağ:
- optional preview/help

Örnek:

```text
ACCOUNT
Account
Profile
Security

PREFERENCES
Typing
Gameplay
Appearance
Audio
Language & Region

SYSTEM
Notifications
Privacy
Accessibility
Keybinds
Data
```

---

# 42. Settings Categories

## Account
- Email
- Password
- Connected accounts
- Delete account
- Sessions

## Profile
- Username
- Display name
- Country
- Bio
- Profile visibility

## Typing
- default test duration
- default word list
- punctuation default
- numbers default
- caret behavior
- error behavior
- restart behavior
- confidence mode

## Gameplay
- queue preferences
- match display
- opponent stats visibility
- race animations

## Appearance
- theme
- light/dark
- typography
- text size
- interface density
- motion preferences

## Audio
- master volume
- typing sounds
- UI sounds
- match sounds
- rank-up sounds

## Language & Region
- UI language
- typing language defaults
- region
- timezone
- measurement / formatting

## Notifications
- friend requests
- match invites
- event reminders
- season ending
- rank promotions

## Privacy
- profile visibility
- match history visibility
- online status
- friend request permissions
- analytics/data preferences

## Accessibility
- reduced motion
- high contrast
- larger text
- color blind presets
- screen reader support

## Keybinds
- restart
- pause
- navigation
- focus mode
- quick queue

## Data
- export data
- clear local preferences
- analytics history
- account history

---

# 43. Settings Search

Settings ekranında search olmalıdır.

Örnek:

> Search settings

"theme" yazıldığında Appearance bölümünü,
"sound" yazıldığında Audio bölümünü bulabilmelidir.

Bu özellik çok seçenekli sistemlerde değerlidir.

---

# 44. Settings Quick Access Kuralı

Bazı ayarlar context içinde shortcut ile açılabilir.

Örneğin typing ekranında:

```text
⚙ Test Settings
```

Ancak bu:

> full settings ekranının yerine geçmemeli.

Quick settings yalnızca ilgili ayarların küçük bir subset'i olmalıdır.

---

# 45. Mobile Navigation

Mobile'da desktop sidebar birebir kullanılmamalıdır.

Öneri:

Bottom navigation:

```text
Home
Play
Ranked
Social
Profile
```

Daha fazla:

```text
Menu
```

içine:
- Practice
- Races
- Leaderboard
- Events
- Store
- Settings

konabilir.

---

# 46. Mobile Typing Experience

Mobil kullanıcılar fiziksel klavye kullanmayabilir.

Bu nedenle ürün stratejik olarak:

- desktop-first competitive
- mobile companion

olabilir.

Mobilde:

- profile
- leaderboard
- events
- friends
- stats
- store

çok iyi çalışabilir.

Competitive typing mobile desteği ayrıca ürün kararı olarak değerlendirilebilir.

---

# 47. Responsive Breakpoints

Kabaca:

- Mobile
- Tablet
- Laptop
- Desktop
- Wide desktop

Her breakpoint'te yalnızca layout değişmemeli; bilgi yoğunluğu da değişebilmelidir.

---

# 48. Empty States

Boş ekranlar profesyonel tasarlanmalıdır.

Örnek:

### No friends

> No friends yet.  
> Challenge someone and add them after the match.

[ Create Challenge ]

---

# 49. Loading States

Skeleton UI tercih edilebilir.

Ranked queue gibi durumlarda normal loader yerine anlamlı durum bilgisi gösterilmelidir.

---

# 50. Error States

Özellikle real-time sistem için önemli:

- connection lost
- opponent disconnected
- match server unavailable
- queue timeout

Kullanıcı ne olduğunu net anlamalıdır.

---

# 51. Notifications

Toast sistemi:

- kısa
- non-blocking
- action-aware

Örnek:

> Neo accepted your friend request.

> Match invite received.

> Season ends in 2 days.

---

# 52. Modal Kullanım Kuralları

Modal yalnızca geçici ve küçük kararlar için kullanılmalıdır.

Uygun:
- confirm
- invite
- join code
- delete confirmation

Uygun değil:
- full settings
- detailed analytics
- store
- profile
- season information

---

# 53. Drawer Kullanım Kuralları

Drawer:

- friends
- notifications
- quick settings
- match details

gibi secondary content için uygun olabilir.

---

# 54. Tabs Kullanım Kuralları

Tabs aynı bilgi alanının alt kategorileri için kullanılmalıdır.

Örnek:
- Profile Stats / Matches / Seasons

Tabs ana navigation yerine kullanılmamalıdır.

---

# 55. Breadcrumb Kullanımı

Deep admin-style breadcrumb çoğu kullanıcı ekranında gerekmez.

Ancak settings veya store gibi katmanlı yerlerde kullanılabilir.

Örnek:

```text
Settings / Typing / Input Behavior
```

---

# 56. Search

Global search ileride eklenebilir.

Arayabilecekleri:

- users
- friends
- events
- tournaments

Ancak MVP'de gerekli olmayabilir.

---

# 57. Design System

Tüm ürün ortak component library kullanmalıdır.

Temel componentler:

- Button
- IconButton
- Input
- Select
- Toggle
- Slider
- Tabs
- Card
- Modal
- Drawer
- Tooltip
- Toast
- Badge
- Avatar
- Progress bar
- Rank badge
- Stat block
- Leaderboard row
- Match card
- Event card

---

# 58. Button Hierarchy

Her ekranda button önem seviyesi net olmalıdır.

### Primary
Ana aksiyon.

### Secondary
Alternatif.

### Tertiary
Düşük öncelik.

### Destructive
Sil / çık / block gibi işlemler.

Aynı ekranda 4 farklı primary button olmamalıdır.

---

# 59. Color Philosophy

Rank renkleri ile genel UI renkleri karışmamalıdır.

Örneğin:

Gold rank = gold  
Diamond = diamond tone

Ancak bütün CTA sistemi rank renklerine göre değişmemelidir.

Ana accent rengi tutarlı olmalıdır.

---

# 60. Dark / Light Themes

Her iki tema desteklenebilir.

Ancak varsayılan competitive ürün hissi için dark mode uygun olabilir.

Light mode ayrı theme olarak tasarlanmalı, sadece renkleri ters çevirmek şeklinde yapılmamalıdır.

---

# 61. Typography

Typing ürününde typography kritik.

İki farklı kullanım:

### UI font
Navigation, button, label.

### Typing font
Test metni için optimize edilmiş monospaced veya yüksek okunabilirlikte font.

Kullanıcı typing fontunu ayarlayabilir.

---

# 62. Spacing

UI component yoğunluğu standardize edilmelidir.

Design token yaklaşımı:

```text
4
8
12
16
24
32
48
64
```

gibi bir spacing scale kullanılabilir.

---

# 63. Border Radius

Her component farklı radius kullanmamalıdır.

Örnek sistem:

- small
- medium
- large

---

# 64. Motion Design

Animasyonlar özellikle şu anlarda kullanılabilir:

- queue found
- match start
- victory
- rank progress
- rank up
- achievement unlock

Typing sırasında animasyon minimum olmalıdır.

---

# 65. Reduced Motion

Accessibility için reduced motion ayarı desteklenmelidir.

---

# 66. Sound Design

Sound opsiyonel ancak ürün hissine katkı sağlar.

Örnek:
- queue found
- countdown
- result
- rank-up

Typing key sounds kullanıcı tercihine bırakılmalıdır.

---

# 67. Data Visualization

Analytics ekranlarında grafikler okunabilir olmalıdır.

Aynı grafikte gereksiz 10 seri gösterilmemelidir.

Önerilen grafikler:

- WPM over time
- Accuracy over time
- Character weakness heatmap
- Speed distribution
- Match history
- Rank history

---

# 68. Analytics Information Hierarchy

Önce kullanıcıya:

> Ne oldu?

Sonra:

> Neden oldu?

Sonra:

> Ne yapmalıyım?

gösterilmeli.

Örnek:

```text
You lost 8 WPM on average from JU combinations.

[ Practice JU ]
```

Bu, sadece ham grafik göstermekten daha değerlidir.

---

# 69. Onboarding

Onboarding uzun tutorial olmamalıdır.

İlk ziyaret:

```text
How do you want to start?

[ Test My Speed ]
[ Play a Duel ]
```

Kullanıcı daha sonra hesap oluşturmaya yönlendirilebilir.

---

# 70. Account Creation Flow

Guest kullanıcı bir maç/test sonrası:

> Save your stats and start climbing ranked.

CTA:
> Create Account

Bu yaklaşım landing page'de kayıt zorunluluğundan daha iyi olabilir.

---

# 71. Ranked Onboarding

İlk ranked girişinde kısa açıklama:

```text
Ranked matches pair you with players near your skill.

Your rank is based on competitive results, not only raw typing speed.
```

Ardından:
- placement info
- rules
- Find Match

---

# 72. Season UX

Season sayfası:

- season name
- remaining time
- current rank
- season peak
- rewards
- leaderboard
- challenges

---

# 73. Season End UX

Season bittiğinde kullanıcıya:

```text
Season 3 Complete

Peak Rank:
Diamond I

Final Rank:
Diamond II

Global:
#12,482
```

ve reward ekranı gösterilebilir.

---

# 74. Achievement UX

Achievement spam yapılmamalıdır.

Unlock:
- toast
- küçük animation

Achievement library profile altında tutulmalıdır.

---

# 75. Daily Challenge UX

Home'da compact card olabilir.

Örnek:

```text
Daily Challenge
Win 3 ranked matches

2 / 3
```

Daily görevler ana experience'i gölgelememelidir.

---

# 76. VIP UX

Free kullanıcıya her yerde kilit ikonları gösterilmemelidir.

Bu kötü ve ucuz hissettirir.

VIP upsell yalnızca ilgili bağlamlarda gösterilmelidir.

Örnek:

Analytics içinde:

> Advanced Character Heatmap — Pro

Store veya sonuç ekranında doğal upsell yapılabilir.

---

# 77. Monetization UX İlkesi

> Kullanıcıya sürekli satış yapılmamalı.

Store ayrı yerde bulunmalıdır.

Competitive gameplay ekranlarında agresif monetizasyon bulunmamalıdır.

---

# 78. UX Anti-Patterns

Bu projede kaçınılması gereken başlıca hatalar:

### 1. Her şeyi homepage'e koymak
### 2. Sağ üste 15 ikon sıkıştırmak
### 3. Tüm settings'i küçük modalda toplamak
### 4. Aynı sayfada çok fazla primary CTA
### 5. Ranked ve casual sistemleri karıştırmak
### 6. Test sırasında gereksiz UI göstermek
### 7. Her özelliğe ayrı navigation item eklemek
### 8. VIP kilitleriyle ekranı doldurmak
### 9. Mobilde desktop UI'ı küçültüp kullanmak
### 10. Tutarsız componentler

---

# 79. Page Priority Model

Her ekran tasarlanırken şu sıra kullanılmalı:

1. Kullanıcı neden bu sayfada?
2. Ana görevi ne?
3. Bu görevi yapmak için hangi bilgi lazım?
4. İkincil bilgiler neler?
5. Hangi şeyler başka sayfaya taşınabilir?

Bu sorular cevaplanmadan component eklenmemelidir.

---

# 80. User Flow — New User

```text
Landing
   ↓
Quick Test
   ↓
Result
   ↓
Try Duel
   ↓
Guest Duel
   ↓
Result
   ↓
Create Account
   ↓
Profile Created
   ↓
Ranked Introduction
```

---

# 81. User Flow — Returning Ranked Player

```text
Home
   ↓
Ranked
   ↓
Find Match
   ↓
Match
   ↓
Result
   ↓
Rematch / New Opponent
```

Bu akış mümkün olduğunca az click içermelidir.

---

# 82. User Flow — Practice

```text
Home
   ↓
Practice
   ↓
Weakness Summary
   ↓
Train My Weaknesses
   ↓
Session
   ↓
Result
   ↓
Improvement
```

---

# 83. User Flow — Friend Challenge

```text
Profile / Social
   ↓
Challenge
   ↓
Select Settings
   ↓
Invite Sent
   ↓
Lobby
   ↓
Match
   ↓
Result
```

---

# 84. User Flow — Challenge Link Guest

```text
Open Challenge URL
   ↓
See Challenger
   ↓
Play
   ↓
Result
   ↓
Rematch
   ↓
Create Account
```

Bu flow acquisition açısından çok önemlidir.

---

# 85. User Flow — Store

```text
Store
   ↓
Browse
   ↓
Preview
   ↓
Purchase
   ↓
Equip
   ↓
Profile Updated
```

---

# 86. Desktop Layout Standard

Genel desktop layout:

```text
┌───────────┬───────────────────────────────┬──────────────┐
│ Sidebar   │ Main Content                  │ Context      │
│           │                               │ Panel        │
│           │                               │ optional     │
└───────────┴───────────────────────────────┴──────────────┘
```

Sağ panel her sayfada zorunlu değildir.

---

# 87. Content Width

Her ekran full-width kullanılmamalıdır.

Özellikle settings, profile ve analytics sayfalarında maksimum içerik genişliği belirlenmelidir.

Typing ekranı ise daha geniş kullanılabilir.

---

# 88. Landing Page

Public landing site uygulama UI'ından ayrılabilir.

Landing:

- Product proposition
- competitive typing demo
- ranked
- adaptive practice
- multiplayer
- social proof
- CTA

Ana CTA:

> Start Typing

---

# 89. App Shell

Kullanıcı uygulamaya geçtiğinde landing navigation kaybolmalıdır.

App shell:
- sidebar
- topbar
- content

kullanılmalıdır.

Marketing ve application navigation birbirine karıştırılmamalıdır.

---

# 90. UI State Management

Her component şu state'ler için tasarlanmalıdır:

- default
- hover
- active
- disabled
- loading
- error
- empty

Design system bunları önceden tanımlamalıdır.

---

# 91. Real-Time State UX

Matchmaking ve yarışlarda bağlantı durumları görünür olmalıdır.

Örnek:

```text
Connected
Reconnecting...
Connection lost
```

Ancak normal şartlarda kullanıcıyı teknik detaylarla boğmamak gerekir.

---

# 92. Match Integrity UI

Anti-cheat sistemi kullanıcıyı sürekli şüpheli hissettirmemelidir.

Ancak:
- report
- replay review
- suspicious result

gibi durumlar için net UX gerekir.

---

# 93. Confirmation UX

Destructive işlemler:

- account delete
- friend block
- purchase
- ranked abandon

confirmation gerektirebilir.

Basit navigation değişimleri confirmation istememelidir.

---

# 94. Keyboard-First UX

Bu ürünün kullanıcıları klavye odaklıdır.

Bu nedenle UI mümkün olduğunca keyboard navigable olmalıdır.

Örnek shortcutlar:

```text
Tab
Enter
Esc
Ctrl / Cmd + K
```

İleri aşamada:

- quick restart
- queue
- next match

shortcutları eklenebilir.

---

# 95. Command Palette — Opsiyonel

Power user için:

`Ctrl + K`

ile command palette açılabilir.

Örnek:

```text
Start 30s Test
Open Ranked
Challenge Friend
Open Settings
```

MVP sonrası düşünülebilir.

---

# 96. Personalization Without Clutter

Kullanıcı çok sayıda kişiselleştirme yapabilmeli ancak bunun sonucu global UI karmaşası olmamalıdır.

Profile cosmetics:
- profile üzerinde.

Typing themes:
- typing experience üzerinde.

Chat cosmetics:
- chat üzerinde.

Her cosmetic kendi bağlamında görünmelidir.

---

# 97. Default Experience

Varsayılan ayarlar son derece iyi olmalıdır.

İdeal senaryo:

> Kullanıcı settings'e hiç girmese bile ürün mükemmel çalışmalı.

Settings power user içindir; kötü defaultları düzeltmek için değildir.

---

# 98. MVP UI Scope

İlk sürümde bütün ekranlar yapılmamalıdır.

## MVP UI

### Public
- Landing

### App
- Home
- Solo Test
- Solo Result
- Duel
- Match
- Ranked
- Ranked Result
- Leaderboard
- Basic Profile
- Friends
- Basic Settings

---

# 99. MVP Settings

Başlangıç için:

- Account
- Typing
- Appearance
- Audio
- Language
- Privacy

yeterli olabilir.

Daha detaylı kategoriler ileride eklenir.

---

# 100. MVP Navigation

Önerilen ilk navigation:

```text
Home
Practice
Ranked
Duels
Leaderboard
Social

Profile
Settings
```

Races, Events, Store gibi alanlar daha sonra eklenebilir.

---

# 101. v0.2 UI

- Adaptive Practice
- Events
- Seasons
- Expanded profile
- Achievements
- Match history
- Advanced stats
- Cosmetics

---

# 102. v0.3 UI

- Store
- VIP
- Tournament
- Spectator
- Clubs
- Multiple race modes
- Creator tools

---

# 103. Tasarım Süreci

Gerçek geliştirmeden önce şu sıra izlenmelidir:

1. Information Architecture
2. User Flows
3. Low Fidelity Wireframes
4. Component Inventory
5. Design System
6. High Fidelity Screens
7. Prototype
8. UX Testing
9. Frontend implementation

Doğrudan high-fidelity ekran üretmek doğru değildir.

---

# 104. AI ile UI Geliştirirken Kurallar

AI agent'a özellikle şu kurallar verilmelidir:

### Kural 1
Yeni özellik geldiğinde varsayılan olarak homepage'e ekleme.

### Kural 2
Yeni global ayar geldiğinde sağ üst köşeye ikon ekleme.

### Kural 3
Önce mevcut information architecture içinde doğru yeri bul.

### Kural 4
Yeni navigation item eklemeden önce mevcut kategori altında gruplanıp gruplanamayacağını değerlendir.

### Kural 5
Her ekranın primary action'ını koru.

### Kural 6
Component reuse yap.

### Kural 7
Yeni UI component'i design system'e uygun üret.

### Kural 8
Responsive davranışı belirtmeden ekran tamamlanmış sayma.

### Kural 9
Loading / empty / error state'leri unutma.

### Kural 10
Bir özelliğin settings mi, page mi, drawer mı, modal mı olması gerektiğini gerekçelendir.

---

# 105. AI İçin Kritik Prompt İlkesi

Agent'a:

> “Make the UI modern.”

demek yeterli değildir.

Bunun yerine:

> “Preserve the information architecture. Do not place global settings in page headers. Prefer progressive disclosure. Each screen should have one clear primary action. Reuse established components and navigation patterns.”

gibi ürün kuralları verilmelidir.

---

# 106. UX Başarı Metrikleri

UI'nin başarısı yalnızca görünüşle ölçülmemelidir.

Takip edilebilecek metrikler:

- Time to first test
- Time to first duel
- Ranked queue initiation rate
- Test completion rate
- Match completion rate
- Settings search usage
- Navigation backtracking
- Feature discovery
- Session length
- Rematch rate

---

# 107. UX Test Soruları

Gerçek kullanıcı testinde sorulabilecek görevler:

1. 30 saniyelik test başlat.
2. Ranked maça gir.
3. Arkadaşına challenge link oluştur.
4. Theme değiştir.
5. J harfi için practice başlat.
6. Son 10 maçını bul.
7. Sezon ödüllerini gör.
8. Profil çerçevesini değiştir.

Kullanıcı açıklama almadan yapabiliyorsa mimari başarılıdır.

---

# 108. Tasarım Kimliği

Platform şu hissi vermeli:

- hızlı
- premium
- rekabetçi
- teknolojik
- güvenilir
- modern

Ancak:

- aşırı gamer
- aşırı neon
- ucuz e-sports
- dashboard karmaşası

hissinden kaçınılmalıdır.

---

# 109. Görsel Referans Felsefesi

İlham alınabilecek yönler:

### Discord
- settings architecture
- social navigation

### Valorant / competitive games
- rank progression
- match result
- season presentation

### Monkeytype
- typing focus
- minimal test experience

### Modern SaaS
- information density
- card systems
- responsive layout

Ama hiçbir ürün birebir kopyalanmamalıdır.

---

# 110. Nihai UI Prensibi

Bu ürünün UI kuralı tek cümlede:

> **Kullanıcıya tüm gücü ver, ancak tüm gücü aynı anda gösterme.**

Arayüz ilk bakışta basit olmalı.

Derine indikçe:
- gelişmiş analytics,
- rank systems,
- cosmetics,
- settings,
- events,
- social tools

keşfedilmelidir.

---

# 111. Son Mimari Özeti

```text
MARKETING
└── Landing

APP
├── Home
├── Practice
│   ├── Solo Test
│   ├── Adaptive Practice
│   └── Custom Practice
│
├── Competitive
│   ├── Ranked
│   ├── Duels
│   ├── Races
│   └── Events
│
├── Leaderboards
│
├── Social
│   ├── Friends
│   ├── Requests
│   └── Recent Players
│
├── Profile
│   ├── Overview
│   ├── Stats
│   ├── Matches
│   ├── Achievements
│   └── Seasons
│
├── Store
│
└── Settings
    ├── Account
    ├── Profile
    ├── Typing
    ├── Gameplay
    ├── Appearance
    ├── Audio
    ├── Language & Region
    ├── Notifications
    ├── Privacy
    ├── Accessibility
    ├── Keybinds
    └── Data
```

---

# 112. Gelecekte GPT / Agent'a Verilecek Talimat

Bu doküman geliştirmenin başlangıcında ürün özellik dokümanı ile birlikte kullanılmalıdır.

Agent'ın görevi:

1. İki dokümanı birlikte analiz etmek.
2. Feature scope'u doğrulamak.
3. Information architecture'ı gerekirse iyileştirmek.
4. MVP sınırlarını netleştirmek.
5. User flow'ları üretmek.
6. Wireframe planı hazırlamak.
7. Component architecture oluşturmak.
8. Design system tokenlarını planlamak.
9. Frontend/backend uygulama planını çıkarmak.
10. Ardından geliştirmeye geçmek.

Agent, yeni bir UI çözümü önerdiğinde:

> “Bu çözüm mevcut information architecture'a nasıl uyuyor?”

sorusuna cevap verebilmelidir.

---

# 113. Son Not

Bu doküman nihai pixel-perfect tasarım değildir.

Bu dokümanın amacı:

> **UI'nin yapısal kurallarını belirlemek ve gelecekte feature creep oluştuğunda ürünün arayüzünün dağılmasını engellemek.**

High-fidelity tasarım, component detayları ve görsel stil daha sonraki tasarım aşamasında oluşturulmalıdır.
