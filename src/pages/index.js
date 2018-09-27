import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostList from '../components/PostList'

import './index.scss'

export default class index extends Component {
  render() {
    const edges = this.props.data.allMarkdownRemark.edges
    const location = this.props.location
    return (
      <Layout location={location}>
        <PostList data={edges} title="최근 포스트" />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY년 MM월 DD일")
            title
            tags
          }
        }
      }
    }
  }
`
