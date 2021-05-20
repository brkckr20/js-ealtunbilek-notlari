const hava = require('./baskentin-hava-durumu-bilgisinin-getirilmesi');
const yargs = require('yargs');


yargs.command({
    command: 'getir',
    builder: {
        ulke: {
            describe: 'ülkeyi ingilizce olarak yazınız...',
            demandOption: true,
            type: 'string',
        }
    },
    describe: "ülkelerin hava durumunu göstermeye yarar...",
    handler(argv) {
        /* console.log("Gösterilen isim : " + argv.isim); */
        hava.findCapitalWeather(argv.ulke);
    }
});

yargs.parse();

