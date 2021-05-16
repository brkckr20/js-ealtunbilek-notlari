let myDizi = [1,2,3];
/* const diziyiKopyalaikiyleCarp = function (dizi) {
    let geciciDizi = [];
    for (let i = 0; i < dizi.length; i++) {
        geciciDizi[i] = dizi[i] * 2;
    }
    console.log(geciciDizi);
}
const diziyiKopyalaikiyeBol = function (dizi) {
    let geciciDizi = [];
    for (let i = 0; i < dizi.length; i++) {
        geciciDizi[i] = dizi[i] / 2;
    }
    console.log(geciciDizi);
}

const diziyiKopyalaucleTopla = function (dizi) {
    let geciciDizi = [];
    for (let i = 0; i < dizi.length; i++) {
        geciciDizi[i] = dizi[i] + 3;
    }
    console.log(geciciDizi);
}
 */

 //FİRST CLASS FONKSİYONLAR
const ikiIleCarp = function (sayi) {
    return sayi * 2;
}
const ikiyeBol = function (sayi) {
    return sayi / 2;
}


const diziIslemleri = function (dizi , islem) { //PARAMETRE FONKSİYON ALDI
    let geciciDizi = [];
    for (let i = 0; i < dizi.length; i++) {
        geciciDizi[i] = islem(dizi[i]);
    }
    console.log(geciciDizi);
}

//HİGHORDER FONKSİYONLAR -> PARAMETRE OLARAK FONKSİYON ALAN FONKSİYONLARDIR
//YADA RETURN OLARAK FONKSİYON DÖNDÜREN FONKSİYONLARDIR.
// CALLBACK FONKSİYON : HIGHER ORDER FONKSİYONA PARAMETRE OLARAK GECİLEN FONKSİYONA DENİR .. ikiIleCarp , ikiyeBol GİBİ
diziIslemleri(myDizi,ikiIleCarp);
diziIslemleri(myDizi,ikiyeBol);
/* diziIslemleri(myDizi,ikiIleCarp); */

  console.log(myDizi);
/*   diziyiKopyalaikiyleCarp(myDizi);
  diziyiKopyalaikiyeBol(myDizi);
  diziyiKopyalaucleTopla(myDizi); */


  function adimiSoyle(ad,soyad) {
      console.log("Merhaba " + ad + " " + soyad);
  }
  adimiSoyle("Burak", "Çakır");

  function adimiBagir(ad,soyad,callback) {
      const mesaj ="MERHABA " + ad.toUpperCase() + " " + soyad.toUpperCase();
      callback(mesaj);
      
  }
  function mesajGoster(mesaj) {
      console.log(mesaj);
  }
  adimiBagir("Burak" , "Çakır", mesajGoster)
 