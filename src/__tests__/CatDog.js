import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import CatDog from '../components/CatDog'

describe('CatDog', () => {
  let mountedCatDog
  beforeEach(() => {
    mountedCatDog = shallow(<CatDog />)
  })
  it('renders CatDog', () => {
    const mountedCatDog = shallow(<CatDog />)
  })

  it('renders the Header', () => {
    const headers = mountedCatDog.find('Header')
    expect(headers.length).toBe(1)
  })

  it('renders two buttons', () => {
    const buttons = mountedCatDog.find('Button')
    expect(buttons.length).toBe(2)
  })

  it('renders an Image', () => {
    const image = mountedCatDog.find('CatDogImage')
    expect(image.length).toBe(1)
  })
})
