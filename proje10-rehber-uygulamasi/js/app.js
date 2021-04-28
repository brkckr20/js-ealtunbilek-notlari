//ARAYÜZ ELEMANLARININ SEÇİLMESİ
const ad = document.getElementById('ad');
const soyad = document.getElementById('soyad');
const mail = document.getElementById('mail');

const form = document.getElementById('rehber');
const kisiliListesi = document.querySelector('.kisi-listesi');


//event listenerlerin tanımlanması
form.addEventListener('submit',kaydet);
kisiliListesi.addEventListener('click',kisiIslemleriniYap);

//tüm kişiler için dizi
const tumKisilerDizisi = [];

//butonun iki farklı işlev kazanması için
let secilenSatir = undefined;


function kisiIslemleriniYap(event) {
   // console.log(event.target);
    if (event.target.classList.contains('btn--delete')) {
       // console.log('Silme Butonu');
       const silinecekTR = event.target.parentElement.parentElement;
       const silinecekMail = event.target.parentElement.previousElementSibling.textContent; //silinecek olan mail. butonun bir üst elementinin komşusu
       rehberdenSil(silinecekTR,silinecekMail);
    }else if(event.target.classList.contains('btn--edit')){
        document.querySelector('.kaydetGuncelle').value = "Güncelle";
        const secilenTrSatiri = event.target.parentElement.parentElement;
        const guncellenecekMail = secilenTrSatiri.cells[2].textContent;
        ad.value = secilenTrSatiri.cells[0].textContent;
        soyad.value = secilenTrSatiri.cells[1].textContent;
        mail.value = secilenTrSatiri.cells[2].textContent;
        secilenSatir = secilenTrSatiri;
        console.log("Güncelleme");
    }
}

function rehberdenSil(silinecekTrElementi,silinecekMail) {
  silinecekTrElementi.remove();
  console.log(silinecekTrElementi,silinecekMail);

  //maile göre silme işlemi
 // tumKisilerDizisi.forEach((kisi,index) =>{
 //   if(kisi.mail === silinecekMail){
 //       tumKisilerDizisi.splice(index,1);
 //   }
 // });


  //diger yontem - filter metodu ile kullanımı
  const silinmeyecekKisiler = tumKisilerDizisi.filter(function (kisi,index) {  
      return kisi.mail !== silinecekMail;
  });

  tumKisilerDizisi.length = 0;
  tumKisilerDizisi.push(...silinmeyecekKisiler);
  console.log('Silme yapıldı son durum');
  console.log(tumKisilerDizisi);
  alanlariTemizle();
  document.querySelector('.kaydetGuncelle').value = "Kaydet";
}

function kaydet(e) {
    e.preventDefault();
    const eklenecekVeyaGuncellenecekKisi = {
        ad : ad.value,
        soyad : soyad.value,
        mail : mail.value,
    }
    const sonuc = verileriKontrolEt(eklenecekVeyaGuncellenecekKisi);
    if (sonuc.durum) {
        if (secilenSatir) {
            console.log(tumKisilerDizisi);
            //güncelleme yap
            kisiyiGuncelle(eklenecekVeyaGuncellenecekKisi);
        }else{
            kisiyiEkle(eklenecekVeyaGuncellenecekKisi);
        }
    }else{
        //hata olma durumu
        bilgiOlustur(sonuc.mesaj,sonuc.durum)
     //   console.log(sonuc.mesaj);
    }
}
function kisiyiEkle(eklenecekKisi) {
    const trElementi = document.createElement('tr');
    trElementi.innerHTML = `<td>${eklenecekKisi.ad}</td>
    <td>${eklenecekKisi.soyad}</td>
    <td>${eklenecekKisi.mail}</td>
    <td>
        <button class="btn btn--edit"><i class="fas fa-user-edit"></i></button>
        <button class="btn btn--delete"><i class="fas fa-trash-alt"></i></button>
    </td>`;
    kisiliListesi.appendChild(trElementi);
    tumKisilerDizisi.push(eklenecekKisi);
    bilgiOlustur('Kisi Rehbere Kaydedildi',true);
    console.log(tumKisilerDizisi);
}

function verileriKontrolEt(kisi){
    //objelerde in kullanımı
    for (const deger in kisi) {
        if(kisi[deger]){
            console.log(kisi[deger]);
        }else{
            const sonuc = {
                durum : false,
                mesaj : "Boş alan bırakmayınız",
            }
            return sonuc;
            
        }
        
    }
    alanlariTemizle();
    return {
        durum : true,
        mesaj : 'Kaydedildi',
    }
}

function bilgiOlustur(mesaj,durum) {
    const olusturulanBilgi = document.createElement('div');
    olusturulanBilgi.textContent = mesaj;
    olusturulanBilgi.className = 'bilgi';
    if (durum) {
        olusturulanBilgi.classList.add('bilgi--success');
    }
    else{
        olusturulanBilgi.classList.add('bilgi--error');
    }
    document.querySelector('.container').insertBefore(olusturulanBilgi,form);

    //settimeout
    //verdiğiniz süre sonrasında o kodları çalışır.
    setTimeout(() => {
        const silinecekDiv = document.querySelector('.bilgi');
        if (silinecekDiv) {
            silinecekDiv.remove();
        }
    }, 2000);


    //setinterval 
    //2 saniye verdiniz diyelim her iki saniye de bir o kod bloğu çalışır.
}

function kisiyiGuncelle(kisi) {
    //kisi parametresinde seçilen kisinin yeni değerleri vardır.
    //secilen satırda da eski değerler var
    for (let i = 0; i < tumKisilerDizisi.length; i++) {
        if (tumKisilerDizisi[i].mail === secilenSatir.cells[2].textContent) {
            tumKisilerDizisi[i] = kisi;
            break;
        }
    }
    secilenSatir.cells[0].textContent = kisi.ad;
    secilenSatir.cells[1].textContent = kisi.soyad;
    secilenSatir.cells[2].textContent = kisi.mail;

    document.querySelector('.kaydetGuncelle').value = "Kaydet";
    secilenSatir = undefined;

    console.log(tumKisilerDizisi);
}

function alanlariTemizle() {  
    ad.value = '';
    soyad.value = '';
    mail.value = '';
}