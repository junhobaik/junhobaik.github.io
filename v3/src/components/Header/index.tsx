import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import * as React from 'react';

import './header.scss';
const config = require('../../config');

export interface headerPropsType {
  siteTitle: String;
}

const Header = (props: headerPropsType) => {
  const { siteTitle } = props;

  return (
    <header id="Header">
      <div className="header-title">
        <Link to="/">
          <div className="header-profile-image-wrap">
            <img
              src={require(`../../images/${config.profileImageFileName}`)}
              alt="title profile picture"
            />
          </div>
        </Link>

        <Link to="/">
          <h1 className="header-title-text">{siteTitle}</h1>
        </Link>
      </div>

      <nav id="nav">
        <ul>
          <li>
            <Link to="/">
              <span>Tags</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Search</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
