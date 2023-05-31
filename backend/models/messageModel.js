const mongoose=require("mongoose");


const schema=mongoose.schema({
    projectTitle:{
        type:String,
        require:[true, "please insert a "],

    }
})