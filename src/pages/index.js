import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostList from '../components/PostList'

import './index.scss'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log(edges);
  return (
    <Layout>
      <PostList data={edges} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
