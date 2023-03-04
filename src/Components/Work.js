import React from 'react'

import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import Delivery from "../Assets/delivery-image.png";
export const Work = () => {

    const workInfoDate = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th",
        },
        {
            image: ChooseMeals,
            title: "choose How often",
            text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th",
        },
        {
            image: Delivery,
            title: "Feat Delivery",
            text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th",
        }
    ]

  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How it works</h1>
            <p className='primary-text'>
                lanclñpe ñamslnc ,dmfpewp`p lasmd,pq ,ansd,masd
                jasldkalb ema,p`qowpeo ,amsda`pcopw amsndajskdjfjew
            </p>
        </div>
        <div className='work-section-bottom'>
            {
                workInfoDate.map((data) => (
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
