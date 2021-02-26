import { shallow } from 'enzyme'

import CatDogImage from '../components/CatDogImage'

describe('CatDogImage', () => {
  it('renders Image', () => {
    const mountedImage = shallow(<CatDogImage />)
  })
})
