const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: '9.30.160.236',
      user: 'admin',
      password: 'admin',
      port: '30066',
      database: 'test',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds'),
    },
  },
};