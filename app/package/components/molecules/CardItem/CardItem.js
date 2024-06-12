import React from 'react';
import PropTypes from 'prop-types';

const CardItem = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <ul className="card-item-wrapper">
      <li className="card-item-wrapper__card-item">{item}</li>
    </ul>
  );
};

CardItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default CardItem;
