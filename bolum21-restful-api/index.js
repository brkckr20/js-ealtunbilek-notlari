const express = require('express');
require('./db/dbConnection');
const hataMiddleware = require('./middleware/hataMiddleware');
const jwt = require('jsonwebtoken');

const userRouter = require('./router/userRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.status(200).json({
        'mesaj': "hoşgeldiniz"
    })
});

/* app.get('/:id',(req,res) => {
    console.log(req.query);
    res.status(200).json({'id' : req.params.id})
});


app.post('/',(req,res) => {
    res.status(200).json(req.body)
}); */

app.use(hataMiddleware);

/* 
const bcrypt = require('bcrypt');

const test = async () => {
    const sifre = "brkckr20";
    const hashedSifre = await bcrypt.hash(sifre,10);
    console.log(sifre);
    console.log(hashedSifre);

    const sonuc = await bcrypt.compare(sifre,hashedSifre);
    console.log(sonuc);
}
test(); */


//jwt json web token
/* function test(){
    const token = jwt.sign(
    { //başarılı olma
        _userID : "kullaniciid",
        isAdmin : true,
        isActive : true
    },'123456', //güvenlik anahtar kelimesi - token geçerliliği buna göre belirlenir. Önemlidir
    {
        expiresIn : '2h' // geçerlilik süresi - 2 saat dedik
    }
    );

    console.log(token);
    const sonuc =jwt.verify(token , '123456');
    console.log(sonuc);
}
test();
 */

app.listen(3000, () => {
    console.log("3000 portundan server dinleniyor.");
})