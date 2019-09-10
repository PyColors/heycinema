import React from 'react';
import { connect } from 'react-redux';

import SearchContainer from '../../components/organisms/SearchContainer';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class SearchPage extends React.Component {
  render() {

    return (
      <Router>
        <div className='content'>
          <Route exact path='/' render={() => (
            <SearchContainer 
            />
          )} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => (
  {}
)
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
