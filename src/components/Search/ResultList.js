import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import './ResultList.scss'

class ResultList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const data = this.props.data.allMarkdownRemark.edges
    const list = data.map((v, i) => {
      const { frontmatter, fields, rawMarkdownBody } = v.node
      const { title } = frontmatter
      const { slug } = fields
      if (
        rawMarkdownBody.indexOf(this.props.keyword) !== -1 ||
        title.indexOf(this.props.keyword) !== -1
      ) {
        return (
          <li key={slug}>
            <Link to={slug}>{title}</Link>
          </li>
        )
      }
      return null
    })

    return <ul id="ResultList">{list}</ul>
  }
}

ResultList.propTypes = {
  keyword: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default ResultList
