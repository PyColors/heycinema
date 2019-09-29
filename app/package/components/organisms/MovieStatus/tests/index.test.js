import { shallow, mount } from 'enzyme';
import React from 'react';

import MovieListItem from '../../MovieListItem';
import Card from '../../../molecules/Card';
import Loading from '../../../molecules/Loading';
import MovieStatus from '../index';

describe('<MovieStatus />', () => {
  it('should render the Loading component when its loading', () => {
    const renderedComponent = shallow(<MovieStatus loading />);
    expect(
      renderedComponent.contains(<Card component={Loading} />)
    ).toEqual(true);
  });

  it('should render an error if Loading failed', () => {
    const renderedComponent = mount(
      <MovieStatus loading={false} error={{ message: 'Loading failed!' }} />
    );
    expect(renderedComponent.text()).toMatch('');
  });

  it('should render the movies if loading was successful', () => {
    const movies = {
      Title: 'Titanic',
      Released: '19 Dec 1997',
      Poster: 'http://pycolors/_V1_SX300.jpg"',
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

    const renderedComponent = shallow(
      <MovieStatus movies={movies} error={false} />
    );

    expect(
      renderedComponent.contains(
        <Card items={movies} component={MovieListItem} />
      )
    ).toEqual(true);
  });

  it('should not render anything if nothing is provided', () => {
    const renderedComponent = shallow(
      <MovieStatus movies={false} error={false} loading={false} />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
