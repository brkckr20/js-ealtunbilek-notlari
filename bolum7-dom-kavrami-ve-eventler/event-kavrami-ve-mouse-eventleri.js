document.querySelector('.link').addEventListener('click',function (e) { //addeventlistener => birinci parametre olay adı, ikinci parametre ise tek parametre alan bir fonksiyon

    let deger;
    deger = e;
    deger = e.target; //olayın gerçekleştiği yeri gösterir.
    deger = e.type; //tıklanma olayının türünü verir. => 'click' gibi
    console.log(deger);
    //console.log('click eventi tıklandı');
    e.preventDefault(); //yapılması gereken işlemi yapma demektir
});


/*
*   ÇİFT TIKLAMA OLAYI
* */
document.querySelector('.link').addEventListener('dblclick',function (e) {
    let deger;
    deger=e.type;
    console.log(deger);
    e.preventDefault();
});




/*
*   mouse basılı tutulma olayı
* */
document.querySelector('.link').addEventListener('mousedown',function (e) {
    let deger;
    deger=e.type;
    console.log(deger);
    e.preventDefault();
});


//MOUSE NIN BASILI DURUMDAN KALDIRILMA OLAYI
document.querySelector('.link').addEventListener('mouseup',function (e) {
    let deger;
    deger=e.type;
    console.log(deger);
    e.preventDefault();
});



//mouse üzerine gelme olayı
document.querySelector('.link').addEventListener('mouseenter',function (e) {
    let deger;
    deger=e.type;
    console.log(deger);
    e.preventDefault();
});



//mouse üzerinden ayrılma olayı
document.querySelector('.link').addEventListener('mouseleave',function (e) {
    let deger;
    deger=e.type;
    console.log(deger);
    e.preventDefault();
});


//mouse üzerine gelme olayı - enter ve leave den farkı kutu içerisinde başka bi elemente gelip gitme durumunda da çalışır. fakat enter ve leave de o elementin dışına çıkıp tekrar girmelidir.
document.querySelector('.container').addEventListener('mouseover',function (e) {
    let deger;
    deger=e.type;
    console.log(deger);
    e.preventDefault();
});

document.querySelector('.container').addEventListener('mouseout',function (e) {
    let deger;
    deger=e.type;
    console.log(deger);
    e.preventDefault();
});


//MOUSE İLGİLİ ALANDA HAREKET ETTİKÇE ÇALIŞIR.
document.querySelector('.container').addEventListener('mousemove',arkaPlanRengiDegistir);





function arkaPlanRengiDegistir(e) {
    document.querySelector('.yazi').textContent = `X : ${e.clientX}  Y :  ${e.clientY}`;
    document.querySelector('.container').style.backgroundColor = `rgb(${e.clientX % 255},${e.clientY %255},${(e.clientX + e.clientY) % 255})`;
}









//isimlendirilmiş fonk kullanılarak çağırma
/*
function tiklama(e) {
let deger;
    deger = e;
    console.log(e);
}
document.querySelector('.link').addEventListener('click',tiklama);*/
