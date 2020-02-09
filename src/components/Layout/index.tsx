import * as React from 'react';
import { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';
import MobileDetect from 'mobile-detect';
import { config as FaConfig, dom as FaDom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

import Header from '../Header';
import './layout.scss';
import { googleFont } from '../../utils/typography';

FaConfig.autoAddCss = false;

export interface LayoutPropsType {
  children: Object;
  theme: string;
  isMobile: boolean;
  setIsMobile: Function;
}

const Layout = (props: LayoutPropsType) => {
  const { children, setIsMobile, theme } = props;
  const [isTop, setIsTop] = useState(true);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    const md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
      setIsMobile(true);
    }

    const setTop = () => {
      if (window.pageYOffset < window.innerHeight / 2) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    document.addEventListener('scroll', setTop);
    return () => document.removeEventListener('scroll', setTop);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#141414';
    } else {
      document.body.style.backgroundColor = '#fff';
    }
  }, [theme]);

  return (
    <>
      <Helmet>
        <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
        <link href={`https://fonts.googleapis.com/css?family=${googleFont}`} rel="stylesheet" />
        <meta name="google-site-verification" content={require('../../../config').googleSearchConsole ?? ''} />
        <style>{FaDom.css()}</style>
      </Helmet>

      <div id="layout" className={theme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div id="content">
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()} JunhoBaik, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>

        <div
          id="top"
          style={{
            opacity: isTop ? '0' : '1',
            pointerEvents: isTop ? 'none' : 'all',
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Fa icon={faAngleDoubleUp} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ isMobile, theme }: { isMobile: boolean; theme: string }) => {
  return { isMobile, theme };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setIsMobile: (isMobile: boolean) => dispatch({ type: `SET_IS_MOBILE`, isMobile }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
