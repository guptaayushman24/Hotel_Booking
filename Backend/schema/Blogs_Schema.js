const mongoose = require('mongoose');
const blogschema = new mongoose.Schema({
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