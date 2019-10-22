import { shallow } from 'enzyme'
import React from 'react'
import CardList from './CardList'

it('expect to render Card comp', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'Josh Now',
            username: 'Josh',
            email: 'josh@gmail.com'
        }
    ]
    const cardListComponent = shallow(<CardList robots={mockRobots} />)
    expect(cardListComponent.length).toEqual(1)
    expect(cardListComponent.debug()).toMatchSnapshot()
})