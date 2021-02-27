import { shallow } from 'enzyme'

import CatDogImage from '../components/CatDogImage'
import defaultImage from '../images/defaultImage.jpeg'
import cat from '../images/cat.jpg'
import dog from '../images/dog.jpg'

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
    mountedImage = shallow(<CatDogImage />)
    expect(mountedImage.find('img').prop('src')).toEqual(defaultImage)
  })

  it('renders the cat image when chosenImage is cat', () => {
    props = {
      chosenImage: 'cat'
    }
    mountedImage = shallow(<CatDogImage {...props}/>)
    expect(mountedImage.find('img').prop('src')).toEqual(cat)
  })

  it('renders the dog image when chosenImage is dog', () => {
    props = {
      chosenImage: 'dog'
    }
    mountedImage = shallow(<CatDogImage {...props}/>)
    expect(mountedImage.find('img').prop('src')).toEqual(dog)
  })
})
