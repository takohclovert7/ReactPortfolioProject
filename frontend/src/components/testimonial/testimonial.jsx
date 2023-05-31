import React from "react";
import "./testimonial.css";

import project1Image from "../images/project1.png";
import project2Image  from "../images/project2.jpg";
import project3Image from "../images/project3.png";
import project4Image from "../images/project4.png";
import project5Image from "../images/project5.png";
import project6Image from "../images/project6.png";
// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';   
import 'swiper/css/pagination';


export const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      testimonial:
        "Greeting mr brandoski i love what you did for me , it was awsome working with i loook forward to another project again with you",
      avatar: project1Image,
      Cname: "Client 1",
    },
    {
      id: 2,
      testimonial:
        " it was great working with you mr clovert engineers like you are rear to find now our days and i wish we can do more projects together in the future",
      avatar: project2Image,
      Cname: "Client 2",
    },
    {
      id: 3,
      testimonial:
      "mr takoh  honestly speaking i loved what you did for me i am looking forward to hiring you at the end of ur degree completion",
      avatar: project3Image,
      Cname: "Client 3",
    },
    {
      id: 4,
      testimonial:
      "Greeting mr brandoski i love what you did for me , it was awsome working with i loook forward to another project again with you",
      avatar: project4Image,
      Cname: "Client 4",
    },
    {
      id: 5,
      testimonial:
        "mr takoh  honestly speaking i loved what you did for me i am looking forward to hiring you at the end of ur degree completion",
      avatar: project5Image,
      Cname: "Client 5",
    },
    {
      id: 6,
      testimonial:
      " it was great working with you mr clovert engineers like you are rear to find now our days and i wish we can do more projects together in the future",
      avatar: project6Image,
      Cname: "Client 6",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

  <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {testimonials.map((testi) => {
          return (
            <SwiperSlide key={testi.id} className="testimonial">
              <div className="client__avatar">
                <img src={testi.avatar} alt="client avatar" />
              </div>
              <h5 className="client__name"> {testi.Cname} </h5>
              <small className="client__review"> {testi.testimonial} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonial;
