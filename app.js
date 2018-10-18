var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/static',express.static(path.join(__dirname, '/public')));
app.get('/', function(req,res)
{
  console.log("request: searchFlight as a default page.");
  res.sendFile(path.join(__dirname,'searchFlight.html'));
});

app.get('/searchFlight.html', function(req,res)
{
  console.log("request: "+req.url);
  res.sendFile(path.join(__dirname,'searchFlight.html'));
});

app.get('/displayFlight.html', function(req,res)
{
  console.log("request: "+req.url);
  res.sendFile(path.join(__dirname,'displayFlight.html'));
});

app.get('/flightInfo.json', function(req,res)
{
  console.log("request: "+req.url);
  res.sendFile(path.join(__dirname,'flightInfo.json'));
});

// app.get('/cssStyle.css', function(req,res)
// {
//   console.log("request: "+req.url);
//   res.sendFile(path.join(__dirname,'cssStyle.css'));
// });

// app.get('/flight.js', function(req,res)
// {
//   console.log("request: "+req.url);
//   res.sendFile(path.join(__dirname,'flight.js'));
// });

app.listen(3000, function()
{
  console.log('Server started at Port 3000');
});
