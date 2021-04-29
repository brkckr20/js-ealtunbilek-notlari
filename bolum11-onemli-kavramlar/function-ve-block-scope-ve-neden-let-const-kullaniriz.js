/**
 *
 *      Scope : bir değişkenin tanımlı olduğu alan demektir.
 *      JS Function scope bir dildir. Bir fonksiyon içerisinde tanımlandıysa fonksiyon içerisinde herhangi bir yerden erişilebilir.
 *      Diğer dillerin çoğu block scope'dur. Yani süslü parantez içerisinde tanımlanmış olan bir değişken sadece o süslü parantezler
 *          yani block içerisinde geçerlidir.
 *
 * 
 *     **** var anahtar kelimesi global bir anahtar kelimedir.
 *
 *
 *
 *      let ve const farkları :
 *
 *     ****  let ve const ile oluştulan değişkenler block scope tur. yani fonksiyon içerisinde bir if bloğu açtık diyelim o değişkenler sadece
 *      o blok içerisinde geçerlidir.
 *      function a(){
 *          let ad = 'Burak';
 *          if(true){
 *              console.log(ad);
 *              let soyad = cakir;
 *          }
 *          console.log(cakir);
 *      } yukarıdaki ad değişkenine if bloğu içerisinden ulaşabiliriz. fakat if bloğu içerisinde let ile tanımlanmış bir değere blok dısından erişemeyiz.
 *        aynı şeyler for döngüsü içinde geçerlidir.
 *
 *      ****  let ile veya const ile tanımladığımız bir değişkeni aynı isimle tekrardan tanımlama yapamayız.
 *      ****  let ile tanımlanan değişkenlerin değerleri sonradan değiştirilebilirken const ile tanımlanmış olan bir değişken değeri yada tipi
 *            falan değiştirilemez....
 * */