import React from 'react';
import { connect } from 'react-redux';

import CardItem from '../../molecules/CardItem/CardItem';
import SearchInputForm from '../../molecules/SearchInputForm/SearchInputForm';
import { search } from '../../../pages/SearchPage/actions/searchActions';
import Loading from '../../molecules/Loading'
// muicss
import Container from 'muicss/lib/react/container';

const SearchContainer = (props) => (
  
  <section className='search-container'>

    <SearchInputForm 
      placeholder='Search movie title...'
      onSubmit={(title) => props.search(title)}
    />

    {
      (props.searchStatus === 'SUCCESS')
      ?  <Container className="content">
         <CardItem
            movie={props.result}
        />
        </Container>
      : null
    }
    {
      (props.searchStatus === 'PENDING')
      ? <Loading />
      : null
    }
    {
      (props.searchStatus === 'ERROR')
      ? <section className='error'> 
          <p className='error'>
            {props.searchError}
          </p>
        </section>
      : null
    }
  </section>
);

const mapStateToProps = (state) => ({
    searchStatus: state.status.search,
    searchError: state.status.searchError,
    result: state.search,
  });

const mapDispatchToProps = (dispatch) => ({
  search(title) {
    dispatch(search(title))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
