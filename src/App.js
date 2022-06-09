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


function App() {
  return (
    <div>
      
      <Home></Home>
      
      <About></About>
      <Services></Services>

      <Projects></Projects>
      <Skills></Skills>
      <Client></Client>
      <Testimonials></Testimonials>
      <Conatct></Conatct>
      <Footer></Footer>
      <BackgroundFooter></BackgroundFooter>

    </div>
  );
}

export default App;
