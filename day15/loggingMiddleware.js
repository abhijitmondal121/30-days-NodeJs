function loggingMiddleware(req, res, next) {
    const timestamp = new Date().toISOString();
    console.log('Request received at:' + timestamp);
    console.log('HTTP methods', req.method);
    console.log('Incoming request', req.url);
    console.log('HTTP headers', req.headers);
    console.log('Request body', req.body);
    next();
  }
  
  module.exports = loggingMiddleware;