import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

const PostLink = ({ post }) => {
  const title = get(post, 'frontmatter.title') || post.fields.slug

  return (
    <div key={post.fields.slug}>
      <Link to={post.fields.slug}>
        {title} ({post.frontmatter.date})
      </Link>
    </div>
  )
}

export default PostLink
