/* filterde şarta uyanları geri döndürür. */
    const sayilar = [1,2,4,5,6,6,5,4,3,4,55,4,3,5,6,4,3];
    const yeniDizi = sayilar.filter(function (sayi,index) {
        return sayi <5; //5 ten küçük olan sayıları döndürür.
 });

    console.log(yeniDizi);
    console.log("////////////////////// FİLTER GİBİ KULLANIMI /////////////////////////");
    const yeniDiziWithReduce = sayilar.reduce(function (pre,sayi,index) {
        if (sayi<5){
            pre.push(sayi);
        }
        return pre;
    },[]);

console.log(yeniDiziWithReduce);

console.log("///////////");

const bulunanEleman = sayilar.find(function (sayi,index) {
    return sayi === 2;
});
console.log(bulunanEleman);

const bulunanElemanWithReduce = sayilar.reduce(function (pre,sayi,index) {
    // dizi içerisindeki istenen eleman ile eşleştiğinde o değeri geri döndürür eğer birden fazla var ise ilk olanı geriye döndürür.
    // index değeri döngü sayısını gösterir.
    //pre - varsayılan olarak olmasını istediğimiz değerdir.
    //sayi değerini karşılaştırır  ve varsa o değeri geriye döndürür yoksa varsayılan olan değeri döndürür.
    console.log(pre,sayi,index);
    if (sayi === 2 ) {
        return sayi;
    }
    else{
        return pre;
    }
  },undefined);

  console.log("///////////");
  console.log(bulunanElemanWithReduce);