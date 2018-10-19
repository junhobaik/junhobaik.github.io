import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';
import ResultList from '../components/Search/ResultList';
import './search.scss';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      type: 'all',
    };
  }

  handleKeyword = event => {
    this.setState({ keyword: event.target.value });
  };
  handleType = event => {
    this.setState({ type: event.target.id });
  };

  render() {
    const location = this.props.location;
    return (
      <Layout location={location}>
        <div id="search">
          <div className="search-bar-wrap">
            <div className="search-bar">
              <Fa className="search-icon" icon={faSearch} />
              <input
                id="searchInput"
                type="search"
                onChange={this.handleKeyword}
                autoFocus
              />
            </div>

            <div className="search-type">
              <div>
                <input
                  type="radio"
                  name="searchType"
                  id="all"
                  onChange={this.handleType}
                  checked={this.state.type === 'all'}
                />
                <label htmlFor="all">제목+내용</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="searchType"
                  id="title"
                  onChange={this.handleType}
                  checked={this.state.type === 'title'}
                />
                <label htmlFor="title">제목</label>
              </div>
            </div>
          </div>

          <ResultList
            data={this.props.data}
            keyword={this.state.keyword}
            type={this.state.type}
          />
        </div>
      </Layout>
    );
  }
}

SearchPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SearchPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          rawMarkdownBody
          fields {
            slug
          }
          frontmatter {
            title
            published
          }
        }
      }
    }
  }
`;
