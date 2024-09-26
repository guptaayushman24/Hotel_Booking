const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/routes');
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router);
app.listen(5000,(erq,res)=>{
    console.log("Server is running on the PORT",5000);
})