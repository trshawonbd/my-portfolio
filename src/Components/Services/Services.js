import React from 'react';
import Resume from './resume.pdf';
import './Services.css';
import design from '../../img/design.png';
import front from '../../img/front.png';
import backend from '../../img/backend.png';
import automation from '../../img/automation.png';

const Services = () => {
    return (
        <div className='services my-12 bg-100 ' id='services'>

            <h2 className='text-center text-5xl  my-8 underline decoration-solid'>Services</h2>

            <div className="card flex flex-col items-center justify-center  lg:flex-row base-100">
            <div className='flex'>
                    <div className="card-body ">
                        <h2 className="card-title text-5xl">My Awesome</h2>
                        <h2 className="card-title text-5xl text-primary flex items-end">Services</h2>
                        <p className='text-xl my-5'>Since beginning my journey I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
                        <div className="card-actions justify-start">
                            <a href={Resume} download>
                            <button className="btn btn-primary button">Download Resume</button>
                            </a>
                            
                        </div>
                    </div>
                </div>

                <div className="grid grid-rows-3 lg:grid-flow-col gap-4 background">
                    <div className="lg:row-start-2 lg:col-start-2 ...">
                        <div className="card lg:w-96 bg-base-100 border-4 border-primary shadow-xl">
                            <figure><img className='w-16 h-16' src={design} alt="design" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                   Design
                                </h2>
                                <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                                <div className="card-actions justify-start">
                                <h2 className='font-bold'>Staff:</h2>
                                    <div className="badge badge-outline">UX</div>
                                    <div className="badge badge-outline">UI</div>
                                    <div className="badge badge-outline uppercase">Mobile</div>
                                    <div className="badge badge-outline uppercase">Web</div>
                                    <div className="badge badge-outline uppercase">Logos</div>
                                </div>
                                
                                <div className="card-actions  items-center justify-start">
                                <h2 className='font-bold'>Tools:</h2>
                                    <div className="badge badge-outline">Figma</div>
                                    <div className="badge badge-outline">Dribble</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:row-start-1 lg:col-start-2 ...">
                    <div className="card lg:w-96 bg-base-100 border-4 border-primary shadow-xl">
                            <figure><img className='w-16 h-16' src={front} alt="front" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                   Front-end Developer
                                </h2>
                                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                                <div className="card-actions justify-start">
                                <h2 className='font-bold'>Language:</h2>
                                    <div className="badge badge-outline">HTML</div>
                                    <div className="badge badge-outline">CSS</div>
                                    <div className="badge badge-outline uppercase">JS</div>
                                </div>
                                
                                <div className="card-actions  items-center justify-start">
                                <h2 className='font-bold'>Tools:</h2>
                                    <div className="badge badge-outline">REACT</div>
                                    <div className="badge badge-outline">BOOTSTRAP</div>
                                    <div className="badge badge-outline">TAILWIND</div>
                                    <div className="badge badge-outline">DAISY UI</div>
                                    <div className="badge badge-outline">FIRBASE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:row-start-2 row-span-2 ...">
                        <div className="card lg:w-96 bg-base-100 border-4 border-primary shadow-xl">
                            <figure><img className='w-16 h-16' src={backend} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Backend Developer
                                   
                                </h2>
                                <p>I can Develop a fullstack fully functional website from backend to client end.No doubt!</p>
                                <div className="card-actions justify-start">
                                <h2 className='font-bold'>Language:</h2>
                                    <div className="badge badge-outline">NODE JS</div>
                                </div>
                                
                                <div className="card-actions  items-center justify-start">
                                <h2 className='font-bold'>Tools:</h2>
                                    <div className="badge badge-outline">MONGODB</div>
                                    <div className="badge badge-outline">EXPRESS</div>
                                    <div className="badge badge-outline">CORS</div>
                                    <div className="badge badge-outline">ATLAS</div>
                                    <div className="badge badge-outline">MIDDLEWARE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:row-start-3 lg:col-start-2 ...">
                        <div className="card lg:w-96 bg-base-100 border-4 border-primary shadow-xl">
                            <figure><img className='w-16 h-16' src={automation} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Integration and Testing
                                    
                                </h2>
                                <p>I can automate full website not only for testing purpose but also deploy the automation in automation server</p>
                                <div className="card-actions justify-start">
                                
                                <div className="card-actions  items-center justify-start">
                                <h2 className='font-bold'>Tools:</h2>
                                    <div className="badge badge-outline">FIRBASE</div>
                                    <div className="badge badge-outline">HEROKU</div>
                                    <div className="badge badge-outline">NETLIFY</div>
                                    <div className="badge badge-outline">POSTMAN</div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>



    );
};

export default Services;