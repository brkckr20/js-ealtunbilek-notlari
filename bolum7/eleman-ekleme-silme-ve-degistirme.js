const yeniListeElemani = document.createElement("li"); //yeni eleman oluşturma

yeniListeElemani.className = 'list-itemss'; //elemana class verme
yeniListeElemani.textContent = "Yozgat"; //elemana değer atama
yeniListeElemani.id = "verilen-yeni-id"; // id tanımlama
yeniListeElemani.setAttribute('yeni-ozellik','yeni-ozellik-degeri');

document.querySelector('ul.liste').appendChild(yeniListeElemani); // elemanı liste elemanlarına eklemes
console.log(yeniListeElemani);



//deger degistirme
let yeniKucukBaslikk = document.createElement('h6');
yeniKucukBaslikk.id = "new-id";
yeniKucukBaslikk.textContent = "Yeni Başlık elemanı - replace ile yazdırma";
const eskiBaslik = document.querySelector('h2');
const baslikParent = document.querySelector('body');
baslikParent.replaceChild(yeniKucukBaslikk,eskiBaslik);



//element silme
const listeItem = document.querySelector('li');
//listeItem.remove(); elemanı siler.
document.querySelector('ul.liste').removeChild(document.querySelectorAll('li')[3]);
console.log(listeItem);

const inputElemani = document.querySelector('input');
document.querySelector('form').removeChild(inputElemani);
