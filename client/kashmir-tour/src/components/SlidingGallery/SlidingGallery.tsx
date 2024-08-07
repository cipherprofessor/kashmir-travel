import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css'; // Core Swiper styles
// import 'swiper/modules/navigation/navigation.min.css'; // Navigation styles
// import 'swiper/modules/pagination/pagination.min.css'; // Pagination styles
// import 'C:\Users\lyken\Desktop\Travel Apps\kashmir-travel\client\kashmir-tour\node_modules\swiper\swiper.scss'
import *  as swiper from 'swiper/react'

// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';
import './SlidingGallery.scss';


const SlidingGallery = () => {
  return (
    <div className="desktop_3">
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <Swiper
            className="mySwiper"
            modules={[Navigation, Pagination]}
            slidesPerView={1.5}
            centeredSlides={true}
            spaceBetween={5}
            pagination={{ clickable: true }}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-nexts',
              prevEl: '.swiper-button-prevs',
            }}
          >
            <div className="btn">
              <div className="swiper-button-nexts">
                <img
                  className="nextArrow"
                  src="/src/assets/landscape/image (1).jpg"
                  alt="Next"
                />
              </div>
              <div className="swiper-button-prevs">
                <img
                  className="prevArrow"
                  src="/src/assets/landscape/image (1).jpg"
                  alt="Previous"
                />
              </div>
            </div>
            <SwiperSlide>
              <img
                className="mainImage"
                src="/src/assets/landscape/image (1).jpg"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="mainImage"
                src="/src/assets/landscape/image (1).jpg"
                alt="Slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="mainImage"
                src="/src/assets/landscape/image (1).jpg"
                alt="Slide 3"
              />
            </SwiperSlide>
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SlidingGallery;
