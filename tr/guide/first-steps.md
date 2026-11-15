# İlk adımlar

## Giriş yap

Satıcının verdiği adresten paneli aç, örneğin `https://panel.example.com:8000/dashboard/`, ve sahip hesabınla gir.

![Giriş sayfası](/img/tr/login.webp)

::: tip İlk iş
**Profilim**'i açıp güçlü bir parola belirle. Sonra [Güvenlik](/tr/guide/security) sayfasını oku.
:::

Yeni bir panelde kullanıcıların bağlanabilmesi için üç şey gerekir: bir inbound, bir host ve bir kullanıcı.

## 1. Xray çekirdeğini kontrol et

**Nodes → Core Settings** sayfasını aç. Varsayılan yapılandırmada örnek inbound'lar var. JSON'u protokol ve portlarına göre düzenleyip kaydet. Panel çekirdeği senin için yeniden başlatır.

![Çekirdek ayarları](/img/tr/core.webp)

## 2. Host ekle

**Host Settings** sayfasını aç. Hostlar inbound'a göre gruplanır. Bir inbound içinde **Add host**'a bas; açıklamayı (kullanıcının gördüğü ad), adresi (alan adın veya IP) ve gerekirse SNI, yol ve parmak izini gir.

![Host ayarları](/img/tr/hosts.webp)

::: tip Sıra önemlidir
Bir hostun veya inbound'un tutamacını sürükleyerek sırala. Aynı sıra kullanıcıların aboneliğinde de kullanılır.
:::

## 3. Kullanıcı oluştur

**Users → Create User**: kullanıcı adı yaz, protokolleri seç, kota ve bitiş tarihi ver, kaydet. Link simgesiyle abonelik linkini kopyalayıp müşteriye gönder.

![Kullanıcı oluştur](/img/tr/user-create.webp)

## 4. İsteğe bağlı ama önerilir

- Daha fazla sunucu ekle: [Node'lar](/tr/guide/infrastructure).
- Kullanıcıların gördüğü sayfayı markala: [Abonelikler](/tr/guide/subscriptions).
- Telegram botunu bağla: [Bot, uyarılar ve etkinlik](/tr/guide/notifications).
- Otomatik yedeği aç: [Yedek](/tr/guide/operations).
