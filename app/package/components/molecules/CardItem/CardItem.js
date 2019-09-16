import React from 'react';
import PropTypes from 'prop-types';

const CardItem = ({ item }) => (
  <div className="card-item-wrapper">
    <li className="card-item-wrapper__card-item">{item}</li>
  </div>
);

CardItem.propTypes = {
  item: PropTypes.any
};

export default CardItem;
