const {mongoose} = require('mongoose');
const Usersignupschema = require('../schema/User_Signup');
async function updateuserpassword(req,res){
    const {EmailAddress,Password} = req.body;
    try{
        const response = await Usersignupschema.updateOne(
            { EmailAddress: EmailAddress },
            { $set: { Password: Password } }
    );
    if (response.modifiedCount>0){
        return res.status(200).json({'msg':'Field updated successfully'});
    }
    else{
        
        return res.status(404).json({'msg':'No changes'});
    }

}
    
    catch(error){
        console.log("Error updating password:", error);
        return res.status(500).json({ msg: 'Internal server error' });
    
    }
}
module.exports = {
    updateuserpassword
}