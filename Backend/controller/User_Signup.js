const mongoose = require('mongoose');
const Usersignupschema = require('../schema/User_Signup')
async function signup(req,res){
    try{
       const userdata = req.body;
       const user = await Usersignupschema(userdata).save();
       return res.status(200).json(user);

    }   
    catch(err){
        if (err.code==11000){
            return res.status(409).json({ message: 'User already exists, please log in.' });
        }
    }
}
module.exports={
    
    signup
};