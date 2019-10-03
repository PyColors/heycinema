import React from 'react';
import { mount } from 'enzyme';

import Carditem from '../index';

describe('<Carditem />', () => {
  it('should have a className', () => {
    const renderedComponent = mount(<Carditem className="card-item-wrapper-test" />);
    expect(renderedComponent.find('li').prop('className')).toBeDefined();
  });

  it('should render the content passed to it', () => {
    const content = <div>Item</div>;
    const renderedComponent = mount(<Carditem item={content} />);
    expect(renderedComponent.contains(content)).toBe(true);
  });
});
