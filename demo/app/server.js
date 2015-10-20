require('babel/register');

import express from 'express'
var React = require('react');
var ReactDOM = require('react-dom/server');

var ReactApp = require('./components/ReactApp');

var app = express();

app.use(express.static(__dirname + '/../dist'));

app.set('view engine', 'jade');
app.set('views', './app/views');

app.get('/', (req, res) => {
  var content = ReactDOM.renderToString(
    React.createElement(ReactApp, null)
  );
  res.render(
    'index', 
    { reactContent: content }
  );
});

var server = app.listen(5000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
