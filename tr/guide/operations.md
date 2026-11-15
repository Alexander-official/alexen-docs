# Yedek, güncelleme ve lisans

## Yedek

**Settings → Backup** veritabanı ve ayarların ZIP'ini sunucuda oluşturur, indirmene izin verir ve son N kopyayı tutar.

![Yedekler](/img/tr/backup.webp)

- **Backup now**'a bas ya da Telegram ayarlarında zamanlamayı açıp birkaç saatte bir bota yedek gelmesini sağla.
- Geri yüklemek için komut satırı: `alexen restore DOSYA`. Şu anki veri önce kaydedilir.

::: tip Her güncellemeden önce
Panel güncellemeden önce kendiliğinden yedek alır.
:::

## Güncelleme

**Settings → Update** kurulu ve en yeni sürümü ve her sürümün notlarını gösterir.

![Güncelleme](/img/tr/update.webp)

**Update**'e basınca panel yedek alır, yeni sürümü derler ve başlatır. Yeni sürüm açılmazsa eskisi geri konur. Güncelleyici açıksa paneller kendiliğinden de (yaklaşık 12 saatte bir) güncelleme kontrol eder.

Komut satırından: `alexen update`.

## Lisans

**Settings → License** lisansının durumunu gösterir.

![Lisans](/img/tr/license.webp)

| Durum | Anlamı |
| --- | --- |
| Active | Her şey çalışır. Kalan gün gösterilir. |
| Ended, grace | Lisans bitti. Panel birkaç gün daha çalışır: yenile. |
| Expired / Cancelled / Suspended | Satıcıyla iletişime geç. |
| No license entered | Anahtarını gir. |
| In use on another server | Anahtar başka bir kuruluma bağlı. Satıcıdan taşımasını iste. |

Paneller lisansı kendiliğinden kontrol eder ve satıcıdan mesaj varsa gösterir.

## Sistem

**Settings → System** ana sunucu ve her node için CPU, bellek, disk, çalışma süresi ve ağ hızını gösterir.

![Sistem](/img/tr/system.webp)

İlgili API: [Backup](/api/backup), [Update](/api/update), [License](/api/license), [System](/api/system).
