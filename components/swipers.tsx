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
              position: absolute;
              top: 66vh;
              z-index: 50;
              color: white;
              text-align: start;
              padding: 0 4vh;
              }
              
            `
      }</style>

      <div className='hidden tablet:w-[100%] tablet:h-[100vh] tablet:ml-[0px] tablet:block'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
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

            <div className='texts_imgs'>
              <p>This product allows you to collaborate, experiment, and test much more effectively and efficiently.</p>
              <br />
              <h1>John</h1>
              <br />
              <p className='font-[600]'>DINAMARCA</p>
            </div>


            <Image src={"/imgs_auth/user_1.svg"} alt="hola1" fill />
          </SwiperSlide>

          <SwiperSlide>
            <div className='box_the_texts'>
              <div className='texts_imgs'>
                <p>“We are designing for a global user base... we can get feedback not just from drivers we see in San Francisco but from all around the world.”</p>
                <br />
                <h1>Kathrine Joy</h1>
                <p className='font-[600]'>CHINA</p>
              </div>
            </div>

            <Image src={"/imgs_auth/user_2.svg"} alt="hola2" fill />
          </SwiperSlide>

          <SwiperSlide>
            <div className='box_the_texts'>
              <div className='texts_imgs'>
                <p>This product is a critical tool for us to understand our users and identify any pain points where they might be getting stuck.</p>
                <br />
                <h1>Mike Abla</h1>
                <br />
                <p className='font-[600]'>VENEZUELA</p>
              </div>
            </div>

            <Image src={"/imgs_auth/user_3.svg"} alt="hola3" fill />
          </SwiperSlide>
          <SwiperSlide>
            <div className='box_the_texts'>
              <div className='texts_imgs'>
                <p>I used to have a bunch of different tools I had to pay for, with this tool you get everything in one bundle.</p>
                <br />
                <h1>Philis Jan</h1>
                <br />
                <p className='font-[600]'>ESPAÑA</p>
              </div>
            </div>

            <Image src={"/imgs_auth/user_4.svg"} alt="hola4" fill />
          </SwiperSlide>
        </Swiper>
      </div>
    </>

  );
};

export default swipers;