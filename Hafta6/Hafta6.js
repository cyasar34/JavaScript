/*let yas=Number(prompt("Lütfen yaşınızı giriniz: "));
let butce=Number(prompt("Lütfen bütçenizi giriniz: "));
if (yas>18 && butce>2000)
{
    alert("Ehliyet sınavına girebilirsiniz");
}
else
{
    alert("Ehliyet sınavına giremezsiniz");
}*/








/*let sinav1 = Number(prompt("1. Sınav Notunuzu Giriniz: "));
let sinav2 = Number(prompt("2. Sınav Notunuzu Giriniz: "));
let sinav3 = Number(prompt("3. Sınav Notunuzu Giriniz: ")); 
let ortalama = (((sinav1*20)/100)+((sinav2*30)/100)+((sinav3*50)/100));
alert ("Ortalamanız: "+ortalama);
if(ortalama > 60)
{
    alert("Dersten geçtiniz Tebrikler");
}           
else
{
    alert("Dersten kaldınız");
}*/



/*let kilo=Number(prompt("Kilounuzu Giriniz"));
let boy=Number(prompt("Boyunuzu metre cinsinden giriniz"))
let sonuc=kilo/(boy*boy);
if(sonuc<18.5)
{
    alert("İdeal kilonun altındasınız "+sonuc);
}
else if(sonuc>=18.5 && sonuc<=24.9)
{
    alert("İdeal kilodasınız "+sonuc);
}
else if (sonuc>=25 && sonuc<=29.9)
{
    alert("İdeal kilonun üzerindesiniz "+sonuc);
}
else 
{
    alert("İdeal kilonun çok üzerindesiniz "+sonuc);
}*/




/*let sayi=prompt("1 ile 5 arasında sayı giriniz: ");
switch (sayi)
{
    case "1" :
        alert("Girilen Sayı 1'dir");
        break;
    case "2" :
        alert("Girilen Sayı 2'dir");
        break;
    case "3" :
        alert("Girilen Sayı 3'dür");
        break;
    case "4" :
        alert("Girilen Sayı 4'dür");
        break;
    case "5" :
        alert("Girilen Sayı 5'dir");    
        break;  
    default:
        alert("Girilen sayı 1-5 arasında değildir");
        break;  
    }*/









/*let metin="MERHABA DÜNYA";
alert(metin.toLowerCase());

let metin2="merhaba dünya";
alert(metin2.toUpperCase());*/








/*let mevsim=prompt("İlkbahar, Sonbahar, Kış ve Yaz Mevsimlerinden birini Yazınız?");
switch (mevsim.toLowerCase())
{
    case "kış":
        alert("Kayak yapabilirsiniz!");
        break;
    case "ilkbahar":
        alert("Doğa yürüyüşü yapabilirsiniz!");         
        break;
    case "yaz":
        alert("Denize gidebilirsiniz!");
        break;
    case "sonbahar":
        alert("Yaprak toplayabilirsiniz!");
        break;
    default:            
    alert("Böyle bir mevsim yok!");
}*/







/*document.writeln("<u>0'dan 10'a kadar olan çift sayılar:</u> "+"<br>");
for (let i=0; i<=10; i+=2)
{
    document.writeln(i);
}
document.writeln("<br><u>1'den 10'a kadar olan tek sayılar:</u> "+"<br>");
for(let j=1; j<=10;j+=2)
{
    document.writeln(j);
}*/





/*let sayi=prompt("Lütfen Sayı Giriniz");
let faktoriyel=1;
for(let i=1; i<=sayi; i++)
{
    faktoriyel*=i;
}
alert(sayi+" sayısının faktöriyeli: "+ faktoriyel);*/











let dogruSifre = "1234";
let girilenSifre = "";
let denemeSayisi = 0;
while (girilenSifre !== dogruSifre && denemeSayisi < 3) 
    {
    girilenSifre = prompt("Şifrenizi giriniz:");
    denemeSayisi++;
    if (girilenSifre !== dogruSifre) 
    { alert("Hatalı şifre! Kalan deneme hakkı: " + (3 - denemeSayisi));  }
}
if (girilenSifre === dogruSifre) 
{ alert("Giriş başarılı! Hoş geldiniz..."); } 
else 
{ alert("Hesabınız bloke oldu!"); }














































