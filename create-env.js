const fs = require('fs')
fs.writeFileSync(
  './.env',
  `
ALGOLIA_APP_ID=${process.env.ALGOLIA_APP_ID}\n
ALGOLIA_SEARCH_ONLY_API_KEY=${process.env.ALGOLIA_SEARCH_ONLY_API_KEY}\n
ALGOLIA_ADMIN_API_KEY=${process.env.ALGOLIA_ADMIN_API_KEY}\n
ALGOLIA_INDEX_NAME=${process.env.ALGOLIA_INDEX_NAME}\n
`
)
