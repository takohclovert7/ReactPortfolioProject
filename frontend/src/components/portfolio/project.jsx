import React from "react";
import "./project.css"
 function Projects(props){
const [showComp, setShowComp]=React.useState(false);
const [hideComp, setHideComp]=React.useState(true);
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
<div className="mainDivProject" onMouseOver={showContent} onMouseOut={hideContent}>
   
{ hideComp &&  <div  style={style2}  id="hideMeDiv">< img src={props.url} alt="" id="hideMe"/> </div> }
{ showComp &&  <div  style={style}><br />
<div className="divImage">
<img src={props.url} alt="" />
</div>
<br />
<p>project number  {props.num} <br /> project manager {props.name}</p>
<br />
<div className="btnDiv">
<button id="btnGit">Github</button>
<button id="btnDemo">Live Demo</button>
</div>
</div>
 }
</div>

    );
}

export default Projects;