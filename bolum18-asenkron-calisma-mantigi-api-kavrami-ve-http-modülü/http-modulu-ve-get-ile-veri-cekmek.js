const https = require('https');
//bağlantı kurulacak olan link http ise htpp modülü ile bağlanılmalıdır.





//get ile veri çekmek
//gelen veri fonskiyona parametre olarak verilir. (response)
https.get("https://restcountries.eu/rest/v2/name/turkey",(response) => {

    let data = '';
    response.on('data', chunk => { //çalışması için gerekli - verinin getirilmesi
        //chunk -> her seferinde gelen verinin birleştirilmesi işlemi
       // console.log(chunk);
        data = data + chunk;
    });
    // üst kısımda data elde edildiği için alt kısımda bulunan end eventinde kullanılabilir bir hale geldi.

    response.on('end', () => { //veri getirilmesinin tamamlanmması işlemi, işlem burada yapılır veri geldiği için
        //normal metin olarak geldiği için gelen veriyi jsona dönüştürmemiz gerekir.
        const jsonData = JSON.parse(data)
        console.log("İngilizce Adı :  " + jsonData[0].name);
        console.log("Türkçe Adı :  " + jsonData[0].nativeName);
    });
    //bu kısımda da hata durumu kontrolü yapmak istersek if blokları ile bunu sağlayabilir. 
    //örneğin verinin olup olmadığının kontrolü gibi.

}).on('error',err => {  //hata çıkması durumu
    console.log(err.message);
}); 