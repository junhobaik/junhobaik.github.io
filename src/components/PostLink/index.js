import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import _ from 'lodash'
import './index.scss'

class PostLink extends Component {
  render() {
    const post = this.props.post
    const slug = post.fields.slug
    const title = get(post, 'frontmatter.title') || slug
    const excerpt = post.excerpt
    // const date = post.frontmatter.date
    const tags = post.frontmatter.tags

    const tagsObj = tags.map(v => {
      return (
        <Link to={`/tags/${_.kebabCase(v)}`} className="tag" key={`tag-` + v}>
          #<span className="tag-name">{v}</span>
        </Link>
      )
    })

    return (
      <div className="post-link" key={title}>
        <Link to={slug}>
          <h2 className="title">{title}</h2>
        </Link>
        <div className="tags-list">{tagsObj}</div>
        <span className="excerpt">{excerpt}</span>
      </div>
    )
  }
}

export default PostLink
