// // src/setupProxy.js

// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use('/api', createProxyMiddleware({
//     target: 'https://timbu-get-all-products.reavdev.workers.dev',
//     // target: 'https://api.timbu.cloud/products',
    
//     changeOrigin: true,
//     pathRewrite: {
//       '^/api': '', // remove '/api' from the request path
//     },
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Headers': 'Content-Type',
//     },
//   }));
// };


const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.timbu.cloud',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
