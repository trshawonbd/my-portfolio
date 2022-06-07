import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Footer from './Components/Header/Footer/Footer';
import Home from './Components/Home/Home';
import Works from './Components/Works/Works';
import Projects from './Components/Projects/Projects';


function App() {
  return (
    <div className=''>
      
      <Home></Home>
      
      
      <Services></Services>

      <Projects></Projects>
      

    </div>
  );
}

export default App;
