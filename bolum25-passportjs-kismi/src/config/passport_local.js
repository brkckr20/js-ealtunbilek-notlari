const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user_model');

module.exports = function (passport) {
    const options = {
        usernamefield: 'email',
        passwordfield: 'parola'
    }
    passport.use(new LocalStrategy(options, async (email, parola, done) => {
        try {
            const _bulunanUser = await User.findOne({ email: email });
            if (!_bulunanUser) {
                return done(null, false, { message: "Kullanıcı bulunamadı.." })
            }
            if (!_bulunanUser.parola == parola) {
                return done(null, false, { message: "Şifre hatalı.." })
            } else {
                return done(null, _bulunanUser)
            }
        } catch (error) {
            return done(error)
        }
    }));


    passport.serializeUser(function (user, done) {
        console.log("Sessiona kaydedildi : " + user.id);
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
       // console.log("Sessiona kaydedilen id db de bulundu : ");
        User.findById(id, function (err, user) {
            const yeniUser = {
                id : user.id,
                email : user.email,
                ad : user.ad,
                soyad : user.soyad,
            }
            done(err, yeniUser);
        });
    });
}