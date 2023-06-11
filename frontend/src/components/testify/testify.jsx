import React, { useState} from 'react';
import "./testify.css"

const Testify= () => {
 
  const [upload, setUpload ]= useState({
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
  // e.preventDefault();

  fetch('http://localhost:9000/users/upload/testimonies',{
    method:"POST",
    body:JSON.stringify(upload),
    headers: {'Content-Type': 'application/json'}
  })
  .then(response =>response.json())
  .then(res=>{
    
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
        {/* <label for="click" id="temp">x</label> */}

    <form  onSubmit={handleSubmit}>
    <label htmlFor="username">Name</label>
        <input   className='input' type="text" placeholder="Name" id="username"  required title='please enter your name' name='username'
        onChange={handleChange}
        
        />

        <label htmlFor="username">Email</label>
        <input className='input' type="email" placeholder="Email" id="username" required name='email'
         onChange={handleChange}
        
        />

        <label htmlFor="password">Your Testimony</label>
         <textarea className='input' name="testimonialText" placeholder='enter some text'     onChange={handleChange}> </textarea>

        <button>SENT TESTIMONY MESSAGE</button>

    </form>
      </div>
    </div>
 

    // </div>
  );
};

export default Testify;
