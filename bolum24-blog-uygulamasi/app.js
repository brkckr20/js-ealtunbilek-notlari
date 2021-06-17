const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const blogRouter = require('./src/routes/blog_router')



app.use(express.static('public')); //public klasörünün statik bir klasör olduğunu ve nodejs ile doğrudan bir ilişkisi olmadığını siteme söylemiş olduk. yani adres çubuğuna /public yazarsam erisilmez. ama içindeki dosyaya public yazmadan /main.css olarak erişebiliriz
app.use(expressLayouts);
app.set('view engine','ejs'); //view engine için ejs kullan
app.set('views',path.resolve(__dirname,'./src/views')); //default olarak kendimiz açmış olduğumuz views klasörünü belirlemiş olduk


app.use(express.urlencoded({extended : true})); //search kısmındaki form arama ekranı için eklendi


app.use('/',blogRouter);
app.use('/blog',blogRouter);

app.listen(3000,() => {
    console.log("3000 portundan çalıştı");
})