import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

export interface headerPropsType {
  siteTitle: String;
}

const Header = (props: headerPropsType) => {
  const { siteTitle } = props;

  return (
    <header id="Header">
      <div>
        <h1 style={{ margin: 0 }}>
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
