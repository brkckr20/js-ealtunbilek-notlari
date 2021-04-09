//TEK ELEMENT SEÇİLMESİ
console.log(document.getElementById("baslik")); //o id ye sahip elementi döndürür.
console.log(document.getElementById("baslik").id); //id adını döndürür
console.log(document.getElementById("baslik").className); //class adını sini döndürür
//degiskene atama yapabiliriz
const baslik = document.getElementById('baslik');

//stil değiştirme yapabiliriz
baslik.style.backgroundColor = "red";
baslik.style.color = "white";
baslik.style.padding = "2rem";

//icerik değistirme yapabiliriz
baslik.textContent = "Burası yeni başlık";
const test = baslik.textContent;
console.log(test);

baslik.innerText = "İkinci Yeni başlık";
baslik.innerHTML = '<img src="https://cdn.pixabay.com/photo/2021/04/03/15/24/poppy-6147973_960_720.jpg" width="200" alt="">';

const sec = document.querySelector("h2");// herşey yazılabilir
console.log(sec);
console.log(document.querySelector('#yazi')); //id seçme
console.log(document.querySelector('.link')); // class seçme işlemi
console.log(document.querySelector('.link.link-google')); // class seçme işlemi
const myListe = document.querySelector('li'); //birden fazla aynı element varsa en baştaki elementi seçer
myListe.style.color = "pink";
document.querySelector('li:last-child').style.color = "purple"; //renk değiştirir. cok eleman varsa sadece ilk elemanı değiştirir
document.querySelector('li:nth-child(2)').style.color = "green";
document.querySelector('li:nth-child(3)').style.color = "aqua";