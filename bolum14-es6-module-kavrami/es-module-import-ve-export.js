export class Ogrenci {
    constructor(ad,id) {
        this.ad = ad;
        this.id = id;
        this.bilgileriSoyle();
    }
    bilgileriSoyle(){
        console.log(`Ad : ${this.ad} ve doğum yılı ${this.id}`);
    }
}

const PI = 3.14;

function sayilariTopla(sayi1,sayi2) {
    console.log(sayi1 + sayi2);
}
function sayilariCarp(sayi1,sayi2) {
    console.log(sayi1 * sayi2);
}
export function sayilariCikar(sayi1,sayi2) {
    console.log(sayi1 - sayi2);
}

function selamVer(adiniz) {
    console.log(`Hoşgeldiniz ${adiniz}`);
}

export default function sayilariBol(sayi1,sayi2) {
    console.log(sayi1 / sayi2);
}

//kendi adı ile export etmek ve diğer tarafta çalıştırmak
export const test = () => {
    console.log("test");
}




 //app.js de çağrıldı. karışıklık olmaması için bu not eklendi
//export etme yolları

//birden fazla değeri export etmek - dışarı aktarmak istediklerimizi diğer tarafta aktardığımız sıraylaa çağırmalıyız.

export {
    sayilariTopla,
    sayilariCarp,
    selamVer
}


//diğer bir yol
//dışarrı aktarmak isteğimiz bi fonksiyon, özellik gibi bir değer varsa başına export yazılmalıdır


////diğer bir yol
//export default kullanımı ile - herhangi birşey belirtmesek bile bu dosyanın amacı o export default edilen değeri dışarı export etmek olarak çalışır.
// her js dosyası için bir tane default olmalıdır.
