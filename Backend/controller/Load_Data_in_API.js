const fs = require('fs');
const path = require('path');
function Load_Data(req,res){
   try{
    const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname,'Hotel_Data.json'),'utf8'));
     res.json(jsonData);
   }
   catch(error){
    console.error("Error reading or parsing file:",error);
    res.status(500).json({error:'Internal Server Error'});
   }
}


module.exports = {
    Load_Data

}