import React from 'react';
import { shallow } from 'enzyme';

import CardItem from '../../CardItem';
import Card from '../index';

describe('<Card />', () => {
  it('should render the component if no item is passed', () => {
    const renderedComponent = shallow(<Card component={CardItem} />);
    expect(renderedComponent.find(CardItem)).toBeDefined();
  });

  it('should pass a item props to rendered component', () => {
    const items = { id: 1, name: 'Hello' };

    const component = ({ item }) => <CardItem>{item.name}</CardItem>; // eslint-disable-line react/prop-types

    const renderedComponent = shallow(
      <Card items={items} component={component} />
    );
    expect(renderedComponent.find(component)).toHaveLength(1);
  });
});
