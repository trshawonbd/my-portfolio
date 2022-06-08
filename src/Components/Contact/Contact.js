import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import './COntact.css'

const Conatct = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMP_ID}`, form.current, `${process.env.REACT_APP_PUB_KEY}`)
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                e.target.reset();
            });
    };
    return (
        <div className='my-8 bg-'>

            <div className='text-center py-8'>
                <h3 className='text-center text-5xl uppercase my-8 underline decoration-solid'>Get In Touch</h3>

            </div>

            <div className='check' >
                <div className="card w-full check">
                    <div className="card-body bg-no-repeat">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='flex flex-col mx-auto'>
                                <div className='flex lg:flex-row md: flex-col justify-center items-center lg:gap-2 '>

                                    <div className="form-control w-full max-w-2xl">
                                        <label className="label">
                                            <span className="label-text font-bold">Your Name</span>
                                        </label>

                                        <input type="text"
                                            name="user_name"
                                            required
                                            placeholder="Your Name"
                                            className="input input-bordered w-50 max-w-2xl"

                                        />

                                    </div>
                                </div>
                                <div className='flex justify-center items-center gap-2'>


                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className="form-control w-full max-w-2xl">
                                        <label className="label">
                                            <span className="label-text font-bold">Your Email Address</span>
                                        </label>
                                        <input type="email"
                                            name="user_email"
                                            required
                                            placeholder="Your Email"
                                            className="input input-bordered w-full max-w-2xl"
                                        />

                                    </div>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className="form-control w-full max-w-2xl">
                                        <label className="label">
                                            <span className="label-text font-bold">Your Message</span>
                                        </label>
                                        <textarea type="text"
                                            name="message"
                                            required
                                            placeholder="Your Message"
                                            className="input input-bordered w-full h-40 "

                                        />


                                    </div>
                                </div>


                                <div className='flex justify-center items-center my-8'>
                                    <input className='btn button w-full max-w-xs text-white' type="submit" value='Send Message' />
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>

    );
};

export default Conatct;