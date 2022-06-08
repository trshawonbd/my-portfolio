import React from 'react';
import footer from '../../img/wave.png'
import './Footer.css'

const Footer = () => {
    return (
        <div >
             <div class="divider divback"></div> 
                   <footer class="footer footer-center p-10   text-base-content rounded"   >
            <div class="grid grid-flow-col gap-4">
                <a class="link link-hover">About me</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Services</a>
                <a class="link link-hover">Projects</a>
            </div>
            <div>
                <div class="grid grid-flow-col gap-4 scale-150">
                <a href="https://www.facebook.com/trshawonbd" className='hover:text-primary'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href="https://www.linkedin.com/in/md-taibur-rahman-0497b5127/" className='hover:text-primary' >
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href="https://www.instagram.com/taibur_rahman_shawon/" className='hover:text-primary'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href="https://github.com/trshawonbd" className='hover:text-primary'>
                                <i className='fa fa-github-square'></i>
                            </a>
                            <a href="https://twitter.com/6a642b40fe2a41f" className='hover:text-primary'>
                                <i className='fa fa-twitter'></i>
                            </a>
                </div>
            </div>
            <div style={{background: `url(${footer})`}}>
                <p>Copyright © 2022 - All right reserved by TRS</p>
            </div>
        </footer>
        </div>
    );
};

export default Footer;