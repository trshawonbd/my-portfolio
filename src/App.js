import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Services from './Components/Services/Services';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skill/Skills';
import About from './Components/About/About';
import Client from './Components/Client/Client';
import Testimonials from './Components/Testimonials/Testimonials';


function App() {
  return (
    <div className=''>
      
      <Home></Home>
      
      <About></About>
      <Services></Services>

      <Projects></Projects>
      <Skills></Skills>
      <Client></Client>
      <Testimonials></Testimonials>

    </div>
  );
}

export default App;
