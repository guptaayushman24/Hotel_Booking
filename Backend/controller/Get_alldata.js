const Hotel = require('../schema/Hotel_Data');
async function getAlldata(req,res) {
    try{
       const data  =  await Hotel.find({});
       return res.status(200).json({data});
    }
    catch(err){
        res.status(500).json({message:'Error in fetching the data',error:err});
        }
    }
module.exports={
    getAlldata
}
