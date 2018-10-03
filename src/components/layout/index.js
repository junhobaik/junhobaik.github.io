import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faHome, faTags, faSearch } from '@fortawesome/free-solid-svg-icons'

import './index.scss'
import Footer from './Footer'
import config from '../../../config'
import { googleFontString } from '../../utils/typography'

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
      let siteUrl
      location ? (siteUrl = location.href) : (siteUrl = config.siteUrl)

      const isTitleLogoShow = config.titleLogoShow
        ? { display: 'inline-block' }
        : { display: 'none' }

      return (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: config.description },
              { name: 'og:type', content: 'website' },
              { name: 'og:title', content: config.title },
              { name: 'og:description', content: config.description },
              { name: 'og:image', content: config.profileImg() },
              { name: 'og:url', content: siteUrl },
            ]}
          >
            <link rel="canonical" content={siteUrl} />
            <link
              href={`https://fonts.googleapis.com/css?family=${googleFontString}`}
              rel="stylesheet"
            />
          </Helmet>

          <div id="wrap">
            <header id="header">
              <div className="title">
                <Link to="/">
                  <div className="profile-img" style={isTitleLogoShow}>
                    <img src={config.profileImg()} alt="profile_photo" />
                  </div>
                  <h1>{config.title}</h1>
                </Link>
              </div>

              <div className="menu">
                <div className="home">
                  <Link to="/">
                    <Fa icon={faHome} fixedWidth transform="down-1" />
                    <span>Home</span>
                  </Link>
                </div>

                <div className="tags">
                  <Link to="/taglist">
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
              </div>
            </header>

            <article id="article">{children}</article>
          </div>
          <Footer />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
