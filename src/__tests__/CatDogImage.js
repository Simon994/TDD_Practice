import { shallow } from 'enzyme'

import CatDogImage from '../components/CatDogImage'

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
    const defaultImage = mountedImage.find('img[src="images/default.jpg"]')
    expect(defaultImage.length).toBe(1)
  })
})
