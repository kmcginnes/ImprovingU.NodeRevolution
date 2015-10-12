'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDomServer = require('react-dom/server');

var _reactDomServer2 = _interopRequireDefault(_reactDomServer);

var _reactRouter = require('react-router');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var app = (0, _express2['default'])();

app.use(_express2['default']['static'](__dirname + '/../dist'));

app.set('view engine', 'jade');
app.set('views', './app/views');

app.get('/*', function (req, res) {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  (0, _reactRouter.match)({ routes: _routes2['default'], location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var content = _reactDomServer2['default'].renderToString(_react2['default'].createElement(_reactRouter.RoutingContext, renderProps));
      res.render('index', { reactContent: content });
    } else {
      res.status(404).send('Not found');
    }
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});