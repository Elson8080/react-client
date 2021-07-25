const createProxyMiddleware = require('http-proxy-middleware');

// proxy /api to local server project
module.exports = (app) => {
  app.use(createProxyMiddleware('/api', { target: 'http://localhost:8081/' }));
};

