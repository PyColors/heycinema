// Test the HomePage
import React from 'react';
import { shallow, mount } from 'enzyme';

import MovieStatus from '../../../components/organisms/MovieStatus';
import HomePage from '../HomePage';
import { mapDispatchToProps } from '../index';
import { changeTitle } from '../actions';
import { loadMovies } from '../../../templates/App/actions';

describe('<HomePage />', () => {
  it('should render the movies list', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} movies={[]} />
    );
    expect(
      renderedComponent.contains(<MovieStatus loading error={false} movies={[]} />)
    ).toEqual(true);
  });

  it('should render fetch the movies on mount if a title exists', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        title="Titanic"
        onChangeTitle={() => {}}
        onSubmitForm={submitSpy}
      />
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onSubmitForm if title is an empty string', () => {
    const submitSpy = jest.fn();
    mount(<HomePage onChangeTitle={() => {}} onSubmitForm={submitSpy} />);
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if title is null', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        title=""
        onChangeTitle={() => {}}
        onSubmitForm={submitSpy}
      />
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeTitle', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeTitle).toBeDefined();
      });

      it('should dispatch changeTitle when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const title = 'Titanic';
        result.onChangeTitle({ target: { value: title } });
        expect(dispatch).toHaveBeenCalledWith(changeTitle(title));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadMovies when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadMovies());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
