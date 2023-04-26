import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/swiper.module.css";

import img1 from '../public/imgs_auth/user_1.svg'
import img2 from '../public/imgs_auth/user_2.svg'
import img3 from '../public/imgs_auth/user_3.svg'
import img4 from '../public/imgs_auth/user_4.svg'

import { Pagination } from "swiper";

export default function App() {



  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide> 
          <Image src={img1} alt="hola" width={100} height={200}/>
        </SwiperSlide>
        <SwiperSlide> 
          <Image src={img2} alt="hola" width={100} height={200}/>
        </SwiperSlide>
         <SwiperSlide> 
          <Image src={img3} alt="hola" width={100} height={200}/>
        </SwiperSlide>
         <SwiperSlide> 
          <Image src={img4} alt="hola" width={100} height={200}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}