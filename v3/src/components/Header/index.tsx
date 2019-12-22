import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faTags, faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import './header.scss';
const config = require('../../config');

export interface headerPropsType {
  siteTitle: String;
  path: any;
  setPath: any;
  size: string;
}

const Header = (props: headerPropsType) => {
  const { siteTitle, path, setPath, size } = props;
  const [, setYPos] = useState(0);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    const profile: HTMLImageElement | null = document.querySelector(
      '.header-profile-image-wrap>img'
    );

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

    return () => {};
  }, [location.pathname]);

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
    const setVisible = () => {
      setYPos(prevYPos => {
        const currentYPos = window.pageYOffset;

        setIsHide(prevYPos < currentYPos);

        return currentYPos;
      });
    };
    document.addEventListener('scroll', setVisible);
    return () => document.removeEventListener('scroll', setVisible);
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
        <ul>
          <li>
            <div className="tag-wrap">
              <span>TAG</span>
              <Link to="/tags">
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

const mapStateToProps = ({ path, size }: { path: string; size: string }) => {
  return { path, size };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPath: (path: string, size: string) =>
      dispatch({ type: `SET_PATH`, path, size }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
