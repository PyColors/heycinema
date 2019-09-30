// Test MovieListItem
import React from 'react';
import { shallow, render } from 'enzyme';

import CardItem from '../../../molecules/CardItem';
import MovieListItem from '../MovieListItem';

const renderComponent = (props = {}) => render(<MovieListItem {...props} />);

describe.only('<MovieListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      Title: 'Titanic',
      Released: '19 Dec 1997',
      Poster: 'http://pycolors/_V1_SX300.jpg',
      Ratings: [{
        Source: 'Internet Movie Database',
        Value: '7.8/10'
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '89%'
      },
      {
        Source: 'Metacritic',
        Value: '75/100'
      }
      ]
    };
  });

  it('should render a CardItem', () => {
    const renderedComponent = shallow(<MovieListItem item={item} />);
    expect(renderedComponent.find(CardItem).length).toBe(1);
  });

  it('should render the movie Title', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.Title);
  });

  it('should render the movie released', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.Released);
  });

  it('should render the movie ratings source', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.Ratings[0].Source);
  });

  it('should render the movie ratings value', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.Ratings[0].Value);
  });
});
