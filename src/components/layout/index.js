import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'

import './index.scss'
import profileImg from './profile.png';

const Layout = ({ children, data }) => (
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
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div className="wrap">
          <div className="menu">
            <div className="bio">
              <div className="profile-img">
                <img src={profileImg} alt="profile_photo" />
              </div>
              <p className="profile-name">Junho Baik</p>
              <div className="profile-msg">
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  libero eveniet odio quaerat sit unde maxime excepturi, optio
                  quam illum?
                </span>
              </div>
            </div>

            <div className="submenu">
              <Link to="/taglist">Tags</Link>
            </div>
          </div>

          <div>{children}</div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
