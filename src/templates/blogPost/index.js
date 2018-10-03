import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Helmet from 'react-helmet'
import { DiscussionEmbed } from 'disqus-react'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faCaretLeft as faLeft, faCaretRight as faRight} from '@fortawesome/free-solid-svg-icons'

import './index.scss'

export default class BlogTemplate extends React.Component {
  render() {
    const { data, location, pageContext } = this.props
    const { id, frontmatter, html, excerpt } = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const postTitle = frontmatter.title
    const tags = frontmatter.tags
    const { previous, next } = pageContext
    const keywords = [...frontmatter.tags, ...frontmatter.keywords].toString()

    //disqus
    const disqusShortname = 'dev-hundred-blog'
    const disqusConfig = {
      identifier: id,
      title: siteTitle,
    }

    // TODO: 차후에 이 태그를 클릭시 Postbylist를 출력할 것인지 고민
    // TODO: Empty Tag에 대해서 출력 감추기
    const tagList = tags.map((v, i) => {
      return <span key={`tag-${i}`}>#{v}</span>
    })

    return (
      <Layout location={location}>
        <Helmet
          title={`${postTitle}`}
          meta={[
            { name: 'keywords', content: keywords },
            { name: 'og:title', content: postTitle },
            { name: 'og:description', content: excerpt },
          ]}
        />
        <div className="blog-post-container">
          <div className="blog-post">
            <div className="post-header">
              <h1 className="title">{`${postTitle}`}</h1>
              <div className="date">
                <Fa icon={faCalendarAlt} fixedWidth />
                {frontmatter.date}
              </div>
              <div className="tags">{tagList}</div>
            </div>

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
                  <Fa icon={faLeft} fixedWidth/>
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
                  <Fa icon={faRight} fixedWidth/>
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
      excerpt
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
        keywords
      }
    }
  }
`
