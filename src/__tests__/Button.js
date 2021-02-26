import { shallow } from 'enzyme'
import Button from '../components/Button'

describe('Button', () => {
  let mountedButton
  beforeEach(() => {
    mountedButton = shallow(<Button />)
  })
  
  it('renders without crashing', () => {
    shallow(<Button />)
  })

  it('renders a button', () => {
    const button = mountedButton.find('button')
    expect(button.length).toBe(1)
  })
})

describe('When an animal is passed to the Button', () => {
  let mountedButton
  let props

  it('displays Neither! if no animal provided', () => {
    props = {
      animal: ''
    }
    mountedButton = shallow(<Button {...props} />)
    
    const button = mountedButton.find('button')
    expect(button.text()).toEqual('Neither!')
  })

  it('displays cat if animal prop equals cat', () => {
    props = {
      animal: 'cat'
    }
    mountedButton = shallow(<Button {...props} />)
    
    const button = mountedButton.find('button')
    expect(button.text()).toEqual('cat')
  })

  it('displays dog if animal prop equals dog', () => {
    props = {
      animal: 'dog'
    }
    mountedButton = shallow(<Button {...props} />)
    
    const button = mountedButton.find('button')
    expect(button.text()).toEqual('dog')
  })
})