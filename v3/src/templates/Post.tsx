import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import './post.scss';
export interface postProps {
  data: any;
}

const Post = (props: postProps) => {
  const { data } = props;
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1 className="blog-post-title">{frontmatter.title}</h1>
          <p className="blog-post-info">{frontmatter.date}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`;

export default Post;
