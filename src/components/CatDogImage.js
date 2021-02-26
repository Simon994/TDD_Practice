import React from 'react'
import './CatDogImage.css'
import defaultImage from '../images/defaultImage.jpeg'

const CatDogImage = () => {
  return (
    <img className='image' src={defaultImage} alt='default'/>
  )
}

export default CatDogImage