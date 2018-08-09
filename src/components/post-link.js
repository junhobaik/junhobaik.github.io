import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

const PostLink = ({ post }) => {
  const title = get(post, 'frontmatter.title') || post.fields.slug

  return (
    <div className="post-link" key={title}>
      <Link to={post.fields.slug}>
        {title} ({post.frontmatter.date})
      </Link>
    </div>
  )
}

export default PostLink
