import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faTags, faSearch, faFileAlt } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import Footer from './Footer';
import config from '../../../config';
import { googleFontString } from '../../utils/typography';

const Layout = ({ children, data, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      let siteUrl;
      location ? (siteUrl = location.href) : (siteUrl = config.siteUrl);

      const setLogoStyle = (titleLogoShow, bioShow) => {
        let logoStyle = {};
        if (titleLogoShow) {
          logoStyle = {
            display: 'inline-block',
          };
        } else {
          logoStyle = {
            display: 'none',
          };
        }
        if (!bioShow) {
          logoStyle = {
            ...logoStyle,
            width: '1.5rem',
            height: '1.5rem',
            marginRight: '0.1rem',
          };
        }
        return logoStyle;
      };
      const logoStyle = setLogoStyle(config.titleLogoShow, config.bioShow);
      const bioStyle = config.bioShow ? {} : { display: 'none' };

      return (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: config.description },
              { name: 'og:type', content: 'website' },
              { name: 'og:title', content: config.title },
              { name: 'og:description', content: config.description },
              { name: 'og:image', content: config.titleLogo() },
              { name: 'og:url', content: siteUrl },
            ]}
          >
            {/* html lang set */}
            <html lang="ko" />
            {/* load google font */}
            <link href={`https://fonts.googleapis.com/css?family=${googleFontString}`} rel="stylesheet" />
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsTrackingId}`} />
            <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${config.googleAnalyticsTrackingId}');
              `}
            </script>
            {/* google adsense */}
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          </Helmet>

          <div id="wrap">
            <header id="header">
              <div className="title">
                <div className="title-wrap">
                  <Link to="/">
                    <div className="logo-img" style={logoStyle}>
                      <img src={config.titleLogo()} alt="logo" />
                    </div>
                    <div>
                      <h1>{config.title}</h1>
                      <p className="bio" style={bioStyle}>
                        {config.bio}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              <nav className="menu">
                <div className="home">
                  <Link to="/">
                    <Fa icon={faFileAlt} fixedWidth transform="down-1" />
                    <span>Posts</span>
                  </Link>
                </div>

                <div className="tags">
                  <Link to="/tags">
                    <Fa icon={faTags} fixedWidth transform="down-1" />
                    <span>Tags</span>
                  </Link>
                </div>

                <div className="search">
                  <Link to="/search">
                    <Fa icon={faSearch} fixedWidth transform="down-1" />
                    <span>Search</span>
                  </Link>
                </div>
              </nav>
            </header>

            <div id="content">{children}</div>
          </div>
          <Footer />
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
