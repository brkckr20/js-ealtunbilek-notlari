/**
 *  this aşağıdaki 4 duruma göre değişir.
 *  1-) implicit binding
 *  2-) expcilit binding
 *  3-) new binding
 *  4-) Window binding
 *
 *  this'in aldığı değerleri öğrenmek için ilk olarak şunu sormalıyız.
 *  Fonksiyon nasıl çağrılmıştır. Fonksiyonun nasıl çağrıldığı bilinmezse this'in alacağı değeri de bilemeyiz.
 *
 *
 *
 * */



// 1-) implicit binding => fonksiyonun çağrıldığı noktanın solunda ne var ise this onu temsil eder.

const ogrenci = {
    ad : 'Burak',
    yas : 28,
    adimiSoyle : function () {
        console.log(this);
        console.log(this.ad);
    },
    yasimiSoyle(){
        console.log(this);
        console.log(this.yas);
    },
    sevgili : {
        ad : "xxx",
        sevgiliAdiniSoyle(){
            console.log(this);
            console.log(this.ad);
        }
    }

};

//fonksiyon çağrıldığı yerde sol kısımda . işareti varsa ve objeden çağrılmış ise this anahtar kelimesi nesneyi ifade eder.
ogrenci.adimiSoyle();
ogrenci.yasimiSoyle();
console.log(ogrenci.ad);

const adSoyle = ogrenci.adimiSoyle;
adSoyle();
/**
 *  ÜST KISIMDA ÖNCE ADSOYLE FONKSİYONU TANIMLANMIŞ. ADSOYLE FONKSIYONU ÇAĞRILIR IKEN SOLUNDA NOKTA VE HERHANGİ BİR İSİM OLMADIĞI İÇİN WİNDOW NESNESİNİ TEMSIL EDER.
 * */

// ogrenci.sevgili.sevgiliAdiniSoyle();


console.log("-------------------------------------------------------------------");


const emre = {
    ad : "Emre",
    yas : 23,
    okul : "ege",
};

const burak = {
    ad : "Burak",
    yas : 28,
    okul: "paü",
};


const bilgilerimiYazdir = function (renk,renk2) {
    console.log(this);
    console.log(`Benim adım ${this.ad} ${this.yas} yaşındayım`);
    console.log(`Sevdiğim renkler ${renk} ve ${renk2}`);
};
bilgilerimiYazdir(); // bu şekilde ki çağırmada this window nesnesini belirtir.

console.log("-----");

bilgilerimiYazdir.call(burak,'Sarı','Kırmızı'); // bu şekilde call parametresi içerisine objenin adını yazarak this anahtar kelimesinin burak objesini esas almasını sağladık
//paramtreli olarak çağırmak istersek ilk paramtremiz obje ve sonrasında gelen değerler ise parametrelerdir.

bilgilerimiYazdir.apply(emre,['gri','turuncu']);
//üstteki call ile kullanımından farklı olarak parametreleri bir dizi içerisinde alır.

//call ve apply kullanırsak fonksiyon direkt olarak çalışır.

const cagir = bilgilerimiYazdir.bind(burak,"yeşil","siyah");
//bind kullanırsak fonksiyon direk olarak çağırılmaz. o yüzden fonksiyon bir değişkene aktarılarak o değişken çağrılmalıdır.
// parametre kullanılacaksa da ister tek tek ister dizi halinde gönderebiliriz.
cagir();

//new Binding
const Araba = function (renk1,model1) {
    this.renk = renk1;
    this.model = model1;
    this.bilgiler = function () {
        console.log(this.renk); //this kullanarak sınıfın özelliği olan renk değişkenini elde ederiz
        console.log(renk1); //bu şekilde kullanırsak parametre olarak gelen renk değerini elde etmiş oluruz
    }
};

const honda = new Araba('Beyaz',2021);
honda.bilgiler();
