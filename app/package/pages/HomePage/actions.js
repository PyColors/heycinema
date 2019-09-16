import { CHANGE_TITLE } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_TITLE
 */
export function changeTitle(name) {
  return {
    type: CHANGE_TITLE,
    name
  };
}
