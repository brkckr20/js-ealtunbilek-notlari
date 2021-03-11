//veri kaynağımızda bazı değerlere göre filtreleme yapmamızı sağlar

const bitkiler = [
    {
        ad : "Üzüm",
        tur : "Meyve"
    },
    {
        ad : "Çilek",
        tur : "Meyve"
    },
    {
        ad : "Havuç",
        tur : "Sebze"
    },
    {
        ad : "Lahana",
        tur : "Sebze"
    },
    {
        ad : "Armut",
        tur : "Meyve"
    },
];

/** yukarıdaki kullanım alttaki kodların filter metodu ile kullanılması */

const meyveler = bitkiler.filter(function(bitki) {
    return bitki.tur == "Meyve";
});
const sebzeler = bitkiler.filter(function(bitki) {
    return bitki.tur == "Sebze";
});

console.log(meyveler);
console.log(sebzeler);



console.log("*******************************************************************");





//**---------------------------- */
function meyveleriBul() {
    const geciciDizi = [];
    for (let i = 0; i < bitkiler.length; i++) {
        if (bitkiler[i].tur === "Meyve") {
            geciciDizi.push(bitkiler[i]);
        }
    }

    return geciciDizi;
}

console.log(meyveleriBul());

function sebzeleriBul() {
    const geciciDizi = [];
    for (let i = 0; i < bitkiler.length; i++) {
        if (bitkiler[i].tur === "Sebze") {
            geciciDizi.push(bitkiler[i]);
        }
    }

    return geciciDizi;
}

console.log(sebzeleriBul());




console.log("---------------------kendi filter yapım------------------------------");

function kendiFilterYapim(dizi,filtreSartlari) {
    const geciciDizi = [];
    for (let i = 0; i < dizi.length; i++) {
        const sonuc = filtreSartlari(dizi[i],'Sebze');

        if (sonuc) {
            geciciDizi.push(dizi[i]);
        }
    }


    return geciciDizi;
}

function filtre(bitki,sart) {
    return bitki.tur === sart;
}

const myMeyve = kendiFilterYapim(bitkiler,filtre);

console.log(myMeyve);