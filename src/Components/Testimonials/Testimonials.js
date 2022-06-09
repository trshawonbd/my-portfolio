import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import enrico from '../../img/enrico.jpg';
import danish from '../../img/danish.jpg';
import ripon from '../../img/ripon.jpg';
import bejon from '../../img/bejon.jpg';
import mithun from '../../img/mithun.jpg';
import martin from '../../img/martin.jpg';
import fahim from '../../img/fahim.jpg';
import ehsan from '../../img/ehsan.jpg';
import jasim from '../../img/jasim.jpg';

import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {


   
    return (


        <div className='my-16' id='testimonials'>
            <h2 className='text-center text-3xl uppercase my-12 underline decoration-solid'> Testimonials </h2>
            <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        centeredSlides={false}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        }}
       
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="card   shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-20 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={enrico}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Enrico Neri</h2>
                            <h3 className='font-bold'>CEO, <br /> VEGAN SOLUTIONS</h3>
                        </div>

                    </div>
                    <div className=' rating flex justify-center rating-sm'>

                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                    </div>

                    <div class="card-body">
                        <i className="fa fa-quote-left text-primary" />
                        This guy is incredibly awesome, I hired him and when He
                        delivered, I honestly fell in love with the project. He is
                        indeed a great guy
                        <i className="fa fa-quote-right text-primary" />
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* 2 */}
          <div class="card  lg:w-80  shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-20 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={danish}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Danish Alam</h2>
                            <h3 className='font-bold'>IT Project Manager, <br /> VEGAN SOLUTIONS</h3>
                        </div>

                    </div>
                    <div className=' rating flex justify-center rating-sm'>

                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                    </div>

                    <div class="card-body">
                        <i className="fa fa-quote-left text-primary" />
                        When he delivered my job, my head spinned, it was so nice
                        and he implemented every functionality i requested for.
                        Thank you.
                        <i className="fa fa-quote-right text-primary" />
                    </div>
                </div>

        </SwiperSlide>
        <SwiperSlide>
          
          {/* 3 */}

          <div class="card  lg:w-80  shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-20 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={ripon}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Md Younus Ali</h2>
                            <h3 className='font-bold'>Service Desk Engineer, <br /> TUUM</h3>
                        </div>

                    </div>
                    <div className=' rating flex justify-center rating-sm'>

                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                    </div>

                    <div class="card-body">
                        <i className="fa fa-quote-left text-primary" />
                        I patronized Taibur and when He delivered, I honestly
                        fell in love with the project He is a very honest guy and
                        he delivers ontime.
                        <i className="fa fa-quote-right text-primary" />
                    </div>
                </div> 
        </SwiperSlide>
        <SwiperSlide>
         {/* 4 */}

         <div class="card lg:w-80  shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-20 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={bejon}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Bejon Sarker</h2>
                            <h3 className='font-bold'>Software Engineer, <br /> VEGAN SOLUTIONS</h3>
                        </div>

                    </div>
                    <div className=' rating flex justify-center rating-sm'>

                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                    </div>

                    <div class="card-body">
                        <i className="fa fa-quote-left text-primary" />
                        It was nice hiring this guy for my e-commerce project.He
                        delivered even more than i can imagine. I recommend him
                        for you.
                        <i className="fa fa-quote-right text-primary" />
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
         {/* 5 */}

         <div class="card lg:w-80  shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-20 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={martin}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Martin Pingin</h2>
                            <h3 className='font-bold'>Team Lead,<br /> GS</h3>
                        </div>

                    </div>
                    <div className=' rating flex justify-center rating-sm'>

                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                    </div>

                    <div class="card-body">
                        <i className="fa fa-quote-left text-primary" />
                        This guy is incredibly awesome, I hired him and when He
                        delivered, I honestly fell in love with the project. He is
                        indeed a great guy
                        <i className="fa fa-quote-right text-primary" />
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
         {/* 6 */}

         <div class="card lg:w-80  shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-20 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={mithun}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Md Forhad Hossain</h2>
                            <h3 className=''>Software Engineer,<br /> MalwareBytes</h3>
                        </div>

                    </div>
                    <div className=' rating flex justify-center rating-sm'>

                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                    </div>

                    <div class="card-body">
                        <i className="fa fa-quote-left text-primary" />
                        This guy is incredibly awesome, I hired him and when He
                        delivered, I honestly fell in love with the project. He is
                        indeed a great guy
                        <i className="fa fa-quote-right text-primary" />
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* 7 */}
          <div class="card lg:w-80  shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-20 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={fahim}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Abu Ishtiaque Fahim</h2>
                            <h3 className='font-bold'>CS, <br /> VEGAN SOLUTIONS</h3>
                        </div>

                    </div>
                    <div className=' rating flex justify-center rating-sm'>

                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                    </div>

                    <div class="card-body">
                        <i className="fa fa-quote-left text-primary" />
                        This guy is incredibly awesome, I hired him and when He
                        delivered, I honestly fell in love with the project. He is
                        indeed a great guy
                        <i className="fa fa-quote-right text-primary" />
                    </div>
                </div>

        </SwiperSlide>
        <SwiperSlide>
          {/* 8 */}
          <div class="card lg:w-80  shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-20 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={ehsan}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Md Ehsanur Rahman</h2>
                            <h3 className='font-bold'>CS, <br /> VEGAN SOLUTIONS</h3>
                        </div>

                    </div>
                    <div className=' rating flex justify-center rating-sm'>

                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                    </div>

                    <div class="card-body">
                        <i className="fa fa-quote-left text-primary" />
                        This guy is incredibly awesome, I hired him and when He
                        delivered, I honestly fell in love with the project. He is
                        indeed a great guy
                        <i className="fa fa-quote-right text-primary" />
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
         {/* 9 */}

         <div class="card lg:w-80 bg-base-100 shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-20 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={jasim}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Muhammed Jasim</h2>
                            <h3 className='font-bold'>CS, <br /> WISE</h3>
                        </div>

                    </div>
                    <div className=' rating flex justify-center rating-sm'>

                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mr-1 mask mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                        <input type="radio" name="rating-5" class="bg-primary mask mr-1 mask-star-2 " />
                    </div>

                    <div class="card-body">
                        <i className="fa fa-quote-left text-primary" />
                        This guy is incredibly awesome, I hired him and when He
                        delivered, I honestly fell in love with the project. He is
                        indeed a great guy
                        <i className="fa fa-quote-right text-primary" />
                    </div>
                </div> 
        </SwiperSlide>
      </Swiper>
    </>
        </div>

    );
};

export default Testimonials;