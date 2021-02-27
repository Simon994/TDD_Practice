import React, { useState } from 'react'

import Header from './Header'
import Button from './Button'
import CatDogImage from './CatDogImage'
import defaultImage from '../images/defaultImage.jpeg'

class CatDog extends React.Component {
  state = {
    imageName: defaultImage
  }

  handleClick = (event) => {
    this.setState({
      imageName: event.target.innerHTML
    })
  }

  render() {
    return (
      <>
        <Header />
        <div>
          <Button animal='cat' handleClick={this.handleClick} id='catButton'/>
          <Button animal='dog'/>
        </div>
        <CatDogImage 
          chosenImage={this.state.imageName}
        />
      </>
    )
  }
}

export default CatDog