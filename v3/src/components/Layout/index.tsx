/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Header from '../Header';
import './layout.scss';
import { googleFont } from '../../utils/typography';

export interface LayoutPropsType {
  children: Object;
}

const Layout = (props: LayoutPropsType) => {
  const { children } = props;
  const [currentPath, setCurrentPath] = useState('');

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
    setCurrentPath(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <>
      <Helmet>
        <link
          href={`https://fonts.googleapis.com/css?family=${googleFont}`}
          rel="stylesheet"
        />
      </Helmet>

      <Header siteTitle={data.site.siteMetadata.title} path={currentPath} />
      <div id="content">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} JunhoBaik, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
