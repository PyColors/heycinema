import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <article className="not-found">
      <h1>Page not found.</h1>
      <p>Sorry, the page you were trying to view does not exist.</p>
      Return to Home Page
    </article>
  );
}
