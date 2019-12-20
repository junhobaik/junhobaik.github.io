import * as React from 'react';
import { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import './tags.scss';

export interface TagsPageProps {
  data: any;
}

const Tags = (props: TagsPageProps) => {
  const { group } = props.data.allMarkdownRemark;
  const [largeCount, setLargeCount] = useState(0);

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
    console.log(g.totalCount, largeCount);

    const getFontSize = () => {
      let fontSize = Math.round(50 / (largeCount / g.totalCount)).toString();
      if (fontSize.length <= 1) fontSize = `0${fontSize}`;
      return `1.${fontSize}rem`;
    };

    if (g.fieldValue === 'Empty Tag') return;
    return (
      <li key={g.fieldValue}>
        <div>
          <span className="tag-text" style={{ fontSize: getFontSize() }}>
            {g.fieldValue}
          </span>
        </div>
      </li>
    );
  });

  useEffect(() => {
    let large = 0;
    for (const g of group) {
      if (g.totalCount > large) large = g.totalCount;
    }
    setLargeCount(large);

    return () => {};
  }, [group]);

  return (
    <Layout>
      <SEO title="Tags" />
      <div id="tags">
        <div className="tag-list-wrap">
          <ul>{tagList}</ul>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY년 MM월 DD일")
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
