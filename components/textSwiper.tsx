import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules



const swiperText = () => {
    return (
        <>
            <div className='mx-[1rem] mt-[6rem] mb-[2rem] tablet:hidden'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    centeredSlides={true}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper">


                    <SwiperSlide className='text-[#07469C]'>

                        <div className='flex'>
                            <div className='w-[163px] h-[260px]'>
                                <Image src={"/imgs_auth/user_1.svg"} alt="hola1" width={160} height={260} />
                            </div>
                            <div className='w-[66%] h-[260px] pl-[2rem] pr-[3rem] text-left'>
                                <p className='mb-[3rem] text-[16px] italic mulish'>This product allows you to collaborate, experiment, and test much more effectively and efficiently.</p>

                                <h1 className='font-[600] text-[16px] mulish'>John</h1>

                                <p className='text-[10px] mulish'>DINAMARCA</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='text-[#07469C]'>
                        <div className='flex'>
                            <div className='w-[163px] h-[260px]'>
                                <Image src={"/imgs_auth/user_2.svg"} alt="hola1" width={160} height={260} />
                            </div>
                            <div className='w-[66%] h-[260px] pl-[2rem] pr-[3rem] text-left'>
                                <p className='text-[16px] italic mulish mb-[1.7rem]'>“We are designing for a global user base... we can get feedback not just from drivers we see in San Francisco but from all around the world.”</p>

                                <h1 className='font-[600] text-[16px] mulish'>Kathrine Joy</h1>
                                <p className='text-[10px] mulish'>CHINA</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-[#07469C]'>
                        <div className='flex'>
                            <div className='w-[163px] h-[260px]'>
                                <Image src={"/imgs_auth/user_3.svg"} alt="hola1" width={200} height={200} />
                            </div>
                            <div className='w-[66%] h-[260px] pl-[2rem] pr-[3rem] text-left'>
                                <p className='text-[16px] italic mulish mb-[1.7rem]'>This product is a critical tool for us to understand our users and identify any pain points where they might be getting stuck.</p>

                                <h1 className='font-[600] text-[16px] mulish'>Mike Abla</h1>

                                <p className='text-[10px] mulish'>VENEZUELA</p>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-[#07469C]'>
                        <div className='flex'>
                            <div className='w-[163px] h-[260px]'>
                                <Image src={"/imgs_auth/user_4.svg"} alt="hola1" width={200} height={200} />
                            </div>
                            <div className='w-[66%] h-[260px] pl-[2rem] pr-[3rem] text-left'>
                                <p className='text-[16px] italic mulish mb-[3rem]'>I used to have a bunch of different tools I had to pay for, with this tool you get everything in one bundle.</p>

                                <h1 className='font-[600] text-[16px] mulish'>Philis Jan</h1>

                                <p className='text-[10px] mulish'>ESPAÑA</p>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>

    );
};

export default swiperText;