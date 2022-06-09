
import React from 'react';
import Footer from '../Header/Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Home.css'

const Home = ({dark, setDark}) => {
    return (
        <div className={!dark ? 'back1' : 'back'}>
            <Navbar
             dark={dark}
             setDark={setDark}
            ></Navbar>
            <Header 
            dark={dark}
            setDark={setDark}></Header>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;