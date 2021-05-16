//local ve session storage

//sadece string veriler saklanır.
//anahtar değer şeklinde saklanır.

//localStorage.setItem("ad","burak");
//localStorage.setItem("yas","32");


//sessionStorage -> tarayıcıyı açıp kapatınca silinir.
//sessionStorage.setItem('il',"denizli");




//okuma
//console.log(localStorage.getItem('ad'));


//silme
//localStorage.removeItem('yas');

//tüm değerleri siler
//localStorage.clear();





const ulListesi = document.querySelector('.liste');
const isimdizisii = JSON.parse(localStorage.getItem('isimlistesi'));

isimdizisi.forEach(isim => {
    const yeniLi = document.createElement('li').textContent(isim);
    ulListesi.appendChild(yeniLi);
});


document.querySelector('#form').addEventListener('submit', function(e){
    const yeniIsim = document.querySelector('.isim').value;
    let isimDizisi;
    if (localStorage.getItem('isimlistesi' === null)) {
        isimDizisi = [];
    }else {
        isimDizisi = JSON.parse(localStorage.getItem('isimlistesi'));
    }

    isimDizisi.push(yeniIsim);
    localStorage.setItem('isimlistesi',JSON.stringify(isimDizisi));

    const yeniLi = document.createElement('li').textContent(yeniIsim);
    ulListesi.appendChild(yeniLi);

    e.preventDefault();
});