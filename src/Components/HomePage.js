import React from 'react'

import { IntroPage } from '../Components/IntroPage';
import { KnowBrick } from '../Components/KnowBrick';
import { ObjetivosPage } from '../Components/ObjetivosPage';
import { useMediaQuery } from 'react-responsive';
import { ColaboradoresPage } from '../Components/ColaboradoresPage';
import { BlogPage } from '../Components/BlogPage';
import { DesarrollosPage } from '../Components/DesarrollosPage';
import { FileSection } from '../Components/FileSection';
import { Navbar } from './Navbar';
import { Box } from '@mui/material';
// import { Navbar } from './Components/Navbar';


export const HomePage = () => {


  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 924px)'
    // query: '(min-width: 1224px)'
  })
  console.log(isDesktopOrLaptop);
  const heightDevice = useMediaQuery;
  console.log(heightDevice);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 924px)' })


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
    {(isBigScreen || isDesktopOrLaptop) ? <Navbar scrollTo={scrollToSection}/> : <Box />}
    
    <IntroPage scrollToSection={scrollToSection}/>
    <div id="know-section"><KnowBrick /></div>
    
    {/* <div id="goals-section"><ObjetivosPage /></div> */}
    <ColaboradoresPage />
    <BlogPage />
    
    <div id="desarrollos-section"><DesarrollosPage /></div>
    
    <FileSection scrollToSection={scrollToSection} />
  </>
  )
}
