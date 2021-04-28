/*
*   Çalıştırdığımız veya çağırdığımız her fonksiyon için ayrı bir execution context oluşturulur. Bu çalıştırılan fonksiyonlar
*   call stack denilen bir yapıda tutulur.
*
*   En son çağrılan fonksiyon bu yapının en üstünde yer alır ve bittiğinde bir alttaki fonksiyondan program çalışmaya devam eder
*
*   Tüm bu yapıların olduğu temel execution contexte ise global execution context denir.
*
*   Bir js dosyası çalıştırınca js engine tüm çalışmalar için bir execution context oluşturur. buna global execution context denir.
*   Bu yapı call stack yapısının en altında bulunur.
*   bu yapı oluşturulurken iki aşama gerçekleşir
*       -> creation phase
*       -> execution phase
*   Creation phase de global object, this oluşturulur. Hoisting gerçekleşir.
*   Exection phase de ise fonksiyon çalıştırmaları yapılır.
*
*
*   Lexical Environment - Lexical Analysis
*   - Bir değişkeni veya  bir fonksiyonu nerede tanımladığımız çok önemlidir.
*   - Her fonksiyon birbirinden ayrı dünyalar olarak düşünülmelidir. JS Engine programımızı çalıştırırken fonksiyonları nerede yazdığımızla ilgilenir.
*     Fonksiyonlarımıza bakarken bu fonksiyon nerede tanımlamış ona bakar. Buna Lexical Environment denir. Compile time'de bir fonksiyon nerede
*     tanımlanmış, lexically de nerede duruyor.
*   - A fonksiyonu lexically globalde tanımlanmış.
*   - B fonksiyonu lexically a fonksiyonunda tanımlanmış
*   - Bu sayede compiler neyi nereye koyacağını, nasıl bir aksiyon alacağını, o lexical environment da nelerin ulaşılabilir olduğunu anlar.
*   - Özetle her fonksiyonun tanımıyla bir lexical environment oluşturulur.
*   - Her fonksiyonun çağrılmasıyla bir execution context oluşturulur.
*
*
*
*
*
*
*   FUNCTION DECLEATION
*   function adiniSoyle(){
*       console.log("Burak");
*   }
*   //compiler time de oluşturulmuştur.
*
*
*
*   FUNCTION EXPRESSION
*   var adiniYaz = () => {
*       console.log("Burak");
*   }
*   //bu fonksiyon runtime de oluşturulmuştur.
*
*
*   //çağrılması
*   adiniSoyle();
*   adiniYaz();
* */