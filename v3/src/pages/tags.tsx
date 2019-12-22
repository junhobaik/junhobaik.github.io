import * as React from 'react';
import { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import './tags.scss';
import PostList from '../components/PostList';

export interface TagsPageProps {
  data: any;
}

const Tags = (props: TagsPageProps) => {
  const { group } = props.data.allMarkdownRemark;
  const [largeCount, setLargeCount] = useState(0);
  const [targetTag, setTargetTag] = useState('Empty Tag');

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
      return `1.${fontSize}rem`;
    };

    return (
      <li key={g.fieldValue}>
        <div>
          <span
            className="tag-text"
            style={{
              fontSize: getFontSize(),
              opacity: g.fieldValue === targetTag ? '0.9' : '0.5',
              fontWeight: g.fieldValue === targetTag ? 'bold' : 'normal',
            }}
            onClick={() => {
              setTargetTag(g.fieldValue);
            }}
          >
            <a href={`#${g.fieldValue}`}>{g.fieldValue}</a>
          </span>
        </div>
      </li>
    );
  });

  tagList.sort((a: React.ReactElement) => {
    if (a.key === 'Empty Tag') return -1;
    return 0;
  });

  const getPostList = () => {
    if (group.filter((g: groupItem) => g.fieldValue === targetTag).length) {
      return group.filter((g: groupItem) => g.fieldValue === targetTag)[0]
        .edges;
    }
    if (group.filter((g: groupItem) => g.fieldValue === 'Empty Tag').length) {
      return group.filter((g: groupItem) => g.fieldValue === 'Empty Tag')[0]
        .edges;
    }
    return [];
  };

  useEffect(() => {
    let large = 0;
    for (const g of group) {
      if (g.totalCount > large) large = g.totalCount;
    }
    setLargeCount(large);

    return () => {};
  }, [group]);

  useEffect(() => {
    if (location.hash) setTargetTag(location.hash.split('#')[1]);
    return () => {};
  }, []);

  return (
    <Layout>
      <SEO title="Tags" />
      <div id="tags">
        <div className="tag-list-wrap">
          <ul>{tagList}</ul>
        </div>

        <PostList posts={getPostList()} />
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
            excerpt(format: PLAIN)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMM DD, YYYY")
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
