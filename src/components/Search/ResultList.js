import React from 'react';
import { Link } from 'gatsby';

import './ResultList.scss';

const ResultList = ({ data, keyword, type }) => {
  const posts = data.allMarkdownRemark.edges;

  const filteredPosts = posts.filter(post => {
    const { node } = post;
    const lowerkeyword = keyword.toLocaleLowerCase();
    const lowerTitle = node.frontmatter.title.toLocaleLowerCase();
    const lowerContent = node.rawMarkdownBody.toLocaleLowerCase();
    let isReturn = false;

    if (keyword === '') return true;
    if (lowerTitle.indexOf(lowerkeyword) > -1) isReturn = true;
    if (type === 'all' && lowerContent.indexOf(lowerkeyword) > -1) isReturn = true;

    return isReturn;
  });

  const resultList = filteredPosts.map(post => {
    const { frontmatter, fields } = post.node;
    const { title } = frontmatter;
    const { slug } = fields;

    const lowerKeyword = keyword.toLocaleLowerCase();
    const lowerTitle = title.toLocaleLowerCase();
    const matchIndex = lowerTitle.indexOf(lowerKeyword);

    return (
      <li key={slug}>
        <div className="result-list-link-wrap">
          <Link to={slug}>
            <p>{title}</p>
          </Link>
        </div>
      </li>
    );
  });

  return (
    <div id="ResultList">
      <ul>{resultList}</ul>
    </div>
  );
};

export default ResultList;
