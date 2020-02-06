import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faTags, faSearch, faMoon, faSun, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import './header.scss';
const config = require('../../../config');

export interface headerPropsType {
  siteTitle: String;
  path: any;
  setPath: any;
  size: string;
  isMobile: boolean;
  theme: string;
  toggleTheme: any;
}

const Header = (props: headerPropsType) => {
  const { siteTitle, path, setPath, size, isMobile, theme, toggleTheme } = props;
  const [, setYPos] = useState(0);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    const bio: HTMLDivElement | null = document.querySelector('.bio');
    if (bio) {
      if (isHide === true) {
        bio.style.opacity = '0';
        bio.style.pointerEvents = 'none';
      } else {
        bio.style.opacity = '1';
        bio.style.pointerEvents = 'all';
      }
    }
  }, [isHide]);

  useEffect(() => {
    const profile: HTMLImageElement | null = document.querySelector('.header-profile-image-wrap>img');

    const prevPath = path;
    const currPath = location.pathname;

    if (profile) {
      if (currPath === prevPath) {
        setPath(location.pathname, currPath !== '/' ? '25px' : '50px');
      }

      if (prevPath !== '/' && currPath === '/') {
        setPath(location.pathname, '50px');
      }

      if (prevPath === '/' && currPath !== '/') {
        setPath(location.pathname, '25px');
      }

      if (prevPath !== '/' && currPath !== '/') {
        setPath(location.pathname);
      }
    } else {
      setPath(location.pathname);
    }

    const setVisible = () => {
      setYPos(prevYPos => {
        const currentYPos = window.pageYOffset;

        if (currentYPos > 0) setIsHide(prevYPos < currentYPos);

        return currentYPos;
      });
    };
    document.addEventListener('scroll', setVisible);
    return () => document.removeEventListener('scroll', setVisible);
  }, []);

  return (
    <header id="Header" className={`${isHide ? 'hide' : 'show'} ${isMobile ? 'mobile' : ''}`}>
      <div className="header-title">
        <Link to="/">
          <div className="header-profile-image-wrap">
            <img
              src={
                config.profileImageFileName
                  ? require(`../../images/${config.profileImageFileName}`)
                  : 'https://source.unsplash.com/random/100x100'
              }
              alt="title profile picture"
              width={size || '25px'}
              height={size || '25px'}
            />
          </div>
        </Link>

        <Link to="/">
          <h1 className="header-title-text">{siteTitle}</h1>
        </Link>
      </div>

      <nav id="nav">
        {isMobile || config.theme.split('-')[1] === 'fix' ? null : (
          <div className="theme-toggle">
            <div className="theme-toggle-description">
              <Fa
                icon={theme !== 'dark' ? faSun : faMoon}
                style={{ fontSize: theme !== 'dark' ? '1.2rem' : '1.1rem' }}
              />
              <Fa icon={faChevronRight} style={{ fontSize: '0.9rem' }} />
            </div>

            <Fa
              icon={theme === 'dark' ? faSun : faMoon}
              style={{ fontSize: theme === 'dark' ? '1.2rem' : '1.1rem' }}
              onMouseEnter={() => {
                const toggle: HTMLDivElement | null = document.querySelector('.theme-toggle-description');
                if (toggle) toggle.style.opacity = '0.5';
              }}
              onMouseLeave={() => {
                const toggle: HTMLDivElement | null = document.querySelector('.theme-toggle-description');
                if (toggle) toggle.style.opacity = '0';
              }}
              onClick={() => {
                toggleTheme();
              }}
            />
          </div>
        )}

        <ul>
          <li>
            <div className="tag-wrap">
              <Link to="/tags">
                <Fa icon={faTags} />
              </Link>
            </div>
          </li>

          <li>
            <div className="search-wrap">
              <Link to="/search" className="search">
                <Fa icon={faSearch} />
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = ({
  path,
  size,
  isMobile,
  theme,
}: {
  path: string;
  size: string;
  isMobile: boolean;
  theme: string;
}) => {
  return { path, size, isMobile, theme };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPath: (path: string, size: string) => dispatch({ type: `SET_PATH`, path, size }),
    toggleTheme: () => dispatch({ type: `TOGGLE_THEME` }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
