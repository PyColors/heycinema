import React from 'react';
import SearchPage from '../pages/SearchPage';

const App = () => (

  <main className='content'>
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

  <div id="content-wrapper" className="mui--text-center">
    <div className="mui--appbar-height"></div>
    <SearchPage />
  </div>

  <footer>
    <div className="mui-container mui--text-center">
      Made with ♥ 
    </div>
  </footer>

  </main>
)

export default App;

