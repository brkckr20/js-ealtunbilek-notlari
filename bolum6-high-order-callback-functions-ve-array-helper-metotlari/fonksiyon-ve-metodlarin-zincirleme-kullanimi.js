const sayilar = [1,2,3,4,5,6,7,8,9];

// DİZİ İÇERİSİNDEKİ TEK ELEMANLARI ALIP, BİR DİZİYE AKTAR VE AKTARDIĞIN DİZİ İÇERİSİNDEKİ ELEMANLARIN KARELERİNİ ALARAK YENİ DİZİ OLUŞTUR.
// devamında ise dizi içerisindeki karesi alınmış tek elemanlı sayıların toplamını da bul

function sonucuBul(sayilar) {
    const tekElemanlariIcerenDizi = sayilar.filter(function (sayi) {
        return sayi % 2 !== 0;
      });
      console.log("Tek elemanlı dizi " + tekElemanlariIcerenDizi);

    const elemanlarinKareleri = tekElemanlariIcerenDizi.map(function (sayi) {
        return sayi * sayi;
      });
    console.log("Tek elemanlı dizinin elemanlarını karesi : " + elemanlarinKareleri);

    const toplam = elemanlarinKareleri.reduce(function (genelToplam,sayi) {
        if (sayi > 10) {
            return genelToplam = genelToplam + sayi;
        }
        else{
            return genelToplam;
        }
      },0);
    return toplam;
}
console.log(sonucuBul(sayilar));

function kisaVersiyonu(sayilar) {
    const sonuc = sayilar.filter(function (sayi) {
        return sayi % 2 !== 0;
    }).map(function (sayi) {
        return sayi * sayi;
    }).reduce(function (genelToplam,sayi) {
        if (sayi > 10){
            return genelToplam = genelToplam + sayi;
        }
        else{
            return genelToplam;
        }
    },0);
    console.log(sonuc);
}
kisaVersiyonu(sayilar);
console.log("///");
function arrowVersiyonu(sayilar) {
    const sonuc = sayilar.filter((sayi) => sayi % 2 !== 0)
                         .map((sayi) => sayi * sayi)
                         .reduce((genelToplam,sayi) => sayi > 10 ? genelToplam = genelToplam + sayi :genelToplam,0);
    console.log(sonuc);
}
arrowVersiyonu(sayilar);