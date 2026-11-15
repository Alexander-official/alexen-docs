# Komut satırı (alexen)

Panel sunucusunda bir `alexen` komutu vardır. Root olarak çalıştır. Tek başına `alexen` menü açar, `alexen help` her şeyi listeler.

```bash
alexen status          # sürüm, adres, sertifika, kullanıcılar, son yedek
alexen doctor          # her şeyi denetle ve neyin yanlış olduğunu söyle
alexen logs [-n 200] [--no-follow]
alexen restart | up | down
alexen update          # en yeni sürüm (panelden de: Settings > Update)
alexen backup [list]   # şimdi yedek / kayıtlı yedekler
alexen restore [DOSYA] # bir yedeği geri koy (şimdiki veri önce kaydedilir)
alexen env [list|get|set|unset]   # panel ayarları; alexen edit bir düzenleyicide açar
alexen core [list|latest|SÜRÜM|reset]   # Xray çekirdek sürümü (başarısız olursa eskisine döner)
alexen cert [renew]    # sertifika
alexen passwd [AD]     # bir yönetici için yeni parola
alexen admins | admin [AD] | cli ...
alexen completion      # sekme tamamlama
```

## Sık kullanılan ayarlar

`alexen env set AD DEĞER` ile değiştir, sonra `alexen restart`.

| Ad | Amaç |
| --- | --- |
| `UVICORN_PORT` | Panel portu (varsayılan 8000). |
| `DOCS` | `True` yapınca `/docs` adresinde Swagger UI açılır. |
| `TELEGRAM_API_TOKEN` | Bot token'ı (panelden de girilebilir). |
| `LOGIN_MAX_FAILS_PER_IP` | 429'dan önce adres başına başarısız giriş (varsayılan 20). |
| `LOGIN_MAX_FAILS_PER_USER` | Adres ve kullanıcı adı başına başarısız giriş (varsayılan 5). |
| `LOGIN_FAIL_WINDOW` | Sayım penceresi, saniye (varsayılan 600). |

Hysteria2 inbound'ları node'da Xray **v26.3.27 veya üstünü** ister. Eski node'lar çalışır ama Hysteria2'yi atlar.
