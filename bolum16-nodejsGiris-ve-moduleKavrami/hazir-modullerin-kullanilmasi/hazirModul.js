const path = require('path');
const fs = require('fs');


//__dirname -> o an çalışılan dosyanın tam yolunu verir.
const dosyaYolu = path.parse(__dirname); // dosya yolunu ve özelliklerini bize bir obje olarak döndürür.
console.log(dosyaYolu);
console.log("Tam dosya yolu : " + dosyaYolu.dir); //dosya yolunun klasör yapısı


//fs
fs.readdir('./',{
    withFileTypes : true //default olarak false olarak gelir
},function (error,files) {
    if (error) console.log("Hata : " + error); //hata çıkması durumunda ... örnek yanlış dosya yolu yazarak test edilebilir.
    console.log(files); //bulunan klasördeki dosyaların isimlerini dize halinde geri döndürür.
    console.log(files[0].isDirectory()); // files dizisi içerisinde gelen 0. eleman directory (klasör) mu diye sorduk ve false dönütünü aldık
});