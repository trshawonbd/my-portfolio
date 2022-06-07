import React from 'react';
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

import { motion } from "framer-motion";
import { Link } from 'react-scroll'

const Works = () => {
    return (
        <div className="works" id="works">
            <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div>
    <motion.div
                        initial={{ rotate: 360 }}
                        whileInView={{ rotate: 0 }}
                        viewport={{  }}
                        transition={{ duration: 3.5, type: "spring" }}
                        className="w-mainCircle"
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
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            {/* left side */}
            <div className="w-left">
                <div className="awesome">
                    {/* dark Mode */}

                    Works for All these

                    <span>Brands & Clients</span>
                    <spane>
                        Lorem ispum is simpley dummy text of printing of printing Lorem
                        <br />
                        ispum is simpley dummy text of printingLorem ispum is simpley dummy
                        text
                        <br />
                        y dummy text of printingLorem
                        <br />
                        ispum is simpley dummy text of printing
                    </spane>
                    <Link to="contact" smooth={true} spy={true}>
                        <button className="button s-button">Hire Me</button>
                    </Link>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>

                {/* right side */}
            </div>

        </div>
    );
};

export default Works;