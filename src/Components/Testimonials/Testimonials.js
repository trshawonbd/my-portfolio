import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import enrico from '../../img/enrico.jpg';
import danish from '../../img/danish.jpg';
import ripon from '../../img/ripon.jpg';
import bejon from '../../img/bejon.jpg';
import mithun from '../../img/mithun.jpg';
import martin from '../../img/martin.jpg';
import fahim from '../../img/fahim.jpg';
import ehsan from '../../img/ehsan.jpg';
import jasim from '../../img/jasim.jpg';



const Testimonials = () => {


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (


        <div className='my-16'>
            <h2 className='text-center md: text-4xl lg:text-5xl uppercase my-12 underline decoration-solid'> Testimonials </h2>
            <Slider {...settings}>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-24 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={enrico}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Enrico Neri</h2>
                            <h3 className='font-bold'>CEO, VEGAN SOLUTIONS</h3>
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
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-24 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={danish}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Danish Alam</h2>
                            <h3 className='font-bold'>IT Project Manager, VEGAN SOLUTIONS</h3>
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
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-24 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={ripon}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Md Younus Ali</h2>
                            <h3 className='font-bold'>Service Desk Engineer, TUUM</h3>
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
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-24 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={bejon}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Bejon Sarker</h2>
                            <h3 className='font-bold'>Software Engineer, VEGAN SOLUTIONS</h3>
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
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-24 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={martin}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Martin Pingin</h2>
                            <h3 className='font-bold'>Team Lead, GS</h3>
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
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-24 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={mithun}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Md Forhad Hossain</h2>
                            <h3 className='font-bold'>Software Engineer, MalwareBytes</h3>
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
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-24 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={fahim}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Abu Ishtiaque Fahim</h2>
                            <h3 className='font-bold'>CS, VEGAN SOLUTIONS</h3>
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
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-24 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={ehsan}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Md Ehsanur Rahman</h2>
                            <h3 className='font-bold'>CS, VEGAN SOLUTIONS</h3>
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
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div className='flex justify-center items-center'>
                        <div class="avatar flex items-center justify-center mr-4">
                            <div class="w-24 my-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={jasim}></img>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Muhammed Jasim Uddin</h2>
                            <h3 className='font-bold'>CS, VEGAN SOLUTIONS & WISE</h3>
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


            </Slider>
        </div>

    );
};

export default Testimonials;