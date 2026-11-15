# Google bağlantıları

**Settings → Google links** sayfasını aç. Bu bölüm, kullanıcının **Not** alanında kayıtlı bağlantıyı, panelin kendi bağlantısı yerine abonelik bağlantısı olarak verir. Panelin dışında duran bağlantılar için yapıldı; örneğin kendi alan adının engellendiği yerde bile açılan bir Google Drive dosyası.

![Google bağlantıları](/img/tr/google-links.webp)

## Nasıl çalışır

1. Panelin dışındaki bir şey dosyayı üretir (örneğin bir Google Drive dosyası) ve bağlantısını kullanıcının **Not** alanına yazar. Bu genelde bir webhook'tur: kullanıcı oluşturulunca ya da değişince panel servisine haber verir, servis de bağlantıyı API üzerinden geri yazar.
2. **Nottaki bağlantıyı kullan** açıkken, notu **Bağlantı başlangıçları**ndan biriyle başlayan kullanıcı o bağlantıyı abonelik bağlantısı olarak alır: panelde, Telegram botunda ve QR kodda.
3. Notunda böyle bir bağlantı olmayan kullanıcılar panelin kendi bağlantısını kullanmaya devam eder.

Notun yalnızca ilk kelimesi sayılır ve listedeki başlangıçlardan biriyle başlamalıdır (her biri `https://` ile başlamalı). Varsayılan `https://www.googleapis.com/`.

## Ayarlar

| Ayar | Anlamı |
| --- | --- |
| Nottaki bağlantıyı kullan | Varsayılan kapalı. Not bağlantılarını kullanmaya başlamak için aç. |
| Bağlantı başlangıçları | Hangi bağlantılar sayılır. Kendininkini ekleyebilirsin, örneğin başka bir depolama adresi. |
| Böyle notu olan kullanıcılar | Şu an kaç kullanıcının not bağlantısı kullanılacak. |
| Bir not dene | Bağlantısının kullanılıp kullanılmayacağını görmek için bir not yapıştır. |

## Webhook

Ayarların altındaki **Webhook** kartı, sunucudaki `.env` dosyasının tuttuğu her şeyi tutar. Buradan yönetirsin; sunucuya girmek ya da yeniden başlatmak gerekmez.

![Webhook ayarları](/img/tr/google-links.webp)

| Ayar | Anlamı |
| --- | --- |
| Adresler | Her satıra bir web adresi. Her olay hepsine gönderilir. |
| Gizli anahtar (secret) | `x-webhook-secret` başlığında gönderilir; servisin isteğin bu panelden geldiğini doğrulayabilir. Tam görünür (sayfayı yalnızca sudo yöneticiler görür); göster, kopyala ve üret düğmeleri var. |
| Gönderilen olaylar | Kullanıcı oluşturuldu, güncellendi, silindi; durum değişti; kullanım sıfırlandı; abonelik bağlantısı yenilendi; kullanım eşiğine ulaşıldı; kalan gün eşiğine ulaşıldı; yönetici girişi. |
| Kullanım eşikleri | Kullanıcı bu kadar yüzde kullanınca olay gönder, örneğin `80, 90`. |
| Kalan gün eşikleri | Bu kadar gün kalınca olay gönder, örneğin `3, 7`. |
| Yeniden deneme süresi / sayısı | Servisin OK dönmediği olayı ne kadar bekleyip kaç kez yeniden deneyeceği. |

**Test olayı gönder**, formdaki adreslere bir test (`action: "test"`) gönderir ve her birinin cevabını gösterir: HTTP durumu ve süre, ya da hata. Kart ayrıca son denemeyi ve kuyrukta bekleyen olay sayısını gösterir.

Burada kaydedene kadar `.env` değerleri (`WEBHOOK_ADDRESS`, `WEBHOOK_SECRET`, `NOTIFY_*`) geçerlidir ve kart **Şu an .env'den** der. Kaydedince panelin ayarları öne geçer (**Panelden ayarlı**). **Yeniden .env değerlerini kullan** geri alır.

Servisin olayların JSON listesini alır, örneğin:

```json
[{ "action": "user_created", "username": "demo_user", "by": { "username": "admin" }, "user": { "...": "..." } }]
```

::: tip Bağlantı çalışır kalsın
Nottaki bağlantı yazıldığı gibi kullanılır. Arkasındaki dosya silinirse ya da anahtarı iptal edilirse kullanıcının uygulaması güncellenmez; dosyayı ve anahtarı canlı tut.
:::

İlgili API: [Note links](/api/note-links), [Webhook](/api/webhook).
