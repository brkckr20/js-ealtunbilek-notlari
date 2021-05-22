const http = require('http');

const server = http.createServer((req,res) => { //server oluşturma
   // console.log(req.url,req.method,req.headers);
  //  res.write("<p>Merhaba Dunya</p>");
  //  res.end();


    if (req.url === '/') {
        res.write("<p>burasi index</p>");
        res.end(); //isteğin cevaplanabilmesi için gereklidir. 
    }
    if (req.url === '/uyeler') {
        res.write("uyelerin oldugu sayfa listelenecektir.");
        res.end();
    }

});

server.listen(3000); //oluşturulan serveri dinleme