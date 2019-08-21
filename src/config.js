const path = require('path')

module.exports = {
  app: {
    defaultLang: 'en',
  },
  db: {
    client: 'mysql',
    connection: {
      host: 'xxx.xxx.xxx',
      user: 'balideco_xxxx',
      password: 'xxxxxxxxxx$WM',
      database: 'balideco_xx',
    },
    debug: true,
    pool: { min: 2, max: 100 },
    acquireConnectionTimeout: 10000,
    asyncStackTraces: true,
    seeds: { directory: path.join(__dirname, 'db/seeds') },
    migrations: { directory: path.join(__dirname, 'db/migrations') },
  },
}
