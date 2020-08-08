/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import './styles/tags.scss';
import PostList from '../components/PostList';

interface TagsPageProps {
  data: any;
}

const Tags = (props: TagsPageProps) => {
  const { data } = props;
  const { group } = data.allMarkdownRemark;

  const [largeCount, setLargeCount] = useState(0);
  const [targetTag, setTargetTag] = useState<string | undefined>();
  const [currentPostList, setCurrentPostList] = useState([]);

  interface groupItem {
    fieldValue: string;
    totalCount: number;
  }

  group.sort((a: groupItem, b: groupItem) => {
    const x = a.fieldValue.toLocaleLowerCase();
    const y = b.fieldValue.toLocaleLowerCase();

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  });

  const tagList = group.map((g: groupItem) => {
    const getFontSize = () => {
      let fontSize = Math.round(50 / (largeCount / g.totalCount)).toString();
      if (fontSize.length <= 1) fontSize = `0${fontSize}`;
      return `${Number(fontSize) / 100 + 0.9}rem`;
    };

    return (
      <li key={g.fieldValue}>
        <span
          className="tag-text"
          style={{
            fontSize: g.fieldValue !== 'undefined' ? getFontSize() : '0.9rem',
            opacity: g.fieldValue === targetTag ? '0.9' : '0.5',
            fontWeight: g.fieldValue === targetTag ? 'bold' : 'normal',
          }}
          onClick={() => {
            setTargetTag(g.fieldValue);
          }}
        >
          <a href={`#${g.fieldValue}`}>{g.fieldValue}</a>
        </span>
      </li>
    );
  });

  const getPostList = useCallback(() => {
    if (group.filter((g: groupItem) => g.fieldValue === targetTag).length) {
      return group.filter((g: groupItem) => g.fieldValue === targetTag)[0].edges;
    }
    if (group.filter((g: groupItem) => g.fieldValue === 'undefined').length) {
      return group.filter((g: groupItem) => g.fieldValue === 'undefined')[0].edges;
    }
    return [];
  }, [targetTag]);

  useEffect(() => {
    setTargetTag(location?.hash ? location.hash.split('#')[1] : 'undefined');

    let large = 0;
    for (const g of group) {
      if (g.fieldValue !== 'undefined' && g.totalCount > large) large = g.totalCount;
    }
    setLargeCount(large);
  }, []);

  useEffect(() => {
    if (targetTag) setCurrentPostList(getPostList());
  }, [targetTag]);

  return (
    <Layout>
      <SEO title="Tags" />
      <div id="tags">
        <div className="tag-list-wrap">
          <ul>{tagList}</ul>
        </div>

        <PostList posts={currentPostList.length ? currentPostList : []} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        edges {
          node {
            excerpt(truncate: true, format: PLAIN)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              update(formatString: "MMM DD, YYYY")
              title
              tags
            }
          }
        }
      }
    }
  }
`;

export default Tags;
