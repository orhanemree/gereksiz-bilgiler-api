# Gereksiz Bilgiler API

'den fazla gereksiz bilgi ile oluşturulmuş bir JSON API.

## Basit Kullanım

```bash
GET https://gereksiz-bilgiler-api.herokuapp.com/
```

## Sonuç

```json
{
    "id": 1,
    "fact": "Eğer bir fotoğrafta bir insan gözüne yeterli miktarda zum yaparsanız, bu insanın gözüne düşen görüntüleri görebilirsiniz."
}
```

<br>

## Endpointler

|Endpoint|Sonuç|
|--------|-----|
|/|JSON biçiminde rastgele bir gereksiz bilgi döndürür.|
|/:id|Girilen id'ye göre JSON biçiminde gereksiz bilgi döndürür.|

<br>

## Katkıda Bulunanlar
Bilgilerin toplanmasında ve <a href="https://github.com/orhanemree/gereksiz-bilgiler-api/blob/master/facts.json">facts.json</a> dosyasının hazırlanmasında emeği geçen <a href="mailto:ilkcerakkaya@gmail.com">İlknur Ceren Akkaya</a>'ya teşekkür ederim.

## Kaynakça
*/Buraya kaynakça yazılacak/*

## Lisans
Gereksiz Bilgiler API [Apache License 2.0](https://github.com/orhanemree/gereksiz-bilgiler-api/blob/master/LICENSE) ile lisanslanmıştır.