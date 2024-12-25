const mongoose = require('mongoose');
const orderhistory = require('../schema/Order_History');

async function deleteallorder (req,res){
    const useremail = req.params.useremail;
    try{
        const response = await orderhistory.deleteMany({Email:useremail});
        if (response.deletedCount>0){
            return res.status(200).json({'msg':'Order History Deleted Successfully'});
        }
        else{
            return res.status(404).json({'msg':'Order History is not Deleted'});
        }
    }
    catch(err){
        console.log(err.message);
        return res.status(500).json({'msg':'Internal server error',err});
    
    }
}
module.exports = {
    deleteallorder
}