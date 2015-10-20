'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

require('babel/register');

var React = require('react');
var ReactDOM = require('react-dom/server');

var ReactApp = require('./components/ReactApp');

var app = (0, _express2['default'])();

app.use(_express2['default']['static'](__dirname + '/../dist'));

app.set('view engine', 'jade');
app.set('views', './app/views');

app.get('/', function (req, res) {
  var content = ReactDOM.renderToString(React.createElement(ReactApp, null));
  res.render('index', { reactContent: content });
});

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});