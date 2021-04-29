//ARGUMENTS VARIABLE, ENVIRONMENT VE SCOPE CHAIN
/**
 *  - Her execution context de bir de arguments diye bir nesne oluşturulur. Bu nesne fonksiynun aldığı parametreleri içerir..
 *  - Her bir fonksiyon çağrıldığında o fonksiyon bir execution context oluşturur ve bu alanda o fonksiyondaki değişkenler için variable environment oluşturulur.
 *  - Bu alanda fonksiyon içerisinde tanımlanan değişkenler bulunur.
 *  - Peki fonksiyon içerisinde kullanılan bir değişken bu alanda yoksa ne olacak? Hata mı verir?
 *  - HAYIR! Bu değişkenin değeri için parent yapıda yani fonksiyonun tanımlandığı yerin bir üst yapısına bakılır. Buna scope chain denir.
 *  - Scope Kapsam kavramı bir değişkenin tanımlı olduğu yeri temsil eder.
 *
 *
 *
 * */

function abc() {
    console.log(arguments); /* LOCAL ALANDA TANIMLANIR */
}
abc();

 // console.log(arguments); global alanda bu şekildeki kullanımlarda hata alırızz..

function toplam(a,b) {
    console.log(arguments);
    return a + b;

}

var sayi = toplam(3,4);
console.log(sayi);
