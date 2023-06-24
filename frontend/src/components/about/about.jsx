import React from "react";
import "./about.css";
import {FaGithub} from 'react-icons/fa'
import me from "./aboutImage.png";
import 'bootstrap/dist/css/bootstrap.min.css';
 function About(){

    return(
<div className="aboutDivStart" >
  <section id="about">
    <center id="center">
  <h5>Get to know</h5> 
    <h2>About me</h2>
 </center>

    <div className="mainDivAbout row">
<div className="leftSide col-12 col-lg-4 ">
    <div className="leftMainDiv">
           <div className="imageDiv">
    <img src={me} alt="" />
           </div>
    </div></div>

<div className="rightSide  col-12 col-lg-6 ">
  <center>
    <div className="up">
        <div className="experience one"><br />
           <span><FaGithub  style={{color:"white"}}/></span><br />
   <h3>Experience</h3>
  <h4>4+ Years</h4>
 

        </div>
        <div className="clients one"><br />
      <span><FaGithub  style={{color:"white"}}/></span><br />
   <h3>Clients</h3>
   <h5>13 world widely</h5>
   
        </div>
        <div className="project one"><br />
        <span><FaGithub  style={{color:"white"}}/></span>
   <h3>Projects</h3>
 <h4>4 completed </h4>
  
        </div>
    </div>
  <div className="plainText"><h4>
  I am a young network engineer trained at the Faculty of Engineering of the University of Buea (FET). 
  I will be upttaining my B.eng in 2025, and looking forward to work with the camtel network operator if giving
  the chance to work with them in other to gain experience. I am study ethical hacking and cyber security .
   I am still undergoing training in FET and counting on the support
    of camtel netwrok to increase my knowledge at end of being an engineer not only graduate, but also qualified. I hold 
    , the cameroon Advanced level certificate.I am doing  my university studies at FET in English. I can therefore
     express myself in English.

     </h4>
  </div>
  </center>

</div>


</div><a href="#contact" >
<button id="btnTalk">let's talk</button>
</a>
</section>
</div>
    );
}

export default About;