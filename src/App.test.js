// import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
    it('renders App component', () => {
        const mountedApp = shallow(<App />)
    })

    it('renders CatDog', () => {
        const mountedApp = shallow(<App />)
        const foundCatDog = mountedApp.find('CatDog')
        expect(foundCatDog.length).toBe(1)
    })
})
