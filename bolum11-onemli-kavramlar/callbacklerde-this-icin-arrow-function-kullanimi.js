const okulum = {
    isimler : ['burak','gamze','metin'],
    idler : [1,2,3],
    ogrencileriYazdir(){
        //bu hatanın önüne geçmek için
        const that = this; //this bir değişkene atanır.
        this.isimler.forEach(function (isim,index) {
          //  console.log(this); // bu şekilde kullanımda window nesnesini gösterir.. HATA!!
            console.log(that);
            console.log(isim,that.idler[index]);
        });
    },


    //diğer yöntem
    //bu fonksiyon içerisinde this anahtar kelimesini kullanacağımızı bind ile bildirdik.
    idleriYazdir(){
        this.idler.forEach(function (id,index) {
            console.log(this);
        }.bind(this));
    },



    //diğer yöntem
    ogrenciSayisiniVer(){
        /*setTimeout(function () {
            console.log(this); // bu da window nesnesini gösterir. HATA!!!
            console.log("Toplam ogrenci sayisi : " + this.isimler.length);
        },2000);
            hemen altta arrowa döndürüldü.
        */

        setTimeout( () => {
            console.log(this); // bu da window nesnesini gösterir. HATA!!!
            console.log("Toplam ogrenci sayisi : " + this.isimler.length);
        },2000); //arrow functionun kendi thisi olmadığı için bi üst fonksiyona gider. bizim örnekte ise hata vermez.
    }
};

okulum.ogrencileriYazdir();

console.log("---");

okulum.idleriYazdir();
console.log("---");
okulum.ogrenciSayisiniVer();




//queryselectorlar ile örnek çalışma

const baslik1 = document.querySelector('h1');
const baslik2 = document.querySelector('h2');
const baslik3 = document.querySelector('h3');

baslik1.addEventListener('click',function (e) {
    console.log(this);
});

baslik2.addEventListener('click',baslikTiklandi);
function baslikTiklandi(e) {
    console.log(e.target); // e.target thisi veriyor.
    console.log(this);
}
