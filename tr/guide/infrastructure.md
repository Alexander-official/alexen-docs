# Node, host ve çekirdek

## Node'lar

Node, panelin kontrolünde Xray çalıştıran başka bir sunucudur. Kullanıcılar, bağladığın hostlarla node'lara dağıtılır.

![Node'lar](/img/tr/nodes.webp)

Her satır CPU, bellek, Xray sürümü ve bağlantı durumunu gösterir. Düzenlemek, yeniden başlatmak veya silmek için satırı aç.

![Açık bir node](/img/tr/node-open.webp)

Node'un içinde adı, adresi, portları ve kullanım katsayısını ayarlar, çalıştığı Xray çekirdeğini seçer, Xray'i yeniden bağlar ya da başlatır ve Alexen ajanını açarsın.

### Node ekle

1. **Nodes → Node Settings → Add New Node.**
2. Ad ve sunucu adresini gir. Root erişimin olan sunucu için **SSH kurulumu** kullan: panel girer, güvenlik duvarı portlarını açar, Docker'ı ve node'u kurar, bağlar ve canlı logla ilerlemeyi gösterir.
3. SSH anahtarları **SSH anahtar kütüphanesi**ne bir kez kaydedilip tekrar kullanılabilir. Özel anahtarlar şifreli saklanır, bir daha gösterilmez.

::: tip Node sertifikası
Panelin node sertifikası aynı sayfada. Elle kurulan node'un buna ihtiyacı var; SSH kurulumu bunu senin yerine yapar.
:::

## Hostlar

Host, kullanıcıların gerçekten bağlandığı yerdir. Her host bir inbound'a bağlıdır.

![Hostlar](/img/tr/hosts.webp)

| Alan | Anlamı |
| --- | --- |
| Remark | Kullanıcının uygulamasında görünen ad. `{USERNAME}` ve `{DATA_LEFT}` gibi yer tutucular çalışır. |
| Address | Alan adı veya IP. Birkaç tane yazabilirsin. |
| Port, SNI, Host, Path | Taşıma ve TLS ayrıntıları. |
| Security / ALPN / Fingerprint | TLS ayarları ya da inbound'dan devral. |
| Fragment, noise, mux | Sansür aşma seçenekleri. |

Inbound ve hostları sürükleyerek sırala. `:de` gibi bir ülke kodu yazmak açıklamaya bayrak önerir.

## Gruplar

**Group Settings** hostları gruplara toplar ve grupları bayilere verir; böylece her bayi yalnızca senin izin verdiğin hostları dağıtır.

![Gruplar](/img/tr/groups.webp)

## Çekirdekler

**Ana çekirdek** panelin Xray'idir. Farklı yapılandırma veya sürümle **ek çekirdekler** ekleyip bir node'u bunlardan birine atayabilirsin. **Core Settings** JSON'u düzenler, canlı logları gösterir ve Xray sürümünü değiştirir.

## Outbound ve zincirler

![Outbounds](/img/tr/outbounds.webp)

- **Sunucu çıkışları**, her sunucunun kullanıcılarının internete nereden çıkacağını seçer: doğrudan ya da başka bir sunucu üzerinden (zincir), gerekirse inbound başına. **Check** o sunucudan test siteleri açar.
- **Outbounds** her outbound'un gecikmesini panelden veya node'dan test eder ve trafiğini sayar. **Routing** kuralları tutar.
- **Zincir**, bir aktarıcının inbound'unu çıkış sunucusuna yönlendirir; kullanıcı yakın sunucuya bağlanır, başka ülkeden çıkar.

## Otomatik IP değişimi

Bir sunucunun adresi engellenince trafiği düşer. **Auto IP change** bunu izler ve hostu listelediğin sonraki adrese geçirir.

![Otomatik IP değişimi](/img/tr/auto-change.webp)

Her kuralın aşamaları vardır: izlenen node'larda trafik belirlediğin dakika boyunca eşiğin altında kalırsa host aşamanın IP'sine geçer. Sonraki aşamalar, önceki IP trafik taşıyınca ya da belli bir süre sonra başlar. Kayıt her geçişi listeler.

## Dahili VPN

**Nodes → VPN services** panelde ve node'larda dahili AmneziaWG ve OpenVPN sunucularını yönetir. Kullanıcılar dosyaları abonelik sayfalarından alır.

![VPN hizmetleri](/img/tr/vpn.webp)


İlgili API: [Node](/api/node), [Core](/api/core), [Chain](/api/chain), [Outbounds](/api/outbounds), [Groups](/api/groups).
