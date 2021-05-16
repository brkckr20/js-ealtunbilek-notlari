// 28.04.2021 bu bölüm kurs bitiminde tekrar izlenecek


class Kisi {
    constructor(ad,soyad,mail) {
        this.ad = ad;
        this.soyad = soyad;
        this.mail = mail;
    }
}

class Util  {  //yararlı fonksiyonları toplayacağımız classımız
    static bosAlanKontrolEt(...alanlar){
        let sonuc = true;
        alanlar.forEach((alan) => { // form üzerindeki tüm alanları gezicez
            if (alan.length === 0){
                sonuc = false;
                return sonuc;
            }
        });
        return sonuc;
    }
}

class Ekran {
    constructor() {
        //ekrandaki form elemanlarını seçme
        this.ad = document.getElementById('ad');
        this.soyad = document.getElementById('soyad');
        this.mail = document.getElementById('mail');
        this.ekleGuncelleButton = document.querySelector('.kaydetGuncelle');
        this.form = document.getElementById('rehber').addEventListener('submit',this.kaydetGuncelle.bind(this)); //bind konusu anlatılacak
        this.kisiListesi = document.querySelector('.kisi-listesi');
        this.depo = new Depo();
        this.kisileriEkranaYazdir();
    }

    kisileriEkranaYazdir(){
        this.depo.tumKisiler.forEach(kisi => {
            this.kisiyiEkranaEkle(kisi);
        });
    }

    kisiyiEkranaEkle(kisi){
        const olusturulanTRelemani = document.createElement('tr');
        olusturulanTRelemani.innerHTML = `<td>${kisi.ad}</td>
    <td>${kisi.soyad}</td>
    <td>${kisi.mail}</td>
    <td>
        <button class="btn btn--edit"><i class="fas fa-user-edit"></i></button>
        <button class="btn btn--delete"><i class="fas fa-trash-alt"></i></button>
    </td>`;

        this.kisiListesi.appendChild(olusturulanTRelemani);
    }

    kaydetGuncelle(e){
        e.preventDefault();
        const kisi = new Kisi(this.ad.value,this.soyad.value,this.mail.value);
        const sonuc = Util.bosAlanKontrolEt(kisi.ad,kisi.soyad,kisi.mail);

        //tüm alanlar dolu
        if (sonuc){
            //yeni kişiyi ekrana ekler
            this.kisiyiEkranaEkle(kisi);

            //localstorageye kaydetme;
            this.depo.kisiEkle(kisi);

        }else{
            // bazı alanlar eksik
            console.log("Boş alan var");

        }
    }
}
class Depo {
    constructor() {
        this.tumKisiler = this.tumKisiler();
    }
    //uygulama ilk açıldığında verilerin getirilmesi

    kisileriGetir(){
        let tumKisilerLocal; //üstteki değişken ile farklıdırlar karıştırmamak gerekiyor. bu fonksiyon içerisinde geçerli sadece
        if (localStorage.getItem('tumKisiler') === null){
            tumKisilerLocal = [];
        }else{
            tumKisilerLocal = JSON.parse(localStorage.getItem('tumKisiler'));
        }
        this.tumKisiler = tumKisilerLocal;
        return tumKisilerLocal;
    }

    kisiEkle(kisi){
        const tumKisilerLocal = this.kisileriGetir();
        tumKisilerLocal.push(kisi);
       let x = localStorage.setItem('tumKisiler',JSON.stringify(tumKisilerLocal));
        console.log(x);
    }
}


document.addEventListener('DOMContentLoaded',function (e) {
    const ekran = new Ekran();
});