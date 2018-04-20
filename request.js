var PORT =process.env.PORT || 3000;
var express = require('express');
var morgan = require('morgan');
var API ="/api/whoami";
var app = express();
app.use(morgan('dev'));
app.get(API, function(request,response){
    var language =request.headers['accept-language'];
    var userAgent =request.headers['user-agent'];
    var ip= request.ip
    console.log(request);
    response.json({language: language,
    userAgent: userAgent,
    ip:ip
})
})
app.listen(PORT, function(){
    console.log('Listening on port '+ PORT);
})