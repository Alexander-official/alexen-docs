---
title: Sürüm notları
outline: false
---

# Sürüm notları

## v2.3.14 <span class="date">2026-11-15</span>

- Yeni bölüm: Google bağlantıları (Ayarlar). Notu listedeki bir bağlantıyla başlayan kullanıcıya (varsayılan https://www.googleapis.com/ — örneğin bir webhook'un nota yazdığı Google Drive dosyası) o bağlantı abonelik bağlantısı olarak verilir; panelde, botta ve QR kodda. Varsayılan kapalı. Bağlantı başlangıçlarını sen belirlersin, kaç kullanıcının böyle bir notu olduğunu görürsün, bir notu deneyebilirsin ve webhook'un durumunu (WEBHOOK_ADDRESS / WEBHOOK_SECRET) görürsün.
- Engelli IP'ler, Abonelik istatistikleri ile Çekirdek, Inbound ve JSON abonelik sayfaları Farsça, Türkmence ve Çinceye (eksik yerlerde Rusçaya da) çevrildi.
- Dokümantasyon sitesi yayında: docs.alexateam.ru (kılavuz + eksiksiz API referansı).

## v2.3.13 <span class="date">2026-11-12</span>

- Yeni bölüm: Abonelik istatistikleri. Her abonelik çekimi kaydedilir: kim (kullanıcı, IP), hangi uygulama ve sürüm, hangi biçim, kaç KB gitti, kaç ms sürdü. Özet (toplamlar, zamana göre grafik, uygulamaya/biçime göre, en çok güncelleyen kullanıcı ve IP'ler), süzülebilir kayıt listesi ve Sınırlar sekmesi: IP başına dakikada, kullanıcı başına saatte en çok güncelleme ve en az bekleme süresi (aşan 429 alır), saklama süresi. Yöneticiler yalnızca kendi kullanıcılarını görür. Sık güncelleyen IP'yi tek tıkla engelleyebilirsin.

## v2.3.12 <span class="date">2026-11-12</span>

- Telegram botu: başarısız giriş bildiriminde artık denenen parola da yazıyor; kullanıcı düzenleme bildirimi neyin değiştiğini söylüyor (kota, bitiş, durum, IP/cihaz limiti, not, protokoller: eski → yeni); yeni kullanıcı bildirimi kota/bitiş/protokolleri gösteriyor.
- Yeni: Ayarlar → Engelli IP'ler. Adresi (ya da 1.2.3.0/24 gibi ağı) elle engelle, son 24 saatteki başarısız girişlerden tek tıkla engelle, istersen çok yanlış deneyeni otomatik engelle. Engelli adres panele giriş yapamaz; abonelik bağlantıları etkilenmez. Kendi adresini engelleyemezsin.
- Hostlar: tüm açılıp kapanma/kayma animasyonları kaldırıldı, her şey anında.

## v2.3.11 <span class="date">2026-11-11</span>

- Hostlar: host kartları yine eskisi gibi tam açık (özet satırı kaldırıldı). Inbound'ların açılıp kapanması animasyonsuz, anında; ok dönüşü ve geçiş efektleri de kapatıldı. Tooltip'ler hafifletildi.

## v2.3.10 <span class="date">2026-11-11</span>

- Hostlar: çok hostlu inbound'lar artık kasmıyor. Host kartları tek satır özet olarak açılır (ad + adres), düzenlemek için satıra tıklayıp 'Düzenle'ye basarsın; açma ~5 kat, host silme ~2 kat hızlandı. Yeni eklenen/çoğaltılan host otomatik açık gelir, hatalı hostlar da kendiliğinden açılır.

## v2.3.9 <span class="date">2026-11-11</span>

- Hostlar: inbound'ları (ve içindeki hostları) sürükle-bırak ile sıralayabilirsin; yeni çekirdeğin hostları artık en alta mahkûm değil, sıra aboneliklere de yansır. Her hostta sürükleme tutacağı eklendi, oklar da duruyor.
- Host adı yazarken ':denmark' ya da ':dk' yaz, ülke önerileri çıkar; seçince bayrak emojisi konur (':denmark:' yazınca da otomatik dönüşür).
- Hızlandırma: Host ve Çekirdek ayarları penceresi kasmıyor: kapalı inbound/host alanları artık yüklenmiyor, çekirdek loglarının akışı düzenleyiciyi yeniden çizmiyor.

## v2.3.8 <span class="date">2026-11-10</span>

- Hata düzeltmesi: JSON abonelikte 'allowInsecure' kaldırıldı. Xray 26 bu alanı true iken kabul etmiyor ('The feature allowInsecure has been removed' hatası, tüm config yüklenmiyordu). 'Güvensiz'e izin verilen sunucular için yerine sunucunun sertifikasının sha256 parmak izi (pinnedPeerCertSha256) otomatik okunup yazılıyor; pcs/vcn parametreleri de destekleniyor.
- External configs: yeni 'JSON'dan' türü. JSON abonelik içeriğini (tam Xray config listesi ya da tek config) elle yapıştırıp ekleyebilirsin; isimlendirme, otomatik adlandırma, konum ve gruplar diğer türler gibi çalışır.

## v2.3.7 <span class="date">2026-11-08</span>

- Cihaz takibi (parmak izi): WhatsApp/Telegram link önizlemesi, Dalvik/okhttp ve tarayıcı istekleri artık cihaz sayılmıyor. Hiddify gibi HWID göndermeyen uygulamalar IP'ye göre değil uygulama+sürüme göre tanınıyor; ağ değişince veya abonelik güncellenince yeni telefon olarak kaydedilmiyor.

## v2.3.6 <span class="date">2026-11-05</span>

- 'İsimlendirme' (rastgele ülke / özel şablon: &#123;COUNTRY&#125; &#123;CAPITAL&#125; &#123;GEO&#125;) için de dil seçeneği eklendi: İngilizce, Türkçe, Rusça, Türkmençe. External config penceresinde 'Sunucu adı dili'.

## v2.3.5 <span class="date">2026-11-05</span>

- Tek tek eklenen (manuel link) external configlere de otomatik adlandırma: 'Sunucuları otomatik adlandır' açılınca her linkin gerçek çıkış ülkesi/şehri bulunur ve seçilen dilde (EN/TR/RU/TK) isimlenir; hiçbir link silinmez. Ayarları kaydedince abonelik kaynaklarının ve otomatik adlı linklerin isimleri hemen yenilenir (dil değişince aralığı beklemez).

## v2.3.4 <span class="date">2026-11-05</span>

- External abonelik kaynaklarında otomatik sunucu isimlendirmesi artık Türkçe, Rusça, Türkmence (ve İngilizce) yapılabiliyor: kaynak ayarında 'Sunucu adı dili'. Ülke adları tamamen çevrilir; şehirlerde en bilinen ~85 şehir çevrilir, diğerleri İngilizce kalır. Kaydedince isimler yenilenir.

## v2.3.3 <span class="date">2026-11-05</span>

- Hiddify ve Karing artık aboneliği link formatında alıyor: External configler ve bilgi satırları bu uygulamalarda da görünüyor (önceden sadece panelin kendi configleri geliyordu).

## v2.3.2 <span class="date">2026-11-04</span>

- xHTTP 'extra' kaldırıldı: Hosts penceresindeki 'xHTTP extra' alanı silindi; abonelik linklerine ve JSON aboneliklerden gelen linklere artık extra parametresi yazılmıyor (host'larda eskiden kayıtlı extra değerleri yok sayılır).

## v2.3.1 <span class="date">2026-11-04</span>

- Telefon performansı: 'masaüstü sitesi' modundaki telefonlar da dokunmatik cihaz sayılıyor; pencere/menü arkasındaki bulanıklık ve arka plan kayan ışıması orada kapatıldı. Yeni yıl süslemesi telefonda hafif moda geçiyor (az kar, hareketsiz ışık/sahne, kızak yok); animasyonlardan filtre efektleri kaldırıldı.

## v2.3.0 <span class="date">2026-11-04</span>

- Düzeltme: hazır şablon düğmeleri (Deneme / 1 ay / …) ve +1/+3/+7/+30 gün düğmeleri bitiş zamanını milisaniyeli yazıyordu, sunucu reddettiği için kullanıcı oluşturulamıyordu.
- Telegram botu artık kendiliğinden bildirim gönderiyor: kullanıcı oluşturma/silme/düzenleme, limit ve süre dolması, trafik ve gün uyarıları, başarısız/başarılı giriş, sunucu kesilmesi/bağlanması, şüpheli trafik, yedek hatası. Ayarlar → Telegram'da her olay tek tek açılıp kapatılır; sessiz gönderme ve sessiz saatler var.
- Yedek botu: yedek çok büyükse (50 MB üstü) artık her 10 dakikada bir tekrar uyarı göndermiyor; yedek hatası bir kez bildiriliyor.
- Yeni yıl teması: üç katmanlı kar, yanıp sönen ışık zinciri, cam çam ağaçları, ren geyikleri ve gökyüzünde geçen Noel Baba kızağı (Sistem → Yeni yıl süslemeleri). Görünüm'e 'Yeni yıl gecesi' ve 'Yeni yıl ayazı' hazır temaları eklendi.

## v2.2.1 <span class="date">2026-11-03</span>

- Düzeltme: kullanıcı düzenleme penceresi açılırken 'useFormControlStyles returned is undefined' hatasıyla sayfa çöküyordu (v2.1'de eklenen 'Ad ve bağlantı' bölümünden kaynaklanıyordu).

## v2.2.0 <span class="date">2026-11-03</span>

- Harici config'lerde JSON abonelik desteği: adres tam Xray istemci config'lerinden oluşan bir JSON listesi döndürüyorsa (ör. http://…/general2.txt) otomatik algılanıp paylaşım linklerine çevrilir (VLESS/VMess/Trojan/Shadowsocks/Hysteria2; xhttp ayarları, Reality, TLS, ws, grpc dahil). Aralık, test ve yeniden adlandırma bunlarda da çalışır. Birden çok outbound'lu 'otomatik seçim' config'i, aynı sunucuları tekrar listelememek için atlanır.

## v2.1.0 <span class="date">2026-11-03</span>

- Inbound başına çıkış: her inbound'un kullanıcıları ister panelin başka bir sunucusundan (VPS), ister bu sunucunun bir outbound'undan çıkabilir. Aynı sunucu birden çok inbound için kullanılabilir. Çıkışlar sayfasında sunucu başına ve çekirdek editöründe inbound satırında seçilir; seçim yapılmayan inbound sunucunun kendi çıkışını izler.
- Kullanıcıların sahibini (admin) toplu değiştirme: aranabilir listeden çoklu seçim ya da bir adminin tüm kullanıcıları (önce otomatik yedek).
- Kullanıcı adını değiştirme (sudo ve kullanıcının sahibi olan admin). Kullanım, limit ve cihazlar kalır; Xray istemcileri yeniden adlandırılır.
- Özel abonelik bağlantısı (örn. /sub/alex2323): ayarlıyken yalnızca bu bağlantı çalışır, varsayılan bağlantı kapanır. Ad değişse de kalır; abonelik yenilenince (revoke) silinir.
- Hava durumu: yerel saat, gündüz/gece simgesi, saatlik (24 saat) ve 7 günlük tahmin; hem panelde hem müşteri abonelik sayfasında, yerin kendi saat diliminde.
- Mobilde (özellikle 'masaüstü sitesi' modunda) kullanıcı oluştururken isim alanına dokununca sayfanın yakınlaşıp kilitlenmesi düzeltildi.
- Preroute (tüneller) kaldırıldı.

## v2.0.0 <span class="date">2026-11-03</span>

- Xray sürüm seçici: panelin kendi çekirdeği için istediğin XTLS sürümünü kurabilirsin (aranabilir liste). Güvenli: önce yedek alınır, yeni binary canlı config ile test edilir, başlamazsa otomatik eski sürüme dönülür. Her node için de ayrı sürüm kurulabilir (SSH ile, geri alma güvenli).
- Node ajanını node bazında açıp kapatma ve ajansız kurulum; her node benzersiz isimle kurulur.
- IP-limitini tamamen durdurma: genel anahtar + node bazında anahtar. Kapalıyken bağlı IP'ler yalnızca gösterilir, engellenmez.
- Admin silinince tüm kullanıcıları da silinir (geri alınamaz, önce otomatik yedek). Kullanıcıları başka bir admine toplu aktarma. Sudo, kullanıcıyı istediği adminin altında oluşturabilir.
- Her kullanıcıya özel mesaj (announce): müşterinin abonelik sayfasında/uygulamasında profil başlığı/duyuru olarak görünür.
- Hava durumu: her admin kendi konumunu seçer; genel bakışta ve müşterilerin abonelik sayfasında görünür (Open-Meteo).
- Kullanıcı oluştururken hazır şablonlar ve hızlı süre butonları (+1/+3/+7/+30 gün); her riskli işlemden önce otomatik DB yedeği.

## v1.39.3 <span class="date">2026-10-30</span>

- IP limiti artık Google (Cloud Run) ve CDN çıkış IP'lerini saymıyor/engellemiyor — Google üzerinden fronted VLESS/VMESS WS'de kullanıcının kendi tünelinin yanlışlıkla engellenip aralıklı kopmasını (bir veri bir vermio) giderir; IP limiti gerçek/direkt IP'lerde çalışmaya devam eder. Ek aralıklar IP_LIMIT_EXEMPT_CIDRS ile eklenebilir.

## v1.39.2 <span class="date">2026-10-30</span>

- Alt gateway linklerinde Outline ve diğer uygulama formatı düzeltildi: ssconf / uygulama linki (ör. /outline) artık doğru yapılandırmayı döndürüyor

## v1.39.1 <span class="date">2026-10-29</span>

- Online/kullanıcı satırındaki uygulama etiketi artık yalnızca gerçek istemci uygulamalarını gösteriyor; Dalvik, WhatsApp, Mozilla ve diğer genel HTTP/tarayıcı user-agent'ları artık uygulama olarak görünmüyor (etiket ve simge gizleniyor).

## v1.39.0 <span class="date">2026-10-29</span>

- Kenar çubuğundaki yeni 'Marka' bölümünden ayarlanır; abonelik sayfası zaten profil-başlığı/destek-url ayarlarından markalanıyordu.
- Uygulama simgeleri biraz büyütüldü (daha okunaklı) ve daha yüksek çözünürlüklü resmî simgelerle yenilendi.
- RAM (bellek) kartı kullanıcılar sekmesinden kaldırıldı; yalnızca Genel Bakış'ta kalıyor.

## v1.38.0 <span class="date">2026-10-28</span>

- Sohbete dosya ekleme: fotoğraf, ses ve video gönderebilirsin (ataç simgesi). Dosyalar panelde güvenli şekilde (veritabanının yanında, en fazla 25 MB) saklanır ve yalnızca ilgili admin ile sudo görebilir; yedeklere de dahil olur.
- Mesaj düzenleme ve silme: kendi gönderdiğin mesajın üzerindeki ⋮ menüsünden mesajı düzenleyebilir ya da silebilirsin; düzenlenen mesajda 'düzenlendi' etiketi çıkar.
- Online ekranı artık harici panel bağlantılarını da kapsıyor: harici panelden eklenen kullanıcılar online listesine dahil oldu, 'Harici' sütunu ve 'Hariciye göre' sıralama eklendi, ayrıca şu an kaç kullanıcının harici panel üzerinden online olduğu başlıkta rozetiyle gösteriliyor.
- Uygulama simgeleri panele hazır geldi: Hiddify, V2Box, Streisand, Happ, Clash Meta, Clash/Stash, sing-box, Shadowrocket, v2rayNG, NekoBox, Loon, Quantumult X ve Surge resmî simgeleri artık kullanıcı satırında noktanın altında görünüyor (tanınmayanlar için harf rozeti).

## v1.37.0 <span class="date">2026-10-28</span>

- Kullanıcı satırında noktanın altında artık uygulama simgesi görünüyor: resmî logo dosyası varsa (panelde /statics/app-icons/ altına PNG eklenince) o, yoksa uygulamanın baş harfiyle özgün renkli bir rozet — hiçbir zaman boş kalmaz, emoji değil.
- Aramaya UUID/subId desteği: bir istemcinin UUID'sini (veya subId'sini) arama kutusuna yapıştırarak hangi kullanıcıya ait olduğunu bulabilirsin (kullanıcı adı ve nota ek olarak).
- Genel görünüme 'Süresi dolmaya yakın' kutusu eklendi (önümüzdeki 3 gün içinde dolacak aktif kullanıcı sayısı); üstüne tıklayınca kullanıcı listesi doğrudan o kullanıcılara süreye göre sıralı filtrelenir. Aynı filtre durum menüsünde de 'Süresi dolmaya yakın' olarak var.
- Güncelleyici artık standart-dışı veri yoluna sahip kurulumlarda da çalışıyor: güncelleme-öncesi yedek ve bütünlük kontrolü, veritabanı yolunu panelin kendi ayarından okuyor (sabit yol varsaymıyor).

## v1.36.0 <span class="date">2026-10-28</span>

- Kurulum artık sunucuda nginx (ya da 80 portunu tutan başka bir ön proxy) varken de sorunsuz: Let's Encrypt sertifikası alınırken 80 portu geçici olarak boşaltılıp sonra geri açılıyor, mevcut sertifika varsa yeniden kullanılıyor. Sertifika yenileme de yalnızca gerçekten gerektiğinde 80'e dokunuyor.
- Online kullanıcı listesi, GetUsersStats desteklemeyen standart Xray çekirdeklerinde de artık doluyor: çekirdek veri döndürmezse son dakikalardaki node trafiği + online_at'tan online kullanıcılar türetiliyor (finland gibi panelleri de kapsar).
- Xray çökme/başlamama nedenleri artık loglara yazılıyor (stderr yakalama), teşhis kolaylaşıyor.
- Gelişmiş: isteğe bağlı abonelik ağ geçidi — /yol?url=.../sub/&lt;token> biçimindeki eski/dış linkler panel tarafından doğrudan sunulabiliyor (SUB_GATEWAY_PATHS ayarıyla açılır; varsayılan kapalı). Ön proxy'nin tuttuğu bir portla çakışan Xray inbound'u başka bir yerel porta taşıma seçeneği (varsayılan kapalı).

## v1.35.0 <span class="date">2026-10-23</span>

- Kullanıcı satırında, adın altında artık kullanıcının aboneliği hangi uygulamaya eklediyse o uygulamanın simgesi/adı görünüyor (Hiddify, v2box, v2rayNG, Streisand, Clash, sing-box, Shadowrocket... — son User-Agent'tan).
- Cihaz (HWID) limiti aşma denemeleri artık aktivite loglarına ayrıntılı yazılıyor (kullanıcı, engellenen cihaz, IP, uygulama). Not: Hiddify/v2box gibi donanım kimliği göndermeyen uygulamaların sayılması için Ayarlar › Abonelik'teki 'Parmak izi cihazları' seçeneğini açman gerekir (uygulama+IP ile sayar).

## v1.34.1 <span class="date">2026-10-23</span>


## v1.34.0 <span class="date">2026-10-23</span>

- Kayıtlı SSH anahtar kütüphanesi: anahtarları bir kez kaydet/üret, node kurarken listeden seç — her seferinde yapıştırmaya gerek yok. SSH (key) formunda 'Kayıtlı anahtar' seçici + 'Yeni üret' (panelde Ed25519 üretir, açık anahtarı gösterir: VPS'in authorized_keys'ine ekle) + yapıştırılan anahtarı 'Kütüphaneye kaydet'. Anahtarlar şifreli saklanır; özel anahtar hiçbir zaman geri döndürülmez.

## v1.33.1 <span class="date">2026-10-23</span>

- Düzeltme: sub mesajında #Profile-title / #announce / #support-url'e emoji (ASCII-dışı) koyunca 500 hatası veriyordu — artık otomatik base64'leniyor, sorunsuz çalışıyor.
- Host xHTTP extra alanına aç/kapa anahtarı: kapatınca temizlenir/gizlenir, açınca hazır bir şablonla gelir.

## v1.33.0 <span class="date">2026-10-23</span>

- Host başına xHTTP 'extra': xHTTP inbound'larında her host için isteğe bağlı bir JSON 'extra' objesi girilebiliyor (scMaxEachPostBytes, scMaxConcurrentPosts, scMinPostsIntervalMs, xPaddingBytes, noGRPCHeader, xmux...). Boşsa inbound varsayılanları kullanılır; dolu ise abonelik linkindeki xhttp ayarlarına eklenir. Host Ayarları'nda yeni alan (geçerli JSON kontrolü ile).

## v1.32.0 <span class="date">2026-10-23</span>

- Çoklu node: bir VPS artık birden fazla Alexen paneline node olabilir. Her node kendi adına göre ayrı instance kurulur (konteyner/dizin/portlar ayrı) — ikinci panel birincisini bozmaz. ÖNEMLİ: aynı VPS'e ikinci node için SERVICE/API portlarını ve xray inbound portlarını farklı seç.
- VPS terminalinden node kontrolü: kurulumda node'un adıyla bir komut bırakılır (ör. 'usa status', 'usa logs', 'usa restart', 'usa update').
- Temizliğe devre dışı kullanıcılar da dahil edilebiliyor (hem otomatik hem 'tümünü sil').
- Kullanıcı oluştururken süre artık gün/saat/dakika olarak ayarlanabiliyor (on-hold süresi birim seçici; normal son kullanma tarihinde saat:dakika seçimi).

## v1.31.0 <span class="date">2026-10-23</span>

- Süresi dolan kullanıcı temizliği (kullanıcılar sayfasındaki çöp kutusu ikonu, sudo): (1) Otomatik silme — kullanıcılar süreleri dolduktan ayarlanabilir süre sonra (ör. 24 saat) otomatik silinir; limiti dolanları da dahil etme seçeneği var. (2) Manuel — 'Tüm süresi dolanları sil' butonuyla şu an süresi dolmuş tüm kullanıcılar tek seferde (onaylı) silinir. Temizlik job'u artık 15 dakikada bir çalışıyor.

## v1.30.0 <span class="date">2026-10-22</span>

- Kullanıcı harici panelden bağlıyken artık online-IP / bağlantı ekranında gösteriliyor: ' &lt;panel>' (sunucu IP'si + protokoller, ör. 'hysteria / vless · external'), son görülmeye göre. Böylece 'online ama hangisini kullanıyor' belli oluyor.
- Çift sayım düzeltildi: 3x-ui bir client'ın trafiğini her inbound'da aynı toplam olarak raporladığı için artık kullanıcı başına TEK sefer (en yüksek değer) sayılıyor; istatistik tek ' &lt;panel>' etiketinde (panel başına), kota da doğru.

## v1.29.0 <span class="date">2026-10-22</span>

- Harici panel kullanımı artık İSTATİSTİKLERE işleniyor: senkronda her kullanıcının harici paneldeki trafiği, ' &lt;panel> · &lt;protokol>' etiketiyle kullanıcının kullanım dökümüne, genel bakışa ve saatlik grafiklere yazılır — hangi sunucu/protokolü ne kadar kullandığı görünür. Bu kayıtlar paneli silsen bile İSTATİSTİKLERDE KALIR (etikete bağlı, panele değil). Kullanıcı harici panelden bağlanınca online olarak işaretlenir. (Kotaya ekleme hâlâ 'Trafiği Alexen kotasına işle' anahtarına bağlı; istatistik her zaman tutulur. Senkronun açık/canlı olması gerekir.)

## v1.28.0 <span class="date">2026-10-22</span>

- Harici panel push: artık TÜM adminler seçilebiliyor (sudo/kendi hesabın alex77 dahil) — kendi kullanıcılarını da kapsayabilirsin.
- Port/adres değiştirme eklendi: provision'da 'Port değiştir' (ör. 39319:443, 22983:443) ve 'Adres değiştir' (temiz IP/CDN) ile kullanıcının subuna farklı port/host verilir — panele dokunulmaz, uuid/parametreler korunur, adres değişince eski adres sni olarak kalır (sertifika bozulmaz).

## v1.27.0 <span class="date">2026-10-22</span>

- Harici panel push tamamen yeniden yazıldı (çalışan yöntem): artık kullanıcının UUID'sini zorlamıyoruz — panel kendi UUID'lerini üretiyor, biz her kullanıcıya sabit bir subId veriyoruz ve config'leri panelin KENDİ abonelik çıktısından (subLinks) canlı çekiyoruz. Böylece linkler birebir panelinki (hysteria2 security=tls, vless encryption=none vb.) ve her zaman geçerli — reconstruct hatası yok. İsim modu (orijinal/özel/rastgele ülke) ve kapsam canlı linklere uygulanıyor; panel yavaş/erişilemezse abonelik beklemez (30 sn önbellek).

## v1.26.3 <span class="date">2026-10-22</span>

- Düzeltme: harici panelden gelen VLESS config'lerine zorunlu 'encryption=none' parametresi eklendi — bu eksik olduğu için v2rayNG/Hiddify gibi istemciler vless config'ini reddediyordu (bağlanmıyordu). Hysteria2 zaten doğruydu. Düzeltmenin geçerli olması için panelde provision'ı bir kez daha çalıştır.

## v1.26.2 <span class="date">2026-10-22</span>

- Push sonrası harici panelin Xray'i otomatik yeniden yükleniyor — toplu client eklendikten sonra yeni kullanıcılar anında canlı oluyor (eskiden client'lar eklenir ama Xray reload olmadığı için bağlanmazdı; elle yeniden başlatmak gerekiyordu). Otomatik modda yeni kullanıcı eklenince de reload yapılıyor.

## v1.26.1 <span class="date">2026-10-22</span>

- Düzeltme: 'Kullanıcıları panelde aç' (herkes seçiliyken) 500 hatası veriyordu — giderildi. Ayrıca farklı kapsamlarda bırakılan eski push config'leri temizlenip tek sefer ekleniyor (abonelikte çift config yok), ve 'zaten var/duplicate' durumunda kullanıcı sil+yeniden eklenerek tüm inbound'lara düşürülüyor. Canlı panelde uçtan uca test edildi (iki inbound da dolu, uuid eşleşiyor).

## v1.26.0 <span class="date">2026-10-22</span>

- Otomatik push: 'Kullanıcıları panelde aç' penceresinde 'Otomatik' anahtarı — paneli bir kez ayarlayıp inbound'ları seçtikten sonra, yeni eklenen (kapsamdaki) kullanıcılar bu inbound'lara arka planda otomatik oluşturulur. Her seferinde elle çalıştırmaya gerek yok; sen seçimi değiştirene kadar geçerli. Seçimin (inbound/kapsam/isim) hatırlanır ve pencereyi açınca geri gelir.
- External panel bölümü artık Türkmence/Rusça/Farsça/Çince'ye de tam çevrildi (önceden bu dillerde İngilizce kalmıştı).

## v1.25.0 <span class="date">2026-10-22</span>

- Push düzeltmesi: 'Kullanıcıları panelde aç' artık kullanıcıyı SEÇİLEN TÜM inbound'lara ekliyor (eskiden yalnızca ilki/hysteria eklenirdi — 3x-ui aynı email'i ikinci inbound'a kabul etmiyordu). Tek çağrıda tüm inbound'lara, aynı UUID ile; zaten varsa önce silinip tüm inbound'lara yeniden eklenir (idempotent).
- Harici panel: VPS durumu canlı gösteriliyor — Trafik ekranında Xray durumu+sürümü, CPU, RAM, disk, yük, ağ hızı, uptime, genel IP ve panel sürümü (panelin senkron hızıyla güncellenir).

## v1.24.0 <span class="date">2026-10-22</span>

- Harici panel: senkron ayarı eklendi — her panel için Kapalı / Her N saniyede / Canlı seçebilirsin; arka planda trafiği+online'ı çeker (Trafik ekranı kapalıyken bile) ve kullanıcıları online gösterir. İsteğe bağlı 'Trafiği Alexen kotasına işle' anahtarıyla harici kullanım, eşleşen kullanıcının ve bayisinin kotasına eklenir (varsayılan kapalı, yalnızca artış eklenir).
- Harici panel 'İçe aktar' (pull) özelliği KALDIRILDI: paneldeki tüm clientlerin kodunu tek config'e doldurup herkesin subuna dağıtıyordu. Entegrasyon artık yalnızca PUSH ('Kullanıcıları panelde aç').

## v1.23.0 <span class="date">2026-10-22</span>

- Config isimlendirme: harici panel (push/import) ve External config’lerde her config’in kullanıcı uygulamasında görünen adını seçebilirsin — Orijinal, Özel (şablon: &#123;USERNAME&#125; &#123;RANDOM&#125; &#123;FLAG&#125; &#123;COUNTRY&#125; &#123;CAPITAL&#125; &#123;GEO&#125;) veya Rastgele ülke (her kullanıcıya rastgele “ Germany - Berlin” gibi, kullanıcı başına sabit). Sunucuyu gizler, her kullanıcıya özel görünür.

## v1.22.0 <span class="date">2026-10-22</span>

- Harici panel “Kullanıcıları panelde aç” artık configi kullanıcıların SUBUNA da ekliyor: seçilen her inbound için, o sunucunun configi her kullanıcının kendi UUID’siyle abonelik linkine düşer (vless/hysteria2/trojan). Panelde oluşturulan client ile uuid birebir aynı.

## v1.21.0 <span class="date">2026-10-22</span>

- Harici panel “Kullanıcıları panelde aç” (push): seçili Alexen kullanıcılarını, seçtiğin 3x-ui inbound(lar)ında client olarak oluşturur — UUID’ler Alexen’dekiyle AYNI. Hangi inbound ve hangi kapsam (herkes/bayiler) senin seçimin. Trafik/online Trafik sekmesinde görünür. (v3.x clients API ile.)

## v1.20.5 <span class="date">2026-10-22</span>

- Harici panel içe aktarma hata mesajı netleşti: 3x-ui panelinde kullanıcı yoksa artık doğru uyarı veriyor (eskiden yanlışlıkla s-ui yazıyordu)

## v1.20.4 <span class="date">2026-10-22</span>

- Harici panel içe aktarma artık hysteria2 (3x-ui hysteria v2) linklerini de üretiyor (sni/alpn/insecure/obfs-salamander ile). Not: inbound’da client/kullanıcı yoksa aktaracak bir şey olmaz — önce panelde kullanıcı olmalı

## v1.20.3 <span class="date">2026-10-22</span>

- Harici panel içe aktarma artık her inbound’u ayrı bir External-config girdisi yapar (External configs sayfasında tek tek sıra/konum/aç-kapa yönetilir) + içe aktarırken üst/alt konum seçimi

## v1.20.2 <span class="date">2026-10-21</span>

- Düzeltme: Abonelik ayarlarındaki “Hiddify cihaz sayımı” ve cihaz-mesajı/rate-limit alanları arayüzde düzgün görünüyor (1.20.1’de arayüz derlenememişti)

## v1.20.1 <span class="date">2026-10-21</span>

- Hiddify gibi cihaz kimliği göndermeyen uygulamalar için cihaz limiti: Abonelik ayarlarından açınca bu uygulamalar uygulama+IP parmak iziyle cihaz limitine sayılır

## v1.20.0 <span class="date">2026-10-21</span>

- Abonelik domaini için “Mod”: “Sadece web sayfası” mod’unda ham abonelik VPN uygulamalarına verilmez (her istek web sayfasını alır, kullanıcı oradan import eder) — genel ve bayi bazında
- Bayi abonelik profilinde kendi “path”ı ve mod’u ayarlanabiliyor
- Abonelik güncelleme hız sınırı (sub rate limit) — bir kullanıcının iki çekişi arası en az saniye
- Cihaz (HWID) limiti aşılınca gösterilecek özel mesaj

## v1.19.0 <span class="date">2026-10-21</span>

- Harici panel içe aktarma: 3x-ui/s-ui panelinin config’lerini seçtiğin bayilere ya da herkese kullanıcıların aboneliğine ekle; port yeniden eşleme (ör. 8443→443) ve sahte-lokasyon kopyaları (farklı adres/port) ile. Önce Önizle, sonra İçe aktar.

## v1.18.0 <span class="date">2026-10-21</span>

- Harici panel: canlı trafik/çevrimiçi gösterimi — Harici panel > Trafik ile bağlı 3x-ui/s-ui panelinin toplam yükleme/indirme, çevrimiçi sayısı ve kullanıcı bazlı trafiği birkaç saniyede bir yenilenerek gösterilir

## v1.17.1 <span class="date">2026-10-21</span>

- Yöneticiler listesinde her adminin anlık kullanıcı sayısı gösteriliyor (ör. 42 / 100)

## v1.17.0 <span class="date">2026-10-21</span>

- Harici panel (3x-ui / s-ui) entegrasyonu — ilk aşama: Ayarlar > Harici panel bölümünden 3x-ui veya s-ui paneli ekle, bağlantıyı test et ve inbound'larını gör (parola şifreli saklanır). Konfig içe aktarma, canlı trafik ve sahte-lokasyon kopyaları sıradaki aşamalarda.

## v1.16.2 <span class="date">2026-10-21</span>

- Dokümantasyon yenilendi: göz alıcı, rol seçicili (Bayi/Sudo) kullanım kılavuzu — hızlı başlangıç adımları, neler yapabilirsin, abonelik/&#123;token&#125; ve API
- Güncelleme bölümündeki 'güncellendi' bilgisine kapatma düğmesi eklendi (zaten 1 saatte kendiliğinden kayboluyor)

## v1.16.1 <span class="date">2026-10-21</span>

- Düzeltme: Dokümantasyon sayfasında içindekiler linkleri (ör. #roller) hata vermiyor; artık bölüme yumuşak kaydırıyor

## v1.16.0 <span class="date">2026-10-21</span>

- Panele Dokümantasyon bölümü eklendi (yan menü): roller/izinler, kullanıcılar, abonelik ve &#123;token&#125;, node/host, external config ve REST API kullanımı — TR/EN

## v1.15.2 <span class="date">2026-10-21</span>

- Abonelik mesajlarına &#123;token&#125; yer tutucu: kullanıcının kendi abonelik token'ını ekler (ör. kendi destek linkinizde https://site/destek?t=&#123;token&#125;)

## v1.15.1 <span class="date">2026-10-21</span>

- Config kopyalama izni kapalı bayide artık SADECE configler (kodlar) gizlenir; abonelik (sub) adresi yine kopyalanabilir
- Limit değiştirme izni kapalı bayi artık bir kullanıcının cihazını veya IP'sini silemez / engelini kaldıramaz (salt-okunur IP/cihaz limitlerine ek olarak)

## v1.15.0 <span class="date">2026-10-21</span>

- Etkinlik günlüğünde olay türüne göre arama: artık 'başarısız giriş' gibi yazarak da arayabilirsin, sadece kullanıcı/IP değil
- Düzeltme: config kopyalama izni kapalı bir bayi, kullanıcı oluşturduktan/düzenledikten sonra da config kopyalayamıyor (önceden bu durumda kopyalayabiliyordu)
- Düzeltme: yoğun panellerde ayarları (ör. bayi abonelik mesajı) kaydederken ara sıra çıkan 'veritabanı meşgul' hatası giderildi

## v1.14.0 <span class="date">2026-10-21</span>

- Admin başına sayaçlar: kaç kullanıcı açtı / sildi (Yöneticiler listesinde)
- Her kullanıcı için: engellenen yeni IP sayısı ve reddedilen yeni cihaz sayısı (kullanıcı penceresinde)

## v1.13.1 <span class="date">2026-10-18</span>

- Yönetici silerken onay soruluyor (yanlışlıkla silmeyi önler); kullanıcıları olan bir admini silmeden önce uyarır

## v1.13.0 <span class="date">2026-10-18</span>

- External abonelik kaynaklarına yedek (fallback) URL'ler: ana URL hata verirse sıradaki denenir; istediğin kadar ekleyebilirsin
- External kaynaklarda 'rastgele URL' seçeneği: havuzdan her yenilemede rastgele bir URL çekilir
- External kaynaklara protokol filtresi: sadece seçtiğin protokoller tutulur (vless, vmess, trojan, shadowsocks, hysteria2)
- Kullanıcı transferi: bir adminin tüm kullanıcılarını başka bir admine taşı (Yöneticiler sayfasında)

## v1.12.0 <span class="date">2026-10-17</span>

- Lisans panelinde her panelin node listesi, admin listesi ve toplam trafiği görünür
- Lisans panelinden bir panele mesaj gönderebilirsin; panel bir sonraki denetimde tüm adminlere gösterir

## v1.11.0 <span class="date">2026-10-17</span>

- Kullanıcı istatistikleri: kullanıcı penceresinde ne zaman oluşturulduğu, aboneliği en son ne zaman güncellediği ve kaç kez güncellediği görünür
- Genel Bakış'a 'Abonelik güncellemeleri' kutusu: seçili dönemde aboneliğini güncelleyen kullanıcı sayısı

## v1.10.0 <span class="date">2026-10-17</span>

- Toplu protokol: bir protokolü (ör. Hysteria) tüm ya da bir adminin kullanıcılarında tek seferde aç/kapat. Kullanıcı filtresi çubuğundaki yeni düğme (sudo).
- Not: bir protokol, ancak kullanıcının hesabında açıksa aboneliğe gelir; host ve inbound eklemek tek başına yetmez — bu düğme onu toplu halleder.

## v1.9.0 <span class="date">2026-10-16</span>

- Profilim sayfası: profil resmi, görünen ad, biyografi, iletişim ve kendi şifreni değiştirme; resimler yönetici listesinde ve kenar çubuğunda görünür
- Kullanıcı filtresine 'durum' ve 'admin' eklendi; telefonda da düzgün çalışıyor (admin seçince sadece o adminin kullanıcıları görünür)
- Kurulum yenilendi: domain'i atlayabilirsin, sertifika alınamazsa kurulum durmaz (IP ile başlar, sonra 'alexen cert domain' ile gerçek sertifika), kendi .env'ini verebilirsin (ALEXEN_ENV_FILE)
- alexen komut satırı baştan tasarlandı (menü, yardım, durum ekranları)

## v1.8.0 <span class="date">2026-10-15</span>

- Lisans: panel bir lisans anahtarıyla etkinleşir; Ayarlar > Lisans sayfası ve Genel Bakış'ta kalan gün, etkinlik tarihi ve kullanıcı / admin / node sınırları
- Lisans sınırları: aynı anda en fazla kullanıcı, admin ve node sayısı; dolunca yenisi eklenmez
- Lisans sunucusuna ulaşılamazsa panel kayıtlı lisansla çalışmaya devam eder; bitişten sonra 7 gün tolerans
- Lisans geçerli değilse yalnızca yönetim kilitlenir: VPN kullanıcıları, node'lar ve abonelik linkleri çalışmaya devam eder
- Kurulum ve güncellemeler artık lisans sunucusundan iner (imzalı ve doğrulanmış); alexen license komutu

## v1.7.0 <span class="date">2026-10-15</span>

- Host gruplarında "Tüm hostlar": bir tıkla hepsini seç ya da bırak
- Her profil (inbound) için ayrı "hepsini seç": o profilin bütün hostları bir tıkla; kısmen seçiliyse yarım işaret ve seçili sayısı görünür

## v1.6.1 <span class="date">2026-10-15</span>

- IP limiti Xray 26.3.27 ve öncesinde de çalışıyor: engelleme kuralı bu sürümlerin anladığı biçimde gönderiliyor (önceden hiç eşleşmiyordu)
- Engellenen IP 90 saniye engelli kalıyor: önceden birkaç saniyede bir açılıp kapanıyordu; limitte yer açılınca hemen serbest kalıyor
- Kullanıcı oluşturulamadığında sebebi görünüyor (hesap süresi doldu, kullanıcı limiti, trafik kotası, bağlantı yok): önceden hiçbir şey olmuyordu
- Bayi bitiş tarihi seçilen günün sonuna kadar geçerli; süresi dolan bayiler listede işaretli

## v1.6.0 <span class="date">2026-10-15</span>

- Telegram botu panelden kuruluyor (Ayarlar → Telegram): token, yönetici ID'leri, dil, proxy
- Bot: durum, online kullanıcılar, kullanıcı sorgulama, istenince yedek; seçilen aralıkla otomatik yedek gönderimi
- Gelişmiş alexen komutu: menü, status, doctor (sağlık kontrolü), env/edit (ayarlar), backup/restore, core (Xray sürümü, sorun olursa geri döner), passwd, cert, sekme tamamlama
- Kurulum: şifre kısa ya da terminal yokken soru sonsuza dek tekrarlanmıyor

## v1.5.1 <span class="date">2026-10-15</span>

- Bağlı IP'ler her Xray sürümünde görünüyor: Xray 26.3.27 kullanıcıların IP'lerini eski yoldan vermiyordu, liste boş kalıyordu
- Bu yüzden IP limiti de ana sunucuya bağlananlarda çalışmıyordu; artık çalışıyor

## v1.5.0 <span class="date">2026-10-15</span>

- Panel artık panelden güncelleniyor: yeni sürümü denetle, değişiklikleri gör, tek tıkla güncelle (önce yedek alınır, sorun olursa eski sürüme geri dönülür)
- Alexen sürüm numaraları ve Telegram destek bağlantısı (@alexvpns)

## v1.4.3 <span class="date">2026-10-14</span>


## v1.4.2 <span class="date">2026-10-14</span>


## v1.4.1 <span class="date">2026-10-14</span>


## v1.4.0 <span class="date">2026-10-14</span>

- Çalışan kurulum scripti (Let's Encrypt veya kendinden imzalı sertifika)
- Telefon ve tablet görünüm düzeltmeleri

## v1.3.0 <span class="date">2026-10-14</span>

- CDN arkasında gerçek IP
- Daha kararlı Hysteria
- Sunucudan temiz kaldırma
- Daha hızlı yükleme

## v1.2.0 <span class="date">2026-10-14</span>

- Outbound'lar: kullanılmıyor rozeti, inbound'ları outbound'a yönlendirme, ulaşılamayan çıkış uyarısı
- Daha hızlı sayfalar

## v1.1.0 <span class="date">2026-10-09</span>

- Güvenlik ve veri bütünlüğü düzeltmeleri
- Yedekleme / geri yükleme
- Daha hızlı kullanıcı listeleri
- Karanlık giriş sayfası

## v1.0.0 <span class="date">2026-10-08</span>

- İlk Alexen sürümü
