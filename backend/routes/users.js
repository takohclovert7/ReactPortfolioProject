var express = require('express');
var router = express.Router();
const testimonialModel=require("../models/projectModel")




/* GET users listing. */
router.get("/get/testimonies" , async function(req, res, next) {

const allTestimonies=await testimonialModel.find();

console.log(allTestimonies);

 res.json(allTestimonies)

});



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


module.exports = router;
