import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../../../utils/injectReducer';
import injectSaga from '../../../utils/injectSaga';
import {
  makeSelectMovies,
  makeSelectLoading,
  makeSelectError
} from '../../templates/App/selectors';
import { loadMovies } from '../../templates/App/actions';
import { changeTitle } from './actions';
import { makeSelectTitle } from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onChangeTitle: (evt) => dispatch(changeTitle(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadMovies());
  }
});

const mapStateToProps = createStructuredSelector({
  movies: makeSelectMovies(),
  title: makeSelectTitle(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
