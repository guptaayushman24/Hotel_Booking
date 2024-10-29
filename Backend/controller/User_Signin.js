const {mongoose} = require('mongoose');
const Usersignupschema = require('../schema/User_Signup');
async function usersignin (req,res){
    try{
        const {EmailAddress,Password} = req.body;
        const userdata = await Usersignupschema.findOne({EmailAddress});
        if (userdata){
            if (userdata.Password==Password){
                return res.status(200).json({'msg':'User Found','username':userdata.FirstName,'userlastname':userdata.LastName,'useremail':userdata.EmailAddress});
            }
            else{
            
                return res.status(201).json({'msg':'Check Password'});
            
            }
        }
      
        else{
            return res.status(202).json({'msg':'User Not Found'})
        }
    }
    catch(err){
        return res.json({'msg':err});
    }
}
module.exports={
    usersignin
}