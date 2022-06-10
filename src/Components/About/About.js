import React from 'react';
import about from '../../img/about.jpg';
import resume from '../../Components/Services/resume.pdf';
import Link from 'react-scroll/modules/components/Link';

const About = () => {
    return (
        <div className='my-12' id='about'>
            <h2 className='text-center text-3xl uppercase my-8 underline decoration-solid'>About Me</h2>
            <div className='lg:w-3/4 lg:flex lg:items-center lg:justify-center lg:mx-auto lg:scale-90'>
                <div class="card lg:card-side shadow-2xl   ">
                    <div >
                        <figure><img className='lg:w-full  lg:h-screen md: mb-8' src={about} alt="Movie"></img></figure>
                    </div>
                    <div class="card md: mx-4 lg:w-5/12 lg:scale-90">
                        <h2 class="text-lg">Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.</h2>
                        <p className='text-xl underline my-8'>Here are a Few Highlights:</p>
                        <div className='text-xl md: mb-8'>
                            
                                <li className='text-lg'>

                                    Full Stack web development
                                </li>
                                <li className='text-lg'>
                                Interactive Front End as per the design 
                                </li>
                                <li className='text-lg'>
                                React and React Native
                                </li>
                                <li className='text-lg'>
                                Use State Management
                                </li>
                                <li className='text-lg'>
                                Building REST API
                                </li>
                                <li className='text-lg'>
                                Managing database
                                </li>
                                <li className='text-lg'>
                                Managing Firebase authentication
                                </li>
                            
                        </div>
                    <div className='flex justify-around my-auto md: mb-6'>
                    <div class="card-actions justify-end">
                            <button class="btn  button"><Link className='font-bold ' to="contact" spy={true} smooth={true}>
                        Hire Me
                    </Link></button>
                        </div>
                        <a href={resume} download>
                                <button className="btn btn-primary button">Get Resume</button>
                            </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;