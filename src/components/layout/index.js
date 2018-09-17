import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'

import './index.scss'
import Footer from './Footer'
import profileImg from './profile.png'

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
        >
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
        </Helmet>
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
              <Link to="/">Home</Link>
              <Link to="/taglist">Tags</Link>
              {/* <Link to="/archive">Archive</Link> */}
              <Link to="/search">Search</Link>
            </div>
          </div>

          <div>{children}</div>
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
