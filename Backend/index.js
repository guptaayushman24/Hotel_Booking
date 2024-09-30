const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const router = require('./routes/routes');
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/Hotel_Booking').then(()=>{
    console.log("Mongodb Connected");
}).catch((err)=>{
    console.log(err);
})

app.use('/',router);
app.listen(5000,()=>{
   
    console.log("Server is running on the PORT",5000);
})