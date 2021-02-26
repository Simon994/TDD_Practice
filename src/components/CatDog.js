import React from 'react'

import Header from './Header'
import Button from './Button'
import CatDogImage from './CatDogImage'

const CatDog = () => {
  return(
    <>
      <Header />
      <div>
        <Button />
        <Button />
      </div>
      <CatDogImage />
    </>
  )
}

export default CatDog