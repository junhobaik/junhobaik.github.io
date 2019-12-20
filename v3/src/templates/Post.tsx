import React from 'react';
import { useEffect, useState } from 'react';
import { graphql, Link } from 'gatsby';

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
  const { title, date, tags } = frontmatter;
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

  const mapTags = tags.map((tag: string) => {
    return (
      <li key={tag} className="blog-post-tag">
        <Link to={`/tag/${tag}`}>{`#${tag}`}</Link>
      </li>
    );
  });

  return (
    <>
      <Layout>
        <div className="blog-post-container">
          <div className="blog-post">
            <h1 className="blog-post-title">{title}</h1>
            <div className="blog-post-info">
              <span className="blog-post-date">{date}</span>
              {tags.length ? (
                <>
                  <span>·</span>
                  <ul className="blog-post-tag-list">{mapTags}</ul>
                </>
              ) : null}
            </div>
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
        tags
      }
    }
  }
`;

export default Post;
