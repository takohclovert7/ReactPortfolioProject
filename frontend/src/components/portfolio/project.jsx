import React,{useState} from "react";
import "./project.css"
 function Projects(props){
const [showComp, setShowComp]=useState(false);
const [hideComp, setHideComp]=useState(true);
var style =null;
var style2={
  borderRadius:'40px',  
};
function showContent(){
  style={
    display:'none',

  }
  setShowComp(true);
  setHideComp(false);
}

function hideContent(){
  style2={
    display:'none',
    borderRadius:'40px',
  }
  setShowComp(false);
  setHideComp(true);

}


    return(

<div className="mainDivProject" onMouseOver={showContent} onMouseOut={hideContent} >

{ hideComp &&  <div  style={style2}  id="hideMeDiv">< img src={props.url} alt="" id="hideMe"/> </div> }
{ showComp &&  <div  style={style}><br />

 
  <div className="divImage">
<img src={props.url} alt="" />
</div>
<br />
<p><span>project number  {props.num}
 </span > <br /><span style={{color:"white"}}>project title    "{props.name}"</span><br /> 
 <span style={{color:"black"}}> done by clovert</span></p>
<div className="btnDiv">
<a href={props.gitDeomoUrl}><button id="btnGit">Github</button></a>
<a href={props.demoUrl}><button id="btnDemo">Live Demo</button></a>
</div>

</div>
 }
</div>
     

     )


}

export default Projects;