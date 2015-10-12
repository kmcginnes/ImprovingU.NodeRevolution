var express = require('express');
var React = require('react');
var ReactDOM = require('react-dom/server');

var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

var MyComponent = React.createClass({
  render: function() {
    return React.createElement('div', null, "Hello world");
  }
});

app.get('/', function (req, res) {
  var content = ReactDOM.renderToString(React.createElement(MyComponent, null));
  res.render('index', {reactContent: content});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
