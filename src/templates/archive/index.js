import React, { Component } from 'react'
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

export default Archive
