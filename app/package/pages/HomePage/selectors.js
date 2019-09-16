import { createSelector } from 'reselect';

const selectHome = (state) => state.home;

const makeSelectTitle = () => createSelector(
  selectHome,
  (homeState) => homeState.title
);

export {
  selectHome,
  makeSelectTitle,
};
