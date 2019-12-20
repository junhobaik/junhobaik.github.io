import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Bio from '../components/Bio';
import './index.scss';
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
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: { frontmatter: { published: { ne: false } } }
    ) {
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
