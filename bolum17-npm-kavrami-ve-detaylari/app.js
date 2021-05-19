const yargs = require('yargs');
const kisi = require('./kisi');

//console.log(process.argv);
//console.log(process.argv[2]); // genel process ekranı
// komut satırında program çalıştırılırken node app.js den sonra gelen parametreyi aldık
// process.argv bir dizi döndürür ve elemanlarına indis değerini kullanarak erişebiliriz

//eğer gelen parametre şu ise
/* if (process.argv[2] === 'ekle') {
    console.log("Eklendi");
} */

/* yargs.version('1.1.2'); versiyon numarasını öğrenmek için (kendi uygulamamız için.)*/

//kişi ekleme komutu
yargs.command({
    command: 'ekle',
    builder: {
        isim: {
            describe: "Eklenecek kişi adı",
            demandOption: true, //zorunlu mu - evet ise açıklama ile beraber hatayı döndürür.
            type: 'string'
        },
        tel: {
            describe: "Eklenecek olan tel no",
            demandOption: true,
            type: 'string'
        }
    },
    describe: 'yeni kişi eklemeye yarar.',
    handler(argv) {
        /* console.log("isim : " + argv.isim + " tel no : " + argv.tel); */
        kisi.kisiEkle(argv.isim, argv.tel);
    }

});

//kişi silme komutu
yargs.command({
    command: 'sil',
    builder: {
        isim: {
            describe: 'Silinecek kişi adı',
            demandOption: true,
            type: 'string',
        }
    },
    describe: "kişi silmeye yarar...",
    handler(argv) {
        /* console.log("Silinen isim : " + argv.isim); */
        kisi.kisiSil(argv.isim)

    }
});

//kişi listeleme komutu
yargs.command({
    command: 'listele',
    builder: {
        isim: {
            describe: 'Listelenecek kişi adı',
            demandOption: false,
            type: 'string',
        }
    },
    describe: "tüm rehberi listeler...",
    handler() {
        /* console.log("Tüm rehber listelenir.." ); */
        kisi.kisileriListele();
    }
});

//kişiyi göster
yargs.command({
    command: 'goster',
    builder: {
        isim: {
            describe: 'Gösterilecek kişi adı',
            demandOption: true,
            type: 'string',
        }
    },
    describe: "kişi göstermeye yarar...",
    handler(argv) {
        /* console.log("Gösterilen isim : " + argv.isim); */
        kisi.kisiGoster(argv.isim)
    }
});


/* console.log(yargs.argv); */
yargs.parse(); //yargs komutlarının çalışması için gereklidir.