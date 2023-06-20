import React from 'react';
// import AboutBackground from "../Assets/about-background.png";
// import AboutBakgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

export const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            {/* <img src={AboutBackground} alt="" /> */}
        </div>
        <div className='about-section-image-container' >
            {/* <img src={AboutBakgroundImage} alt="" /> */}
        </div>
        <div className="about-section-text-container" >
            <p className="primary-subheading" >
                About
            </p>
            <h1 className='primary-heading'>
                Food Is An Important Part Of A Balanced Diet
            </h1>
            <p className='primary-text'>
                Lores ipsum wea fome consectetur. Noas nfkja nosjd oudue os 
                elit siod loasd laosod wleori vmkdj oasoid sklfkf quam.
            </p>
            <p className='primary-text'>
                Lores ipsum wea fome consectetur. Noas nfkja nosjd oudue os 
                elit siod loasd laosod wleori vmkdj oasoid sklfkf quam.
            </p>
            <div className="about-buttons-container" >
                <button className='secondary-button'> Learn More </button>
                <button className='watch-video-button'> <BsFillPlayCircleFill /> Watch Video </button>
            </div>
        </div>
    </div>
  )
}
