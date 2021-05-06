const apidenJSONGetir = document.getElementById('btnJsonGetir');
const sonucDiv = document.getElementById('sonuc');
const apiyeJSONVeriEkle = document.getElementById('jsonVeriEkle');


apidenJSONGetir.addEventListener('click',getJsonFromApi);
apiyeJSONVeriEkle.addEventListener('click',jsonVeriEkle)

function getJsonFromApi(e) {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/users')
        //gelen sonucu çektik
        .then(response => response.json())
        //çekilen sonucu bir değişkene atadık
        .then(sonuc => ekanaYazdir(sonuc));
}

function ekanaYazdir(yazdirilacakVeri) {
    let cikti = "";
    yazdirilacakVeri.forEach(user => {
        cikti += `<li>${user.name}</li>`
    });
    sonucDiv.innerHTML = cikti;
}


//apiye json veri ekleme
function jsonVeriEkle(e) {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method : 'POST',
        body : JSON.stringify({ //doğrudan js objesi gönderirsek hata alırız o yüzden jsona döndürdük
            title : "Deneme",
            body : "Bu postun bodysi",
            id : 4,
        }),
        headers : {
            'Content-Type' : 'application/json' //gereklidir. ne tipte veri gönderdiğimizi belirlememiz önemli
        }
    }).then(response => response.json())
      .then(sonuc => console.log(sonuc));
}





//aynı işlemin async await ile yapımı
async function jsonVeriEkle1(e) {
    e.preventDefault();

  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method : 'POST',
        body : JSON.stringify({ //doğrudan js objesi gönderirsek hata alırız o yüzden jsona döndürdük
            title : "Deneme",
            body : "Bu postun bodysi",
            id : 4,
        }),
        headers : {
            'Content-Type' : 'application/json' //gereklidir. ne tipte veri gönderdiğimizi belirlememiz önemli
        }
    });
  const sonuc = await response.json();
    console.log(sonuc);
}
