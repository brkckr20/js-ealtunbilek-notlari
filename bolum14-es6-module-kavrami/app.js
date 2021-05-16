import { sayilariTopla,sayilariCarp,selamVer } from './es-module-import-ve-export.js';

sayilariTopla(20,32);
sayilariCarp(2,2);
selamVer("Burak");
console.log("-");
console.log("TÜM HEPSİNİ ÇAĞIRMAK İSTERSEK")

/* TÜM HEPSİNİ ÇAĞIRMAK İSTERSEK */
//as ile takma ad verilerek ulaşılabilir.
import * as cagrilanFonksiyonlar from './es-module-import-ve-export.js'
cagrilanFonksiyonlar.selamVer('adas');


console.log("-");
console.log("tek bir şekilde export ettiğim modülün dahil edimesi işlemi");
//tek bir şekilde export ettiğim modülün dahil edimesi işlemi
import { sayilariCikar } from './es-module-import-ve-export.js'
sayilariCikar(100,3);

console.log("-");
console.log("export defaault ile çağırmak");
import varsayilanExportDefault from './es-module-import-ve-export.js'
varsayilanExportDefault(20,2);


/**
 *  export edilen method ile export default ile export edilen metotlarin tek satirda çağrılması işlemi
 *  import varsayilanExportDefault, { sayilariTopla,sayilariCarp,selamVer } from './es-module-import-ve-export.js'
 *
 *
 * */


console.log("-");
console.log("classı import etmek");
import { Ogrenci } from "./es-module-import-ve-export.js";
const ogr = new Ogrenci('Mustafa Kemal ATATÜRK',1881);



console.log("-");
console.log("aynı isimle export edilen değeri import etmek");
import { test } from "./es-module-import-ve-export.js";
test();