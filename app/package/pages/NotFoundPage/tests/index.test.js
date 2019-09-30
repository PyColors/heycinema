// Testing the NotFoundPage
import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from '../index';

describe('<NotFoundPage />', () => {
  it('should render the Page Not Found text', () => {
    const renderedComponent = shallow(<NotFoundPage />);
    expect(renderedComponent.contains(<h1>Page not found.</h1>)).toEqual(true);
  });
});
