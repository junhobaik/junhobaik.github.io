let config = {
  title: `HUNDRED`,
  author: 'Junho Baik',
  description: "Junho Baik's blog",
  siteUrl: 'https://junhobaik.github.io',

  // header config
  titleLogo: () => {
    return require('./src/images/profile.png');
  },
  titleLogoShow: true,
  bio: 'Jr. FRONT END DEVELOPER',
  bioShow: true,

  // addtional
  googleAnalyticsTrackingId: 'UA-103592668-4',
  disqusShortname: 'dev-hundred-blog',
};

/********************************************** */

if (process.env.NODE_ENV === 'development') {
  config.googleAnalyticsTrackingId = '';
  config.disqusShortname = '';
}

module.exports = config;
