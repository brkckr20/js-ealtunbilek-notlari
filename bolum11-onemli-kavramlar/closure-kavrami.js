/**
 *      CLOSURE KAVRAMI
 *  - Bir fonksiyonda bulunan local değişkenlerin fonksiyon return edildikten sonra bile saklanmasıdır.
 *  - Bir fonksiyonun kendi lexical scope alanı dışında çağrılsa bile lexical scope'unu hatırlayabilmesi ve de bu alana erişebilmesidir.
 *  - Closure : kendi parent function'ı çalıştırılıp sonlansa bile parent scope'a erişebilen bir fonksiyondur.
 * */

const ikiIleCarp = (sayi) => sayi * 2;

const s1 = ikiIleCarp(3);
const s2 = ikiIleCarp(76);

console.log(s1,s2);


console.log("--------------------------");

const disFonksiyon = () => {
    let sayac = 0;
    const arttir = () => {
        sayac++;
        console.log(sayac)
    };
    return arttir;
};

const sonuc = disFonksiyon();
const sonuc1 = sonuc();
sonuc();
sonuc();
sonuc();
