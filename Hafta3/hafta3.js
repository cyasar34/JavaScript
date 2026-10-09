//console.log("Çisem");


//Kullanıcıdan ismini al console ve dokümana yazdır
/*let isim=prompt("İsminizi giriniz: ");
console.log("Merhaba " + isim);
document.writeln("<h1>Merhaba " + isim + "</h1>");*/

//Kullanıcıdan alınan iki ayrı sayıyı toplayıp sonucu web
//sayfasında gösteren bir dijital cep hesap makinesi
//oluşturunuz?
/*let sayi1=prompt("Birinci sayıyı giriniz: ");;
let sayi2=prompt("İkinci sayıyı giriniz: ");
let toplam=Number(sayi1)+Number(sayi2);
document.writeln("<h1>Sayıların Toplamı: " + toplam + "</h1>");*/


/*const dogruSifre="1234";
let girilenSifre=prompt("Şifrenizi giriniz: ");
document.writeln("<h1>Girdiğiniz Şifre: " + girilenSifre + "</h1>");
document.writeln("<h1>Doğru Şifre: " + dogruSifre + "</h1>");*/




let urunAdi=prompt("Ürün adını giriniz: ");
let urunKategori=prompt("Ürün kategorisini giriniz: ");
let urunAciklama=prompt("Ürün açıklamasını giriniz: ");
let birimFiyati=Number(prompt("Birim fiyatını giriniz: "));
let adet=Number(prompt("Adet sayısını giriniz: "));
let araToplam=birimFiyati*adet;
let kdvTutari=araToplam*0.18;
let kargoUcreti=49;
let sonToplam=araToplam+kdvTutari+kargoUcreti;
let siparisNumarasi=Math.floor(Math.random()*1000000);

document.writeln("<h1><b>Sipariş Özeti: </b></h1>"+"<hr>"+
    "Ürün Adı: " + urunAdi + "<br>" +
    "Ürün Kategorisi: " + urunKategori + "<br>" +
    "Ürün Açıklaması: " + urunAciklama + "<br>" +
    "Son Toplam: " + sonToplam + "<br>" +
    "Sipariş Numarası: " + siparisNumarasi
);











