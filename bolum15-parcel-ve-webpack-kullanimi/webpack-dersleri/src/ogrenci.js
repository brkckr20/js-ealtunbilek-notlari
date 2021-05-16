import axios from 'axios'

export default class Ogrenci {
    constructor(ad) {
        this.ad = ad;
    }

    adiniSoyle() {
        console.log(`benim adım ${this.ad}`);
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(sonuc => {
                console.log(sonuc.data)
            });
    }
}