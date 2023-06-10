import React from "react";
import Projects from "./project";
import project1Image from "../images/project1.png";
import project2Image  from "../images/project2.jpg";
import project3Image from "../images/project3.png";
import project4Image from "../images/project4.png";
import project5Image from "../images/project5.png";
import project6Image from "../images/project6.png";
import project7Image from "../images/project7.jpg";
import  project8Image from "../images/project8.jpeg";
import  project9Image from "../images/project9.jpeg";
import UploadProject  from "../uploads/uploadProject";
import "./portfolio.css";
 function Portfolio(){
// since in the my recent project they are of the same nature with what is changing is just the project number and the peoject image
// i build one component call  projects  and call it for the numbers of time passing the project number and project image as props 
    return(
<div className="portfolioMainDiv">
    <section id="projects">
   

    <h6 style={{color:"black"}}>My recent works</h6>
    <h3  style={{color:"black"}}>Portfolio</h3>
    <div className="CenterDiv">
    <div className="threeInOne">
    <Projects  num={1} url={project1Image} name={'junior'}/> 
<Projects  num={2}  url={project2Image}  name={'clovert'}/>
<Projects   num={3}  url={project3Image} name={'nfua'} />
</div>

<div className="threeInOne">
    <Projects   num={4} url={project4Image} name={'takoh'}/>
<Projects num={5} url={project5Image} name={'brandoski'} />
<Projects num={6} url={project6Image} name={'junior'}/>

</div>

<div className="threeInOne">
<Projects num={7} url={project7Image} name={'clovert'}/>
<Projects num={8}  url={project8Image}  name={'takoh'}  />
<Projects  num={9}  url={project9Image} name={'clovert'} />
</div>
<div>
    <h2>UPLOAD A PROHJECT USING THE BELOW BUUTON</h2>
    < UploadProject />
</div>
</div>


</section>

</div>
    );
}

export default Portfolio;