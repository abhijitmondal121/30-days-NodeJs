const cache={};

function cachingMiddleware(req, res, next) {

const key=req.url;

if (cache[key] && cache[key].expirationTime > Date.now()) { res.send(cache[key].data);

} else {

const expirationTime = Date.now() + 5000;

cache[key] = { data: res.locals.data, expirationTime};

res.send = function (data) {

res.locals.data = data;

cache[key].data = data;

};

next();
}
}


