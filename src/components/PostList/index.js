import React, { Component } from 'react'
import PostLink from '../PostLink'
import './index.scss'

class PostList extends Component {
  render() {
    const edges = this.props.data
    const listTitle = this.props.title || null

    const Posts = edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => {
        return <PostLink key={edge.node.fields.slug} post={edge.node} />
      })

    return (
      <div id="PostList">
        <h1 className="list-title">{listTitle}</h1>
        {Posts}
      </div>
    )
  }
}

export default PostList
