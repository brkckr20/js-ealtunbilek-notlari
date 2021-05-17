const ad = require('./myModule');

const myModule = require('./myModule');
function selam() {
    console.log("Merhaba Dünya");

    // console.log(module);

    global.console.log("Bu yazı global nesnesinden geldi");
}

selam();

/*console.log(ad);*/

console.log(myModule.ad);
myModule.ekle(3,4);
myModule.cikar(50,5);
console.log(myModule.personel);

/**
 *  node first-app.js şeklinde çalıştırıldığında terminal ekranında o komutlar çalıştırılır.
 * */