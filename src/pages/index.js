import React from 'react'
import { graphql } from 'gatsby'
import PostLink from '../components/PostLink'
import Layout from '../components/layout'
import './index.scss'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.filter(edge => !!edge.node.frontmatter.date).map(edge => {
    return <PostLink key={edge.node.fields.slug} post={edge.node} />
  })

  return (
    <Layout>
      {Posts}
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
