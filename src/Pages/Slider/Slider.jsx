import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

import slide1  from "../../assets/slider1.jpg"
import slide2  from "../../assets/slider2.jpg"
import slide3  from "../../assets/slider3.jpg"
import slide4  from "../../assets/slider4.jpg"

const Slider = () => {
    return (
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img  src={slide1} alt="" /></SwiperSlide>
      <SwiperSlide><img  src={slide2} alt="" /></SwiperSlide>
      <SwiperSlide><img  src={slide3} alt="" /></SwiperSlide>
      <SwiperSlide><img  src={slide4} alt="" /></SwiperSlide>
     
      
      
      
      
    </Swiper>
    );
};

export default Slider;