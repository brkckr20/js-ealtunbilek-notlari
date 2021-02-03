//soru -> kullanıcında girilen sayıya kadar olan asay sayıların toplamını ekrana yazdıran program

let girilenSayi = parseInt(prompt("Bir sayı giriniz"));
let gosterilecekMetin ="";
for (var i = 2;i<= girilenSayi; i++){

    let asalSayiMi = true;

    for (let j =2; j<i; j++){
        if (i % j==0){
            asalSayiMi = false;
            break;
        }
    }
    if (asalSayiMi == true){
        gosterilecekMetin = gosterilecekMetin + i + " ";
        /*console.log(i);*/
    }

}
console.log(gosterilecekMetin);