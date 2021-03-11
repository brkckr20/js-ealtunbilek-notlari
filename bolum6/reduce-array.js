/**
 *  map - filter gibi fonksiyonların yerine kullanılabilir.
 * 
 * 
 */

const sayilar = [1,2,4,5,6,6,5,4,3,4,55,4,3,5,6,4,3];

//aşağıdaki örnekte toplam parametresine ikinci parametreyi ekler ve sonucu tekrardan toplam parametresine atar
const sonuc = sayilar.reduce(function (toplam,cur,index) {

    return toplam = toplam + cur;
  },0);



console.log(sonuc);

console.log("///////////////////////////");



// map yapısı gibi kullanma
// current indeximiz boş bir dizi olsun istedik, dizinin ilk elemanını bir sonraki elemanı kaç ile çarpmasını istiyorsak çarptırdık ve ilk elemana eşitledik sonrasında ise döngü ile devam ettirdik
const yeniDiziWithReduce = sayilar.reduce(function (dizininOncekiHali,oAnkiSayi) {
    dizininOncekiHali.push(oAnkiSayi * 2);
    return dizininOncekiHali;
},[]);

console.log(yeniDiziWithReduce);