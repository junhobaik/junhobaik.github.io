import * as React from 'react';
import { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';
import MobileDetect from 'mobile-detect';
import { config as FaConfig, dom as FaDom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { useColorMode } from 'theme-ui';

import './layout.scss';
import Header from '../Header';
import { googleFont } from '../../utils/typography';
import { actionCreators } from '../../state/actions';
import config from '../../../_config';

FaConfig.autoAddCss = false;

interface LayoutPropsType {
  children: React.ReactNode;
}

const Layout = (props: LayoutPropsType) => {
  const { children } = props;
  const [isTop, setIsTop] = useState(true);
  const dispatch = useDispatch();
  const [colorMode] = useColorMode();
  const isDark = colorMode === 'dark';

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `);

  useEffect(() => {
    const md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
      dispatch(actionCreators.setIsMobile(true));
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

  return (
    <>
      <Helmet>
        <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
        <link href={`https://fonts.googleapis.com/css?family=${googleFont}`} rel="stylesheet" />
        <meta name="google-site-verification" content={config.googleSearchConsole ?? ''} />
        <style>{FaDom.css()}</style>
      </Helmet>

      <div id="layout" className={isDark ? 'dark' : 'light'}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div id="content">
          <main>{children}</main>
          <footer>
            <span>{`© ${new Date().getFullYear()} ${data.site.siteMetadata.author} | Theme by `}</span>
            <a href="https://github.com/junhobaik">JunhoBaik</a>
            <span>{` | Built with `}</span>
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

export default Layout;
