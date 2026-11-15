# Panel ve kullanıcılar

Ana sayfa her kullanıcıyı durumu, cihazları, bağlı IP'leri ve kota kullanımıyla listeler. Üstteki kartlar aktif kullanıcıları, toplam veri kullanımını, şu an çevrimiçi olanları ve yakında bitecekleri gösterir.

![Kullanıcı listesi](/img/tr/dashboard.webp)

## Kullanıcı oluştur ve düzenle

**Create User**'a bas. Düzenlemek için kullanıcı adına bas.

![Kullanıcıyı düzenle](/img/tr/user-edit.webp)

| Alan | Ne yapar |
| --- | --- |
| **Username** | 3–32 harf, rakam veya `_`. Kullanım kaybolmadan sonradan yeniden adlandırılabilir. |
| **Owner admin** | Kullanıcının bağlı olduğu yönetici (sadece sudo). |
| **Data limit** | Toplam trafik. Boş veya 0 sınırsız demektir. |
| **Periodic usage reset** | Kullanılan trafiği her gün, hafta, ay veya yıl sıfırlar. |
| **Expiry date** | Hesabın biteceği tarih. Hızlı düğmeler 1, 3, 7 veya 30 gün ekler. |
| **On hold** | Süre şimdi değil, ilk bağlantıda başlar. |
| **IP limit** | Aynı anda kaç IP bağlı olabilir. Fazla IP'ler, biri düşene kadar engellenir. |
| **Device limit (HWID)** | Aboneliği kaç cihaz çekebilir. |
| **Protokoller / inbound'lar** | Kullanıcının hangi protokol ve inbound'ları alacağı. |
| **Note / kişisel mesaj** | Yöneticiler için özel not; kullanıcının uygulamasında görünen metin. |
| **Özel abonelik linki** | `/sub/benim-adim` gibi okunabilir link. Ayarlıyken yalnızca o çalışır. |

## Durumlar

| Durum | Anlamı |
| --- | --- |
| Active | Çalışıyor. |
| On hold | Süreyi başlatmak için ilk bağlantıyı bekliyor. |
| Limited | Kota bitti. |
| Expired | Bitiş tarihi geçti. |
| Disabled | Yönetici kapattı. |

## Hızlı işlemler

- **Link simgesi**: abonelik linkini kopyala. **QR simgesi**: QR kodu göster.
- Oluşturma penceresindeki **hızlı şablonlar** hazır ayar doldurur (örneğin 1 ay, 50 GB).
- Araç çubuğuyla duruma veya yöneticiye göre süz, sırala; süresi dolanları toplu sil, kullanıcıları başka sahibe taşı gibi toplu işlemleri yap.
- **Oturumu sonlandır**: çevrimiçi görünümde tek bir IP'yi tek tıkla at.

## Link ve QR kod

Link simgesi kullanıcının abonelik linkini, ortadaki simge yapılandırmalarını kopyalar; QR simgesi müşterinin okutabileceği QR kodu gösterir.

![Abonelik linkinin QR kodu](/img/tr/user-links.webp)

::: warning Yeniden adlandırma
Kullanıcıyı yeniden adlandırınca eski varsayılan abonelik linki çalışmaz, çünkü adı içerir. Yeni linki gönder ya da yeniden adlandırmadan etkilenmeyen özel link ver.
:::

İlgili API: [Kullanıcılar](/api/user), [Kullanıcı şablonları](/api/user-template), [Çevrimiçi](/api/online).
