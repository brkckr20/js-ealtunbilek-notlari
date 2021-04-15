//object yapısı
const obje = {      //object literal
    ad : 'Burak',
    yas : 21,
    evlimi : false,
    dil : ['JS','HTML','CSS','PHP'],
    adres : {
        ad : 'Denizli',
        plaka : 20
    },
    bilgileriSoyle : function () {
        return `benim adım ${this.ad} yasım ${this.yas}`; //template literal
    },
    ['full-name']: "Burak ÇAKIR", //key değerlerinde - (tire) işareti kullanılamz. dizi içerisinde string bir indis numarası gibi gösterilir.
};

console.log(obje.ad);
console.log(obje.bilgileriSoyle());
//dizi gibi çağırma
console.log(obje['yas']);
console.log(obje['full-name']);


//yeni değer atama
obje.yas =33;
console.log(obje.yas);


//yeni obje özelliği tanıma
obje.okul = "Pamukkale Üniversitesi";
console.log(obje);
//silme
delete obje.okul;
console.log(obje);  /////


console.log("***********");



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const burak = createStudent('Burak',28,false,"paü");
const ismet = createStudent('İsmet',23,true,"ege");

//factory function
function createStudent(ad,yas,evliMi,okulu) {
    return {
        isim : ad, //anahtarları kendimiz verdik değerler ise parametre olarak gelen değerler
        yasi : yas,
        evlimi : evliMi,
        okuduguOkul : okulu,
        bilgileriYaz : function () {
            return `Ad : ${this.isim} medeni hali : ${this.evlimi}`;
        }
    }
}

//fonksiyonlar obje içerisinde ise metot olarak isim alırlar.

console.log(burak.bilgileriYaz());
console.log(ismet.bilgileriYaz());





























