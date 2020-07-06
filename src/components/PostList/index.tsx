import * as React from 'react';
import { memo, useEffect, useState, useCallback } from 'react';
import { Link } from 'gatsby';
import { throttle } from 'lodash';

import './postList.scss';

export interface PostListProps {
  posts: any[];
}

const PostList = memo((props: PostListProps) => {
  const { posts } = props;
  const [showCnt, setShowCnt] = useState(10);

  const throttleScrollHandler = useCallback(
    throttle(() => {
      if (
        window.outerHeight > (document.querySelector('.post-list') as HTMLDivElement).getBoundingClientRect().bottom
      ) {
        setShowCnt((prev: number) => {
          if (prev >= posts.length) return prev;
          return prev + 10;
        });
      }
    }, 250),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', throttleScrollHandler);

    return () => {
      window.removeEventListener('scroll', throttleScrollHandler);
    };
  }, []);

  posts.sort((a: any, b: any) => {
    const af = a.node.frontmatter;
    const bf = b.node.frontmatter;

    const aDate = new Date(af.update.includes('0001') ? af.date : af.update);
    const bDate = new Date(bf.update.includes('0001') ? bf.date : bf.update);

    if (aDate < bDate) return 1;
    if (aDate > bDate) return -1;
    return 0;
  });

  const mapPost = posts.map((post: any, i: number) => {
    const { node } = post;
    const { excerpt, fields, frontmatter } = node;
    const { slug } = fields;
    const { date, title, tags } = frontmatter;
    let update = frontmatter.update;
    if (Number(update.split(',')[1]) === 1) update = null;

    const mapTag = tags.map((tag: string) => {
      if (tag === 'undefined') return;

      return (
        <div key={`${slug}-${tag}`} className="tag">
          <span>
            <Link to={`/tags#${tag}`}>{`#${tag}`}</Link>
          </span>
        </div>
      );
    });

    return (
      <li key={slug} className={`post ${i < showCnt ? 'show' : 'hide'}`}>
        <article>
          <h2 className="title">
            <Link to={slug}>{title}</Link>
          </h2>
          <div className="info">
            <div className="date-wrap">
              <span className="date">{date}</span>
              {update ? <span className="update">&nbsp;{`(Updated: ${update})`}</span> : null}
            </div>
            {tags.length && tags[0] !== 'undefined' ? <span className="info-dot">·</span> : null}
            <ul className="tag-list">{mapTag}</ul>
          </div>
          <span className="excerpt">
            <Link to={slug}>{excerpt}</Link>
          </span>
        </article>
      </li>
    );
  });
  return (
    <div className="post-list">
      <ul>{mapPost}</ul>
    </div>
  );
});

export default PostList;
