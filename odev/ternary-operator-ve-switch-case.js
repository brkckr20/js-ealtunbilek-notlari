let a = 10, b = 6, c = 0;


/*
*   NORMAL IF-ELSE
* */

if (a>b){
    c = a+b;
    console.log(c);
}else{
    c = a - b;
    console.log(c);
}

/*
* ternary kullanım
* */

(a>b) ? c= a +b : c = a - b; //parantez isteğe bağlı
console.log(c);


/*
*   SWITCH-CASE KULLANIMI
*   switch içerisinde
* */

let haftaninKacinciGunu = 7;

switch (haftaninKacinciGunu) {
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    default: //hiçbir şartı sağlamayan kısım
        console.log("Pazar");
        break;

}