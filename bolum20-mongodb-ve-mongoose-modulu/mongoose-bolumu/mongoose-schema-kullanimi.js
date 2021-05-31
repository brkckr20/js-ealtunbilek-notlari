const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser : true, useUnifiedTopology : true })
.then( _ => {
    console.log("Veritabanına bağlanıldı...");
}).catch(error => {
    console.log(`Veri tabanı bağlantı hatası : ${error}`);
});

var blogSchema = new Schema({
   // _id : String, //eğer elle verirsek veri eklerken bu alan mutlaka olmalıdır.
    title : String,
    author : String,
    body : String,
    comments : [{
        body : String,
        date : Date
    }],
    date : {
        type : Date,
        default : Date.now
    },
    hidden : Boolean,
    meta : { //default olarak gizlenir. içine veri eklenirsa o zaman görünür.
        votes : Number,
        favs : Number
    }
},{
    collection : "yazilarim", // opsiyonel olarak verirsek tablo ismini buna göre oluşturur.
    minimize : false //varsayılan olarak true, içi boş olan objelerin de görünmesini sağlar
});

//veritabanında metotlarda saklanabilir.
blogSchema.methods.baslikGoster = function(){
    return this.title;
}

//statik olarak fonksiyon tanıma
blogSchema.statics.basligaGoreElemanGetir = function(baslik){
    return this.find({
        title : baslik
    });
}

//virtual olusturma
blogSchema.virtual('ozet').get(function(){
    return "Bu blogun basligi " + this.title + " yazarı da " + this.author;
})

const Blog = mongoose.model('blog',blogSchema); //ilk parametre tablo adı (yok ise oluşturulur.) 2.parametre ise ayarlarımız
const myBlog = new Blog({/* _id : "ilk_yazi_id",  */title : "My Blog",
});

console.log(myBlog.baslikGoster());;


myBlog.save().then(b => {
    console.log(b);
}).catch(hata => {
    console.log(hata);
});

//aynı işlemi metota statik olarak erişerek de yapabiliriz
Blog.create({title : "ikinci blog - statik metot ile eklendi"});

Blog.basligaGoreElemanGetir("My Blog").then(sonuc => {
    console.log(sonuc);
}).catch(hata => {
    console.log(hata);
});

//olusturulan virtualın çağrılması işlemi
const myBlog2 = new Blog({title : "virtual blogum", author : "Burak Çakır"});
console.log(myBlog2.ozet);