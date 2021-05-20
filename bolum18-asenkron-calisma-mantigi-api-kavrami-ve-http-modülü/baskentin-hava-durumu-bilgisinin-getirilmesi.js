const axios = require('axios');

const findCapitalWeather = function(ulkeAdi){
    axios.get('https://restcountries.eu/rest/v2/name/' + ulkeAdi).then(response => { //gelen veri otomatik olarak json olur.

    const ulke = response.data[0];
    const baskent = ulke.capital;
    /* const nufus = ulke.population;
    const enlem = ulke.latlng[0];
    const boylam = ulke.latlng[1]; */

  //  console.log(`başkent ${baskent}, nufus ${nufus}, enlem ${enlem}, boylam ${boylam}`);
    /* console.log(ulke.translations.de); */



    axios.get('https://goweather.herokuapp.com/weather/'+baskent).then(response => {
        let durum = '';
        if (response.data.description == 'Partly cloudy') {
            durum = "parçalı bulutlu";
        }else{
            durum = response.data.description
        }
        console.log(`Başkent ${baskent}'nın hava sıcaklığı : ${response.data.temperature} ve ${durum}`);
       // console.log(response.data);
    });
});
}

module.exports = {
    findCapitalWeather
};
