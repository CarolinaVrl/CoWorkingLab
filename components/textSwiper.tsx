import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules



const swiperText = () => {
    return (
        <>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
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
                    className="mySwiper">


                    <SwiperSlide>

                        <div className='flex'>
                            <div className='w-[163px] h-[260px]'>
                                <Image src={"/imgs_auth/user_1.svg"} alt="hola1" width={160} height={260} />
                            </div>
                            <div className='w-[30%] h-[260px]'>
                                <p>This product allows you to collaborate, experiment, and test much more effectively and efficiently.</p>
                                <br />
                                <h1>John</h1>
                                <br />
                                <p className='font-[600]'>DINAMARCA</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex'>
                            <div className='w-[163px] h-[260px]'>
                                <Image src={"/imgs_auth/user_2.svg"} alt="hola1" width={160} height={260} />
                            </div>
                            <div className='w-[30%] h-[260px]'>
                                <p>“We are designing for a global user base... we can get feedback not just from drivers we see in San Francisco but from all around the world.”</p>
                                <br />
                                <h1>Kathrine Joy</h1>
                                <p className='font-[600]'>CHINA</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex'>
                            <div className='w-[163px] h-[260px]'>
                                <Image src={"/imgs_auth/user_3.svg"} alt="hola1" width={200} height={200} />
                            </div>
                            <div className='w-[30%] h-[260px]'>
                                <p>This product is a critical tool for us to understand our users and identify any pain points where they might be getting stuck.</p>
                                <br />
                                <h1>Mike Abla</h1>
                                <br />
                                <p className='font-[600]'>VENEZUELA</p>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex'>
                            <div className='w-[163px] h-[260px]'>
                                <Image src={"/imgs_auth/user_4.svg"} alt="hola1" width={200} height={200} />
                            </div>
                            <div className='w-[30%] h-[260px]'>
                                <p>I used to have a bunch of different tools I had to pay for, with this tool you get everything in one bundle.</p>
                                <br />
                                <h1>Philis Jan</h1>
                                <br />
                                <p className='font-[600]'>ESPAÑA</p>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>

    );
};

export default swiperText;