import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../molecules/Card';
import CardItem from '../../molecules/CardItem';
import Loading from '../../molecules/Loading';
import MovieListItem from '../MovieListItem';

const MovieStatus = ({ loading, error, movies }) => {

  if (loading) {
    return <Card component={Loading} />;
  }

  if (error !== false) {
    const ErrorMessage = () => (
      <CardItem item={'Something went wrong, please try again!'} />
    );
    return <Card component={ErrorMessage} />;
  }

  if (movies !== false) {
    return <Card items={movies} component={MovieListItem} />;
  }

  return null;
};

MovieStatus.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  movies: PropTypes.any
};

export default MovieStatus;
