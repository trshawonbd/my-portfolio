import React from 'react';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
import './Skills.css';

const Skills = () => {
    return (
        <div className=''>
            <h2 className='text-center text-5xl uppercase my-8 underline decoration-solid'>Major skills</h2>

            <div className='grid lg:grid-cols-3 gap-3 mx-4'>
{/*                 <div>
                    <h2 className='text-2xl mb-8'>Each Technology is a Challenge</h2>
                    <h2 className='text-lg'>Each type of technology is a new challenge and I love to face challenges. In that case if I have to face a new technology for the first step I go through some visual contents get some hints and make an imaginary for understanding the base of that technology and then I go for the documentations and after that I practice with projects.</h2>

                    <h2 className='mt-8 text-lg'>I'm continuously learning more with an aim of to be a FULL STACK developer.</h2>

                </div> */}
<div>
<div className=' flex items-center justify-center lg:scale-90 md: scale-50'>
    <motion.div
                        initial={{ rotate: 360 }}
                        whileInView={{ rotate: 0 }}
                        viewport={{  }}
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
      <button class="btn btn-primary uppercase button">Hire ME</button>
    </div>
</div>

                <div>
                    <div>
                        <label class="label">
                            <span class="label-text text-2xl">MongoDB</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text text-2xl">Express</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="75" max="100"></progress>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text text-2xl">Node JS
                            </span>
                        </label>
                        <progress class="progress progress-primary w-56" value="75" max="100"></progress>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text text-2xl">React JS</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="90" max="100"></progress>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text text-2xl">Rest API
</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="75" max="100"></progress>
                    </div>

                </div>

                <div>
                <div>
                        <label class="label">
                            <span class="label-text text-2xl">Javascript</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="90" max="100"></progress>
                    </div>
                <div>
                        <label class="label">
                            <span class="label-text text-2xl">Tailwind</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="99" max="100"></progress>
                    </div>
                <div>
                        <label class="label">
                            <span class="label-text text-2xl">Bootstrap</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="100" max="100"></progress>
                    </div>
                <div>
                        <label class="label">
                            <span class="label-text text-2xl">HTML 5</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="95" max="100"></progress>
                    </div>
                <div>
                        <label class="label">
                            <span class="label-text text-2xl">CSS</span>
                        </label>
                        <progress class="progress progress-primary w-56" value="90" max="100"></progress>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Skills;