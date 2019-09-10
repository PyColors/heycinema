import React from 'react';
import { shallow } from 'enzyme';
import CardItem from './CardItem';

describe('CardItem', () => {

  const props = {
    movie: 'Poster'
  }

  let propsData = {
    movie: {
      Title: "Titanic",
      Released: "19 Dec 1997",
      Poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.8/10"
        },
        {
          Source: "Rotten Tomatoes",
          Value: "89%"
        },
        {
          Source: "Metacritic",
          Value: "75/100"
        }
      ],
    }
  }

  it('should render correctly with no props', () => {
    const wrapper = shallow(<CardItem {...props} />);
    expect(wrapper.length).toEqual(1)
  });


  it('should render correctly CardItem with data', () => {
    const wrapper = shallow(<CardItem {...propsData} />);
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot();
  });

});