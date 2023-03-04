

import React from 'react'

import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from 'react-icons/ai';
export const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className='primary-text'>
                lanclñpe ñamslnc ,dmfpewp`p lasmd,pq ,ansd,masd
                jasldkalb ema,p`qowpeo ,amsda`pcopw amsndajskdjfjew
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt=""/>
            <p>
                lanclñpe ñamslnc ,dmfpewp`p lasmd,pq ,ansd,masd
                jasldkalb ema,p`qowpeo ,amsda`pcopw amsndajskdjfjew
            </p>
            <div className='testimonials-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
  )
}
