import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './header.scss';

export interface headerPropsType {
  siteTitle: String;
}

const Header = (props: headerPropsType) => {
  const { siteTitle } = props;

  return (
    <header id="Header" className="header">
      <div>
        <h1 className="header__title-text">
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
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
