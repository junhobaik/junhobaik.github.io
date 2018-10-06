import React, { Component } from 'react'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import './index.scss'
import PostLink from '../PostLink'

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadPostCnt: 7,
      currentPostCnt: 7,
      isLoading: false,
      loadElPoint: 0,
    }
  }

  componentDidMount() {
    this.setLoadElPoint()
    window.addEventListener('scroll', this.onScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false)
  }

  onScroll = () => {
    if (
      this.state.currentPostCnt < this.props.data.length &&
      window.scrollY + window.innerHeight >= this.state.loadElPoint &&
      !this.state.isLoading
    ) {
      this.setState({
        isLoading: true,
      })
      setTimeout(() => {
        this.setState({
          currentPostCnt: this.state.currentPostCnt + this.state.loadPostCnt,
          isLoading: false,
        })
        this.setLoadElPoint()
      }, 1000)
    }
  }

  setLoadElPoint = () => {
    this.setState({
      loadElPoint: document.querySelector('.load-point').offsetTop,
    })
  }

  render() {
    const { data, title } = this.props

    const Posts = data
      .filter(edge => !!edge.node.frontmatter.date)
      .map((edge, index) => {
        return (
          <PostLink
            key={edge.node.fields.slug}
            post={edge.node}
            index={index}
            showCnt={this.state.currentPostCnt}
          />
        )
      })

    return (
      <div id="PostList">
        {title ? <h1 className="list-title">{title}</h1> : null}
        <div className="list">{Posts}</div>
        <div className="load">
          <div className="loading">
            <div
              className="spinner"
              style={
                this.state.isLoading
                  ? { display: 'inline-block' }
                  : { display: 'none' }
              }
            >
              <Fa className="blink" icon={faSpinner} size="2x" />
            </div>
          </div>
          <div className="load-point" />
        </div>
      </div>
    )
  }
}

export default PostList
