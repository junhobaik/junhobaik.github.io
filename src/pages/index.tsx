import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Bio from '../components/Bio';
import './styles/index.scss';
import PostList from '../components/PostList';

export interface IndexPageProps {
  path: String;
  location: Object;
  data: any; //
}

const IndexPage = (props: IndexPageProps) => {
  const posts = props.data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <div className="index-wrap">
        <Bio />
        <div className="index-post-list-wrap">
          <PostList posts={posts} />
          {posts.length < 100 ? null : (
            <div className="show-more-posts">
              <div className="show-more-btn">
                <Link to="/search">
                  <Fa icon={faSearch} />
                  <span>SHOW MORE POSTS</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 100) {
      edges {
        node {
          excerpt(format: PLAIN)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;

export default IndexPage;
