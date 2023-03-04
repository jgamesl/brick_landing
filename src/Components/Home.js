

import React from 'react'
import { Navbar } from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

export const Home = () => {
  return (
    <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
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
          </div>
          <div className='home-image-container'>
            <img src={BannerImage} />
          </div>
        </div>
    </div>
    
  )
}
