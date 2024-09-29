const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  HotelName: {
    type:String,
    require:true,
  },
  Location: {
    type:String,
    require:true,
  },
  Rating: {
    type:Number,
    require:true
  },
  ReviewScore: {
   
    type:String,
    require:true,
  },
  RoomType: {
    type:String,
    require:true,
  },
  BedType: {
    type:String,
    require:true,
  },
  RoomPrice: {
    type:Number,
    require:true,
  },
  RoomViews: {
    type:String,
    require:true,
  },
  OtherFacility: {
    type:String,
    require:true,
  },
  Hotel_Image_URLS: {
    type:String,
    require:true,
  },
},{ collection: 'Hotel_Data' });

// Export the model

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;
