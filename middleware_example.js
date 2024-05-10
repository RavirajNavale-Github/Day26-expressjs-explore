var express = require('express');  
var app = express();  

app.use(function(req, res, next) {  
  console.log('%s %s', req.method, req.url);  
  next();  
});  
app.get('/', function(req, res, next) {  
  res.send('Welcome to JavaTpoint!');  
});  
app.get('/help', function(req, res, next) {  
  res.send('How can I help you?');  
});  
  

app.listen(8000, ()=>{
    console.log("Listening to port")
})
