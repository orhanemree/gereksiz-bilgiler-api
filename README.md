# 🧠 Gereksiz Bilgiler API
100'den fazla gereksiz bilgi ile oluşturulmuş bir JSON API.

## 🧐 Basit Kullanım

```bash
GET https://gereksiz-bilgiler-api.herokuapp.com
```

## Sonuç 

```json
{
  "fact": "İnsanların %74'ü bir şey alırken cüzdanındaki bozuk paralar yetiyorsa onu bedavaya almış hissine kapılıyor.",
  "id": 102
}
```

## 💻 Kullanılan Teknolojiler
* Node / Express.js

## 🔷 Endpointler
|Endpoint|Sonuç|
|-----|-----|
|/|Rastgele bir gereksiz bilgi döndürür.|
|/all|Tüm gereksiz bilgileri döndürür.|
|/:id|Girilen id'ye ait gereksiz bilgiyi döndürür.|

## Örnek

```bash
GET https://gereksiz-bilgiler-api.herokuapp.com/5
```

## Sonuç

```json
{
  "fact": "Eyfel Kulesi'nin tepesine kadar 1792 basamak vardır.",
  "id": 5
}
```

## 💪 Katkıda Bulunanlar
* Gereksiz bilgilerim toplanmasında ve ```facts.json``` dosyasının oluşturulmasında emeği geçen [İlknur Ceren Akkaya](mailto:ilkcerakkaya@gmail.com)'ya teşekkür ederim.

## 📃 Lisans
* Gereksiz Bilgiler API [Apache License 2.0](https://github.com/orhanemree/gereksiz-bilgiler-api/blob/master/LICENSE) ile lisanslanmıştır.