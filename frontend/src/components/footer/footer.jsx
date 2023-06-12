import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.css"
 function Footer(){

    return(
<div id="footer"><center>
<h3 style={{color:"black"}}>TAKOH CLOVERT NFUA</h3><br />
<p style={{color:"black"}}> All  Right Reserve copywrite &copy; 2023</p>
</center>
<div id="footerNav">
    <ul className="row">
        <li className="col-10 col-md-4 col-2"><div className="footerNav"> <a href="#home1" > GO TO TOP</a>
        </div></li>
        <li   className="col-10 col-md-4 col-2"><div className="footerNav"><a href="#contact">CONTACT ME </a>
        </div></li>
        <li className="col-10 col-md-4 col-2" ><div className="footerNav"><a href="#testimonial">TESTIMONIES</a>
        </div></li>
        <li  className="col-10 col-md-4 col-2"><div className="footerNav" ><a  href="#about">ABOUT ME</a>
        </div></li>
        <li  className="col-10 col-md-4 col-2"><div className="footerNav" ><a  href="#messageMe">TESTIFY </a>
        </div></li>
    </ul>
</div>


</div>
    );
}

export default Footer;