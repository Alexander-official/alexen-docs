# Abonelik istatistikleri

Menüden **Subscription statistics** bölümünü aç. Bir uygulama aboneliği her çektiğinde panel kimin istediğini, hangi uygulamayla, hangi biçimde ve kaç bayt gönderildiğini kaydeder.

![Abonelik istatistikleri](/img/tr/sub-stats.webp)

## Neler kaydedilir

| Alan | Örnek |
| --- | --- |
| Kullanıcı | `ali_pro` ve sahibi olan yönetici |
| IP adresi | `198.51.100.20` |
| Uygulama ve sürüm | Hiddify 2.0.5, v2rayNG 1.9.7, Happ, Streisand, Clash Meta, sing-box... User-Agent'tan okunur |
| Biçim | links, clash, json, sayfa |
| Boyut | O çekimde gönderilen bayt |
| Süre | Milisaniye |
| Sonuç | 200, `429` (sınırlandı), cihaz limiti yüzünden boş cevap, hata |

Yalnızca geçerli token'la yapılan çekimler kaydedilir. Uydurma token'la gelen istekler (tarayıcılar) kaydedilmez.

## Özet sekmesi

- Toplamlar: çekim, kullanıcı, IP, trafik, ortalama ve en büyük boyut, ortalama süre, sınırlanan ve engellenen sayısı.
- Zamana göre grafik (72 saate kadar saatlik, sonrası günlük).
- Uygulamaya ve biçime göre döküm.
- En çok çeken kullanıcılar ve IP'ler. Satıra tıklayınca kayıtları açılır. IP'nin yanında **Engelle** düğmesi var.

## Kayıtlar sekmesi

Her tek çekim, yenisi üstte. Kullanıcı, IP, uygulama, biçim ve duruma göre süz.

## Sınırlar sekmesi (sudo)

| Ayar | Etkisi |
| --- | --- |
| Bir IP'den dakikada en çok çekim | Aşan HTTP 429 ve `Retry-After` alır. `0` = sınırsız. |
| Bir kullanıcının saatte en çok çekimi | Aynısı, kullanıcı başına. |
| İki çekim arası en kısa süre | Abonelik ayarlarındaki hız sınırıyla aynı. |
| Kayıtları sakla (gün) | Eski kayıtlar her gün silinir. Varsayılan 30. |
| Çekimleri kaydet | Kaydı kapatır. |
| Tüm kayıtları sil | Kaydı temizler. |

Yöneticiler yalnızca kendi kullanıcılarının çekimlerini görür.

İlgili API: [Abonelik istatistikleri](/api/subscription-statistics).
