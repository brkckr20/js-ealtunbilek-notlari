
const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');
const putPatchBtn = document.getElementById('put-patch');
const ayniAndaIstekBtn = document.getElementById('ayni-anda-istek');
const headersBtn = document.getElementById('headers');
const hataBtn = document.getElementById('hata');
const silBtn = document.getElementById('delete');


getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
putPatchBtn.addEventListener('click', putPatchData);



silBtn.addEventListener('click',deleteData)
ayniAndaIstekBtn.addEventListener('click', ayniAndaIstekData);
headersBtn.addEventListener('click', customHeader);
hataBtn.addEventListener('click', hataIslemleri);


function getData() {
    /*     axios({
            method: 'GET',
            url: 'http://jsonplaceholder.typicode.com/users',
            params: {
                _limit : 2 //limit getirmek için
            }
        }).then(response => sonucuEkranaYazdir(response))
            .catch(hata => console.log(hata))
            .then(() => { console.log('get isteği tamamlandı.') }) */


    //üsttekinin kısa yazımı
    /* axios.get('http://jsonplaceholder.typicode.com/users',{
            params : {
                _limit : 1
            }
        })
        .then(response => sonucuEkranaYazdir(response))
        .catch(hata => console.log(hata))
        .then(() => { console.log('get isteği tamamlandı.') }) */


    /** PARAMETREYİ LINKE VERMEK */
    // axios('http://jsonplaceholder.typicode.com/users?_limit=1') axiosta metotlar varsayılan olarak get olduğu için kullanılmayabilir
    axios.get('http://jsonplaceholder.typicode.com/users?_limit=1')
        .then(response => sonucuEkranaYazdir(response))
        .catch(hata => console.log(hata))
        .then(() => { console.log('get isteği tamamlandı.') })
}

function postData() {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: "Yeni başlık",
        body: "Burası body kısmı",
        userId: 20
    }).then(response => sonucuEkranaYazdir(response))
        .catch(hata => { console.log(hata) });
    /**axios da header : 'content-type belirtilmesine gerek yoktur. kendisi otomatik olarak tamamlar' */


    axios.post('https://jsonplaceholder.typicode.com/users', {
        id: 1223,
        name: 'Burak Çakır',
        userName: 'burakcakir'
    }).then(response => sonucuEkranaYazdir(response))
        .catch(hata => { console.log(hata) });
}

function putPatchData() {
    //put kullanımında veri istediğimiz şekilde tamamen yeniden değiştirilir.


/*    axios.put('https://jsonplaceholder.typicode.com/users/1',{ //  /1 parametre diye geçer. parametre soru işareti ile olursa eğer query parametre olarak geçer.
        id: 1223,
        name: 'Burak Çakır',
        userName: 'burakcakirqq'
    }).then(response => sonucuEkranaYazdir(response))
        .catch(hata => {console.log(hata)});*/

    //patch da ise tüm veri kaynağı değişmez sadece istediğimiz alan değişir ana yapı sabit kalır
    axios.patch('https://jsonplaceholder.typicode.com/users/1',{ //  /1 parametre diye geçer. parametre soru işareti ile olursa eğer query parametre olarak geçer.
        id: 1223,
        name: 'Burak Çakır',
        userName: 'burakcakirqq'
    }).then(response => sonucuEkranaYazdir(response))
        .catch(hata => {console.log(hata)});
}

function deleteData() {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then(cevap => sonucuEkranaYazdir(cevap))
        .catch(hata => console.log(hata));
}

