import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../../../components/molecules/Loading';
import Loadagle from '../Loadable';

it('should render the Loading component', () => {
  const renderedComponent = shallow(<Loadagle />);
  expect(renderedComponent.find(Loading).length).toBe(1);
});
