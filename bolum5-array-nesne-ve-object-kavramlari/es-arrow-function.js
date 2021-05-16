//es = ecma script


function selamVer() {
    console.log("selamun aleyk");
}
selamVer();
const selamverdegiskeni = function () {
    console.log("selam ver değişkeni çağrıldı");
}
selamverdegiskeni();

let fatArrow = () => {
    console.log("fat arrow kullanımı");
}

/*
*   let fatArrow = _ => {
    console.log("fat arrow kullanımı");
}
* PARAMETRE ALMAYAN FONKSİYON KULLANIMI
* */
fatArrow();

function karesiniAl(sayi) {
    return sayi*sayi;
}

console.log(karesiniAl(5));

const karesinialDegiskeni = function (sayi) {
    return sayi * sayi;
}
console.log(karesinialDegiskeni(7));

const fatArrowParametrelikullanimi = (sayim) => {
    return sayim * sayim
}
console.log(fatArrowParametrelikullanimi(9));

const fatArrowParametrelikisakullanimi = sayim => {
    return sayim * sayim
}
/**
 *  eğer fonksiyona tek bir parametre göndereceksek parantez kullanmamıza gerek yoktur.
 *  eğerki return etmek istediğimiz değer sadece tek bir satırdan meydana geliyorsa köşeli parantezlerden ve return,
 *  ifadesinden kurtulabiliriz.
 * */
console.log(fatArrowParametrelikisakullanimi(3));

const fatArrowParantezsizKullanimi = xxx => xxx+xxx;

console.log(fatArrowParantezsizKullanimi(12));

const sayilariTopla = (sayi1,sayi2) => sayi1 + sayi2; ///iki paramtre olacağı için normal parantez kullandık

console.log(sayilariTopla(5,2));