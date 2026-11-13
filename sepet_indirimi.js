let urunFiyati=Number(prompt("Ürün Fiyatını Giriniz:"));
const indirimliFiyatiHesapla=function(orjinalFiyat,indirimYuzdesi)
{
    const indirimMiktari=orjinalFiyat*(indirimYuzdesi/100);
    const nihaiFiyat=orjinalFiyat-indirimMiktari;
    return nihaiFiyat;
}
let kazancim=indirimliFiyatiHesapla(urunFiyati,25);
document.writeln(`Ürünün %25 indirimle :${kazancim} TL'ye satılacaktır.`);
