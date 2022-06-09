import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Services from './Components/Services/Services';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skill/Skills';
import About from './Components/About/About';
import Client from './Components/Client/Client';
import Testimonials from './Components/Testimonials/Testimonials';
import Conatct from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import BackgroundFooter from './Components/Footer/BackgroundFooter';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';


function App() {
  const [dark, setDark] = useState(false);
  return (
    <div data-theme={dark ? "light" : "dark"}>

      <Home 
       dark={dark}
       setDark={setDark}
      ></Home>
      
      <About></About>
      <Services></Services>

      <Projects></Projects>
      <Skills></Skills>
      <Client></Client>
      <Testimonials></Testimonials>
      <Conatct></Conatct>
      <Footer></Footer>
      <BackgroundFooter></BackgroundFooter>
      <ToastContainer
       theme='colored'
      ></ToastContainer>

    </div>
  );
}

export default App;
