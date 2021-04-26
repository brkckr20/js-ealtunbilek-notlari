//ARAYÜZ ELEMANLARININ SEÇİLMESİ
const ad = document.getElementById('ad');
const soyad = document.getElementById('soyad');
const mail = document.getElementById('mail');

const form = document.getElementById('rehber');

//event listenerlerin tanımlanması
form.addEventListener('submit',kaydet);

function kaydet(e) {
    e.preventDefault();
    const eklenecekKisi = {
        ad : ad.value,
        soyad : soyad.value,
        mail : mail.value,
    }
    const sonuc = verileriKontrolEt(eklenecekKisi);
    if (sonuc.durum) {
        //kayıt başarılı
        console.log("Sorun yok");
    }else{
        //hata olma durumu
        bilgiOlustur(sonuc.mesaj,sonuc.durum)
        console.log(sonuc.mesaj);
    }
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
    return {
        durum : true,
        mesaj : '',
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
}