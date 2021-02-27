import React from 'react'
import './CatDogImage.css'
import defaultImage from '../images/defaultImage.jpeg'
import cat from '../images/cat.jpg'
import dog from '../images/dog.jpg'

const CatDogImage = (props) => {
  const { chosenImage } = props
  
  let displayImage
  if (chosenImage === 'cat'){
    displayImage = cat
  } else if (chosenImage === 'dog') {
    displayImage = dog
  } else {
    displayImage = defaultImage
  }

  return (
    <img
      className='image'
      src={displayImage} 
      alt='animal'/>
  )
}

export default CatDogImage