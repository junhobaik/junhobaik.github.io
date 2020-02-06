module.exports = {
  /** Site MetaData (Required all)*/
  title: `Dev.White`,                           // (* Required)
  description: `Dev.White의 웹 개발 블로그입니다. 프론트엔드 스킬을 주로 다루며 백엔드와 그 외 기술에도 지속적으로 관심을 기울이고 있습니다.`, // (* Required)
  author: `Junho Baik`,                         // (* Required)
  siteUrl: 'https://junhobaik.github.io',       // (* Required) 
    // ex.'https://junhobaik.github.io'
    // ex.'https://junhobaik.github.io/' << X, Do not enter "/" at the end.

  /** Header */
  profileImageFileName: 'profile.png', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: 'Jr. Web Front-end Developer. / javascript, react ...',
  name: 'Junho Baik',
  company: '',
  location: 'Korea',
  email: 'junhobaik@gmail.com',
  website: 'https://junhobaik.github.io',           // ex.'https://junhobaik.github.io'
  linkedin: '',                                     // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  facebook: '',                                     // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
  instagram: 'https://www.instagram.com/junhobaik', // ex.'https://www.instagram.com/junhobaik'
  github: 'https://github.com/junhobaik',           // ex.'https://github.com/junhobaik'

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
  
  /** theme */
  theme: 'light' // recommand: light
    // auto, light, dark, light-fix, dark-fix
    // auto: On first visit, Enabling Dark Mode If you are a user, start in dark mode.
    // light: On first visit, start in light mode
    // light-fix: Disable the change theme feature and fix the theme to 'light'.
};
