import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <section className="mui-appbar mui--z1 header__appbar">
      <div className="mui-container">
        <div className="mui--appbar-height">
          <div className="mui--text-title header__title">
            <span className="header__title-1">hey</span>
            <span className="header__title-2">cinema</span>
          </div>
          <div className="mui--text-right header__right">
            <ul className="mui-list--inline mui--text-body2">
              <li><Link className="header__link" to="/">Home</Link></li>
              <li><Link className="header__link" to="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </header>
);

export default Header;
