let isim = "Burak"; // global scope. heryerden erişilebilir.

selamVer();
function selamVer() {


    let yas = 32; ///local alandaki değişken. kapsama alanları dışında kullanılamaz.
    /*
    *   BU ÖRNEKTE YAS DEĞİSKENİNİN YAŞAM ALANI KÖŞELİ PARANTEZLER İÇERİSİNDEDİR.
    * */
    console.log("Selam ver : " + isim);


}


/**
 *  let test = 123;
 *  function f(test){
 *      let test = "deneme";
 *      console.log(test);
 *  }
 *  f(test);
 *
 *  ÖRNEKTEKİ TANIMLAMALARDA GLOBAL ALANDA TANIMLANMIŞ BİR DEĞİŞKEN PARAMETRE OLARAK ALDIĞI DEĞERİ FONKSİYON İÇERİSİNDE
 *  YENİDEN TANIMLANIRSA LOCAL ALANDA TANIMLANMIŞ OLAN DEĞİŞKEN DEĞERİ FONKSİYON ÇAĞRILDIĞINDA LOCAL ALANDA TANIMLANMIŞ
 *  OLAN DEĞİŞKEN DEĞERİNİ ALIR. BUNA SHADOWED DEĞİŞKENLER DENİR.
 * */