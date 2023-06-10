const  mongoose=require("mongoose");
const projectschema=mongoose.Schema({
    imageUrl:String,
    title:String,
    gitDeomoUrl:String,
    demoUrl:String,
});


const projectModel=mongoose.model("projects",projectschema);

module.exports=projectModel;