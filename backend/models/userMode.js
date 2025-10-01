const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
const bcrypt    = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
    name : {type:String,required:true},
    email : {type:String, required:true},
    password : {type:String, required:false}
});

//Static Method to signup a user:
userSchema.statics.signup = async function(name, email,password){
    //See if the email is valid:
    if (!validator.isEmail(email)){
        throw Error("Invalid Email!");
    }
    //See if the password is strong:
    if (!validator.isStrongPassword(password)){
        throw Error("Password is not strong enough!")
    }
}