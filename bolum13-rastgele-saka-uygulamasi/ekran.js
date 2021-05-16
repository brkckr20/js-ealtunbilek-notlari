class Ekran {
    constructor() {
        this.sakaGetirButonu = document.querySelector('.saka-getir-buttonu');
        this.sakaGetirButonu.addEventListener('click',()=>this.sakaGetir());
    }

    async sakaGetir(){
        const rastgeleResim = await new UnsplashApi().randomResimGetir();
        const rastgeleSaka = await new JokeApi().randomSakaGetir();
        const ceviri = await new TranslateApi(rastgeleSaka).ceviriYap();

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