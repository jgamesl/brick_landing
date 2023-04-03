
import './App.css';
import './index.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Work } from './Components/Work';
import { Testimonial } from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { useRef, useState } from "react";
import { HomePage } from './Components/HomePage';

function App() {
  const knowSection = useRef(null);
  const [verDesarrollos, setVerDesarrollos] = useState(false);

  // const scrollToSection = (elementRef) => {
  //   if (elementRef === 'know') {
  //     // window.scrollTo({
  //     //   top: knowSection.current.offsetTop,
  //     //   behavior: "smooth",
  //     // }); 
      
  //   }
  // };



  return (
    <div className="App">
      <HomePage />
      {/* <Home /> */}
      {/* <Navbar scrollTo={scrollToSection}/> */}
      
      {/* <About /> 
      <Work />
      <Testimonial />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
