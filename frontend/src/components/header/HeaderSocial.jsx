import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'

const HeaderSocial = () => {
return (
<div className='header__social'>
<a href='https://linkedin.com' target='blank'><BsLinkedin/> </a>
<a href='https://github.com/takohclovert7' target='blank'><FaGithub/> </a> 
<a href='https://facebook.com' target='blank'><FaFacebookF/> </a>
</div>
)
}
export default HeaderSocial