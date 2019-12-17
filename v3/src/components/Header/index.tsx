import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faTags, faSearch } from '@fortawesome/free-solid-svg-icons';

import './header.scss';
const config = require('../../config');

export interface headerPropsType {
  siteTitle: String;
}

const Header = (props: headerPropsType) => {
  const { siteTitle } = props;
  const [, setYPos] = useState(0);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    const profile: HTMLImageElement | null = document.querySelector(
      '.header-profile-image-wrap>img'
    );

    if (profile) {
      profile.style.width = window.location.pathname !== '/' ? '25px' : '50px';
      profile.style.height = window.location.pathname !== '/' ? '25px' : '50px';
      profile.style.transition =
        window.location.pathname !== '/' ? 'all 1s' : 'all 0.5s';
    }
  }, [window.location.pathname]);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setYPos(prevYPos => {
        const currentYPos = window.pageYOffset;

        setIsHide(prevYPos < currentYPos);

        return currentYPos;
      });
    });
  }, []);

  const tagSpanVisibleToggle = (isVisible: boolean) => {
    const tag: HTMLSpanElement | null = document.querySelector(
      '.tag-wrap>span'
    );

    if (tag && isVisible) tag.style.opacity = '1';
    if (tag && !isVisible) tag.style.opacity = '0';
  };

  return (
    <header id="Header" className={isHide ? 'hide' : 'show'}>
      <div className="header-title">
        <Link to="/">
          <div className="header-profile-image-wrap">
            <img
              src={require(`../../images/${config.profileImageFileName}`)}
              alt="title profile picture"
              // "25px"로 고정하면 "/"로 갈때만 transition이 작동
              width={window.location.pathname === '/' ? '25px' : '50px'}
              height={window.location.pathname === '/' ? '25px' : '50px'}
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
            <div className="tag-wrap">
              <span>TAG</span>
              <Link to="/page-2">
                <Fa
                  icon={faTags}
                  onMouseEnter={() => {
                    tagSpanVisibleToggle(true);
                  }}
                  onMouseLeave={() => {
                    tagSpanVisibleToggle(false);
                  }}
                />
              </Link>
            </div>
          </li>

          <li>
            <div className="search-wrap">
              <Link to="/" className="search">
                <Fa icon={faSearch} />
              </Link>
            </div>
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
