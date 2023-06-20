

import React from 'react'
import { Navbar } from './Navbar';
import { FiArrowRight } from "react-icons/fi";

import { useMediaQuery } from 'react-responsive';

export const Home = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 924px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 924px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <div className="home-container">
      <Navbar />
        {/* {isDesktopOrLaptop ? <Navbar /> : <h1>Es mobile mira nada más</h1>} */}
        {/* <div className="home-banner-container">
          <div className="home-banner-image-container-new">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className='primary-heading'>
              Brick Inmuebles
            </h1>
            <p className='primary-text'>
              Brick Inmuebles Brick Inmuebles Brick Inmuebles Brick Inmuebles
              Brick Inmuebles Brick Inmuebles Brick Inmuebles Brick Inmuebles.
            </p>
            <button className='secondary-button'>
              Ver departamentos <FiArrowRight />
            </button>
          </div> */}
          {/* <div className='home-image-container'>
            <img src={BannerImage} />
          </div> */}
        {/* </div> */}
    </div>
    
  )
}
