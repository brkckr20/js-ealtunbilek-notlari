const myForm = document.querySelector('#myForm');
const isim = document.querySelector('#ad');
const sehirler = document.querySelector('#sehir');
//myForm.addEventListener('submit',eventiYakala); //metot ismi verdik metodu dışarıda tanımladık

// isim.addEventListener('keydown',eventiYakala); //klavye bir tuşa basma olayı
// isim.addEventListener('keyup',eventiYakala); //basılmış olan tuştan çekildiği esnada çalışır.

// isim.addEventListener('keypress',eventiYakala); //basılıp çekildi zaman çalışır
// isim.addEventListener('focus',eventiYakala); // kutunun içine girdiği zaman tetiklenir
// isim.addEventListener('blur',eventiYakala); // kutunun içinden çıkıldığı zaman tetiklenir
// isim.addEventListener('cut',eventiYakala); // input içerisindeki değerin kesilmesi durumunda çalışacak event
// isim.addEventListener('paste',eventiYakala); // input içerisine değerin yapıştırılması durumunda çalışacak event
// isim.addEventListener('input',eventiYakala); // eleman içerisinde yukarıda olan yazma silme kesme basma çekme gibi olayların hepsini kapsayan event

sehirler.addEventListener('change',eventiYakala); //select de değişme olması durumu

function eventiYakala(e) {
  //  console.log(isim.value);
  //  document.querySelector('.link') .textContent = isim.value;


    

    console.log("Event adı : " + e.type);


    e.preventDefault();
};