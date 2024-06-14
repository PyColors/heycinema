import PropTypes from 'prop-types';
import React from 'react';
import {NavLink } from 'react-router-dom';

/**
 * Functional component for rendering a "Page not found" message with a link to return to the Home Page.
 */
const NotFound = () => {
  return (
    <main className="not-found">
      <h1>Page not found.</h1>
      <p>Sorry, the page you were trying to view does not exist.</p>
      <NavLink aria-label="Return to Home Page" to="/">
        Return to Home Page
      </NavLink>
    </main>
  );
}

NotFound.propTypes = {
  // Define prop types here
};
