/* const promiseBasarili = Promise.resolve("Başarılı bi sekilde sonuclandı.."); // işlemin başarılı olma hali
const promiseHatali = Promise.reject(new Error('Bir hata meydana geldi')); // işlemin başarısız olma hali
promiseBasarili.then((sonuc) => console.log(sonuc));

promiseHatali.catch((hata) => console.log(hata)); */

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("3 saniyelik p1 promisi çağrıldı...");
    }, 3000);
});


const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("5 saniyelik p2 promisi çağrıldı...");
    }, 5000);
});
/**
 *  uzun süren işlemlerin ikisini de aynı anda başlatır. kısa süren işlem bittikten sonra uzun süren işlemin bitmesi
 *  beklenir ve ikisi de tamamlandıktan sonra yeni bir promise döndürür.
 *  dizi olara döner
 */
const promiseAll = Promise.all([p1,p2]);

promiseAll.then((sonuc) => {console.log(sonuc)});
/**
 * 10 tane promisemiz olsa bile bi tane hata ile karşılaşılırsa bu catch bloğunda yakalanır 
 * ve o catch blogundaki kodlar çalıştırılır.
 * 
 */



/*********************************************************************** */
/**
 * uzun süren sonuçlardan hangisi daha erken tamamlanırsa onu döndürür.
 * 
 */
const promiseRace = Promise.race([p1,p2]);
promiseRace.then(sonuc => {
    console.log("race  : " +  sonuc);
})