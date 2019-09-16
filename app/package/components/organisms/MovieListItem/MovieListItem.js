import React from 'react';
import PropTypes from 'prop-types';
// muicss
import Panel from 'muicss/lib/react/panel';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import CardItem from '../../molecules/CardItem';

export default class MovieListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;

    const content = (
      <Panel className="card">
        <article className='article__card'>
          <Row>

            <Col xs="12" md="12">
              {item.Title ? null : <p className="card__no-title"><br/>No result has been found, try again</p>}
            </Col>

            <Col xs="12" md="4">
              {
                (item.Poster)
                  ? <div className='card__picture'> <img src={item.Poster} /> </div>
                  : null
              }
            </Col>

            <Col xs="12" md="6">
              <div className='card__information'>
                <div>
                  <h2 className="card__information__heading"> {item.Title ? item.Title : null}</h2>
                  <h3 className="card__information__subtitle"> {item.Released ? item.Released : null}</h3>
                    {
                    (item.Title) ? 
                    <div>
                      {item.Ratings.map((rating) => {
                        return (<p key={rating.Source} className="card__information__callout"><b>{rating.Source}</b>: <i>{rating.Value}</i></p>);
                      })}
                  </div>
                  : null }
                </div>
              </div>
            </Col>
          </Row>
        </article>
      </Panel>
    );

    // Render the content into a list item
    return (
      <CardItem key={`card-list-item-${item.Title}`} item={content} />
    );
  }
}

MovieListItem.propTypes = {
  item: PropTypes.object,
};
