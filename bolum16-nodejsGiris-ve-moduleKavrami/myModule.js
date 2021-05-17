let isim = "Burak";
let topla = function (sayi1,sayi2) {
    console.log(sayi1 + sayi2);
};

// module.exports = isim; // => tek bir özelliği export etmek istersek

module.exports = { //başına module yazmak zorunda değiliz.
    ad : isim,
    ekle : topla
};

module.exports.cikar = function(sayi1,sayi2){
    console.log(sayi1-sayi2);
};

module.exports.personel ={
    "ad" : "Burak Çakır",
    "yas" : 29,
    "evliMi" : false,
};

console.log(module);