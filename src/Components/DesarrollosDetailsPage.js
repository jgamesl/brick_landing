import React from 'react'
import { FirstSection } from './Desarrollos/FirstSection'
import { FileSection } from './FileSection'
import { useMediaQuery } from 'react-responsive';
import { Navbar } from './Navbar'
import { Box } from '@mui/material';

export const DesarrollosDetailsPage = () => {


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
      {/* <Navbar /> */}
      <FirstSection />
      <FileSection />
    </>
  )
}
