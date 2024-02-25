import React from 'react';
import './styles/Carrousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_img_1 from '../img/1.png';
import slide_img_2 from '../img/2.png';
import slide_img_3 from '../img/3.png';
import slide_img_4 from '../img/4.png';
import slide_img_5 from '../img/5.png';
import slide_img_6 from '../img/nuggets.jpg';
import slide_img_7 from '../img/hummus.jpg';


const Carrousel = () => {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_img_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Carrousel;