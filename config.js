module.exports = {
  /** Site MetaData (Required all)*/
  title: `머신러닝 완벽가이드`,                           // (* Required)
  description: `머신러닝 완벽가이드 책을 공부하며 기록해 놓은 곳.`, // (* Required)
  author: `JiYun`,                         // (* Required)
  language: 'ko-KR',                            // (* Required) html lang, ex. 'en' | 'en-US' | 'ko' | 'ko-KR' | ...
  siteUrl: 'https://jiyun1006.github.io',       // (* Required) 
    // ex.'https://junhobaik.github.io'
    // ex.'https://junhobaik.github.io/' << X, Do not enter "/" at the end.

  /** Header */
  profileImageFileName: 'https://user-images.githubusercontent.com/52434993/88882408-df20ef80-d26c-11ea-8977-29ae93e49728.jpg', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: '머신러닝 완벽가이드',
  name: 'JiYun',
  company: '',
  location: 'Korea',
  email: 'jiyun4251@gmail.com',
  website: 'https://jiyun1006.github.io',           // ex.'https://junhobaik.github.io'
  linkedin: '',                                     // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  facebook: '',                                     // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
  instagram: '', // ex.'https://www.instagram.com/junhobaik'
  github: 'https://github.com/jiyun1006/ML_guide',           // ex.'https://github.com/junhobaik'

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: 'junhobaik',   // comments (Disqus sort-name)
  enableSocialShare: true,        // Social share icon activation (Type of Value: Boolean. Not String)

  /** Optional */
  googleAnalytics: 'UA-103592668-4',                                  // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleSearchConsole: 'w-K42k14_I4ApiQKuVPbCRVV-GxlrqWxYoqO94KMbKo', // content value in HTML tag of google search console ownership verification 
  googleAdsenseSlot: '5214956675',                                    // Google Adsense Slot. ex.'5214956675'
  googleAdsenseClient: 'ca-pub-5001380215831339',                     // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};
