const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('@hapi/joi');

UserSchema = new Schema({
    isim : {
        type : String,
        required : true,
        trim : true,
        minlength : 3,
        maxlength : 30,
    },
    userName : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        minlength : 3,
        maxlength : 30,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true
    },
    sifre : {
        type : String,
        trim : true,
        required : true
    }
},{collection : 'kullanicilar', timestamps : true });

    //birden fazla kez kullanıldığı için teke düşürüldü...
const schema = Joi.object({
    isim : Joi.string().min(3).max(30).trim(),
    userName : Joi.string().min(3).max(50).trim(),
    email : Joi.string().trim().email(),
    sifre : Joi.string().trim(),
});


//yeni user eklerken kullanılır
UserSchema.methods.joiValidation = function(userObject){

    schema.required(); // yukarıdad kullanılan schemadaki tüm alanların gerekli olduğunun belirtilmesi

    return schema.validate(userObject);
}


//eklenme ve güncelleme işlemleri sırasında bu alanların kullanıcıya geri gönderilmesini engelledik 
UserSchema.methods.toJSON = function(){
    const user = this.toObject();
    delete user._id;
    delete user.sifre;
    delete user.createdAt;
    delete user.updatedAt;
    delete user.__v;

    return user;
}


//update etme işleminde kullanılır
UserSchema.statics.joiValidationForUpdate = function(userObject){

    return schema.validate(userObject);
}

const User = mongoose.model('User',UserSchema);

module.exports = User;