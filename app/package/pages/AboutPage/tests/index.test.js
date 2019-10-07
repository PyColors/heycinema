import React from 'react';
import { shallow } from 'enzyme';

import AboutPage from '../index';

describe('<AboutPage />', () => {
  it('should never re-render the component', () => {
    const renderedComponent = shallow(<AboutPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
