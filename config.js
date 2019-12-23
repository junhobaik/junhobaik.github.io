let config = {
  title: `Title`,
  author: 'Author',
  description: 'Description',
  siteUrl: 'https://?.github.io',

  // # Header config
  titleLogo: () => {
    // return require(''); // profile image file. ex.require('./src/images/profile.png')
    return 'https://source.unsplash.com/random/100x100'; // random image
  },
  titleLogoShow: true,
  bio: 'Bio comments',
  bioShow: true,
  // social URL
  github: '#', // ex.https://github.com/junhobaik
  linkedin: '#',
  facebook: '',
  instagram: '',

  // # Addtional
  googleAnalyticsTrackingId: '', //ex. UA-123123123-0
  disqusShortname: '',

  // ## google AdSense
  // In addition, client-id in '/static/ads.txt' file needs to be modified
  googleAdsense: true,
  adsenseClient: 'ca-pub-5001380215831339',
  adsenseSlot: '5214956675',
};

/********************************************** */

if (process.env.NODE_ENV === 'development') {
  config.googleAnalyticsTrackingId = '';
  config.disqusShortname = '';
  config.googleAdsense = false;
}

module.exports = config;
