const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const User = mongoose.model('User',UserSchema);

module.exports = User;