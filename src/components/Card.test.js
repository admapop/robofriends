import { shallow } from 'enzyme'
import React from 'react'
import Card from './Card'

it('expect to render Card comp', () => {
    const cardComponent = shallow(<Card />)
    expect(cardComponent.length).toEqual(1)
    expect(cardComponent.debug()).toMatchSnapshot()
})