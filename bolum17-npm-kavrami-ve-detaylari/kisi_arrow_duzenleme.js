//kisiler json tabanlı bir dosyada tutulacak
//dosyadan okunan veriler js dizi ye döndürülecek
//jsonu js dizisine döndürmek için JSON.parse(), js dizini JSONa döndürmek için JSON.stringfy() kullanılır.
//dosyadan okunan değerler Buffer tipindedir. toString diyerek okunabilir, json değerlere dönüştürülebilir.

const fs = require('fs');
const chalk = require('chalk');


const kisiEkle = (kisiAdi, telNo) => {
   // console.log("isim : " + kisiAdi + " tel no : " + telNo);
    const kisiler = dosyadanKisileriOku();

    const ayniAdaSahipKisilerDizisi = kisiler.filter((kisi) => kisi.isim === kisiAdi);
    

    if (ayniAdaSahipKisilerDizisi.length === 0) { //eğer yok ise
        kisiler.push({ //kisiler dizisine ekleme
            isim: kisiAdi,
            tel: telNo
        });
        dosyayaKisileriYaz(kisiler); //kisilerin ilgili dosyaya yazılması
    } else {
        console.log(chalk.red.inverse(kisiAdi + " isimli kişi halihazırda mevcut..."));
    }
}

const dosyadanKisileriOku = _ => {
    try {
        const dataBuffer = fs.readFileSync('kisiler.json'); // kisiler buffer tipinde okunur.
        const dataJSON = dataBuffer.toString(); //buffer tipindeki verileri jsona döndürme işlemi
        return JSON.parse(dataJSON); //jsona cevrilen data js dizisine parse edildi ve geri döndürüldü.
    } catch (e) {
        return [];
    }
}

const dosyayaKisileriYaz = kisilerinEklenecegiDizi => {
    const jsonData = JSON.stringify(kisilerinEklenecegiDizi) //gelen diziyi jsona döndürme işlemi
    fs.writeFileSync('kisiler.json', jsonData); //jsona eklenmesi
}


const kisiSil = kisiAdi => {
    /*  console.log("Silinen isim : " + kisiAdi); */
    const tumKisiler = dosyadanKisileriOku();
    const dosyayaTekrarYazilacakKisiler = tumKisiler.filter((kisi) => {
        return kisi.isim !== kisiAdi;
    });
    if (tumKisiler.length > dosyayaTekrarYazilacakKisiler.length) {
        console.log(chalk.green.inverse("Kişi bulundu ve silindi : " + kisiAdi));
        dosyayaKisileriYaz(dosyayaTekrarYazilacakKisiler);
    }
    else {
        console.log(chalk.yellow.inverse(kisiAdi + " adlı kişi listede bulunamadı.."));
    }
}


const kisileriListele = _ => {
    console.log("Tüm rehber listelenir..");
    const kisilerDizisi = dosyadanKisileriOku();
    kisilerDizisi.forEach((kisi) => {
        console.log(chalk.white.inverse("Adı : " + kisi.isim + " ve telefon numarası : " + kisi.tel));
    });
}


const kisiGoster = kisiAdi => {
   /*  console.log("Gösterilen isim : " + kisiAdi); */
    const kisilerDizisi = dosyadanKisileriOku();
    const bulunanKisi = kisilerDizisi.find(kisi => kisi.isim === kisiAdi);
    if (bulunanKisi) {
        console.log(chalk.green.inverse("Aradığınız kişinin numarası : " + bulunanKisi.tel));
    }else{
        console.log(chalk.yellow.inverse("Bu isimde bir kişi bulanamadı."));
    }
}




/* exports.kisiEkle = kisiEkle; */

module.exports = {
    kisiEkle: kisiEkle,
    kisiSil: kisiSil,
    kisileriListele: kisileriListele,
    kisiGoster: kisiGoster,


}