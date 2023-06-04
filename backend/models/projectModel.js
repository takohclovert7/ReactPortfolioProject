const mongoose=require("mongoose");


const schema=mongoose.Schema({
    projectTitle:{
        type:String,
        require:[true, "please enter a project title"],
       },
       projectNumber:{
     type:Number,
        require:[true, "please enter  project number"],
       },
       projectMnager:{
        type:String,
        require:[true, "please entera project manager"],
       },
    //    projectImg:{
    //     type:Image,
    //     require:[true, "please upload a project image"],
    //    },
});

const projectMdele=mongoose.model("project",schema);

module.exports=projectMdele;
