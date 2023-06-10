var express = require('express');
var router = express.Router();
const testimonialModel=require("../models/testiModel")
const projectModel=require("../models/projectModel");




/* GET users listing. */
router.get("/get/testimonies" , async function(req, res, next) {

const allTestimonies=await testimonialModel.find();

console.log(allTestimonies);

 res.json(allTestimonies)

});

router.get("/junior", function(req,res){
  FetchImage({ type: 'user', width: 400, height: 400 }).then((image)=>{
    let randomImage = image;  })
    console.log(randomImage);
})

router.post("/upload/testimonies",async function(req,res){

   const {email,username, testimonialText}=req.body;
    console.log(email,username, testimonialText);
      const testimony= await testimonialModel.create({

        testimonyMessage:testimonialText,
           clientEmail:email,
           clientName:username });
console.log(testimony);
    res.json({save:"successful"})
})



router.get("/upload/project",async function (req,res){

const project=await projectModel.create({



  imageUrl: 'https://cdn.dribbble.com/userupload/7528445/file/original-4b13d4c68619e9e932565427083bb19d.jpg?compress=1&resize=1504x1126',
  title: 'Recipe app',
  gitDemoUrl: 'https://github.com',
  demoUrl: 'https://dribbble.com/shots/21636337-Recipe-app',

});

res.json(project)
})

router.get("/get/all/project", async function(req,res){
  try{
const allProject=await  projectModel.find();
  res.json(allProject);
  }
  catch(err){
    console.log(err.message);
  }


})



module.exports = router;
