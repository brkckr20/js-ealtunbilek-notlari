const linkler = document.getElementsByClassName("link");
console.log(linkler[0]);
console.log(linkler[1]);
linkler[0].style.color = "red";
linkler[1].style.backgroundColor = "#ccc";
linkler[2].textContent = "Instagram Linki"; //metinsel olarak içerik değiştirme
linkler[2].style.textTransform = "uppercase";
document.getElementsByClassName("div test"); //bu şekilde kullanılamaz. div bir element olduğu için seçemez. querySelector gibi değildir.
console.log(document.querySelector('ul').getElementsByClassName('links'));
const dizim = Array.from(linkler);
dizim.reverse();
dizim.forEach(item => { //arrow function tek parametre alıyor ise parametrenin parantez içerisine alınması zorunlu değildir.
    console.log(item);
});



const listeElemanlarim = document.getElementsByTagName('h1');
console.log(listeElemanlarim);
console.log(document.querySelectorAll('h1')); //bi yukarıdaki ile aynı işlemi yapar. //queryselectorun çoklu seçim yapabilen methodu

const liEtiketiTekli = document.querySelectorAll('li:nth-child(odd)'); //liste döndürür ve işlem yapmak için döngüye sokmak gerekir
const liEtiketiCiftli = document.querySelectorAll('li:nth-child(even)'); //liste döndürür ve işlem yapmak için döngüye sokmak gerekir

liEtiketiTekli.forEach(item=>{
    item.style.backgroundColor = "green";
});
for (let i = 0; i < liEtiketiCiftli.length; i++) {
    liEtiketiCiftli[i].style.backgroundColor = "pink";
    
}