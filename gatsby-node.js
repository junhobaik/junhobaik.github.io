const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const config = require('./config');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('./src/templates/blogPost/index.js');
    const tagListTemplate = path.resolve('./src/templates/tagList/index.js');

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    tags
                    published
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const allPosts = result.data.allMarkdownRemark.edges;
        const posts = allPosts.filter(
          post =>
            process.env.NODE_ENV === 'development' ||
            post.node.frontmatter.published
        );

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: blogPostTemplate,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          });
        });

        // Tag pages
        let tags = [];

        _.each(posts, edge => {
          if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags);
          }
        });

        tags = _.uniq(tags);

        createPage({
          path: `/tags`,
          component: tagListTemplate,
          context: {
            tags,
            result,
          },
        });

        tags.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagListTemplate,
            context: {
              tag,
              result,
            },
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });

    const rewriteSlug = slug => {
      // 폴더 경로에 따라 url에 표시되는 것을 폴더 경로를 제거하고 파일명으로만 url을 지정되도록 하기 위함
      if (slug.match(/\//g).length > 2) {
        let tempStr = slug.split('/');
        slug = `/${tempStr[tempStr.length - 2]}/`;
      }

      // jekyll 기준으로 파일명에 날짜를 포함시키던 것을 url에서 제거하기 위함
      const dayRegExp = /\/(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])-/;
      if (slug.match(dayRegExp)) {
        slug = '/' + slug.replace(dayRegExp, '');
      }

      return slug;
    };

    const rewriteNode = node => {
      // 마크다운 파일 내 keywords 필드가 비어있을 시 오류가 나지 않도록 하기 위함
      if (!node.frontmatter.keywords) {
        node.frontmatter.keywords = [config.title];
      }

      // 마크다운 파일 내 퍼블리쉬 필드가 비어있을 시 오류가 나지 않도록 하기 위함
      // development 환경일 시 published 필드가 모두 true이도록 하기 위함
      if (
        node.frontmatter.published === undefined ||
        process.env.NODE_ENV === 'development'
      ) {
        node.frontmatter.published = true;
      }

      // 마크다운 파일 내 태그 필드가 비어있을 시 오류가 나지 않도록 하기 위함
      if (!node.frontmatter.tags || node.frontmatter.tags === '') {
        node.frontmatter.tags = ['Empty Tag'];
      }
      // 태그 필드가 배열이 아닌 문자열 하나일때 배열로 덮음
      else if (typeof node.frontmatter.tags === 'string') {
        node.frontmatter.tags = [node.frontmatter.tags];
      }

      // markdown 내 date의 timezone 제거
      if (node.frontmatter.date.indexOf('+') !== -1) {
        date = new Date(node.frontmatter.date.split('+')[0]);
        node.frontmatter.date = date;
      } else {
        node.frontmatter.date = new Date(node.frontmatter.date);
      }

      return node;
    };

    const newSlug = rewriteSlug(slug);
    const newNode = rewriteNode(node);

    createNodeField({
      name: `slug`,
      node: newNode,
      value: newSlug,
    });
  }
};
