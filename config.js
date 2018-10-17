module.exports = {
  title: `HUNDRED`,
  author: 'Junho Baik',
  description: "Junho Baik's blog",
  siteUrl: 'https://junhobaik.github.io',

  // header config
  titleLogo: () => {
    return require('./src/images/profile.png')
  },
  titleLogoShow: true, // boolean, default=false
  bio: 'Jr. FRONT END DEVELOPER',
  bioShow: true, // boolean, default=true

  // addtional
  googleAnalyticsTrackingId: 'UA-103592668-4',
  disqusShortname: 'dev-hundred-blog'
}
