let isim = 'Burak'; //primitive - ilkel veri tipi
console.log(typeof isim);
console.log(isim instanceof Object); //veri tipinin nesne mi olduğunu kontrol etme. false döndürür.
//primitive bir yapıya nesne gibi davranırsak o otomatik olarak bunu alır kullandırır ve geri çıkartır.


//arka planda gerçekleşen olayı kendimiz yapar ise
const renk = new String('Kırmızı'); //bu tip classlara sarmalayıcı - wrapper class denir.
console.log(typeof renk); //çıktısı object

