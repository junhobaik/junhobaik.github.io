import React from 'react';
import { Link } from 'gatsby';

import './postList.scss';

export interface PostListProps {
  posts: any;
}

const PostList = (props: PostListProps) => {
  const { posts } = props;

  const mapPost = posts.map((post: any) => {
    const { node } = post;
    const { excerpt, fields, frontmatter } = node;
    const { slug } = fields;
    const { date, title, tags } = frontmatter;

    const mapTag = tags.map((tag: String) => {
      if (tag === 'undefined') return;

      return (
        <li key={`${slug}-${tag}`} className="tag">
          <span>
            <Link to={`/tags#${tag}`}>{`#${tag}`}</Link>
          </span>
        </li>
      );
    });

    return (
      <li key={slug} className="post">
        <article>
          <h2 className="title">
            <Link to={slug}>{title}</Link>
          </h2>
          <div className="info">
            <span className="date">{date}</span>
            {tags.length && tags[0] !== 'undefined' ? <span className="info-dot">·</span> : null}
            <ul className="tag-list">{mapTag}</ul>
          </div>
          <span className="excerpt">{excerpt}</span>
        </article>
      </li>
    );
  });
  return (
    <div className="post-list">
      <ul>{mapPost}</ul>
    </div>
  );
};

export default PostList;
