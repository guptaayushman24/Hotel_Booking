const mongoose = require('mongoose');
const blogschema = new mongoose.Schema({
    WritterName:{
        type:String,
        require:true,
    },
    Title:{
        type:String,
        require:true  
    },
    Blog:{ 
        type:String,
        require:true
    }
})
const BlogSchema = mongoose.model('BlogSchema',blogschema);
module.exports=BlogSchema;