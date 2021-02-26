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