function ogrenciyiBul(id) {
    const ogrenciDizisi = new Array(30).fill({
        ad : '',
        id : 0
    }).map(function (ogr,index) {
        return {
            ad : "Öğrenci " + index,
            id : index
        };
    });
    console.log("Dizi oluşturuldu ve dolduruldu");
    return ogrenciDizisi[id];
}

console.log(ogrenciyiBul(3));
console.log(ogrenciyiBul(6));
console.log(ogrenciyiBul(14));
/**
 *  her seferinde diziyi yeniden oluşturur ve bu da performans kaybına neden olur.
 * */


console.log("---------------");
function ogrenciIslemleri() {
    const ogrenciDizisi = new Array(30).fill({
        ad : '',
        id : 0
    }).map(function (ogr,index) {
        return {
            ad : "Öğrenci " + index,
            id : index
        };
    });
    console.log("Dizi oluşturuldu ve dolduruldu");

    function ogrenciyiBul(id) {
        return ogrenciDizisi[id];
    }
    return ogrenciyiBul; // tek parametre döndürür. birden farklı özellik döndürmek istersek obje return etmeliyiz
    /*örn*/
   /*  return {
        bul : ogrenciyiBul,
        sil : ogrenciyiSil,
    }
    */
}

const bul = ogrenciIslemleri();
console.log(bul(3));
console.log(bul(23));
console.log(bul(8));
console.log(bul(19));


//üstteki kullanımda dizi bi kere oluşturulur ve her defasında ilgili yerde bi kere aranılan elemanı çağırır ve bu da performans ve mantık olarak cok daha etkilir.

/**
 * encapsullation : dışarıya vermek istemediğimiz fonksiyonlari ana fonksiyon içerisinde tanımlayıp return ettiğimiz
 * obje içerisinde çağırmayız.
 */



//bir kere çalışmasını istediğimiz fonksiyonlar için bir örnek

let db;
function birKereCalistir() {
    let counter = 0;
    db = "Veri tabanı bağlantı kodları";
    console.log("Veri Tabanı bağlantısı yapıldı");
}
//yukarıdaki örenkte fonksiyon her çağırıldığında database bağlanti işlemi sürekli yapacak. Önüne geçmek aşağıdaki örneği incele


let db2;
function birKezCallistir() {
    let counter = 0;
    return function () {
        if (counter>0){
            console.log("db bağlantısı yapıldığı için tekrar bağlanılmayacak");
            return; //burdan çıkmasını sağladık.
        }else{
            counter++;
            db = "Bağlanıldı";
            console.log("db bağlantısı yapıldı");
        }
    }
}

const initializeEt = birKezCallistir();
initializeEt();
initializeEt();
initializeEt();
initializeEt();