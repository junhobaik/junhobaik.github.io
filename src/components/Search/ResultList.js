import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import './ResultList.scss';

class ResultList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  handlePage = event => {
    this.setState({ currentPage: parseInt(event.target.innerText) });
  };

  handleNavClick = event => {
    const { currentPage } = this.state;

    if (event.target.className.indexOf('left') !== -1) {
      if (currentPage > 1) {
        this.setState({
          currentPage: currentPage - 1,
        });
      }
    } else {
      if (this.countPageNum() > currentPage) {
        this.setState({
          currentPage: currentPage + 1,
        });
      }
    }
  };

  countPageNum = () => {
    const list = this.props.data.allMarkdownRemark.edges;
    const pageDivideNum = 15;
    return list.length % pageDivideNum === 0 ? list.length / pageDivideNum : list.length / pageDivideNum + 1;
  };

  render() {
    const data = this.props.data.allMarkdownRemark.edges;

    const createList = () => {
      let listIndex = 1;
      let list = data.map(v => {
        const { frontmatter, fields, rawMarkdownBody } = v.node;
        const { title } = frontmatter;
        const { slug } = fields;
        const keyword = this.props.keyword.toLowerCase();
        if (
          (this.props.type === 'all' && rawMarkdownBody.toLowerCase().indexOf(keyword) !== -1) ||
          title.toLowerCase().indexOf(keyword) !== -1
        ) {
          return (
            <li key={slug} className={`result-${listIndex++}`}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        }
        return null;
      });
      return list.filter(el => el !== null);
    };

    const createPage = (list, currentPage) => {
      const pageDivideNum = 15;
      const pageTotalNum = this.countPageNum();
      let pageNum = [];

      for (let i = 0; i < Math.floor(pageTotalNum); i++) {
        pageNum.push(
          <button
            key={'page' + i}
            className={`page-number ${currentPage === i + 1 ? 'select-number' : ''}`}
            onClick={this.handlePage}
          >
            {i + 1}
          </button>
        );
      }

      for (let i = 0; i < 2; i++) {
        pageNum.push(<button key={'dummy' + i} className="page-number page-dummy" />);
      }

      if (currentPage > 3) {
        pageNum = pageNum.slice(currentPage - 3, currentPage + 2);
      } else {
        pageNum = pageNum.slice(0, 5);
      }

      list = list.slice(pageDivideNum * currentPage - pageDivideNum, pageDivideNum * currentPage);
      return { list, pageList: pageNum };
    };

    const page = createPage(createList(), this.state.currentPage);

    return (
      <div id="ResultList">
        {page.list.length ? <ul className="result">{page.list}</ul> : <p className="no-result">검색 결과 없음</p>}

        {page.pageList.length > 1 ? (
          <div className="page-list">
            <button className="page-nav left" onClick={this.handleNavClick}>
              <Fa className="pointer-event-disable"icon={faCaretLeft} />
            </button>
            {page.pageList}
            <button className="page-nav right" onClick={this.handleNavClick}>
              <Fa className="pointer-event-disable" icon={faCaretRight} />
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

ResultList.propTypes = {
  keyword: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default ResultList;
