//consola ne yazar???

console.log(sayi);
a();
console.log(sayi);
var sayi = 1;
var sayi = 2;

console.log(sayi);


a();

function a() {
    console.log("Naber");
}
a();
function a() {
    console.log("Merhaba");
}
a();


console.log(`----------------------------`);

console.log(renk);
var renk = "Mavi";

var renginiSoyle = function () {
    console.log("En sevdiğim renk " + renk);

    var renk = "Yeşil";
    console.log("Şimdi En sevdiğim renk " + renk);
};
renginiSoyle();


//FONKSİYON İÇERİSİNDEKİ TANIMLAMALAR KENDİ İÇERİSİNDE YENİDEN MEMORY ALANINDA TANIMLANIR.
//SİSTEM ÖNCE VAR İLE TANIMLANMIŞ BİR DEĞER VAR MI, DAHA SONRA DA FUNCTİON ANAHTAR KELİMESİ İLE TANIMLANMIŞ BİR DEĞER VAR MI ONA BAKAR
//YOKSA İŞLEMLERİNE DEVAM EDER.