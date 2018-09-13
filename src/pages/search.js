import PropTypes from 'prop-types'
import React from 'react'

import Layout from '../components/layout'
import Search from '../components/Search'

import AlgoliaIcon from '!svg-react-loader!../images/svg-icons/search-by-algolia.svg?name=AlgoliaLogo'

class SearchPage extends React.Component {
  render() {
    const algolia = this.props.data.site.siteMetadata.algolia

    return (
      <Layout>
        <div className="icon">
          <AlgoliaIcon />
        </div>
        <Search algolia={algolia} />
      </Layout>
    )
  }
}

SearchPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SearchPage

export const query = graphql`
  query SearchQuery {
    site {
      siteMetadata {
        title
        algolia {
          appId
          searchOnlyApiKey
          indexName
        }
      }
    }
  }
`
