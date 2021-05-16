//sehirler diye bir dizi olusturun
//her dizi sehirler hakkında bilgi versin adı,plaka,komsuları gibi
//dizi oluşturulduktan sonra şehir adına göre a dan z ye göre sıralama yapınız.

let sehirler = [
    {
        adi : "Denizli",
        plaka : 20,
        komsulari : ["Aydın,İzmir,Manisa,Muğla,Antalya"]
    },
    {
        adi : "İstanbul",
        plaka : 34,
        komsulari : ["Kocaeli,Edirne,Kırklareli,Bolu"]
    },
    {
        adi : "İzmir",
        plaka : 35,
        komsulari : ["Denizli,Manisa,Muğla,Antalya"]
    },
    {
        adi : "Konya",
        plaka : 42,
        komsulari : ["Adana,Mersin,Şanlıurfa"]
    },
    {
        adi : "Adana",
        plaka : 1,
        komsulari : ["Adana,Mersin,Şanlıurfa"]
    }
];
let sehirleriSirala = sehirler.sort(function (birinci,ikinci) {
    //alfabetik olarak baştan sona sıralama işlemi
    if (birinci.adi>ikinci.adi){
        return 1;
    }
    else if (birinci.adi<ikinci.adi){
        return -1;
    }
    else{
        return 0;
    }
});
console.log(sehirleriSirala);