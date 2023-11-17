const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
    app.use(
        '/vin',
        createProxyMiddleware({
            target: 'http://localhost:3333',
            changeOrigin: true,
        })
    );
};