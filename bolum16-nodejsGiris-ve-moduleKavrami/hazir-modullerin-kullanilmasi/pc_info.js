const os = require('os');
const fs = require('fs');
/*
let free_memory = os.freemem();
let free_memory_kb = free_memory/1024;
let free_memory_mb = free_memory_kb/1024;
let free_memory_gb = free_memory_mb/1024;

console.log(os.freemem());
console.log("Free gb : " + Math.floor(free_memory_gb));
console.log(os.release());
console.log(os.totalmem());*/






let pcInfo = function(){
    let freeRam = byteToGb(os.freemem); //boş ram
    let totalRam = byteToGb(os.totalmem); //toplam ram
    let usedRam = (totalRam - freeRam).toFixed(2); // kullanılan ram

    let cpuSayisi = os.cpus().length; // işlemcideki çekirdek sayısı
    fs.writeFile('pc_info.txt',pcInfoGoster(),(err) => {
        //1. parametre dosya adı
        //2. parametre data - veri
        //3. parametre hata varsa bize bir fonksiyon döndürür.
        if (err){
            console.log("Hata Meydana geldi");
        }
    });

    function byteToGb(toplamByte) {
        return (toplamByte/1024/1024/1024).toFixed(2); // virgülden sonra 2 karakter göstermesi için
    }

    function pcInfoGoster(){
        return `Toplam ram : ${totalRam}, kullanılan rams : ${usedRam}, boş ram : ${freeRam}, cpu sayisi : ${cpuSayisi}`;
    }

};


/*
pcInfoGoster();
*/


module.exports = { //export ile dışarı aktarılması
  pcInfo
};