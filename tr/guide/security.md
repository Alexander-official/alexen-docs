# Güvenlik ve engelli IP'ler

## Giriş koruması

- Aynı adres ve kullanıcı adı için 5, bir adresten toplam 20 yanlış parola (10 dakika içinde): adrese beklemesi söylenir (HTTP 429).
- Başarısız giriş etkinlik kaydına yazılır; botu kullanıyorsan **denenen parolayla birlikte** sana gönderilir. Böylece yazım hatasıyla saldırıyı ayırt edersin.

## Engelli IP'ler

**Settings → Blocked IPs**, giriş yapamayacak adreslerin listesidir.

![Engelli IP'ler](/img/tr/blocked-ips.webp)

- **Son 24 saatteki denemeler:** IP'ye göre gruplanmış başarısız girişler ve denenen kullanıcı adları. Saldırgana **Block**'a bas.
- **Elle engelle:** bir adres ya da `198.51.100.0/24` gibi bir aralık, sebebiyle.
- **Otomatik engelleme:** aç; başarısız giriş sınırına ulaşan her adres senin yerine engellenir.
- Kendi adresini engelleyemezsin.

Engelli adresler girişte ve parola değiştirmede HTTP 403 alır. Herhangi bir kaydı tek tıkla kaldırabilirsin.

## IP sınırı, cihaz sınırı ve hesap paylaşımı

- **Genel IP sınırı** (Ayarlar): açıkken izin verilen IP'ler bağlıyken kullanıcının fazla IP'leri engellenir. Kapalıyken panel yalnızca kimin bağlı olduğunu gösterir.
- Kullanıcı başına **cihaz (HWID) sınırı**, bir aboneliğin çok cihazda kullanılmasını engeller.
- **Anti-theft**, "60 dakikada 30 GB'tan fazla" gibi kurallarla paylaşılan abonelikleri bulur ve uyarabilir ya da işlem yapabilir.

## İyi alışkanlıklar

1. Her yönetici için uzun, benzersiz parola kullan ve varsayılanı değiştir.
2. **Otomatik engelleme**yi açık tut.
3. Yeni bir bayi aldıktan sonra **Recent actions**'a bak.
4. Otomatik **yedeği** açık tut. Bkz. [Yedek](/tr/guide/operations).

İlgili API: [Blocked IPs](/api/blocked-ips), [Activity](/api/activity).
