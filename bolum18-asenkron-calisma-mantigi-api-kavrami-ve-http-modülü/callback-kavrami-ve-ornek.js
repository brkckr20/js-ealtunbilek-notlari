console.log("Program başladı...");


getUser(123,(userObject)=>{ //bizim callback imiz bir obje döndürüyor.
    console.log("Getirilen kullanıcı : " + userObject.ad);
    getCourse(userObject.ad,(kursDizisi)=>{
        console.log("Kursları :  " + kursDizisi);
    });
});


function getUser(id,callback) {  //ismi callback olması zorunlu değildir.
    setTimeout(() => {
        console.log(id + " id'li user getiriliyor.");
        callback({ //çalışması için return edilmesi gereken ifade belirlemiş olduğumuz callback metodu içerisinde tanımlanmalıdır.
            id : id,
            ad : "Burak Çakır"
        })
    }, 1500);
}

function getCourse(username,callback) {  
    setTimeout(() => {
        console.log(username+ " adlı kişinin kursları getirilecek");
        callback(
            ['Java','Flutter','Kotlin']
        );
    }, 2000);
}



/***
 *  callback -> bir fonksiyona parametre olarak verdiğimiz ve daha sonra geri çağırdığımız fonksiyondur.
 * 
 * 
 */



console.log("Program bitti...");