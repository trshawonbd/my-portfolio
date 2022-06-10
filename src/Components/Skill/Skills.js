import React from 'react';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";
import './Skills.css';
import Link from 'react-scroll/modules/components/Link';

const Skills = () => {
    return (
        <div className='my-12' id='skills'>
            <h2 className='text-center text-3xl uppercase my-12 underline decoration-solid'>Major skills</h2>

            <div className='grid lg:grid-cols-3 gap-3 mx-4'>
                <div>
                    <div className=' flex items-center justify-center  scale-50'>
                        <motion.div
                            initial={{ rotate: 360 }}
                            whileInView={{ rotate: 0 }}
                            viewport={{}}
                            transition={{ duration: 10.5, type: "spring" }}
                            className="w-mainCircle "
                        >
                            <div className="w-secCircle">
                                <img src={Upwork} alt="" />
                            </div>
                            <div className="w-secCircle">
                                <img src={Fiverr} alt="" />
                            </div>
                            <div className="w-secCircle">
                                <img src={Amazon} alt="" />
                            </div>{" "}
                            <div className="w-secCircle">
                                <img src={Shopify} alt="" />
                            </div>
                            <div className="w-secCircle">
                                <img src={Facebook} alt="" />
                            </div>
                        </motion.div>

                    </div>
                    <div class="card-actions mt-16 justify-center">
                        <button class="btn btn-primary uppercase button"><Link className='font-bold ' to="contact" spy={true} smooth={true}>
                        Hire Me
                    </Link></button>
                    </div>
                </div>

                <div>
                    <div>
                        <label class="label">
                            <span class="label-text text-lg">MongoDB</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text text-lg">Express</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="75" max="100"></progress>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text text-lg">Node JS
                            </span>
                        </label>
                        <progress class="progress progress-primary w-56" value="75" max="100"></progress>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text text-lg">React JS</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="90" max="100"></progress>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text text-lg">Rest API
                            </span>
                        </label>
                        <progress class="progress progress-primary w-56" value="75" max="100"></progress>
                    </div>
                </div>

                <div>
                    <div>
                        <label class="label">
                            <span class="label-text text-lg">Javascript</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="90" max="100"></progress>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text text-lg">Tailwind</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="99" max="100"></progress>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text text-lg">Bootstrap</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="100" max="100"></progress>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text text-lg">HTML 5</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="95" max="100"></progress>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text text-lg">CSS</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="90" max="100"></progress>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Skills;