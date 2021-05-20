console.log("Program başladı...");

//callback hell -- callback cehennemi
getUser(123,(userObject)=>{ //bizim callback imiz bir obje döndürüyor.
  //  console.log("Getirilen kullanıcı : " + userObject.ad);
    getCourse(userObject.ad,(kursDizisi)=>{
  //      console.log("Kursları :  " + kursDizisi);
        getComment(kursDizisi[0]);
    });
});


function getUser(id,callback) {  //ismi callback olması zorunlu değildir.
    console.log(id + " id'li user getiriliyor.");
    setTimeout(() => {
        callback({ //çalışması için return edilmesi gereken ifade belirlemiş olduğumuz callback metodu içerisinde tanımlanmalıdır.
            id : id,
            ad : "Burak Çakır"
        })
    }, 1500);
}

function getCourse(username,callback) {  
    console.log(username+ " adlı kişinin kursları getirilecek");
    setTimeout(() => {
        callback(
            ['Java','Flutter','Kotlin']
        );
    }, 2000);
}

function getComment(kursAdi) {  
    console.log(kursAdi + ' isimli kursun yorumları getiriliyor.');
    setTimeout(() => {
        console.log("Harika bir kurs");
    }, 2000);
}


/***
 *  callback -> bir fonksiyona parametre olarak verdiğimiz ve daha sonra geri çağırdığımız fonksiyondur.
 * 
 * 
 */



console.log("Program bitti...");