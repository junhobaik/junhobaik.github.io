import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostList from '../components/PostList'

class tagsTemplate extends Component {

  render() {
    console.log(this.props.data.allMarkdownRemark);
    const edges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
          <PostList data={edges}/>
      </Layout>
    )
  }
}

tagsTemplate.propTypes = {}

export default tagsTemplate

export const pageQuery = graphql`
  query($tag: String) {
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
