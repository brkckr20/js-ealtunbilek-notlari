console.log("Başladı");

console.log("Bitti");
function getUser(id) {
    return new Promise((resolve,reject)=>{
        console.log(id + " id'li user getiriliyor");
        setTimeout(() => {
            resolve({
                id : 123,
                ad : "Burak"
            });
        }, 1500);          
    })
}

function getCourse(userName){
    return new Promise((resolve,reject) => {
        console.log(userName + " adlı kişinin kursları getiriliyor." );
        setTimeout(() => {
            resolve(['Java','Flutter','Kotlin']);
        }, 2000);
    })
}

function getComment(courseName) {
    return new Promise((resolve,reject) => {
        console.log(courseName + " isimli kursun yorumları getiriliyor.");
        setTimeout(() => {
           // reject("hataaaa");
            resolve("Harika bir kurs");
        }, 2000);
    });
}

/* getUser(123)
    .then((sonuc) => getCourse(sonuc.ad))
    .then((kursDizisi) => getComment(kursDizisi[0]))
    .then((yorum) => console.log(yorum)); */



    /**
     *  await kullanmak için fonksiyonumuzun async olması gerekir.
     * 
     */
async function yorumGetir() {
    try {
    const userObj = await getUser(123);
    const courseDizisi = await getCourse(userObj.ad);
    const yorum = await getComment(courseDizisi[0]);
    console.log(yorum);
    } catch (hata) {
        console.log(hata + " var bremin");
    }
}

yorumGetir();
