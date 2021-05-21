let kisi = {
    ad : {
        firstName : "Burak",
        lastName : "Çakır",
    },
    yas : 29,
    sevdigiRenkler : ["Sarı" , "Kırmızı"]
}

//obje içerisinde bulunan objeye erişme
// const { yas, ad:{firstName,lastName} } = kisi;
// console.log(firstName);

//kısa yazımı

const {
    ad : {
        firstName,
        lastName
    },
    sevdigiRenkler : [item1,item2]
} = kisi;

console.log(`${item2} ve ${firstName}`);