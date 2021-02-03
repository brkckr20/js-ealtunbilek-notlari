/*
*   şart sağlandığı sürece çalışır
* */
let sayi = 0;
while (sayi< 10){
    console.log(sayi + " . eleman");
    sayi++;
}


/* do while */
let yas = 20;
do {
    console.log("Şart sağlanmadı ama çalıştı"); // bir kere çalışır.
}while (yas>30);


/*
*
*   break,continue,return
* */
for (var i = 0;i<3;i++){

    console.log("test");
    if (i==1){
        break;
    }
    console.log("break kullanımı")
}

//continue

for (var i = 0;i<10;i++){
    if (i==5){
        continue;
        console.log(i + " boş geçildi");
    }
    console.log(i +" . continue kullanımı");
}


for (var i =0;i<10;i++){
    if (i==4){
       // return;
        //for içinde kullanımı sadece metot içerisindeyse çalışır. diğer türlü illegal statemen hatası verir.
    }
    console.log("return " + i);

}