import { shallow } from 'enzyme'

import Header from '../components/Header'

describe('Header', () => {
  it('renders', () => {
    shallow(<Header />)
  })

  it('renders an h1 element', () => {
    const mountedHeader = shallow(<Header />)
    const headers = mountedHeader.find('h1')
    expect(headers.length).toBe(1)
  })
})