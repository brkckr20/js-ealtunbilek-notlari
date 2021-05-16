//commonjs, amd

//IIFE
/**
 * javaScript'de IIFE  Anlamı anında Çağrılan fonksiyonlar anlamına gelir; yani tanımlandığı yerde çalışan bir javaScript fonksiyonudur.
 *
 * bunun içerisindeki değişkenler fonksinlar doğrudan olarak dışarıdan erişilemez
 * */
var aa = (function test() {
    var sayi = 10;
    function ekle(s1,s2) {
        console.log(s1 + s2);
    }
    return { //dışarı aktarmak istediklerimizi buraya yazmalıyız.
        ekle
    }
})();

aa.ekle(2,43);