const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://run.mocky.io',
    changeOrigin: true
}
module.exports = function(app) {
    app.use(
        '/search',
        createProxyMiddleware(proxy)
    );
};