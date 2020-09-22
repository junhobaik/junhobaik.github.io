/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import { useEffect, useState, useCallback, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { graphql, Link } from 'gatsby';
import moment from 'moment';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faListUl, faLayerGroup, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import AdSense from 'react-adsense';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  PocketShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  PocketIcon,
  EmailIcon,
} from 'react-share';
import { useColorMode } from 'theme-ui';
import { throttle } from 'lodash';

import './post.scss';
import './code-theme.scss';
import './md-style.scss';
import 'katex/dist/katex.min.css';

import Layout from '../components/Layout';
import Toc from '../components/Toc';
import SEO from '../components/seo';

import { RootState } from '../state/reducer';
import config from '../../_config';

interface postProps {
  data: any;
  pageContext: { slug: string; series: any[]; lastmod: string };
}

interface iConfig {
  enablePostOfContents: boolean;
  enableSocialShare: boolean;
  disqusShortname?: string;
}

const Post = (props: postProps) => {
  const isSSR = typeof window === 'undefined';

  const { data, pageContext } = props;
  const isMobile = useSelector((state: RootState) => state.isMobile);
  const [yList, setYList] = useState([] as number[]);
  const [isInsideToc, setIsInsideToc] = useState(false);
  const [commentEl, setCommentEl] = useState<JSX.Element | null>(null);
  const [colorMode] = useColorMode();

  const { markdownRemark } = data;
  const { frontmatter, html, tableOfContents, fields, excerpt } = markdownRemark;
  const { title, date, tags, keywords } = frontmatter;
  let update = frontmatter.update;
  if (Number(update?.split(',')[1]) === 1) update = null;
  const { slug } = fields;
  const { series } = pageContext;
  const { enablePostOfContents, disqusShortname, enableSocialShare }: iConfig = config;
  const isTableOfContents = enablePostOfContents && tableOfContents !== '';
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isDisqus: boolean = disqusShortname ? true : false;
  const isSocialShare = enableSocialShare;

  const mapTags = tags.map((tag: string) => {
    return (
      <li key={tag} className="blog-post-tag">
        <Link to={`/tags#${tag}`}>{`#${tag}`}</Link>
      </li>
    );
  });

  const mapSeries = series.map((s: any) => {
    return (
      <li key={`${s.slug}-series-${s.num}`} className={`series-item ${slug === s.slug ? 'current-series' : ''}`}>
        <Link to={s.slug}>
          <span>{s.title}</span>
          <div className="icon-wrap">{slug === s.slug ? <Fa icon={faAngleLeft} /> : null}</div>
        </Link>
      </li>
    );
  });

  const metaKeywords = useCallback((keywordList: string[], tagList: string[]) => {
    const resultKeywords = new Set();
    for (const v of [...keywordList, ...tagList]) resultKeywords.add(v);

    return Array.from(resultKeywords) as string[];
  }, []);

  const renderComment = () => {
    const Comment = React.lazy(() => import('../components/Comment'));
    setCommentEl(<Comment slug={slug} title={title} />);
  };

  useEffect(() => {
    if (isMobile) {
      const adDiv = document.querySelector('.ad') as HTMLDivElement;

      if (adDiv) {
        const maxWidth = window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight;
        adDiv.style.maxWidth = `${maxWidth}px`;
        adDiv.style.display = 'flex';
        adDiv.style.justifyContent = 'flex-end';
      }
    }
  }, [isMobile]);

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

  useEffect(() => {
    setCommentEl(null);

    setTimeout(() => {
      renderComment();
    }, 1000);
  }, [colorMode]);

  useEffect(() => {
    // scroll
    const postContentOriginTop = document.querySelector('.blog-post')?.getBoundingClientRect().top ?? 0;
    const removeScrollEvent = () => document.removeEventListener('scroll', scrollEvents);

    const scrollEvents = throttle(() => {
      const postContentHeight = document.querySelector('.blog-post')?.getBoundingClientRect().height ?? Infinity;
      if (window.scrollY + window.innerHeight * 1.75 - postContentOriginTop > postContentHeight) {
        renderComment();
        removeScrollEvent();
      }
    }, 250);
    scrollEvents();
    document.addEventListener('scroll', scrollEvents);

    // toc
    const hs = Array.from(document.querySelectorAll('h2, h3')) as HTMLHeadingElement[];
    const minusValue = window.innerHeight < 500 ? 100 : Math.floor(window.innerHeight / 5);
    const yPositions = hs.map((h) => h.offsetTop - minusValue);
    setYList(yPositions);

    return () => removeScrollEvent();
  }, []);

  return (
    <>
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Article",
  "datePublished": "${moment(new Date(date)).toISOString()}",
  ${update ? `"dateModified": "${moment(new Date(update)).toISOString()}",` : ''}
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "${config.siteUrl}"
  },
  "author": {
    "@type": "Person",
    "name": "${config.name}"
  },
  "headline": "${title}",
  ${
    config.profileImageFileName
      ? `"publisher": {
    "@type" : "organization",
    "name" : "${config.name}",
    "logo": {
      "@type": "ImageObject",
      "url": "${config.siteUrl}${require(`../images/${config.profileImageFileName}`)}"
    }
  },
  "image": ["${config.siteUrl}${require(`../images/${config.profileImageFileName}`)}"]`
      : `"publisher": {
    "@type" : "organization",
    "name" : "${config.name}"
  },
  "image": []`
  }
}
`}
        </script>
      </Helmet>

      <SEO title={title} description={excerpt} keywords={metaKeywords(keywords, tags)} />

      <Layout>
        <div className="blog-post-container">
          <div className="blog-post">
            <h1 className="blog-post-title">{title}</h1>

            <div className="blog-post-info">
              <div className="date-wrap">
                <span className="write-date">{date}</span>
                {update ? (
                  <>
                    <span>(</span>
                    <span className="update-date">{`Last updated: ${update}`}</span>
                    <span>)</span>
                  </>
                ) : null}
              </div>

              {tags.length && tags[0] !== 'undefined' ? (
                <>
                  <span className="dot">·</span>
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

            {series.length > 1 ? (
              <>
                <div className="series">
                  <div className="series-head">
                    <span className="head">Post Series</span>
                    <div className="icon-wrap">
                      <Fa icon={faLayerGroup} />
                    </div>
                  </div>
                  <ul className="series-list">{mapSeries}</ul>
                </div>
              </>
            ) : null}

            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>

          {isSocialShare ? (
            <div className="social-share">
              <ul>
                <li className="social-share-item email">
                  <EmailShareButton url={config.siteUrl + slug}>
                    <EmailIcon size={24} round={true} />
                  </EmailShareButton>
                </li>
                <li className="social-share-item facebook">
                  <FacebookShareButton url={config.siteUrl + slug}>
                    <FacebookIcon size={24} round={true} />
                  </FacebookShareButton>
                </li>
                <li className="social-share-item twitter">
                  <TwitterShareButton url={config.siteUrl + slug}>
                    <TwitterIcon size={24} round={true} />
                  </TwitterShareButton>
                </li>
                <li className="social-share-item linkedin">
                  <LinkedinShareButton url={config.siteUrl + slug}>
                    <LinkedinIcon size={24} round={true} />
                  </LinkedinShareButton>
                </li>
                <li className="social-share-item reddit">
                  <RedditShareButton url={config.siteUrl + slug}>
                    <RedditIcon size={24} round={true} />
                  </RedditShareButton>
                </li>
                <li className="social-share-item pocket">
                  <PocketShareButton url={config.siteUrl + slug}>
                    <PocketIcon size={24} round={true} />
                  </PocketShareButton>
                </li>
              </ul>
            </div>
          ) : null}

          {isDevelopment ? (
            <>
              <aside className="ad ad-dev">
                <span>Ads</span>
                <span>displayed when you deploy</span>
              </aside>
              {isDisqus ? (
                <div className="comments comments-dev">
                  <span>Comments</span>
                  <span>displayed when you deploy</span>
                </div>
              ) : null}
            </>
          ) : (
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

              {!isSSR ? <Suspense fallback={<></>}>{commentEl}</Suspense> : null}
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
      excerpt(truncate: true, format: PLAIN)
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        tags
        keywords
        update(formatString: "MMM DD, YYYY")
      }
    }
  }
`;

export default Post;
