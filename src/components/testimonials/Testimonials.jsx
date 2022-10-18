import React, { useRef, useState } from 'react'
import "./testimonials.css"
// import required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import AVTR1 from "../../assets/avatar1.png"
import AVTR2 from "../../assets/avatar2.png"
import AVTR3 from "../../assets/avatar3.jpeg"
import AVTR4 from "../../assets/avatar4.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    avatar: AVTR1,
    name: "John Snow",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," 
  },
  {
    avatar: AVTR2,
    name: "John Snow",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," 
  },
  {
    avatar: AVTR3,
    name: "John Snow",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," 
  },
  {
    avatar: AVTR4,
    name: "John Snow",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," 
  },
  {
    avatar: AVTR3,
    name: "John Snow",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," 
  },
  {
    avatar: AVTR4,
    name: "John Snow",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," 
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className='testimonial__header'>
            <h2>TESTIMONIALS</h2>
      </div>
      <Swiper className="container testimonials__container"
      slidesPerView={3}
      spaceBetween={40}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar img" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">"{review}"</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials