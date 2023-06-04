import React from "react";
import "./footer.css"
 function Footer(){

    return(
<div id="footer">
<h3>TAKOH CLOVERT NFUA</h3><br />
<p> All  Right Reserve copywrite &copy; 2023</p>
<div id="footerNav">
    <ul>
        <li><div className="footerNav"> <a href="#home1" > GO TO TOP</a>
        </div></li>
        <li><div className="footerNav"><a href="#contact">CONTACT ME </a>
        </div></li>
        <li><div className="footerNav"><a href="#testimonial">TESTIMONIES</a>
        </div></li>
        <li><div className="footerNav" ><a  href="#about">ABOUT ME</a>
        </div></li>
        <li><div className="footerNav" ><a  href="#messageMe">TESTIFY </a>
        </div></li>
    </ul>
</div>


</div>
    );
}

export default Footer;