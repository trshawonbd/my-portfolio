import React from 'react';
import Footer from '../Header/Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Home.css'

const Home = () => {
    return (
        <div className='back'>
            <Navbar></Navbar>
            <Header></Header>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;