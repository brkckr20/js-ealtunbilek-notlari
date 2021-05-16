class UnsplashApi {
    constructor() {
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID IarEsattiDdpKoQ0gGp-_jje2llmspuJsJa1co7t3OM';
        this.axiosNesne = axios.create({
            baseURL : this.baseURL,
            headers : {
                Authorization : this.clientID
            },
            params : {
              //  query : 'animal' //sorguya göre isteği şartlandırmak istersek (get isteğinin sonuna ? ekleyerek yazar 1 den fazla parametre varsa aralarına & işareti koyar)
                // count : 1 -- herhangi bir şekilde sayı değeri girer ise resimler obje olarak değil dizi olarak döner.
            }
        });
    }

    async randomResimGetir(){
        try {
            const resimResponse = await this.axiosNesne.get('/photos/random');
            console.log(resimResponse.data.urls.regular);
            return resimResponse.data.urls.regular;
        }catch (e) {
            console.log(e);
            return `https://bulma.io/images/placeholders/1280x960.png`;
        }
    }
}

export default  function resimGetir() {
    const getirilenResim = new UnsplashApi().randomResimGetir();
    return getirilenResim;
}