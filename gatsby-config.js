module.exports = {
  siteMetadata: {
    title: 'devLog',
    author: 'Junho Baik',
    description: "Junho Baik's blog",
    siteUrl: 'https://junhobaik.github.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/_posts`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
