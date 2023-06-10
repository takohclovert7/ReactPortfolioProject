import React from "react"
import "./uploadProject.css"
function UploadProject(){
    const [showComp, setShowComp]=React.useState(false);
    // const [hideComp, setHideComp]=React.useState(true);
    var style =null;

    function showContent(){
        style={
          display:'block',
        }
        setShowComp(true);
      }
      
      function hideContent(){
        style={
          display:'none',
        }
        setShowComp(false);
      }



    return(
        <div>

<button className="open-button" onClick={showContent} >UPLOAD</button>

{showComp &&
<div className="form-popup" id="myForm" style={style}>
  <form className="form-container">
    <h4 style={{color:"black",marginLeft:"90px"}}>UPLOAD PROJECT</h4>

    <label ><b style={{color:"black"}}> enter the project name</b></label>
    <input type="text" placeholder="enter project name" name="email" required />

    <label ><b style={{color:"black"}}>name of project manager</b></label>
    <input type="text" placeholder="enter name of project manager" name="psw" required />

    <button type="submit" className="btn">UPLOAD</button>
    <button type="button" className="btn cancel" onClick={hideContent}>Close </button>
  </form>
</div>
 }
        </div>
    )
}


export default UploadProject;