import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import CatDog from '../components/CatDog'

describe('CatDog', () => {
    test('renders CatDog', () => {
        const mountedCatDog = shallow(<CatDog />)
    })

})
