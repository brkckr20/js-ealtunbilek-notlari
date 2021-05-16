// event bubbling -> balonlama mantığı
/**
 *  tıklanan elemanın varsa parentı ve parentının da click eventi varsa onların click olayları da çalışır.
 *  aynı düzeyde bulunan ve tıklanabilir özelliği bulunan aynı elemanlar
 *  var ise sadece en baştaki tıklanabilir. bu istemediğimiz bir durumdur.
 *  boyle durumlarda ise parent seçilir. 
 * 
 * 
 */

/* document.querySelector('.parent').addEventListener('click', (e) => {
    console.log("parent");
});

document.querySelector('.child').addEventListener('click', (e) => {
    console.log("child");
});
 */
/* document.querySelector('.item').addEventListener('click', (e) => {
    console.log("items");
}); */

//her alanın tıklanması
document.querySelector('.parent').addEventListener('click', (e) => {
        //istenen bi durum değil, yeni class eklenmesi halinde çalışmayacaktır.
    /* if (e.target.className == "item child-item") {
        console.log("Merhaba Tıklandı");

    } */
    if (e.target.classList.contains('item')) {
        console.log("Merhaba Tıklandı");
    }
});