
const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');
const putPatchBtn = document.getElementById('put-patch');
const ayniAndaIstekBtn = document.getElementById('ayni-anda-istek');
const headersBtn = document.getElementById('headers');
const hataBtn = document.getElementById('hata');


getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
putPatchBtn.addEventListener('click', putPatchData);
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

}

function ayniAndaIstekData() {

}

function customHeader() {

}



function hataIslemleri() {

}

function hatayiYazdir(error) {
    console.log(error);
    document.querySelector('.sonuc').innerHTML =
        `<div class="notification is-info">
            <div class="column is-mobile is-vcentered">
                <div class="column"><h1 class="subtitle">Sonuç</h1></div>
                <div class="column"><h1 class="title">${error}</h1></div>
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
