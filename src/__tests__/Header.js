import { shallow } from 'enzyme'

import Header from '../components/Header'

describe('Header', () => {
  it('renders', () => {
    const mountedHeader = shallow(<Header />)
  })
})