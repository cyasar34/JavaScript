let secim;
let bakiye=1000;
do{
secim=prompt(
    `OYUN MENÜSÜ
    1 - Para Yatır
    2 - Para Çek
    3 - Bakiye Görüntüle
    4 - Çıkış
    Seçiminiz (1-4):`
);
switch(secim){
    case "1":
        let yatirilanMiktar=Number(prompt("Yatırılacak Miktar"));
        if(yatirilanMiktar>0){
            bakiye+=yatirilanMiktar;
            alert(`${yatirilanMiktar} TL yatırıldı. Yeni Bakiyeniz: ${bakiye}`);
        } else {
            alert("Geçersiz miktar. Lütfen pozitif bir değer girin.");
        }
        break;
        case "2":
            let cekilenMiktar=Number(prompt("Çekilecek Miktar"));
            if(cekilenMiktar>0 && cekilenMiktar<=bakiye){
                bakiye-=cekilenMiktar;
                alert(`${cekilenMiktar} TL çekildi. Yeni Bakiyeniz: ${bakiye}`);
            } else {
                alert("Geçersiz miktar. Lütfen bakiyenizden fazla çekim yapmayın veya negatif bir değer girmeyin.");
            }
            case "3":
                alert(`Bakiyeniz: ${bakiye} TL`);
                break;  
            case "4":
                alert("Çıkış yapılıyor...");
                break;  
    }
} while(secim !== "4");
