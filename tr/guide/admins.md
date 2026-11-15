# Yöneticiler ve roller

**Admins** sayfasını aç.

![Yöneticiler](/img/tr/admins.webp)

## Bayi oluşturma

**Add admin**'e bas, kullanıcı adı ve parolayı ver, sonra sınırları seç:

| Ayar | Anlamı |
| --- | --- |
| Sudo | Her şeye tam erişim. |
| Users limit | Bu yöneticinin sahip olabileceği en çok kullanıcı. |
| Traffic limit | Tüm kullanıcılarının toplam trafiği. |
| Expiry date | Yönetici hesabının duracağı tarih. |
| Max IP limit / Max device limit | Yöneticinin bir kullanıcıya verebileceği en yüksek değerler. |
| Host groups | Yöneticinin dağıtabileceği hostlar. |
| Can copy configs / Can edit limits | Ek yetkiler. |
| Telegram ID / Discord webhook | Bu yöneticinin bildirim alacağı yer. |

Yönetici yalnızca kendi kullanıcılarını, kullanımını ve etkinliğini görür. Sudo yöneticiler kullanıcıları kullanıcılar sayfasından yöneticiler arasında taşıyabilir.

## Mesajlar ve uyarılar

Yöneticiler ve sudo yöneticiler **Messages** bölümünde birbirine yazabilir. **Important notifications** yöneticinin kendi kullanıcıları için uyarıları gösterir.

İlgili API: [Admin](/api/admin), [Profile](/api/profile), [Notifications](/api/notifications).
