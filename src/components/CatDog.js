import React, { useState } from 'react'

import Header from './Header'
import Button from './Button'
import CatDogImage from './CatDogImage'
import defaultImage from '../images/defaultImage.jpeg'

const CatDog = () => {
  const [imageName, setImageName] = useState(defaultImage)
  
  const handleClick = (event) => {
    setImageName(event.target.innerHTML)
  }

  return(
    <>
      <Header />
      <div>
        <Button animal='cat' handleClick={handleClick}/>
        <Button animal='dog' handleClick={handleClick}/>
      </div>
      <CatDogImage 
        chosenImage={imageName}
      />
    </>
  )
}

export default CatDog