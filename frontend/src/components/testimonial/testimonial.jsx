import React,{useState,useEffect} from "react";
import "./testimonial.css";

import Image from "../images/project1.png";

import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Testify from "../testify/testify";

import 'swiper/css';   
import 'swiper/css/pagination';


export const Testimonial = () => {


  const [data, setData] = useState([{
    testimonyMessage:"",
    clientEmail: "",
    clientName: "",
  }]);
  useEffect(() => {
     fetch('https://takohclovert-backend.cyclic.app/users/get/testimonies')
       .then(response =>response.json())
       .then(res=>{
         setData(res);
       
       })
       .catch(error => {
         console.error(error.message);
       });
   }, []);
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <center>
  <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map((testi) => {
          return (
            <SwiperSlide key={ testi._id} className="testimonial">
              <div className="client__avatar">
                <img src={Image} alt="client avatar" />
              </div>
              <h5 className="client__name"> <span style={{color:"brown",marginRight:'25px'}} > Client name  </span>    {testi.clientName} </h5>
              <p className="client__email"> <span  style={{color:"brown",marginRight:'25px'}} >client email </span>     {testi.clientEmail} </p>
              <small style={{color:"black",fontWeight:"bold"}} className="client__review">===message===<br /> {testi.testimonyMessage} </small>
            </SwiperSlide>
           
          );
        })} 
      </Swiper>
      </center>
<Testify /  > 
   
    </section>
  );
};
export default Testimonial;
