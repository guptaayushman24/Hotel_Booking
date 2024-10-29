const mongoose = require('mongoose');
const OrderHistoryschema = require('../schema/Order_History');
// Function to save the Order History
async function orderhistory(req, res) {
    try {
        const orderhistorydata = req.body;
        console.log(orderhistorydata);
        const orderhistory = await OrderHistoryschema(orderhistorydata).save();
        res.status(200).json(orderhistory); 
    }
    catch(err){
        res.status(500).json({ message: err.message}); 
    }

}


// Function to display the hotel details booked by the user
async function displayorderhistory(req,res){
    try{
        const body = req.body.Email;
        const data = await OrderHistoryschema.find({'Email':body})
        return res.json({data});
    }
    catch(err){
       return res.status(500).json({message:err.message});
    }
}
module.exports = {
    orderhistory,
    displayorderhistory
}