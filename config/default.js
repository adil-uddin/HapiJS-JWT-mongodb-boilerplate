module.exports = {
  server: {
    host: 'localhost',
    port: 4400,
    maxBytes: 104857600
  },
  JWTConfig: {
    secret: 'THEDARKKNIGHT' //read from env
  },
  database: {
    uri: 'mongodb://localhost:27017/hapi-test'
  }
};
