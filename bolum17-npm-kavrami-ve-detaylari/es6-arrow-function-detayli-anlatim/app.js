const selamVer = function () {  //normal fonksiyon tanımlama - function anahtar kelimesi kullanılarak
    console.log("Merhabayn");
}
selamVer();

const selamVerArrowFunction = () => { //arrow function ile tanımlama
    console.log("Arrow kullanımı");
}
selamVerArrowFunction();

const selamVerArrowFunctionKisaVersiyonu = _ =>{ //parametre yok ise
    console.log("Selam ver parametresiz arrow function kullanımı");
};
selamVerArrowFunctionKisaVersiyonu();


const selamVerArrowFunctionKisaVersiyonu_1 = _ => console.log("Selam ver parametresiz ve süslü parantez olmadan kullanılan arrow function kullanımı");
selamVerArrowFunctionKisaVersiyonu_1();

const karesiniAl = (sayi) => {
    console.log(sayi*sayi);
}

karesiniAl(3);


const karesiniAlTekParametre = sayi => { //tek parametre de parantez kullanılması zorunlu değildi.
    console.log(sayi*sayi);
}

karesiniAlTekParametre(4);

const tekParametreReturnIfadesiOlmadan = sayi => sayi + 20;
console.log(tekParametreReturnIfadesiOlmadan(22));;


/* const selamVerArrowFunctionKisaVersiyonu = _ => console.log("Selam ver parametresiz arrow function kullanımı");
tek satır kod parçamız var ise süslü parantezleri kullanmak zorunda değiliz.
selamVerArrowFunctionKisaVersiyonu(); */