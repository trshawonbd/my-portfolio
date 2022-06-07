import React from 'react';
import './Header.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typical from 'react-typical';

import profile from "../../img/profile.jpg";
import Footer from './Footer/Footer';



const Header = () => {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (

        <div className="hero min-h-screen home " id='home'>

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "",
                        },
                    },
                    
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#242d49",
                        },
                        links: {
                            color: "#c5c5c5",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div class="avatar">
                    <div class="lg:w-96 max-w-sm rounded-lg shadow-2xl rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 background">
                        <img className='' src={profile} alt='profile-pic'/>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="colz flex">
                        <div className="hover:scale-150 colz-icon">
                            <a href="https://www.facebook.com/trshawonbd">
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href="https://www.linkedin.com/in/md-taibur-rahman-0497b5127/">
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href="https://www.instagram.com/taibur_rahman_shawon/">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href="https://github.com/trshawonbd">
                                <i className='fa fa-github-square'></i>
                            </a>
                            <a href="https://twitter.com/6a642b40fe2a41f">
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-start items-start">
                        <span className="text-xl">
                            {" "}
                            Hello, I am  <span className="text-3xl text-primary">Md Taibur Rahman</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text text-4xl ">
                            
                            <h1 className='text-4xl'>
                                
                                <Typical
                                className= 'type my-3 md: text-2xl lg:text-5xl text-center uppercase'
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev",
                                        2000,
                                        "Full stack Dev",
                                        2000,
                                        "React Developer",
                                        2000,
                                        "Cross Platform Dev",
                                        2000,
                                        "MERN DEVELOPER",
                                        4000,
                                    ]}>
                                </Typical>
                            </h1>
                            <span className="py-8 lg:text-2xl md: text-lg">
                                Knack of building web applications with front and backend operations.
                            </span>
                        </span>
                    </div>
                    <div><button className="btn button btn-primary mt-4">Hire Me</button></div>
                </div>
            </div>
            
        </div>
        
    );
};

export default Header;