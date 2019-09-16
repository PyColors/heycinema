import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ component, items }) => {

  const ComponentToRender = component;
  let content = (<div></div>);

  if (items) {
    content = (
      <ComponentToRender item={items} />
    );
  }

  return (
    <div className="card-wrapper">
      <ul>
        {content}
      </ul>
    </div>
  );
};

Card.propTypes = {
  component: PropTypes.elementType.isRequired,
  // items: PropTypes.object,
};

export default Card;
