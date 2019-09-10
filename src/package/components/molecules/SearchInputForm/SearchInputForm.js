import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchInputForm extends React.Component {
  state = {
    title: '',
    error: '',
  }

  onInputChange = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const error = this.validate(title);
    this.setState({ 
      error 
    });

    if (error.length > 0) return;
    this.props.onSubmit(title);
    this.setState({ 
      title: '', error: '' 
    });
  }

  validate = (title) => {
    if (title.trim().length === 0) return 'Input is required!';
    return '';
  }

  render() {
    return (
      <form className='main-search' onSubmit={this.onFormSubmit}>
        <div className='flex'>
          <input
            id='title'
            className={ this.state.error ? 'main-search__search error' : 'main-search__search' }
            name='title'
            type='text'
            value={this.state.title}
            placeholder={this.props.placeholder}
            onChange={this.onInputChange}
          />
 
          <FontAwesomeIcon 
            icon={faSearch} 
            className='search-icon'
          />
          
        </div>
        <p className='error'>{ this.state.error }</p>
      </form>
    )
  }
}

export default SearchInputForm;
