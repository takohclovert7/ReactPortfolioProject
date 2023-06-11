var express = require('express');
var router = express.Router();
const testimonialModel=require("../models/testiModel")
const projectModel=require("../models/projectModel");




router.get("/get/testimonies" , async function(req, res, next) {

const allTestimonies=await testimonialModel.find();


 res.json(allTestimonies)

});



router.post("/upload/testimonies",async function(req,res){

   const {email,username, testimonialText}=req.body;
    console.log(email,username, testimonialText);
      const testimony= await testimonialModel.create({

        testimonyMessage:testimonialText,
           clientEmail:email,
           clientName:username });
    res.json({save:"successful"})
})



router.post("/upload/project",async function (req,res){
const {imageUrl,title,gitDeomoUrl,demoUrl}=req.body
const project=await projectModel.create({

  imageUrl:imageUrl,
  title: title,
  gitDemoUrl:gitDeomoUrl,
  demoUrl:demoUrl,

});
res.json({data:"seccesfully save"});
})



router.get("/get/all/project", async function(req,res){
  try{
const allProject=await  projectModel.find();
  res.json(allProject);
  }
  catch(err){
  res.json({error:err.message})
  }


})



module.exports = router;
