import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostList from '../components/PostList'
import './tagListTemplate.scss'

class tagListTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTag: null,
    }
  }
  render() {
    console.log(this.props)
    const tags = this.props.data.allMarkdownRemark.group
    const selectedTag = this.state.selectedTag

    const changeSelectedTag = tagName => {
      this.setState({
        selectedTag: tagName,
      })
    }

    const tagList = tags.map(v => {
      return (
        <li
          key={`tag-${v.fieldValue}`}
          className="tag"
          onClick={tagName => changeSelectedTag(v.fieldValue)}
        >
          <span className="tag-name">{v.fieldValue}</span>
          <span className="tag-count">({v.totalCount})</span>
        </li>
      )
    })

    const postList = (tags, targetTagName) => {
      const tagsArray = Array.from(tags)
      for (let v of tagsArray) {
        if (v.fieldValue === targetTagName) {
          return <PostList data={v.edges} title={`${v.fieldValue}에 관한 ${v.totalCount}개의 포스트`} />
        }
      }
    }

    return (
      <Layout>
        <div className="tag-list">{tagList}</div>
        {selectedTag ? postList(tags, selectedTag) : null}
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
  }
`
