import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

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
          <div key={slug}>
            <Link to={slug}>{title}</Link>
          </div>
        )
      }
      return null
    })

    return <div id="ResultList">{list}</div>
  }
}

ResultList.propTypes = {
  keyword: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default ResultList
