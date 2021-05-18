/**
 *  - bilgisayarda pc_info adında bir modül olusturun.
 *  - bu modülün amacı nodejs uygulamasının çalıştıgı makina ile ilgili verileri göstermek olacak
 *  - os hazır modülünü kullanarak bu işlemi gerçekleştirebilirsiniz
 *  - bu modülü kullanarak bilgisayarın toplam kaç gb ram, kullanılan ve free ram miktarları ile kaç cpu olduğunu yazan
 *    bir fonksiyon oluşturup, son sonucu pc_info.txt dosyasına yazdıran bir program yazınız.
 *    bu program başka dosyalardan çağrılabilmelidir.
 *
 * */

const pcInfo = require('./pc_info');
pcInfo.pcInfo();