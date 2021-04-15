const yeniGorev = document.querySelector('.input-gorev');
const btnGorevEkle = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('.gorev-listesi');


btnGorevEkle.addEventListener('click',gorevekle);
gorevListesi.addEventListener('click',gorevSilTamamla);

document.addEventListener('DOMContentLoaded',localstoragedanoku);






function gorevSilTamamla(e){
    const tiklanilanEleman = e.target;
    if (tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')) {
        tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi');
    }
    if (tiklanilanEleman.classList.contains('gorev-btn-sil')) {

        if (confirm('Emin misiniz?')){
            tiklanilanEleman.parentElement.classList.toggle('kaybol');
            const silinecekGorev =tiklanilanEleman.parentElement.children[0].innerText;

            localStoragedanSil(silinecekGorev);

            //animasyon sonunda çalış dedik
            tiklanilanEleman.parentElement.addEventListener('transitionend',function (e) {
                tiklanilanEleman.parentElement.remove();
            });
        }
        else{
            alert('Görev silinmesi iptal edildi!!');
        }

    }
};


function gorevekle(e) {
    e.preventDefault();
    if (yeniGorev.value.length > 0){
        gorevItemOlustur(yeniGorev.value);

        //local storage kaydetme
        localStorageKaydet(yeniGorev.value);
        yeniGorev.value = '';
    }else{
        alert("Boş görev girilemez");
    }

}



function localStorageKaydet(yeniGorev) {  
    let gorevler;

    if (localStorage.getItem('gorevler') === null) {
        gorevler = [];
    }
    else{
        gorevler = JSON.parse(localStorage.getItem('gorevler'));
    }
    gorevler.push(yeniGorev);
    localStorage.setItem('gorevler',JSON.stringify(gorevler));
};


function localstoragedanoku() {
    let gorevler;

    if (localStorage.getItem('gorevler') === null) {
        gorevler = [];
    }
    else{
        gorevler = JSON.parse(localStorage.getItem('gorevler'));
    }
    gorevler.forEach(function(gorev){
        gorevItemOlustur(gorev);
    });
}


function gorevItemOlustur(gorev) {
    //div olusturma
    const gorevDiv = document.createElement('div');
    gorevDiv.classList.add('gorev-item');

    //li oluşturma
    const gorevLi = document.createElement('li');
    gorevLi.classList.add('gorev-tanim');
    gorevLi.innerText = gorev;
    gorevDiv.appendChild(gorevLi);

    //tamamlandı butonu ekleme
    const gorevTamamlandiBtn = document.createElement('button');
    gorevTamamlandiBtn.classList.add('gorev-btn');
    gorevTamamlandiBtn.classList.add('gorev-btn-tamamlandi');
    gorevTamamlandiBtn.innerHTML = '<i class="far fa-check-square"></i>';
    gorevDiv.appendChild(gorevTamamlandiBtn);

    //tamamlandı butonu ekleme
    const gorevSilBtn = document.createElement('button');
    gorevSilBtn.classList.add('gorev-btn');
    gorevSilBtn.classList.add('gorev-btn-sil');
    gorevSilBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    gorevDiv.appendChild(gorevSilBtn);


    //ul ye oluşturulan divi ekleme
    gorevListesi.appendChild(gorevDiv);
}


function localStoragedanSil(gorev) {
    let gorevler;

    if (localStorage.getItem('gorevler') === null) {
        gorevler = [];
    }
    else{
        gorevler = JSON.parse(localStorage.getItem('gorevler'));
    }


    //splice ile item sil
    const silinecekElemanIndex = gorevler.indexOf(gorev);
    console.log(silinecekElemanIndex);
    gorevler.splice(silinecekElemanIndex,1);
    localStorage.setItem('gorevler',JSON.stringify(gorevler));
}