import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MovieStatus from '../../components/organisms/MovieStatus';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // When initial state title is not null, submit the form to load movies
  componentDidMount() {
    const { title, onSubmitForm } = this.props;
    if (title && title.trim().length > 0) {
      onSubmitForm();
    }
  }

  render() {
    const {
      loading, error, movies, title, onChangeTitle, onSubmitForm
    } = this.props;
    const MovieStatusProps = {
      loading,
      error,
      movies
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Homepage" />
        </Helmet>
        <div className="home-page">
          <section>
            <form className="main-search" onSubmit={onSubmitForm}>
              <div className="flex">
                <label htmlFor="title">
                  <input
                    id="title"
                    type="text"
                    placeholder="Search movie title..."
                    value={title}
                    onChange={onChangeTitle}
                    className="main-search__search"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="search-icon"
                  />
                </label>
              </div>
            </form>
            <MovieStatus {...MovieStatusProps} />
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  movies: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  title: PropTypes.string,
  onChangeTitle: PropTypes.func
};
