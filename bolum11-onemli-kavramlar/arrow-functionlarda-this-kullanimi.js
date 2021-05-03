function fonksiyonum1() {
    console.log(this)
}
const fonksiyonum = () => {
    console.log(this)
};
fonksiyonum();
fonksiyonum1();

/**
 * aslında arrow function larda this diye bir anahtar kelime yoktur.
 * kendi içinde this olmadığı için parent elementine bakar o da global alanda olduğu için window nesnesine işaret eder.
 * arrow function larda this olmadığı için call apply ve bind metotlari yoktur.
 *
 * */

const x = {
    ad : 'B',
    adiniSoyle: () => { // arrow function olduğu için undefined döndürür.

        console.log(this);
        console.log(this.ad);
    }
};
x.adiniSoyle();
