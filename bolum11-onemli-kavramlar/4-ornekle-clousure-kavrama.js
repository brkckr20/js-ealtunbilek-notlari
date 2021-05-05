//CLOUSURE ÖRNEK 1

const sayilariTopla = () => {
    console.log("Fonksiyon başladı");

    const a = 10, b = 30;
    const topla = () => {
        console.log("Toplam : " + (a + b) );
    };
    /*return topla;*/
    setTimeout(topla,6000);

    console.log("fonksiyon bitti");
};

sayilariTopla();

/**
 *  fonksiyon çağırıldı ve bitti fakat içerisindeki a ve b değişkenleri fonksiyon çağırılıp bitmesine rağmen
 *  daha sonradan çalıştı. ve bu da clousure ile oldu.
 * */


//   sayilariTopla()();
//alttaki çağırım üstteki ile aynı
/*const a = sayilariTopla();
a();*/


console.log("------------------");
//CLOUSURE ORNEK 2

const sayacIslemleri = () => {
    console.log("Sayaç işlemleri fonksiyonu başladı");
    let sayac = 0;
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");

    h1.addEventListener('click', ()=>{
        sayac++;
        console.log("Sayac : " + sayac);
    });
    h2.addEventListener('click', ()=>{
        sayac--;
        console.log("Sayac : " + sayac);
    });
    console.log("Sayaç işlemleri fonksiyonu bitti");
};
//fonksiyon çağırıldıktan sonra başlayıp bitmesine rağmen başlıklara tıklanılması halinde log'a sayaç değerlerini yazdırabiliyoruz
//bu closure a bir örnektir.
sayacIslemleri();




//CLOSURE ORNEK 3

const hesapMakinesi = (sayi1,sayi2) => {
    function toplam() {
        console.log("Toplamı : " + (sayi1 + sayi2));
    }

    function carpimi() {
        console.log("Çarpımı : " + (sayi1 * sayi2));
    }

    return {
        /**
         *  key value ile aynı ise ,
         *  carp,
         *  topla,
         *  şeklinde tek parametre olarak yazılabilir.
         * */
        topla : toplam,
        carp : carpimi
    }
};

const uygulama = hesapMakinesi(7,77);
uygulama.topla();
uygulama.carp();
console.log(uygulama);



//CLOSURE ORNEK 4

function kronometreUygulamasi() {
    let baslangicZamani = Date.now();

    function neKadarSurdu() {
        let gecenZaman = Date.now() - baslangicZamani;
        console.log("Geçen zaman : " + gecenZaman + " ms'dir");
    }
    return neKadarSurdu;
}

const kronometre = kronometreUygulamasi();


//zaman alan bir fonksiyon yazalım
for (let i = 0; i < 50000000; i++){
    let gecici = Math.random()* 50000;
}

kronometre();