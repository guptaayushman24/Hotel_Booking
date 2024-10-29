const mongoose = require('mongoose');
const orderhistory = new mongoose.Schema({
    HotelName:{
        type:String,
        require:true
    },
    Price:{
        type:String,
        require:true,
    },
    UserName:{
        type:String,
        require:true
    },
    CheckinDate:{
        type:String,
        
        require:true,
    },
    CheckoutDate:{
        type:String,
        
        require:true,
    },
})
const OrderHistorySchema = mongoose.model('OrderHistorySchema',orderhistory);

module.exports=OrderHistorySchema;