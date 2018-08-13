import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import './tagListTemplate.scss'

class tagListTemplate extends Component {
  render() {
    console.log(this.props)
    const tags = this.props.data.allMarkdownRemark.group

    const tagList = tags.map(v => {
      return (
        <Link to={`/tags/${v.fieldValue}`}>
          <li className="tag">
            <span className="tag-name">{v.fieldValue}</span>
            <span className="tag-count">({v.totalCount})</span>
          </li>
        </Link>
      )
    })

    return (
      <Layout>
        <div className="tag-list">{tagList}</div>
      </Layout>
    )
  }
}

export default tagListTemplate

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
