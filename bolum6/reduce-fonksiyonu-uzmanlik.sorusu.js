function parantezlerDengeliMi(metin) {
    const dizi = metin.split('');

    const sonuc = dizi.reduce(function (previous,oankikarakter) {
        if (previous < 0) {
            return previous;
        }
        if (oankikarakter === '(') {
            return ++previous;
        }
        if (oankikarakter === ')') {
            return --previous;
        }
        return previous;
      },0); //0 initialValue dir

      if (!sonuc) {
          console.log(metin + " dengeli bir yapıdadır.");
      }else{
          console.log(metin + " dengeli bir yapıda değildir.");
      }
}

parantezlerDengeliMi("((()))");