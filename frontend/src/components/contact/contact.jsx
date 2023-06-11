import React from 'react'
import './contact.css'
import {MdOutlineEmail,MdArrowCircleRight} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser'
const  Contact = () => {


var [formData, setFormData]=React.useState({
    name:"",
    noted:"",
    subject:""
});

function changeme(event){
    setFormData(prevstate=>{
        return {
          ...prevstate,
          [event.target.name]:event.target.value
        }
      })
}


const sendEmail = (e) => {


emailjs.send('service_0ofkt0k', 'template_llc6mjc', formData,"13P7L1lH2gV9ZHxiW")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
};

return (
<section id="contact">
<h5>Get in touch</h5>
<h2>Contact me</h2>

<div className="container contact__container">
<div className="contact__options">
<h3>By</h3>
<article className='contact__option'>

<MdOutlineEmail className='contact__option__icon'/>
<p style={{color:"brown"}}>  <span><MdArrowCircleRight />  </span> Email</p>
<h5 style={{color:"wheat"}}>takohclovet7@gmail.com</h5>
<a href='mailto:takohclovet7@gmail.com' target='_blank'   rel="noreferrer">send a
message</a>
</article>
<article className='contact__option'>
<AiOutlineLinkedin className='contact__option__icon'/>
<p   style={{color:"brown"}}> <span><MdArrowCircleRight />  </span>  LinkedIn</p>
<h5 style={{color:"white"} }  >Profile</h5>
<a href='#nothing'
>Tape me on LinkedIn</a>
</article>
<article className='contact__option'>
<BsWhatsapp className='contact__option__icon'/>
<p  >  <span><MdArrowCircleRight />  </span>  Whatsapp</p>
<h5 style={{color:"wheat"}}>Direct message</h5>
<a href='https://web.whatsapp.com/send?phone=+237674633142'
target='_blank'   rel="noreferrer">Whatsapp me</a>
</article>
</div>
<section id="messageMe">
<div id="form"><h4>Sent me a direct message</h4>
<form  onSubmit={sendEmail}>
<input type="text" name='subject' placeholder='          enter email subject' required   onChange={changeme}/><br /><br />

<input type="email" name='name' placeholder='             your email' required onChange={changeme}/><br /><br />
<textarea name="notes" id="message" cols="30" rows="10"
placeholder='                 your message' required  onChange={changeme}></textarea><br /><br />
<button type="submit" className='btn btn-primary' id='send'>SEND MESSAGE</button><br />
</form></div></section>
</div>
</section>
)
}
export default Contact