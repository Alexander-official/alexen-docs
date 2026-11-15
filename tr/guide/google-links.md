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

**Webhook** kartı, panelin başka bir servise olay gönderip göndermediğini gösterir. Burada değil, sunucuda ayarlanır:

```bash
alexen env set WEBHOOK_ADDRESS "https://hook.example.com/users"
alexen env set WEBHOOK_SECRET "uzun-bir-gizli-anahtar"
alexen restart
```

Panel gizli anahtarı `x-webhook-secret` başlığında gönderir; servisin isteğin gerçekten panelden geldiğini doğrulayabilir. Olaylar kullanıcı oluşturulunca ya da güncellenince gönderilir.

::: tip Bağlantı çalışır kalsın
Nottaki bağlantı yazıldığı gibi kullanılır. Arkasındaki dosya silinirse ya da anahtarı iptal edilirse kullanıcının uygulaması güncellenmez; dosyayı ve anahtarı canlı tut.
:::

İlgili API: [Note links](/api/note-links).
