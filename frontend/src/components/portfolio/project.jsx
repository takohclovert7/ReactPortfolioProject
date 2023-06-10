import React ,{useState,useEffect}from "react";
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


// imageUrl:"",
// title:"",
// gitDeomoUrl:"",
// demoUrl:""
// }
const [data, setData] = useState([{
  imageUrl:"",
    title:"",
    gitDeomoUrl:"",
    demoUrl:"",

}]);
useEffect(() => {
   fetch('http://localhost:9000/users/get/all/project')
     .then(response =>response.json())
     .then(res=>{
       setData(res);
     console.log(data);
     })
     .catch(error => {
       console.error(error.message);
     });
 }, []);

    return(
<div className="mainDivProject" onMouseOver={showContent} onMouseOut={hideContent}>
   
{ hideComp &&  <div  style={style2}  id="hideMeDiv">< img src={props.url} alt="" id="hideMe"/> </div> }
{ showComp &&  <div  style={style}><br />
<div className="divImage">
<img src={props.url} alt="" />
</div>
<br />
<p><span>project number  {props.num}
 </span > <br /><span style={{color:"white"}}>project manager {props.name} </span><br /> 
 <span style={{color:"black"}}> done by</span></p>
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