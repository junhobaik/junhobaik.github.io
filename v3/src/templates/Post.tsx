import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import './post.scss';
import Toc from '../components/Toc';
export interface postProps {
  data: any;
}

const Post = (props: postProps) => {
  const { data } = props;
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark;

  return (
    <>
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
        <Toc toc={tableOfContents} />
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`;

export default Post;
