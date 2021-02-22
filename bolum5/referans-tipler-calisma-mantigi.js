// primitive tipler
let yas = 21;
let yeniYas = yas;
yas = 40;
console.log(yas,yeniYas);
 //sadece belirtilen değişken değeri değişir.




// referans tipler
//referansı değiştiği için ilk durumda da ikinci durumda da değişme olur. dizi içerisindeki indis numarasıni referans gibi değerlendirebiliriz
//eşittir ifadesi değeri değil referans numarasını değiştirir.


let dizimiz = ["bir",2,"abi",true];;
let yenidizi = dizimiz;
dizimiz.push('denemeeklemesi');
console.log(dizimiz,yenidizi);



let nesne = {
    ad : "burak",
    yas : 29,
}

let yeninesne = nesne;
nesne.yas = 28;

console.log(nesne,yeninesne);