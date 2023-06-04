const mongoose=require("mongoose");
var {isEmail}=require("validator");


const schema=mongoose.Schema({
   testimonyMessage:{
        type:String,
        require:[true, "please enter a testimony message"],
       },
       clientEmail:{
     type:String, 
        require:[isEmail, "please enter  a valid email"],
       },
       clientName:{
        type:String,
        require:[true, "please entera your name"],
       },
       testtimonyImage:{
        type:Buffer,
        require:[true, "please upload a project image"],
       },
});

const projectMdele=mongoose.model("project",schema);

module.exports=projectMdele;
