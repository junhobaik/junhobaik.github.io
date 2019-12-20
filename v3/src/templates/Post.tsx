import React from 'react';
import { useEffect, useState } from 'react';
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
  const [yList, setYList] = useState();

  useEffect(() => {
    const hs = Array.from(document.querySelectorAll('h2, h3')) as Array<
      HTMLHeadingElement
    >;

    const foo = hs.map(h => {
      return h.offsetTop;
    });

    setYList(foo);

    return () => {};
  }, []);

  useEffect(() => {
    const setYPos = () => {
      if (yList) {
        const index =
          yList.filter((v: number) => {
            return v < window.pageYOffset;
          }).length - 1;

        const aList = document.querySelectorAll('.toc li a') as NodeListOf<
          HTMLAnchorElement
        >;

        for (const i in Array.from(aList)) {
          if (parseInt(i, 10) === index) {
            aList[i].style.opacity = '1';
          } else {
            aList[i].style.opacity = '0.4';
          }
        }
      }
    };

    document.addEventListener('scroll', setYPos);
    return () => {
      document.removeEventListener('scroll', setYPos);
    };
  }, [window.pageYOffset, yList]);

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
