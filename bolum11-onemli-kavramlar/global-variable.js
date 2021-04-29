/**
 *
 *      Bir fonksiyon içerisinde belirtilmeyen tüm değişken ve fonksiyonlar global contextte oluşturulur.
 *      Bu değişken ve fonksiyonlara uygulamanın her yerinden erişilebilir ama uygulama büyüdükçe farkında olmadan burada
 *          tanımlanan değişkeninin değerleri değiştirilebilir.
 *      O yüzden mümkün olduğunca global değişken tanımlamamak gerekir.
 *      JS Modül sistemi bunun için çıkmıştır. Ama bu çözümden önce IIFE (Immediately invoked function express) il JS yazılımcıları bu soruna çözüm bulmuşlardır.
 *      (function(){}) () şeklinde bir tanımla değişkenleri global olarak tanımlamamamış oluruz.
 *
 *
 * */