import { mount } from 'enzyme'
import CatDog from '../components/CatDog'
import CatDogImage from '../components/CatDogImage'

describe('CatDog', () => {
  let mountedCatDog
  beforeEach(() => {
    mountedCatDog = mount(<CatDog />)
  })
  it('renders CatDog', () => {
    mount(<CatDog />)
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

describe('handleClick', () => {
  it('updates the state of CatDog based on which animal name is passed to it', () => {
    const mountedCatDog = mount(<CatDog />)
    const mockEvent = {target: {innerHTML: 'snail'}}
    mountedCatDog.instance().handleClick(mockEvent)
    expect(mountedCatDog.instance().state.imageName).toBe('snail')
  })
  
})