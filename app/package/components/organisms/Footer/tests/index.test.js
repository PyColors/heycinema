import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

describe('<Footer />', () => {
  it('should render a Footer', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.length).toEqual(1);
  });

  it('should render the correct content', () => {
    const renderedComponent = shallow(<Footer />);
    expect(
      renderedComponent.contains(
        <div className="mui-container mui--text-center">
          Made with ♥
        </div>
      )
    ).toBe(true);
  });

  it('should render ♥', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.text()).toContain('♥');
  });
});
