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
            resolve("Harika bir kurs");
        }, 2000);
    });
}

getUser(123)
    .then((sonuc) => getCourse(sonuc.ad))
    .then((kursDizisi) => getComment(kursDizisi[0]))
    .then((yorum) => console.log(yorum));