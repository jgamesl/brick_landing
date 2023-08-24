import React, { useState }  from 'react'
import { FirstSection } from './Desarrollos/FirstSection'
import { useNavigate, useLocation } from "react-router-dom";
import { FileSection } from './FileSection'
import { useMediaQuery } from 'react-responsive';
import { Box, Button, Grid, ListItem, SvgIcon, Typography, Drawer, Link, Divider, IconButton } from '@mui/material';
import {ReactComponent as CorreoIcon} from "../Assets/Icons/Desarrollos/contacto.svg";
import CloseIcon from '@mui/icons-material/Close';
import { Navbar } from './Navbar'
// import { Box } from '@mui/material';
import { useEffect } from 'react';

export const DesarrollosDetailsPage = ({ route , navigation}) => {

  // const { section } = route.params;

  const navigate = useNavigate();

  const location = useLocation();

  const section  = location?.state?.section;


  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 924px)'
    // query: '(min-width: 1224px)'
  })
  console.log(isDesktopOrLaptop);
  const heightDevice = useMediaQuery;
  console.log(heightDevice);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 924px)' });

  useEffect(() => {
    console.log('useEffect wea');
    console.log(section);
    window.scrollTo(0, 0);
  }, [section])
  

  const scrollToSection = (section) => {
    navigate('/');
    // if (section === 'know') {
    //   const element = document.getElementById('know-section');
    //   // 👇 Will scroll smoothly to the top of the next section
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }

    // if (section === 'goals') {
    //   const element = document.getElementById('goals-section');
    //   // 👇 Will scroll smoothly to the top of the next section
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }
    // if (section === 'desarrollos') {
    //   const element = document.getElementById('desarrollos-section');
    //   // 👇 Will scroll smoothly to the top of the next section
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }
  };
  return (
    <>

      {(isBigScreen || isDesktopOrLaptop) ? <Navbar scrollTo={scrollToSection}/> : <Box />}
      {/* <Navbar /> */}
      <FirstSection section={section}/>
      <FileSection />
    </>
  )
}
