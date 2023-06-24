import React from 'react'
// import CV from '.././../assets/Djomo Resume new.docx.pdf'
const CTA = () => {
return (
<div className='cta'>
<a href="https://drive.google.com/file/d/1s86o1VxVpNRDEWq0iF9P0EZkXh7Jy93w/view?usp=drive_link" download className='btn' id="download">Download CV</a>
<a href="#contact" className='btn btn-primary ' id="lets">Let's Talk</a>
</div>
)   
}
export default CTA //this line indicates that this component can be imported and used
// everywhere in our application.