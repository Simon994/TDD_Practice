import { shallow } from 'enzyme'

import CatDogImage from '../components/CatDogImage'
import defaultImage from '../images/defaultImage.jpeg'
import cat from '../images/cat.jpg'

describe('CatDogImage', () => {
  let mountedImage
  let props

  it('renders without crashing', () => {
    shallow(<CatDogImage />)
  })

  it('renders an img element', () => {
    mountedImage = shallow(<CatDogImage {...props}/>)
    const catDogImage = mountedImage.find('img')
    expect(catDogImage.length).toBe(1)
  })

  it('renders a default image when no input is given', () => {
    props = {
      chosenImage: ''
    }
    
    mountedImage = shallow(<CatDogImage {...props}/>)
    expect(mountedImage.find('img').prop('src')).toEqual(defaultImage)
  })

  it('renders the cat image when imageName is cat', () => {
    props = {
      chosenImage: 'cat.jpg'
    }
    mountedImage = shallow(<CatDogImage {...props}/>)
    expect(mountedImage.find('img').prop('src')).toEqual(cat)
  })
})
