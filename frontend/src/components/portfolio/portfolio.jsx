import React ,{useState,useEffect}from "react";
import Projects from "./project";
import UploadProject from "../uploads/uploadProject";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./portfolio.css";
 function Portfolio(){
// since in the my recent project they are of the same nature with what is changing is just the project number and the peoject image
// i build one component call  projects  and call it for the numbers of time passing the project number and project image as props 


var [result, setResult] = useState([{
    imageUrl:"",
      title:"",
      gitDeomoUrl:"",
      demoUrl:""
  
  }]);
  useEffect(() => {
     fetch('https://takohclovert-backend.cyclic.app/users/get/all/project')
       .then(response =>response.json())
       .then(res=>{
      
        setResult(res);
   
       })
       .catch(error => {
         console.error(error.message);
       });
   }, []);
 let i=0;



 const [inputText, setInputText] = useState('');
    const [buttonVisible, setButtonVisible] = useState(false);
    const [correctString, setCorrectString] = useState('@Bossman12345');
    const [errorString, setErrorString] = useState('');
    const [otherButtonVisible, setOtherButtonVisible] = useState(false);
    const [divVisible, setDivVisible] = useState(true);
    const handleChange = (event) => {
      setInputText(event.target.value);
    };
  
    const handleClick = () => {
      setButtonVisible(true);
      setOtherButtonVisible(false);
      setErrorString("");
      setDivVisible(true);
    };
  
    const handleSubmit = () => {
      setErrorString("");
      if (inputText === correctString) {
        setButtonVisible(false);
        setOtherButtonVisible(true);
        setDivVisible(false);
      }else{
        setErrorString("wrong admin credentials");
      }
    };
  function close(){
    setButtonVisible(false);
  }

    return(
<div className="portfolioMainDiv">
    <section id="projects">
 <h6 style={{color:"black"}}>My recent works</h6>
    <h3  style={{color:"black"}}>Portfolio</h3>
    <h3 className="h3">Click project image to view content</h3>
    <div className="CenterDiv">
    <div  className="row"  id="rowDiv">

    {result.map((project) => {
        i++;
          return (
           <div key={project._id} id="project1"  className="col-4 col-lg-4 col-md-5 col-sm-11">
        

  <Projects  num={i} url={project.imageUrl} name={project.title} gitDeomoUrl={project.gitDeomoUrl} demoUrl={project.demoUrl}/> 

  
  </div>
  
          );
        })} 
  

</div>


<div className="uploadDiv"><br  /><br  />
   <h3 className="h3">UPLOAD A PROJECT USING THE BELOW BUTTON</h3>
 

    <div>
      {divVisible &&
        <button
          onClick={handleClick}
          id="uploadProjectBTN"
        >
        UPLOAD PROJECT
        </button>
 }
        {buttonVisible && (
          <div>
            <h5  style={{color:"grey",textTransform:"uppercase",fontWeight:"bolder"}}>project upload is meant only for Admins</h5>
           <br /> <input
              type="text"
              placeholder="Enter Admin authentication password"
              id="ipt"
              value={inputText}
              onChange={handleChange}
            /> <span onClick={close}>X</span> 
         
            <br />
            <div style={{color:"red",fontWeight:"bolder"}}>{errorString}</div>
            <button  id="summitProjectBTN" onClick={handleSubmit}>Verify Auth</button>
          </div>
        )}
        {otherButtonVisible && (
          <div> <h5  style={{color:"grey",fontWeight:"bolder",textTransform:"uppercase"}}>Click below button to upload</h5>
               < UploadProject />
          </div>
    
        )}
      </div>
 
</div>
</div>


</section>

</div>
    );
}

export default Portfolio;