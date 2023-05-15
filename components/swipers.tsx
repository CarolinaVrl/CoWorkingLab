import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper';


const swipers = () => {
  return (
    <>
      <style jsx>{
        `
            .texts_imgs{
              top: 68vh;
              z-index: 10;
              color: white;
              }
            `
      }</style>

      <div className='hidden tablet:w-[100%] tablet:h-[100vh] tablet:ml-[0px] tablet:block'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 89000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>

            <div className='texts_imgs absolute w-[88%] h-[260px] pl-[3.5rem] text-start'>
              <p className='mb-[2rem] text-[16px] italic mulish'>
                “This product allows you to collaborate, experiment, and test much more effectively and efficiently.”                </p>
              <h1 className='font-[600] text-[16px] mulish'>John</h1>
              <p className='text-[10px] mulish'>DINAMARCA</p>
            </div>

            <Image src={"/imgs_auth/user_1.svg"} alt="hola1" fill />
          </SwiperSlide>

          <SwiperSlide>
            <div className='texts_imgs absolute w-[88%] h-[260px] pl-[3.5rem] text-start'>
              <p className='text-[16px] italic mulish mb-[1.7rem]'>
                “We are designing for a global user base... we can get feedback not just from drivers we see in San Francisco but from all around the world.”</p>

              <h1 className='font-[600] text-[16px] mulish'>Kathrine Joy</h1>
              <p className='text-[10px] mulish'>CHINA</p>
            </div>

            <Image src={"/imgs_auth/user_2.svg"} alt="hola2" fill />
          </SwiperSlide>

          <SwiperSlide>
            <div className='texts_imgs absolute w-[88%] h-[260px] pl-[3.5rem] text-start'>
              <p className='text-[16px] italic mulish mb-[1.7rem]'>This product is a critical tool for us to understand our users and identify any pain points where they might be getting stuck.</p>

              <h1 className='font-[600] text-[16px] mulish'>Mike Abla</h1>

              <p className='text-[10px] mulish'>VENEZUELA</p>
            </div>

            <Image src={"/imgs_auth/user_3.svg"} alt="hola3" fill />
          </SwiperSlide>
          <SwiperSlide>
            <div className='texts_imgs absolute w-[88%] h-[260px] pl-[3.5rem] text-start'>
              <p className='mb-[2rem] text-[16px] italic mulish'>I used to have a bunch of different tools I had to pay for, with this tool you get everything in one bundle.</p>

              <h1 className='font-[600] text-[16px] mulish'>Philis Jan</h1>

              <p className='text-[10px] mulish'>ESPAÑA</p>
            </div>

            <Image src={"/imgs_auth/user_4.svg"} alt="hola4" fill />
          </SwiperSlide>
        </Swiper>
      </div>
    </>

  );
};

export default swipers;