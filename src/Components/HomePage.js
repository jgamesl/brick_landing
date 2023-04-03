import React from 'react'

import { IntroPage } from '../Components/IntroPage';
import { KnowBrick } from '../Components/KnowBrick';
import { ObjetivosPage } from '../Components/ObjetivosPage';
import { ColaboradoresPage } from '../Components/ColaboradoresPage';
import { BlogPage } from '../Components/BlogPage';
import { DesarrollosPage } from '../Components/DesarrollosPage';
import { FileSection } from '../Components/FileSection';
// import { Navbar } from './Components/Navbar';


export const HomePage = () => {


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
    <>
    <IntroPage scrollToSection={scrollToSection}/>
    <div id="know-section"><KnowBrick /></div>
    
    <div id="goals-section"><ObjetivosPage /></div>
    <ColaboradoresPage />
    <BlogPage />
    
    <div id="desarrollos-section"><DesarrollosPage /></div>
    
    <FileSection />
  </>
  )
}
