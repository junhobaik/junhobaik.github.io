import React from 'react';
import { useEffect, useState } from 'react';
import { graphql, Link } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
// import { Disqus } from 'gatsby-plugin-disqus';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/Layout';
import './post.scss';
import Toc from '../components/Toc';
const config = require('../config');

export interface postProps {
  data: any;
}

const Post = (props: postProps) => {
  const { data } = props;
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents, fields } = markdownRemark;
  const { title, date, tags } = frontmatter;
  const { slug } = fields;
  const [yList, setYList] = useState();
  const [isInsideToc, setIsInsideToc] = useState(false);

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

        const aList = document.querySelectorAll(
          '.toc.outside li a'
        ) as NodeListOf<HTMLAnchorElement>;

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

  //disqus
  const disqusConfig = {
    shortname: config.disqusShortname,
    config: {
      url: `${config.siteUrl + location.pathname}`,
      identifier: slug,
      title,
    },
  };

  return (
    <>
      <Layout>
        <div className="blog-post-container">
          <div className="blog-post">
            <h1 className="blog-post-title">{title}</h1>
            <div className="blog-post-info">
              <span className="blog-post-date">{date}</span>
              {tags.length && tags[0] !== 'Empty Tag' ? (
                <>
                  <span>·</span>
                  <ul className="blog-post-tag-list">{mapTags}</ul>
                </>
              ) : null}
              {tableOfContents === '' ? null : (
                <div className="blog-post-inside-toc">
                  <div
                    className="toc-button"
                    role="button"
                    onClick={() => {
                      setIsInsideToc((prev: boolean) => {
                        return !prev;
                      });
                    }}
                  >
                    <Fa icon={faListUl} />
                  </div>
                </div>
              )}
            </div>
            {tableOfContents === '' ? null : (
              <div
                className="inside-toc-wrap"
                style={{ display: isInsideToc ? 'flex' : 'none' }}
              >
                <Toc isOutside={false} toc={tableOfContents} />
              </div>
            )}
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          {config.disqusShortname ? (
            <div className="comments">
              <DiscussionEmbed {...disqusConfig} />
            </div>
          ) : null}
        </div>
        {tableOfContents === '' ? null : (
          <Toc isOutside={true} toc={tableOfContents} />
        )}
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        tags
      }
    }
  }
`;

export default Post;
