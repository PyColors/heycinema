import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage/Loadable';
import NotFoundPage from '../../pages/NotFoundPage/Loadable';

const App = () => (
  <main className="content">

    <header className="mui-appbar mui--z1 content__appbar">
      <div className="mui-container">
        <div className="mui--appbar-height">
          <div className="mui--text-title content__title">
            <span className="content__title-1">hey</span>
            <span className="content__title-2">cinema</span>
          </div>
        </div>
      </div>
      </header>


    <Helmet
      titleTemplate="%s - Movies"
      defaultTitle="Movies"
    >
      <meta name="description" content="Movies" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>

    <footer>
    <div className="mui-container mui--text-center">
      Made with ♥ 
    </div>
  </footer>
  </main>
);

export default App;
