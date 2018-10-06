import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import get from 'lodash/get'
import _ from 'lodash'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'

import './index.scss'

class PostLink extends Component {
  render() {
    const post = this.props.post
    const slug = post.fields.slug
    const title = get(post, 'frontmatter.title') || slug
    const excerpt = post.excerpt
    const date = post.frontmatter.date
    const tags = post.frontmatter.tags

    const tagsObj = tags.map((v, i) => {
      if (v !== 'Empty Tag') {
        return (
          <Link to={`/tags/${_.kebabCase(v)}`} className="tag" key={`tag-` + v}>
            #<span className="tag-name">{v}</span>
          </Link>
        )
      } else return null
    })

    return (
      <div
        className="post-link"
        key={slug}
        style={
          this.props.showCnt - 1 >= this.props.index
            ? { display: 'inline-block' }
            : { display: 'none' }
        }
      >
        <Link to={slug}>
          <h2 className="title">{title}</h2>
        </Link>

        <span className="excerpt">{excerpt}</span>

        <div className="sub">
          <div className="date">
            <Fa icon={faCalendarAlt} />
            <span>{date}</span>
          </div>
          <div className="tags-list">{tagsObj}</div>
        </div>
      </div>
    )
  }
}

PostLink.propTypes = {
  post: PropTypes.object.isRequired,
  title: PropTypes.string
};

export default PostLink
