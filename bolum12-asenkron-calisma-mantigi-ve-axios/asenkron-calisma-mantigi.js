// ASENKRON CALISMA MANTIĞI

console.log("Başladı");

setTimeout(function () {
    console.log("settimeout methodu çalıştı");
},5000);       //senkron olsaydı bu metot çalışmadan bir sonraki kodların çalıştırılmasına geçmeyecekti.


setTimeout(function () {
    console.log("0 settimeout methodu çalıştı");
},0); //sıraya göre çalışmasını bekleriz lakin başladı bitti ve bu metot çalıştı.


console.log("Bitti");

/**
 *    JAVASCRIPT SINGLE-THREAD BIR YAPIYA SAHIPTIR. FAKAT ONUN DISARIDAN VERI ALMASINI SAĞLAYAN, EXTRA YARDIMCI (WORKER)
 *    THREADLERI VARDIR.
 *
 *    parametre olarak ayrı bir fonksiyon alan fonksiyonlara high-order fonksiyon denir.
 */
