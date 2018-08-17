import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import './index.scss'

class Archive extends Component {
  render() {
    console.log(this.props);
    return (
      <Layout>
        <div>
          archive
        </div>
      </Layout>
    )
  }
}

Archive.propTypes = {}

export default Archive
