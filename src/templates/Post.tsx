import React from 'react';
import { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import AdSense from 'react-adsense';

import Layout from '../components/Layout';
import Toc from '../components/Toc';
import SEO from '../components/seo';
import './post.scss';
import 'katex/dist/katex.min.css';
const config = require('../../config');

export interface postProps {
  data: any;
  pageContext: any;
}

const Post = (props: postProps) => {
  const { data, pageContext } = props;
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents, fields, excerpt } = markdownRemark;
  const { title, date, tags, keywords } = frontmatter;
  const { slug } = fields;
  const { series } = pageContext;
  const [yList, setYList] = useState();
  const [isInsideToc, setIsInsideToc] = useState(false);

  const isTableOfContents = config.enablePostOfContents && tableOfContents !== '';
  const isDisqus = config.disqusShortname;

  useEffect(() => {
    const hs = Array.from(document.querySelectorAll('h2, h3')) as Array<HTMLHeadingElement>;

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

        const aList = document.querySelectorAll('.toc.outside li a') as NodeListOf<HTMLAnchorElement>;

        for (const i in Array.from(aList)) {
          if (parseInt(i, 10) === index) {
            aList[i].style.opacity = '1';
          } else {
            aList[i].style.opacity = '0.4';
          }
        }
      }
    };

    if (isTableOfContents) document.addEventListener('scroll', setYPos);
    return () => {
      if (isTableOfContents) document.removeEventListener('scroll', setYPos);
    };
  }, [yList]);

  const mapTags = tags.map((tag: string) => {
    return (
      <li key={tag} className="blog-post-tag">
        <Link to={`/tag/${tag}`}>{`#${tag}`}</Link>
      </li>
    );
  });

  const mapSeries = series.map((s: any) => {
    return (
      <li key={`${s.slug}-series-${s.num}`} className={`series-item ${slug === s.slug ? 'current-series' : ''}`}>
        <Link to={s.slug}>
          <span>{s.title}</span>
        </Link>
      </li>
    );
  });

  //disqus
  const disqusConfig = {
    shortname: config.disqusShortname,
    config: {
      url: `${config.siteUrl + slug}`,
      identifier: slug,
      title,
    },
  };

  const metaKeywords = (keywordList: Array<string>, tagList: Array<string>) => {
    const resultKeywords = new Set();

    for (const v of [...keywordList, ...tagList]) {
      resultKeywords.add(v);
    }

    return Array.from(resultKeywords);
  };

  return (
    <>
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Helmet>

      <SEO title={title} description={excerpt} keywords={metaKeywords(keywords, tags)} />

      <Layout>
        <div className="blog-post-container">
          <div className="blog-post">
            <h1 className="blog-post-title">{title}</h1>
            <div className="blog-post-info">
              <span className="blog-post-date">{date}</span>
              {tags.length && tags[0] !== 'undefined' ? (
                <>
                  <span>·</span>
                  <ul className="blog-post-tag-list">{mapTags}</ul>
                </>
              ) : null}
              {!isTableOfContents ? null : (
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
            {!isTableOfContents ? null : (
              <div className="inside-toc-wrap" style={{ display: isInsideToc ? 'flex' : 'none' }}>
                <Toc isOutside={false} toc={tableOfContents} />
              </div>
            )}

            {series.length ? <ul className="series-list">{mapSeries}</ul> : null}

            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>

          {process.env.NODE_ENV === 'development' ? null : (
            <>
              <aside className="ad">
                <AdSense.Google
                  client={config.googleAdsenseClient || 'ca-pub-5001380215831339'}
                  slot={config.googleAdsenseSlot || '5214956675'}
                  style={{ display: 'block' }}
                  format="auto"
                  responsive="true"
                />
              </aside>
              {isDisqus ? (
                <div className="comments">
                  <DiscussionEmbed {...disqusConfig} />
                </div>
              ) : null}
            </>
          )}
        </div>
        {!isTableOfContents ? null : <Toc isOutside={true} toc={tableOfContents} />}
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
        keywords
      }
    }
  }
`;

export default Post;
