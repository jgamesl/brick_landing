import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import BrickLogo from "../Assets/Icons/Home/isotipo.svg";
import Patron1 from "../Assets/Icons/Home/patron.svg";
import Patron2 from "../Assets/Icons/Home/patron2.svg";
import {ReactComponent as CorreoIcon} from "../Assets/Icons/Desarrollos/contacto.svg";
import BrickText from "../Assets/Icons/Logo/logo.svg";
import { Box, Button, Grid, ListItem, SvgIcon, Typography } from '@mui/material';
import {ReactComponent as InstagramIcon} from "../Assets/Icons/Home/insta.svg";
import {ReactComponent as FbIcon} from "../Assets/Icons/Home/fb.svg";
import {ReactComponent as TwitterIcon} from "../Assets/Icons/Home/twitter.svg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';




export const IntroPage = (props) => {


    const navigate = useNavigate();

    // scrollTo
  const scrollToSection = (section) => {
    console.log('la section');
    console.log(section);
    props.scrollToSection(section);
  };

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize);
  console.log(windowSize.current[0]);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 924px)'
    // query: '(min-width: 1224px)'
  })
  console.log(isDesktopOrLaptop);
  const heightDevice = useMediaQuery;
  console.log(heightDevice);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 924px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait) and (max-width: 800px)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  const [windowHeight, setWindowHeight] = useState(windowSize.current[1]);
  const [windowWidth, setWindowWidth] = useState(windowSize.current[0]);
  console.log(windowHeight);
  useEffect(() => {
    setWindowHeight(windowSize.innerHeight);
    setWindowWidth(windowSize.innerWidth);
  }, [windowSize])
  
  return (
    // <MenuIcon />
    <div>   
    <div >
     {/* <div class="body-cont"> */}
     {
        isTabletOrMobile 
            ? <>
            <div className="color-intro-page-mobile">
                <div className='intro-page-interior-mobile'>

                    <Grid container>
                        <Grid item xs={6}>
                        <Box sx={{mt: 5, ml: 5}}> 
                            <ListItem sx={{paddingLeft: '0px'}}>
                                <img className="nav-logo" src={BrickText} alt="" />
                            </ListItem>
                        </Box>
                        </Grid>
                        <Grid item xs={6} >
                            <Box display="flex" justifyContent="flex-end">
                                <MenuIcon sx={{height: '80px', width: '80px', mt:3, mr:3}} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Box height={100}/>
                    <Grid container justifyContent="center" aligntItems="center" direction="column">
                        <img className='intro-page-logo' src={BrickLogo} alt=""/>

                        <p className='intro-page-center-text-mobile'> 
                            DESARROLLO 
                        </p>
                        <p className='intro-page-center-text-mobile'> 
                            INMOBILIARIO 
                        </p>
                        <Box height={30} />
                        <p className='intro-page-center-sub-text-mobile'> 
                             CDMX
                        </p>
                    <Box height={30} />
                    <Box display="flex" justifyContent="center">
                        {/* <Box height={20}/> */}
                        <Button sx={{borderRadius: 8, width: '50%'}} onClick={() => {navigate('/desarrollos')}} className='nav-bar-btn-mobile' variant="contained" endIcon={<ArrowForwardIosIcon />}>
                            VER DESARROLLOS
                        </Button>
                    </Box>
                    </Grid>
                </div>
            </div>

            <div className='text-footer-color footer-intro-logo-mobile ' >
                <Box height={30} />
                <Grid container>
                    <Grid item xs={12}>

                        <ListItem>

                            <p className='text-footer-size'>
                                Arcos Bosques, Paseo de los Tamarindos 400.
                            </p>
                        </ListItem>
                        <ListItem>
                            <p className='text-footer-size'>
                                Torre A, Bosques de las Lomas Cuajimalpa.
                            </p>
                        </ListItem>
                        <ListItem>
                            <p className='text-footer-size'>
                                CDMX
                            </p>
                        </ListItem>
                        <Box height={20} />
                    </Grid>
                    <Grid item xs={6}>
                        
                        <ListItem>

                        <p className='text-footer-size'>
                            55.8000.3735
                        </p>
                        </ListItem>
                        <ListItem>
                        <p className='text-footer-size'>
                            +52 56 39661468
                        </p>
                        </ListItem>
                        <ListItem>
                        <p className='text-footer-size'>
                            Hola@brick
                            inmuebles.com.mx
                        </p>
                        </ListItem>

                    </Grid>
                    <Grid item xs={6}>

                        <ListItem display="flex" justifyContent="flex-end" >
                            <SvgIcon onClick={() => {window.location.replace('https://www.instagram.com/brick.inmuebles/');}} sx={{mt:'8px'}} component={InstagramIcon} />
                            <Box width={50} />
                            <SvgIcon sx={{mt:'8px'}} component={FbIcon} />
                            <Box width={50} />
                            <SvgIcon sx={{mt:'8px'}} component={TwitterIcon} />
                        </ListItem>
                    </Grid>
                </Grid>
            </div>
            </>
            : <></>
     }

    {(isBigScreen || isDesktopOrLaptop) ? <div className="color-intro-page">
       {/* <Navbar scrollTo={scrollToSection}/> */}
        <Grid container spacing={2} className='intro-page-interior'>
            <Grid item xs={4}>

            <img style={{marginBottom: '-400px'}} src={Patron1} alt=""/>
            </Grid>
            <Grid item xs={4}>
                
                <img className='intro-page-logo' src={BrickLogo} alt=""/>
                <Box height={10} />
                <p className='intro-page-center-text'> 
                    DESARROLLO 
                </p>
                <p className='intro-page-center-text'> 
                    INMOBILIARIO 
                </p>
                <Box height={20} />
                <p className='intro-page-center-sub-text-mobile'> 
                        CDMX
                </p>
            <Box height={15} />
            <Button sx={{borderRadius: 8}} onClick={() => {navigate('/desarrollos')}} className='nav-bar-btn' variant="contained" endIcon={<ArrowForwardIosIcon />}>
                VER DESARROLLOS
            </Button>

            </Grid>
            <Grid item xs={4}>
                <img style={{marginBottom: '-400px'}}  src={Patron2} alt=""/>
            </Grid>
            <Box height={100} />
        </Grid>
        <div className="footer-intro-logo basic-padding">
            <Grid className='text-footer-color' container spacing={2}>
                <Grid item xs={5}>
                    <ListItem>

                        <p className='text-footer-size'>
                            Arcos Bosques, Paseo de los Tamarindos 400.
                        </p>
                    </ListItem>
                    <ListItem>
                        <p className='text-footer-size'>
                            Torre A, Bosques de las Lomas Cuajimalpa.
                        </p>
                    </ListItem>
                    <ListItem>
                        <p className='text-footer-size'>
                            CDMX
                        </p>
                    </ListItem>
                </Grid>
                <Grid item xs={4}>
                    <ListItem>

                        <p className='text-footer-size'>
                            55.8000.3735
                        </p>
                    </ListItem>
                    <ListItem>

                        <p className='text-footer-size'>
                            +52 56 39661468
                        </p>
                    </ListItem>
                    <ListItem>
                        <p className='text-footer-size'>
                           Hola@brickinmuebles.com.mx
                        </p>
                    </ListItem>
                </Grid>
                <Grid item xs={3}>
                    <ListItem display="flex" justifyContent="flex-end" >
                        <SvgIcon onClick={() => {window.location.replace('https://www.instagram.com/brick.inmuebles/');}} sx={{mt:'8px'}} component={InstagramIcon} />
                        <Box width={50} />
                        <SvgIcon sx={{mt:'8px'}} component={FbIcon} />
                        <Box width={50} />
                        <SvgIcon sx={{mt:'8px'}} component={TwitterIcon} />
                    </ListItem>
                </Grid>
            </Grid>
            {/* <div className="column">
                <p>text 1</p>
            </div>
            <div className="column">
                <p>text 2</p>
            </div>
            <div className="column">
                <p>text 3</p>
            </div> */}
        </div>
    </ div> : <></>}
    {/* <div>

     <h1>Device Test!</h1>

     <MediaQuery minWidth={992}>

     <p>You are a desktop or laptop</p>

     </MediaQuery>

     <MediaQuery minWidth={768} maxWidth={991}>

     <p>You're a tablet or a landscape smartphone</p>

     </MediaQuery>

     <MediaQuery maxWidth={767}>

     <p>You're a smartphone</p>

     </MediaQuery>

     <MediaQuery minResolution="2dppx">

     {(matches) =>

         matches

         ? <p>And you are high DPI</p>

         : <p>And you are low DPI</p>

     }

     </MediaQuery>

    </div> */}

 </div></div>
  )
  
}
