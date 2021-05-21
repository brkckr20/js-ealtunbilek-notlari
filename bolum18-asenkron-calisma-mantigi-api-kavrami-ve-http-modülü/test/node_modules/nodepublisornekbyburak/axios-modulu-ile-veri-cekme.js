const https = require('https');
const axios = require('axios');

axios.get('https://restcountries.eu/rest/v2/name/turkey').then(response => { //gelen veri otomatik olarak json olur.
    console.log(response.data[0].translations.de);
    console.log(response.data[0].borders[3]);
});