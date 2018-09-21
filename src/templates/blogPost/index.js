import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Helmet from 'react-helmet'
import { DiscussionEmbed } from 'disqus-react'
import { Icon } from 'semantic-ui-react'

import './index.scss'

export default class BlogTemplate extends React.Component {
  render() {
    console.log(this.props)
    const { data, location, pageContext } = this.props
    const { id, frontmatter, html } = data.markdownRemark
    const siteTitle = data.site.siteMetadata.siteTitle
    const { previous, next } = pageContext

    //disqus
    const disqusShortname = 'dev-hundred-blog'
    const disqusConfig = {
      identifier: id,
      title: siteTitle,
    }

    return (
      <Layout location={location}>
        <Helmet title={siteTitle} />
        <div className="blog-post-container">
          <div className="blog-post">
            <h1 className="title">{frontmatter.title}</h1>
            <p className="date">{frontmatter.date}</p>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>

          <div className="blog-post-nav">
            {previous && (
              <div className="prev">
                <div className="nav-wrap">
                  <div className="angle">
                    <Icon name="angle left" />
                  </div>
                  <Link to={previous.fields.slug} rel="prev">
                    <div>
                      <p>Previous Post</p>
                      <span>{previous.frontmatter.title}</span>
                    </div>
                  </Link>
                </div>
              </div>
            )}
            {next && (
              <div className="next">
                <div className="nav-wrap">
                  <Link to={next.fields.slug} rel="next">
                    <div>
                      <p>Next Post</p>
                      <span>{next.frontmatter.title}</span>
                    </div>
                  </Link>
                  <div className="angle">
                    <Icon name="angle right" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="comments">
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($slug: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
