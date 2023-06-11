var express = require('express');
var router = express.Router();
const testimonialModel=require("../models/testiModel")
const projectModel=require("../models/projectModel");
const nodemailer = require("nodemailer");



router.get("/get/testimonies" , async function(req, res, next) {

const allTestimonies=await testimonialModel.find();


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

// router.get("/sent/me/a/message",function(req,res){



//   // Create a new Nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "your@email.com",
//       password: "your_password",
//     },
//   });
  
//   // Send an email
//   transporter.sendMail(mailOptions, (err, info) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Email sent successfully!");
//     }
//   });
  
// })

module.exports = router;
