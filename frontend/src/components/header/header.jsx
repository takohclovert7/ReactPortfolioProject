import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
import me from "../images/mainImage.jpg";
import HeaderSocial from './HeaderSocial' //import of headerSocial component
export const Header = () => {
return (
<header><section id="home1">

<div className='container header__container' style={{display:"flex"}}>
    <div className='leftHeader' >
    <h5 style={{color:"black"}}>Hello I'm</h5>
<h1 style={{color:"black"}}>Takoh Clovert Nfua</h1>
<h5 className='text-light'  style={{color:"black",marginButtom:"20px"}}>Network Engineer </h5>   
<CTA  />
<HeaderSocial  style={{color:"black"}}/>

    </div>
<div className='rightHeader'  >
<div className='my_image'>
<img src={me} alt='junior'/>
</div>
</div>

{/* <a href='#contact' className='scroll__down'>Scroll down</a> */}
</div></section>
</header>
)
}
export default Header;
