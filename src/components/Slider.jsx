import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useFetch from '../hooks/useFetch';

const Slider = () => {
    const {loading,error,data}=useFetch('http://localhost:1337/api/slides?populate=*')
    if(loading)return<h1>loading...</h1>
    if(error)return<h1>{error}</h1>
  return (
    <div className='slider-container'>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      centeredSlides={true}
      autoplay={{delay:2000,dissableOnInteraction:false}}
    >
      {data.map(slide =>(
        <SwiperSlide key={slide.id}>
            <div>
                <p className='slide-overlay'>{slide.attributes.slideText}</p>
                <img src={`http://localhost:1337${slide.attributes.slidePhoto.data.attributes.formats.large.url}`}/>
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default Slider