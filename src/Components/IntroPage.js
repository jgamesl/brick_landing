import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive';
import { Navbar } from './Navbar';
import Delivery from "../Assets/delivery-image.png";
import { Grid, ListItem } from '@mui/material';
export const IntroPage = () => {

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize);
  console.log(windowSize.current[0]);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1000px)'
    // query: '(min-width: 1224px)'
  })
  console.log(isDesktopOrLaptop);
  const heightDevice = useMediaQuery;
  console.log(heightDevice);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  const [windowHeight, setWindowHeight] = useState(windowSize.current[1]);
  const [windowWidth, setWindowWidth] = useState(windowSize.current[0]);
  console.log(windowHeight);
  useEffect(() => {
    setWindowHeight(windowSize.innerHeight);
    setWindowWidth(windowSize.innerWidth);
  }, [windowSize])
  
  return (
    <div>   
    <div >
     {/* <div class="body-cont"> */}

    {isDesktopOrLaptop ? <div className="color-intro-page">
       <Navbar />
        <div className='intro-page-interior'>
            <img className='intro-page-logo' src={Delivery} alt=""/>
            <h1>LOREM IPSUM</h1>
            <h3>Desarrollo inmobiliario.</h3>
        </div>
        <div className="footer-intro-logo basic-padding">
            <Grid className='text-footer-color' container spacing={2}>
                <Grid item xs={4}>
                    <ListItem>
                        cda Monet 43
                    </ListItem>
                    <ListItem>
                        La wea Residencial 3223
                    </ListItem>
                    <ListItem>
                        Nicaragua
                    </ListItem>
                </Grid>
                <Grid item xs={4}>
                    <ListItem>
                        626317627
                    </ListItem>
                    <ListItem>
                        correo@lawea.com
                    </ListItem>
                </Grid>
                <Grid item xs={4}>
                    <ListItem>
                        Iconos
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
    </ div> : <h1 div className='intro-page-interior'>nada </h1>}
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
