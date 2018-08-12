import React, { Component } from 'react'
import PostLink from '../PostLink'

class index extends Component {
  render() {
    console.log('[PostList] render()');

    const edges = this.props.data

    const Posts = edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => {
        return <PostLink key={edge.node.fields.slug} post={edge.node} />
      })

    return <div>{Posts}</div>
  }
}

export default index
