const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Assuming your API endpoints are under /api
    createProxyMiddleware({
      target: 'http://localhost:8080', // Change this to match your backend URL
      changeOrigin: true,
    })
  );
};
