import React from 'react';
import { render } from 'enzyme';

import Loading from '../index';

describe('<Loading />', () => {
  it('should render the Loading', () => {
    const renderedComponent = render(<Loading />);
    expect(renderedComponent.length).toBe(1);
  });
});
