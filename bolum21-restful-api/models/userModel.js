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


UserSchema.methods.joiValidation = function(userObject){

    const schema = Joi.object({
        isim : Joi.string().min(3).max(30).trim().required(),
        userName : Joi.string().min(3).max(50).trim().required(),
        email : Joi.string().trim().email().required(),
        sifre : Joi.string().trim().required(),
    });

    return schema.validate(userObject);
}
const User = mongoose.model('User',UserSchema);

module.exports = User;