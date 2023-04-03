
import './App.css';
import './index.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Work } from './Components/Work';
import { Testimonial } from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { useRef } from "react";
import { IntroPage } from './Components/IntroPage';
import { KnowBrick } from './Components/KnowBrick';
import { ObjetivosPage } from './Components/ObjetivosPage';
import { ColaboradoresPage } from './Components/ColaboradoresPage';
import { BlogPage } from './Components/BlogPage';
import { DesarrollosPage } from './Components/DesarrollosPage';
import { FileSection } from './Components/FileSection';
import { Navbar } from './Components/Navbar';

function App() {
  const knowSection = useRef(null);

  // const scrollToSection = (elementRef) => {
  //   if (elementRef === 'know') {
  //     // window.scrollTo({
  //     //   top: knowSection.current.offsetTop,
  //     //   behavior: "smooth",
  //     // }); 
      
  //   }
  // };


  const scrollToSection = (section) => {
    if (section === 'know') {
      const element = document.getElementById('know-section');
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }

    if (section === 'goals') {
      const element = document.getElementById('goals-section');
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === 'desarrollos') {
      const element = document.getElementById('desarrollos-section');
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Navbar scrollTo={scrollToSection}/> */}
      <IntroPage scrollToSection={scrollToSection}/>
      <div id="know-section"><KnowBrick /></div>
      
      <div id="goals-section"><ObjetivosPage /></div>
      <ColaboradoresPage />
      <BlogPage />
      
      <div id="desarrollos-section"><DesarrollosPage /></div>
      
      <FileSection />
      {/* <About /> 
      <Work />
      <Testimonial />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
