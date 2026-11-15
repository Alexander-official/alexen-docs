# Sorun giderme

Önce `alexen doctor` çalıştır. Konteyneri, sertifikayı, veritabanını, node'ları ve lisansı denetler, neyin yanlış olduğunu söyler.

| Sorun | Nereye bak |
| --- | --- |
| Panel açılmıyor | `alexen status`; adres ve port (`https://alan-adi:8000/dashboard/`); güvenlik duvarı. |
| Tarayıcı sertifika uyarısı veriyor | Panel kendi imzalı sertifika kullanıyor (alan adsız kurulmuş). Gerçek sertifikalı bir alan adı kullan ya da tarayıcıda istisna ekle. |
| Node "Failed to connect" gösteriyor | Node sunucusu kapalı, güvenlik duvarı node portunu engelliyor ya da node sertifikası yanlış. Node satırından SSH kurulumunu yeniden çalıştır. |
| Kullanıcılar bağlanıyor ama bir şey açılmıyor | Hostun adres, port ve SNI'sını inbound ile karşılaştır; node'daki Xray'in çalıştığını kontrol et. |
| Uygulama "device limit" diyor | Kullanıcı cihaz (HWID) sınırına ulaştı. Kullanıcıyı düzenle penceresinden bir cihaz sil ya da sınırı artır. |
| Kullanıcılar aboneliğinde 429 alıyor | **Abonelik istatistikleri → Sınırlar** ya da Abonelik ayarlarındaki bir hız sınırına ulaşıldı. Artır ya da 0 yap. |
| Çok denemeden sonra giriş yapamıyorsun | Adresin hız sınırına takıldı ya da engellendi. 10 dakika bekle ya da başka bir yöneticinin oturumundan **Blocked IPs** ile kaldır. |
| Lisans "in use on another server" diyor | Panel yeniden kuruldu ya da taşındı. Satıcıdan lisansı taşımasını iste. |
| Güncelleme başarısız oldu | Eski sürüm kendiliğinden geri konur. `alexen logs` çalıştır, son satırları desteğe gönder. |
| Yedek geri yüklendi ama bir şey eksik | Yedek, eksik verilerden eskidir. Yedekler yalnızca alındığı andaki veriyi taşır. |

## Yardım

Telegram: [@alexvpns](https://t.me/alexvpns). `alexen doctor` çıktısını ve `alexen logs` son satırlarını gönder.
