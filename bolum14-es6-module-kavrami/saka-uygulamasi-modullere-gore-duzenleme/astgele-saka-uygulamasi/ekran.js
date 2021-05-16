import resimGetir from './unsplash_api.js';
import sakaGetir from './joke_api.js';
import ceviriYap from './translate_api.js';

class Ekran {
    constructor() {
        this.sakaGetirButonu = document.querySelector('.saka-getir-buttonu');
        this.sakaGetirButonu.addEventListener('click',()=>this.sakaGetir());
    }

    async sakaGetir(){
        const rastgeleResim = await resimGetir();
        const rastgeleSaka = await sakaGetir();
        const ceviri = await ceviriYap(rastgeleSaka);

        const tumSonuclar = {
            //key ve value değerleri aynı ise yazılmak zorunda değildir.
            rastgeleResim : rastgeleResim,
            rastgeleSaka : rastgeleSaka,
            ceviri : ceviri
        }
        this.ekranaSonuclariYazdir(tumSonuclar);
    }

    ekranaSonuclariYazdir(sonuclar){
        document.querySelector('#sonuc').innerHTML =
            `<div class="card">
                    <div class="card-image">
                        <figure class="image is-16by9">
                            <img src="${sonuclar.rastgeleResim}" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4 has-text-danger">${sonuclar.rastgeleSaka}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4 has-text-primary">${sonuclar.ceviri}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
}

export default function uygulamayiBaslat() {
    new Ekran();
}