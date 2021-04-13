 const myListe = document.querySelector('ul.liste');
 console.log(myListe);
 let deger;
 deger = myListe.childNodes;
 deger = myListe.childNodes[1].nodeName; //çocuklarda bulunan element adını verir.
 //1 elementi verir.
 //3 text yazan boşluk alanını verir.
 //8 ise commentleri verir.



 deger = myListe.firstChild;
 deger = myListe.firstElementChild;

 deger = myListe.lastChild;
 deger = myListe.lastElementChild;

 deger = myListe.childElementCount; //çocukların eleman sayısı


 //parent element
 deger = myListe.parentElement; //üst elementi verir.
 deger = myListe.parentElement.parentElement;
 console.log(deger);


 console.log("---");

 const myInput = document.querySelector('input');
 console.log(myInput.parentElement);


 console.log("---");

 deger = document.querySelector('li').nextElementSibling; // komşu element- kendinden sonraki element

 deger = document.querySelector('li').nextElementSibling.nextElementSibling.previousElementSibling; // previous kendinden önceki element
 // komşu demek aynı düzeyde element demektir.
 console.log(deger);