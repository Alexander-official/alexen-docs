# Abonelikler

Kullanıcılar tek bir link alır: `https://alan-adin/sub/<token>`. Uygulamaları host listesini oradan indirir. Aynı link istemciye göre başka biçimleri de (Clash, sing-box, JSON) sunar.

![Abonelik ayarları](/img/tr/sub-settings.webp)

## Abonelik sayfası

Kullanıcı linki tarayıcıda açınca hesabını, platforma göre (iOS, Android, Windows, macOS, Linux) uygulama kurulumunu, linki, QR kodu ve açıksa cihazlarını gösteren markalı bir sayfa görür.

**Settings → Sub → Web page** altında başlığı, logoyu, destek linkini, vurgu rengini ve temayı, sunulan dilleri (English, Türkçe, Türkmençe, Русский, فارسی, 中文), görünen bölümleri, dil başına metinleri, uygulama listesini ve özel CSS'i değiştirebilirsin. **Preview** sonucu gerçek bir kullanıcı gibi gösterir.

### Görünüm, uygulamalar ve JSON

![Görünüm](/img/tr/sub-look.webp)

**Look** sayfanın kart stilini (Soft, Liquid glass, Clay), temasını ve vurgu rengini seçer. **Apps** platforma göre istemci uygulamaları ve içe aktarma linklerinin listesidir: uygulamaları sırala, düzenle, ekle.

![Uygulamalar](/img/tr/sub-apps.webp)

**JSON** sekmesi JSON aboneliğini yönetir: hangi istemciler alır, doğrudan giden siteler (VPN'den geçmeyen), reklam engelleme ve otomatik (balancer) yapılandırma.

![JSON aboneliği](/img/tr/sub-json.webp)

## Link ve alan adı

**Domain settings** her abonelik linkinin adresini, yolunu ve son kısmını belirler (örneğin `https://sub.example.com/sub/<token>`). Önceden verilmiş linkler çalışmaya devam eder. Bayilerin kendi alan adı olabilir.

![Alan adı ayarları](/img/tr/domain.webp)

## Uygulamalarda görünen metinler

**Sub page** sekmesi uygulamaların gösterdiği başlık ve duyuruyu içerir. Duruma göre ayrı metinler verilebilir: süresi dolmuş, kapatılmış, kotası bitmiş ve bitmeye yakın. Yer tutucular: `{username}`, `{used}`, `{limit}`, `{remaining}`, `{expiretime}`, `{days}`, `{token}`.

## Ek yapılandırmalar

**External Configs** her link tabanlı aboneliğe ek linkler ekler ve link ile protokol sırasını belirler.

![Harici yapılandırmalar](/img/tr/external-configs.webp)

### Başka bir sağlayıcıdan abonelik çekme

Harici yapılandırma bir **abonelik kaynağı** da olabilir: panel sağlayıcının aboneliğini indirir ve sunucularını kullanıcılarının aboneliğine ekler. Çekerken bir Happ uygulaması gibi davranabilir:

- **User-Agent:** Happ, v2rayNG, Hiddify ya da Streisand seç, ya da kendin yaz.
- **Happ gibi cihaz kimliği (HWID) gönder:** varsayılan açık. Panel `x-hwid` ile birlikte `x-device-os`, `x-ver-os` ve `x-device-model` başlıklarını gönderir; linki bir cihaza bağlayan sağlayıcılar için.
- **Cihaz kimliği (HWID):** her kaynağın kendi kimliği var. Boş bırakırsan kaydederken üretilir ve hep aynı kalır; sağlayıcı tek cihaz sayar. Sağlayıcının zaten bildiği kimliği yapıştırabilir ya da yenisini üretebilirsin.
- Önizleme tam olarak hangi isteğin gideceğini gösterir, örneğin:

```bash
curl -L -A "Happ/3.24.1" -H "x-hwid: 98a732ea837007c6" -H "x-device-os: Android" "https://saglayici.example.com/sub/TOKEN"
```

## Sınırlar

- **Güncelleme aralığı**: uygulamalara ne sıklıkla yenilemeleri söylenir (saat).
- **Hız sınırı**: aynı kullanıcının iki çekimi arasındaki en kısa süre. IP ve kullanıcı başına daha fazla kural [Abonelik istatistikleri](/tr/guide/sub-stats) sayfasında.
- **Cihaz (HWID) sınırı**: kullanıcı aboneliği yalnızca belirli sayıda cihazdan çekebilir. Aşınca uygulama boş liste ve bir mesaj alır.

İlgili API: [Subscription](/api/subscription), [Settings](/api/settings).
