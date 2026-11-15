# Bot, uyarılar ve etkinlik

## Telegram botu

**Settings → Telegram**: @BotFather ile bir bot oluştur, token'ını yapıştır ve Telegram ID'ni ekle (ID'ni görmek için bota `/id` yaz).

![Telegram botu](/img/tr/telegram.webp)

Bot panelin durumunu, kimin çevrimiçi olduğunu ve bir kullanıcının ayrıntılarını gösterir; istediğinde yedek gönderir, zamanlanmış yedek yollar. Hangi olaylardan haber vereceğini tek tek seçersin:

- kullanıcılar: oluşturuldu, düzenlendi, silindi, kota bitti, süresi doldu, kapatıldı, açıldı, kullanım sıfırlandı, abonelik linki yenilendi;
- yönetici ve girişler: girişler, **denenen parolayla birlikte başarısız girişler**;
- node'lar: node düştü ve geri geldi.

Bir kullanıcı düzenlenince mesaj yalnızca bir şeyin değiştiğini değil, **neyin değiştiğini** (örneğin kota `50 GB → 100 GB`, bitiş tarihi, durum) listeler.

Saat dilimli sessiz saatler, sessiz mod ve Telegram'ın engelli olduğu sunucular için proxy alanı vardır.

## Uyarılar ve mesajlar

![Uyarılar](/img/tr/alerts.webp)

Sayfada ayrıca **Anti-theft** kuralları da var: örneğin "60 dakikada 30 GB'tan fazla" uyarı verir ya da işlem yapar.

**Important notifications** senin için olayları listeler: süresi yaklaşan kullanıcılar, dolan kotalar, node sorunları, başarısız girişler. Tek tek ya da hepsini okundu işaretle. **Messages**, her yönetici ile sudo yöneticiler arasındaki yazışmadır.

![Mesajlar](/img/tr/messages.webp)

## Son işlemler

**Recent actions** denetim kaydıdır: kim, neyi, hangi IP'den, hangi istemciyle yaptı. Yöneticiye ve türe (girişler, değişiklikler, başarısızlar) göre süz.

![Son işlemler](/img/tr/activity.webp)

İlgili API: [Telegram](/api/telegram), [Notifications](/api/notifications), [Activity](/api/activity).
