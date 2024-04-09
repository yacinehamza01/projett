const mongoose = require('mongoose');



const categorySchema = mongoose.Schema({
   nom:{
    type:String,
    required:true
   },
   icon:{
    type:String
   },
   couleur:{
    type:String
   }
})


exports.Category = mongoose.model('Category' , categorySchema);