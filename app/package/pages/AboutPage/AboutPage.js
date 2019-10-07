/*
 * AboutPage
 */
import React from 'react';
import { Helmet } from 'react-helmet';
// muicss
import Panel from 'muicss/lib/react/panel';

export default class AboutPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Panel className="about-page">
        <Helmet>
          <title>About - OMDb API</title>
          <meta
            name="description"
            content="About page - The Open Movie Database"
          />
        </Helmet>
        <h1 className="about-page__title">About - OMDb API</h1>
        <h3 className="about-page__subtitle">The Open Movie Database</h3>
        <ul>
          <li>
            <p>
              The OMDb API is a RESTful web service to obtain movie information,
              all content and images on the site are contributed and maintained
              by our users.
            </p>
          </li>
          <li>
            <p>
              If you find this service useful, please consider making a
              <a
                rel="noopener noreferrer"
                href="https://www.paypal.com/paypalme2/FritzAPI"
                target="_blank"
              >
                {' '}one-time donation
              </a>
              {' '}or{' '}
              <a
                rel="noopener noreferrer"
                href="https://www.patreon.com/join/omdb"
                target="_black"
              >
                become a patron
              </a>
              .
            </p>
          </li>
        </ul>
      </Panel>
    );
  }
}
