import React, { useState} from 'react';
import "./testify.css"


const Testify= () => {
 
var [upload, setUpload ]= useState({
    username:"",
    email:"",
    testimonialText:""
  });


function handleChange(event){
  setUpload(prestate=>{
    return {
      ...prestate,
      [event.target.name]:event.target.value
    }
  })
}

function handleSubmit(e){
  e.preventDefault();
  setUpload({
    username:"",
    email:"",
    testimonialText:""
  });
  fetch('https://takohclovert-backend.cyclic.app/users/upload/testimonies',{
    method:"POST",
    body:JSON.stringify(upload),
    headers: {'Content-Type': 'application/json'}
  })
  .then(response =>response.json())
  .then(res=>{
    window.location.reload();
  })
  .catch(error => {
    console.error(error);
  
  });
}

  return (
  
  <div className="center">
    <input type="checkbox" id="click" />
    <label htmlFor="click" className="click-me" style={{color:"white"}} > TESTIFY </label>

    <div className="content"><label htmlFor="click" id="temp">x</label>
      <div className="text">
      TESTIFY
     </div>
    

    <form  onSubmit={handleSubmit}>
    <label htmlFor="username">Name</label>
        <input   className='input' type="text" placeholder="Name" id="username"  required title='please enter your name' name='username'
        onChange={handleChange}
        value={upload.username}
        />

        <label htmlFor="username">Email</label>
        <input className='input' type="email" placeholder="Email" id="username" required name='email'
         onChange={handleChange}
         value={upload.email}
        />

        <label htmlFor="password">Your Testimony Message</label>
         <textarea className='input' name="testimonialText" placeholder='enter some text'     onChange={handleChange}
            value={upload.testimonialText}>
           </textarea>

        <button>TESTIFY NOW</button>

    </form>
      </div> 
    </div>
 

    // </div>
  );
};

export default Testify;
