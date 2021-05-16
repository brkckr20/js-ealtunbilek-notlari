//ilgili verileri bi yerde toplama
//anahtar değerler tırnak içinde yazılmazlar.
var y = new Date();
var n = y.getFullYear();

let burak = {

     adi : "Burak",
     soyadi : "Çakır",
     dogumYili : 1992,
     evlimi : false,
     sevdigiRenkler : ['sarı','kırmızı'],
     yil : n,
     yasiHesapla : function() {
         return this.yil - this.dogumYili;
     }


};

let hasan = {

    adi : "Hasan",
    soyadi : "Çakır",
    dogumYili : 1965,
    evlimi : false,
    sevdigiRenkler : ['mor','eflatun'],
    yil : n,
    yasiHesapla : function() {
        return this.yil - this.dogumYili;
    }


};

console.log(burak);
console.log(burak.adi);
console.log(burak["soyadi"]);
let yasi = burak.yasiHesapla();
console.log(yasi);
console.log(burak.yasiHesapla());

let isimler = [burak,hasan];
console.log(isimler);