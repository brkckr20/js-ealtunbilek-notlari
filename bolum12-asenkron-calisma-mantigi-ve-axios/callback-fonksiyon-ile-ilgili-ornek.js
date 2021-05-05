console.log("Başladı");

//const dizi = ogrencileriGetir();
ogrencileriGetir(ogrencileriYazdir); //parametre olarak bir fomksiyon gönderdik.

console.log("Bitti");

function ogrencileriGetir(callback) { //bu fonksiyonun çağrılması beklenmediği için normalde undefined döndürür.
                                //bunun önüne geçmek için bu fonksiyona parametre olarak bir fonksiyon gönderirirz.
    setTimeout(function () {
        const dizi = [];
        for (let i = 0; i <300 ; i++) {
            dizi.push({
                ad : `Öğrenci ${i + 1}`,
                id : i + 1,
            });
        }
        callback(dizi);

    },3000)
}

function ogrencileriYazdir(ogrencilerDizisi) {
    console.log(ogrencilerDizisi);
}
