import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './post-link.scss'

const PostLink = ({ post }) => {
  const slug = post.fields.slug;
  const title = get(post, 'frontmatter.title') || slug
  const excerpt = post.excerpt;
  // const date = post.frontmatter.date

  return (
    <div className="post-link" key={title}>
      <Link to={slug}>
        <h2 className="title">{title}</h2>
        <span className="excerpt">{excerpt}</span>
      </Link>
    </div>
  )
}

export default PostLink
