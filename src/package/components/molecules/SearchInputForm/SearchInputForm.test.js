import React from 'react';
import { shallow } from 'enzyme';
import SearchInputForm from './SearchInputForm';

describe('SearchInputForm', () => {

  it('should render correctly with no props', () => {
    const component = shallow(<SearchInputForm />);
    
    expect(component).toMatchSnapshot();
  });

});
