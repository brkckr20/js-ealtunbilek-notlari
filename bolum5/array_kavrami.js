let araba1 = "Toyota";
let araba2 = "Cadillac";
let araba3 = "Opel";

let arabaMarkalari = ["BMW","Audi","Volvo"]; // dizi tanımlama

console.log("Markalar : "  + arabaMarkalari);
console.log(arabaMarkalari);    // dizinin yazdırılması yapısal olarak farklılaşır
console.log(arabaMarkalari[2]); // indis numarası ile ekrana yazdırma

arabaMarkalari.push("Volkswagen"); //dizi sonuna eleman ekleme
console.log(arabaMarkalari);
console.log("Dizi eleman sayısı : " + arabaMarkalari.length);

for (let i = 0; i<arabaMarkalari.length; i++){
    document.write(arabaMarkalari[i] + "<br>");
}

for (markalar of arabaMarkalari){ // for of kullanımı
    console.log(markalar);
}