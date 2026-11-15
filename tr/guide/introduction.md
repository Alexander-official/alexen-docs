# Giriş

**Alexen**, Alexander LLC'nin Xray çekirdeği üzerine kurduğu çok protokollü proxy yönetim panelidir. VPN erişimi satmanı ve yönetmeni sağlar: kullanıcı oluştur, sınır ver, sunuculara (node) dağıt ve her popüler istemci uygulamasında çalışan tek bir abonelik linki ver.

![Alexen paneli](/img/tr/dashboard.webp)

## Neler var

<div class="cards">
<div class="card"><b>Protokoller</b><span>VLESS, VMess, Trojan, Shadowsocks ve Hysteria2; Reality, TLS, xHTTP, WebSocket ve daha fazlası.</span></div>
<div class="card"><b>Kullanıcılar</b><span>Kota ve süre, periyodik sıfırlama, IP sınırı, cihaz (HWID) sınırı, not ve kişisel mesaj.</span></div>
<div class="card"><b>Bayiler</b><span>Kullanıcı ve trafik kotalı, süreli, kendi host gruplu alt yöneticiler.</span></div>
<div class="card"><b>Node'lar</b><span>Tek panel altında çok sunucu; panelden SSH ile kurulum.</span></div>
<div class="card"><b>Abonelikler</b><span>Markalı web sayfası, platforma göre uygulama kurulumu, QR kod, JSON ve Clash biçimleri.</span></div>
<div class="card"><b>İşletme</b><span>Yedek, geri alınabilir tek tık güncelleme, Telegram botu, etkinlik kaydı, lisans.</span></div>
</div>

## Roller

| Rol | Yapabildikleri |
| --- | --- |
| **Sudo yönetici** | Tam yetki: kullanıcı, node, host, ayarlar, yedek, güncelleme, lisans ve diğer yöneticiler. |
| **Bayi (yönetici)** | Yalnızca kendi kullanıcılarını, senin verdiğin kotalar içinde yönetir. |

## Parçalar nasıl birleşir

1. **Inbound**: Xray'in dinlediği kapı (port, protokol, güvenlik); çekirdek yapılandırmasında tanımlanır.
2. **Host**: kullanıcıların bağlandığı adres; bir inbound'a bağlıdır. Bir inbound'un çok hostu olabilir.
3. **Node**: panelin yönettiği, Xray çalıştıran ek sunucular.
4. **Kullanıcı**: abonelik linki alır; uygulaması host listesini oradan indirir.

Sıradaki: [İlk adımlar](/tr/guide/first-steps).
