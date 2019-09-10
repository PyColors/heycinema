import React from 'react';
// muicss
import Panel from 'muicss/lib/react/panel';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const CardItem = ({ movie }) => (

  <Panel className="card">
  <article className='article__card'>
  <Row>
    <Col xs="12" md="12">
    {movie.Title ? null : <p className="card__information__heading"><br/>No result has been found, try again</p>}
    </Col>

    <Col xs="12" md="4">
      {
        (movie.Poster)
          ? <div className='card__picture'> <img src={ movie.Poster } /> </div>
          : null
      }
    </Col>
    
    <Col xs="12" md="6">
    <div className='card__information'>
      <div>
        <h2 className="card__information__heading"> {movie.Title ? movie.Title : null}</h2>
        <h3 className="card__information__subtitle"> {movie.Released ? movie.Released : null}</h3>
          {
          (movie.Title) ? 
          <div>
            {movie.Ratings.map((rating) => {
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
)

export default CardItem;
