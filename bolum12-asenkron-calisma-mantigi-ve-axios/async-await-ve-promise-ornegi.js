function getUser(id) {
    console.log(`${id} idli kullanıcının bilgileri getiriliyor`);

    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve({
                ad : "Burak",
                id : id,
            });
        },2000);
    });
}

function getCourses(userName){
    console.log(`${userName} isimli kullanıcının kurs bilgileri getiriliyor`);

    return new Promise((resolve,reject) => {
        setTimeout(() =>{
          //  reject("Hata meydana geldi");
            resolve(["Java","Php","JS","Laravel"]);
        },2000);
    });
}

function getComment(kursAdi){
    console.log(`${kursAdi} isimli kursun yorum bilgileri getiriliyor`);

    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("Kurs mükemmel");
        },2000);
    });
}

/*getUser(123).then((user)=>{
    getCourses(user.ad).then(kurslarDizisi => {
        getComment(kurslarDizisi[0]).then(yorum => {
            console.log(yorum);
        });
    });
});*/
//üsttekinin zincirleme ve daha kısa yazılmış hali
getUser(1234)
    .then(user => getCourses(user.ad))
    .then(kursDizisi => getComment(kursDizisi[0]))
    .then(yorum => console.log(yorum))
    .catch(hata => console.log(hata));




/*
getCourses("Burak").then((kurslarinOlduguDizi) => {
    console.log(kurslarinOlduguDizi);
});*/



/**
 *  async - await kullanımı
 *  - bütün kodlarımız bir fonksiyon içinde olmalıdır.
 * */

async function yorumlariGoster() {
    //syntax olarak catch kullanamadığımız için hata olması durumuuna karşı try-catch bloğu içine yazılır.
    try {
        const userObje = await getUser(123412321);
        const kurslarDizisi = await getCourses(userObje.ad);
        const yorum = await getComment(kurslarDizisi[0]);
        console.log(yorum);

    }catch (e) {
        console.log("Hata oluştu altta bi yerde" + e);
    }
}
yorumlariGoster();