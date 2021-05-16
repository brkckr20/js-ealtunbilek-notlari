//dizinin yada objenin elemanlarını tek tek ele alarak bi işleme tabi tutar ve geriye döndürür.

const sayilar = [1,2,3,4,6,3,2]; //eşittir ile yeni tanımlama yapılırsa const larda hata alırız
sayilar.push(13);

const yenisayilar = sayilar.map(function (sayi) {
    return sayi * 2;
});
console.log(yenisayilar);
//---------------------------------------
console.log("**************************");
console.log(sayilar);

const kitaplar = [
    {
        adi : 1,
        sayfasayisi : 30
    },
    {
        adi : 2,
        sayfasayisi : 231
    },
    {
        adi : 3,
        sayfasayisi : 21
    }
];

const  sayfasayilari = kitaplar.map(function (kitap) {
    return kitap.sayfasayisi;
})

console.log("**************************");
console.log(sayfasayilari);


const kisiler = [
    {
        ad : "Burak",
        soyad : "Çakır"
    },
    {
        ad : "ismet",
        soyad : "safd"
    },
    {
        ad : "ismail",
        soyad : "altun"
    }
];
const yeniisim = kisiler.map((kisi)=> kisi.ad + " " + kisi.soyad);
console.log(yeniisim);


console.log("**********************  kendi map yapımız*********************");

function kendiMapYapim() {
    const yenidizim = [];
    return yenidizim;
}

const olusanYeniDizi = kendiMapYapim(sayilar)