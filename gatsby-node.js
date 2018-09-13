const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('./src/templates/blogPost/index.js')
    const postListByTagTemplate = path.resolve(
      './src/templates/postListByTag/index.js'
    )
    const tagListTemplate = path.resolve('./src/templates/tagList/index.js')
    const archiveTemplate = path.resolve('./src/templates/archive/index.js')

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
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: blogPostTemplate,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        // Tag pages
        let tags = []

        _.each(posts, edge => {
          if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })

        tags = _.uniq(tags)

        // tagsTemplate
        tags.forEach(tag => {
          // console.log('[tagTemplate] tag = ',tag);

          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: postListByTagTemplate,
            context: {
              tag,
            },
          })
        })

        createPage({
          path: `/taglist`,
          component: tagListTemplate,
          context: {
            tags,
            result,
          },
        })

        createPage({
          path: `/archive`,
          component: archiveTemplate,
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    const rewriteSlug = slug => {
      // 폴더 경로에 따라 url에 표시되는 것을 폴더 경로를 제거하고 파일명으로만 url을 지정되도록 하기 위함
      if (slug.match(/\//g).length > 2) {
        let tempStr = slug.split('/')
        slug = `/${tempStr[tempStr.length - 2]}/`
      }

      // jekyll 기준으로 파일명에 날짜를 포함시키던 것을 url에서 제거하기 위함
      const dayRegExp = /\/(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])-/
      if (slug.match(dayRegExp)) {
        slug = '/' + slug.replace(dayRegExp, '')
      }

      return slug
    }

    const rewriteNode = node => {
      // 마크다운 파일 내 태그 필드가 비어있을 시 오류가 나지 않도록 하기 위함
      if (node.frontmatter.tags === undefined || node.frontmatter.tags === '') {
        node.frontmatter.tags = []
      }
      // 태그 필드가 배열이 아닌 문자열 하나일때 배열로 덮음
      else if (typeof node.frontmatter.tags === 'string') {
        node.frontmatter.tags = [node.frontmatter.tags]
      }
      return node
    }

    const newSlug = rewriteSlug(slug)
    const newNode = rewriteNode(node)

    createNodeField({
      name: `slug`,
      node: newNode,
      value: newSlug,
    })
  }
}
