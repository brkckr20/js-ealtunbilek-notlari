const test = function () {  //global diye bir değer döndürür. normal tarayıcı ekranında window döndürmesi gibi
    console.log(this);
}
test();

const test_arrow_function = () => {  //globali döndürmez
    console.log(this);
}
test_arrow_function();

const person = {
    ad : "Burak Çakır",
    yas : 29,
    sevdigiRenkler : ['sarı', 'kırmızı'],
    goster(){
        console.log(this); //içinde bulunduğu objeyi geriye döndürür.
        const obje = this;
        this.sevdigiRenkler.forEach(function (renk) {  
            console.log(obje.ad + " adlı kişinin sevdiği renkler : " + renk); //bu şekilde undefined döndürür.
        })
    },
    
}
person.goster();

const person2 = { //arrow ile this kavramını döndürme
    ad : "Burak Çakır",
    yas : 29,
    sevdigiRenkler : ['pembe', 'mor'],
    /* goster : () =>{
        console.log(this); //boş obje döndürür.
        bunun yerine aşağıdaki gibi bir kullanım tavsiye edilir.
    } */
    goster : () => { //arrow function kullanarak this anahtar kelimesinin bir üst parent elemanı temsil etmesini sağladık
        console.log(this); 
        console.log(this.ad);
    }
}
person2.goster();