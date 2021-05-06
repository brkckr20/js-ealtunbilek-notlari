const btnTextGetir = document.getElementById('btnTextGetir');
const btnJsonGetir = document.getElementById('btnJsonGetir');
const sonucDiv = document.getElementById('sonuc');

btnTextGetir.addEventListener('click',getText);
btnJsonGetir.addEventListener('click',getJson);


//text verilerini okuma
function getText(e) {
    e.preventDefault();

   // const fetchSonuc = fetch('./test.txt');
   // fetchSonuc.then(response => {
   //   //  console.log(response.text()); //promise döndürür.
   //   const responseTextim = response.text();
   //   responseTextim.then(sonuc =>{
   //   	console.log(sonuc);
   //   })
   // });
 	//console.log(fetchSonuc);




 	//kısa yazımı
 	//text dosyası okuyacaksak text metodunu kullanırız..
   fetch('test.txt').then(response =>response.text())
   .then(sonuc => sonucDiv.innerText = sonuc)
   .catch(hata => console.log(hata));
   
}



//json verileri okuma
function getJson(e){
	e.preventDefault();

	fetch('ogrenciler.json').then(response => response.json()) // bize bir promise döndürür.
	.then(sonuc => {
		let cikti = ''; //çıkan her değeri bir sonuca atamak için tanımlandı
		sonuc.forEach(ogr => {
			cikti+= `Öğrenci Adı : ${ogr.ad} id : ${ogr.id} \n`;
		});
		sonucDiv.innerText = cikti; //çıkan sonuc ilgili divin içine basıldı.
	});
}