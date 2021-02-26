import React from 'react'
import './CatDogImage.css'
import defaultImage from '../images/defaultImage.jpeg'

const CatDogImage = (props) => {
  return (
    <img className='image' src={props.chosenImage ? props.chosenImage : defaultImage} alt='default'/>
  )
}

export default CatDogImage