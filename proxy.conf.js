const PROXY_CONFIG =[
    {    context:['/fiscalizacao-api'],
         target: 'http://localhost:9091/auth',
         secure: false,
         logLevel: 'debug',
         changeOrigin: true,
         pathRewrite: {"^/fiscalizacao-api": "" } 
    }
];

module.exports = PROXY_CONFIG;