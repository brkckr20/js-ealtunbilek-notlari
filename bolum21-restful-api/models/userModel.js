const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('@hapi/joi');
const createError = require('http-errors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

UserSchema = new Schema({
    isim: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    sifre: {
        type: String,
        trim: true,
        required: true,
        minlength: 5
    }
}, { collection: 'kullanicilar', timestamps: true });

//birden fazla kez kullanıldığı için teke düşürüldü...
const schema = Joi.object({
    isim: Joi.string().min(3).max(30).trim(),
    userName: Joi.string().min(3).max(50).trim(),
    email: Joi.string().trim().email(),
    sifre: Joi.string().min(5).trim(),
});

UserSchema.methods.generateToken = async function(){
    const girisYapanUser = this;
    const token = await jwt.sign({
        _id : girisYapanUser._id,
        email : girisYapanUser.email 
    },
    "secret_key"
    ,{
        expiresIn : '1h'
    }
    )
    return token
}


//yeni user eklerken kullanılır
UserSchema.methods.joiValidation = function (userObject) {

    schema.required(); // yukarıdad kullanılan schemadaki tüm alanların gerekli olduğunun belirtilmesi

    return schema.validate(userObject);
}


//eklenme ve güncelleme işlemleri sırasında bu alanların kullanıcıya geri gönderilmesini engelledik 
UserSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user._id;
    delete user.sifre;
    delete user.createdAt;
    delete user.updatedAt;
    delete user.__v;

    return user;
}

UserSchema.statics.girisYap = async (email, sifre) => {

    const { error, value } = schema.validate({ email, sifre });
    if (error) {
        throw createError(400, error);
    }

    const user = await User.findOne({
        email: email
    });
    if (!user) {
        throw createError(400, "Girilen email hatası........");
    }

    const sifreKontrol = await bcrypt.compare(sifre,user.sifre); // ikinci parametre db'den gelen
    if (!sifreKontrol) {
         throw createError(400,"Girilen şifre hatalı...");

    }

}


//update etme işleminde kullanılır
UserSchema.statics.joiValidationForUpdate = function (userObject) {

    return schema.validate(userObject);
}

const User = mongoose.model('User', UserSchema);

module.exports = User;