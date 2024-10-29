const mongoose = require('mongoose');
const OrderHistoryschema = require('../schema/Order_History');
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
module.exports = {
    orderhistory
}