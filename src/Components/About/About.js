import React from 'react';
import about from '../../img/about.jpg';

const About = () => {
    return (
        <div>
            <h2 className='text-center text-5xl uppercase my-8 underline decoration-solid'>About Me</h2>
            <div className='lg:w-3/4 lg:flex lg:items-center lg:justify-center lg:mx-auto lg:scale-90'>
                <div class="card lg:card-side shadow-2xl   ">
                    <div >
                        <figure><img className='lg:w-full  lg:h-screen md: mb-8' src={about} alt="Movie"></img></figure>
                    </div>
                    <div class="card md: mx-4 lg:w-5/12 lg:scale-90">
                        <h2 class="card-title">Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.</h2>
                        <p className='text-xl my-8'>Here are a Few Highlights:</p>
                        <div className='text-xl md: mb-8'>
                            
                                <li className='text-xl'>

                                    Full Stack web development
                                </li>
                                <li className='text-xl'>
                                Interactive Front End as per the design
                                </li>
                                <li className='text-xl'>
                                React and React Native
                                </li>
                                <li className='text-xl'>
                                Use State Management
                                </li>
                                <li className='text-xl'>
                                Building REST API
                                </li>
                                <li className='text-xl'>
                                Managing database
                                </li>
                                <li className='text-xl'>
                                Managing Firebase authentication
                                </li>
                            
                        </div>
                    <div className='flex justify-around my-auto md: mb-6'>
                    <div class="card-actions justify-end">
                            <button class="btn  button">Hire Me</button>
                        </div>
                        <div class="card-actions justify-end">
                            <button class="btn  button">Get Resume</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;