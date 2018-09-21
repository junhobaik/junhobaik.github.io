import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import PostList from '../../components/PostList'

class tagsTemplate extends Component {
  render() {
    console.log(this.props)
    const edges = this.props.data.allMarkdownRemark.edges
    const title = `${this.props.pageContext.tag}에 관한 ${
      this.props.data.allMarkdownRemark.totalCount
    }개의 포스트`

    return (
      <Layout>
        <PostList data={edges} title={title} />
      </Layout>
    )
  }
}

export default tagsTemplate

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
