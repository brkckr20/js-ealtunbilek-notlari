let deger;
deger = window; //tüm elementler bir window objesinin içerisindedir.
deger = window.document; //lazım olarak tüm veriler buradadır.
deger = document.all.length; //sayfada bulunan tüm elemnteri gösterir ve length ile bunların sayısını aldık.
deger = document.all[6]; // tüm elementleri bir dizi içerisinde tutar ve o dizi içerisindeki indis numarası ile o değere ulaşabiliriz
deger = document.body; //dökümanlar içerisindeki body etiketine erişim sağladık.
deger = document.URL; //o dökümanın çalıştığı linki gösterir.
deger = document.domain;
deger = document.forms;
deger = document.forms[0].id;
deger = document.links[0].className; //tüm classlari tek bir string olarak verir.
deger = document.links[0].classList; //tüm classlari birer dizi haline dönüştürerek verir.
deger = document.images[0].src;
deger = document.images[0].getAttribute("src"); // src bir attribute olduğu için yukarıdaki ile aynı işlemi yapar.
console.log(deger);