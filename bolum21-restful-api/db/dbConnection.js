const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restfulapi', {
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useCreateIndex : true
})
    .then(() =>{
        console.log("Veri tabanına bağlanıldı.");
    })
    .catch(hata => {
        console.log("db hata");
    });
