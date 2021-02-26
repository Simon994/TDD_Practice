import { shallow } from 'enzyme'

import CatDogImage from '../components/CatDogImage'
import defaultImage from '../images/defaultImage.jpeg'

describe('CatDogImage', () => {
  let mountedImage
  beforeEach(() => {
    mountedImage = shallow(<CatDogImage />)
  })

  it('renders without crashing', () => {
    shallow(<CatDogImage />)
  })

  it('renders an img element', () => {
    const catDogImage = mountedImage.find('img')
    expect(catDogImage.length).toBe(1)
  })

  it('renders a default image when no input is given', () => {
    expect(mountedImage.find('img').prop('src')).toEqual(defaultImage)
  })
})
