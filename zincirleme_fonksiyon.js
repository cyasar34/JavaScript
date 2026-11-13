const trimle=(metin)=>{
    return metin.trim();
}
const buyukHarfYap=(metin)=>{
    return metin.toUpperCase();
}
const formatla=(metin)=>{
    return `İşlenmiş Veri: ${metin}`;
}
let kullaniciGirdisi=prompt("Lütfen başında ve sonunda boşluk olan bir metin giriniz:");
const nihaiSonuc=formatla(buyukHarfYap(trimle(kullaniciGirdisi)));
document.writeln(nihaiSonuc);
