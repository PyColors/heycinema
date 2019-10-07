import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/organisms/Header';
import HomePage from '../../pages/HomePage/Loadable';
import AboutPage from '../../pages/AboutPage/Loadable';
import NotFoundPage from '../../pages/NotFoundPage/Loadable';
import Footer from '../../components/organisms/Footer';

const App = () => (
  <main className="content">
    <Header />
    <Helmet
      titleTemplate="%s - Movies"
      defaultTitle="Movies"
    >
      <meta name="description" content="Movies" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </main>
);

export default App;
