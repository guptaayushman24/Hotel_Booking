const {mongoose} = require('mongoose');
const Usersignupschema = require('../schema/User_Signup');

async function checkuser(req,res){
  try{
    const {EmailAddress} = req.body;
    const response = await Usersignupschema.findOne({EmailAddress:EmailAddress});
    console.log("The response is ",response);
    if (response){
        return res.status(200).json({'msg':'Working'});
    }
    return res.status(201).json({'msg':'Please check the email address'});
  }
  
  catch(err){
    console.log(err);
   
    return res.json(400).status({'msg':'Error'});
  
}

}
module.exports={
    
    checkuser
}