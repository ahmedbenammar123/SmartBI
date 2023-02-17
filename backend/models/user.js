//inport mongoose module
const mongoose = require('mongoose');

//craeat shema
const userSchema =mongoose.Schema({
// destenation de image// le path
avatar:String,
name:String,
firstName:String,
lastName:String,
address:String,
tel:Number,
email:String,
pwd:String,
category:String,
country:String,
role:String,

});
const user =mongoose.model("User",userSchema);
module.exports=user;