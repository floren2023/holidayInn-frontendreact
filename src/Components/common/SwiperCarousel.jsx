import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function SwiperCarousel() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/imagen1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/imagen2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/imagen3.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/imagen4.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/imagen5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/imagen6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/imagen7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/imagen9.jpeg" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
