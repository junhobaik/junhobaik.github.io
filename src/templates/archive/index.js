import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import './index.scss'

class Archive extends Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    const postList = posts.map((v, i) => {
      const date = v.node.frontmatter.date
      const slug = v.node.fields.slug
      return (
        <div key={slug}>
          <Link to={slug}>
            <span>{date}</span>/<span>{v.node.frontmatter.title}</span>
          </Link>
        </div>
      )
    })
    return <Layout>{postList}</Layout>
  }
}

export default Archive

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
      ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            published
          }
        }
      }
    }
  }
`
