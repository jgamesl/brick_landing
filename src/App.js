
import './App.css';
import './index.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Work } from './Components/Work';
import { Testimonial } from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { IntroPage } from './Components/IntroPage';
import { KnowBrick } from './Components/KnowBrick';
import { ObjetivosPage } from './Components/ObjetivosPage';
import { ColaboradoresPage } from './Components/ColaboradoresPage';
import { BlogPage } from './Components/BlogPage';
import { DesarrollosPage } from './Components/DesarrollosPage';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <IntroPage />
      <KnowBrick />
      <ObjetivosPage />
      <ColaboradoresPage />
      <BlogPage />
      <DesarrollosPage />
      {/* <About /> 
      <Work />
      <Testimonial />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
