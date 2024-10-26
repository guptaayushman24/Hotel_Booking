const mongoose = require('mongoose');
const usersignup = new mongoose.Schema({
    FirstName:{
        type:String,
        require:true
    },
    LastName:{
        type:String,
        require:true
    },
    EmailAddress:{
        type:String,
        require:true,
        unique:true,
    },
    Password:{
       
        type:String,
        require:true
    }
})
const Usersignupschema = mongoose.model('Usersignupschema',usersignup);
module.exports = Usersignupschema;