function ayniAndaIstekData() {
  /*
    axios.all([ //birden fazla istek olduğu için dizi tipinde veri tanımlaması yapılır.
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/posts')
    ]).then(response=>{  //dizi döndürür
        console.log(response[0].data);
        console.log(response[1].data);
        sonucuEkranaYazdir(response[0]);
    });
    */


    /*daha okunaklı hali*/

    axios.all([ //birden fazla istek olduğu için dizi tipinde veri tanımlaması yapılır.
        axios.get('https://jsonplaceholder.typicode.com/users?_limit=1'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=1')
    ]).then(axios.spread((kullanicilar,postlar)=>{ //daha kolay kullanım
        console.log(kullanicilar.data);
        console.log(postlar.data);
        sonucuEkranaYazdir(kullanicilar);
    }));
}


/*

    interceptor kullanımı : istek yapmadan önce araya birşey eklemek istiyorsak interceptor kullanırız

*/
axios.interceptors.request.use(config => {

    /*config.url = "asdasşdasdsad";*/  //ilgili url e istek yapmadan evvel araya girdik ve onu değiştirdik. Örnek!

    console.log(`${config.url} adresine ${config.method} isteği yapıldı ve timeout süresi ${config.timeout} sn olarak gerçekleşti.`); //istek gitmeden bir log yazdırmış olduk

    return config;
});

axios.interceptors.response.use(response => {
    //bize istekten bir cevap geldi diyelim bunu then ve catch yapısından önce burada yakalayabiliriz. örneğin

  /*  if(response.status == 200){
        response.status = 999; // yani verdiğim örnekte istek başarılı oldu ise başarılı drumuu 200 olan değeri rastgele bi sayı yaptım.
        //çalışma mantığını anlamak için oluşturuldu
    } */

    return response;
},(error) =>{
    //gelen istekte hata olması durumunda çalışır
    return Promise.reject(error);
});
//her bölümde yazmak istemezsek bu şekilde tanımlarız ve her istekte otomatik olarak tanımlanmış olur

axios.defaults.headers.common['X-Auth-Token'] = 'apitokendegeri';
//buraya istediğimizi yazabiliriz.
axios.defaults.headers.common['MyToken'] = 'mytokens';



//axiosda headerlerım, urllerim belli ise  (örneği customHeader fonksiyonu içerisinde)
const axiosNesnesi = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com',
    headers : {
        'X-Requested-With' : 'XMLHttpRequest', //zorunlu
        token : 'adasdasdadsasdasdas',
    }
});


function customHeader() {

    axiosNesnesi.get('/users')
        .then((response) => {console.log(response)}).then((hata) => {console.log(hata)});


    /* BELLI KRITERLER KOYMAK ICIN TOKEN KULLANILIR. MESELA YETKISI OLMAYAN ADAM SILME YAPAMASIN GIBI */
    //3. PARAMETRE OLARAK CONFIG GECEBILIRIZ

    const config = {
        headers : {
            'Content-type' : 'application/json',
            Authorization : 'sizintokendegeriniz',
        }
    }

    axios.post('https://jsonplaceholder.typicode.com/users', {
        id: 1223,
        name: 'Burak Çakır',
        userName: 'burakcakir'
    },config).then(response => sonucuEkranaYazdir(response))
        .catch(hata => { console.log(hata) });

}



function hataIslemleri() {
    /* link hatalı girildi  */
    axios.get('http://jsonplaceholder.typicode.com/usersssss?_limit=1')
        .then(response => sonucuEkranaYazdir(response))
        .catch(hata => hatayiYazdir(hata))
        .then(() => { console.log('get isteği tamamlandı.') })
}

function hatayiYazdir(error) {
    console.log(error);
    document.querySelector('.sonuc').innerHTML =
        `<div class="notification is-info">
            <div class="column is-mobile is-vcentered">
                <div class="column"><h1 class="subtitle">Sonuç</h1></div>
                <div class="column">
                    <h1 class="title">
                        <pre>
                        ${JSON.stringify(error.response.status,null,2)}
                        </pre>
                    </h1>
                </div>
            </div>
        </div>`;
}

function sonucuEkranaYazdir(response) {
    document.querySelector('.sonuc').innerHTML =
        `<div class="notification is-info">
            <div class="column is-mobile is-vcentered">
                <div class="column"><h1 class="subtitle">Sonuç</h1></div>
                <div class="column"><h1 class="title">${response.status}</h1></div>
            </div>
        </div>

        <div class="section">
        <article class="message is-success">
            <div class="message-header">
                <p>Header</p>
            </div>
            <div class="message-body has-background-white has-text-dark">
                <pre>${JSON.stringify(response.headers, null, 2)}</pre>
            </div>
        </article>
    </div>
    
    <div class="section">
        <article class="message is-warning">
            <div class="message-header">
                <p>Data</p>
            </div>
            <div class="message-body has-background-white has-text-dark">
            <pre>${JSON.stringify(response.data, null, 2)}</pre>
            </div>
        </article>
    </div>

    <div class="section">
        <article class="message is-primary">
            <div class="message-header">
                <p>Config</p>
            </div>
            <div class="message-body has-backgorund-white has-text-dark">
            <pre>${JSON.stringify(response.config, null, 2)}</pre>
            </div>
        </article>
    </div>
    `;
}
