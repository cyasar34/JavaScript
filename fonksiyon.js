//Function Declaration Örneği
function selamVer(isim){
    const mesaj="Hoş Geldiniz"+isim+"!";
    return mesaj;
}
let selamlama=selamVer("Çisem");
document.writeln("<u>Fonksiyon Declaration Örneği</u><br>");
document.writeln(selamlama+"<br><br>");

//Function Expression Örneği
const carpmaIslemi=function(sayi1,sayi2){
    const sonuc=sayi1*sayi2;
    return sonuc;
}
let hesapSonucu=carpmaIslemi(5,6);
document.writeln("<u>Fonksiyon Expression Örneği</u><br>");
document.writeln("İşlem Sonucu: "+hesapSonucu+"<br><br>");

//OK (Narrow) Function Örneği
const FarkAl=(sayi1,sayi2)=>sayi1-sayi2;
let sonuc=FarkAl(10,4);
document.writeln("<u>OK (Narrow) Function Örneği</u><br>");
document.writeln("İşlem Sonucu: "+sonuc+"<br><br>");
