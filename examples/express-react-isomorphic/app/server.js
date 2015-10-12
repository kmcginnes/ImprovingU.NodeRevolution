import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { match, RoutingContext } from 'react-router'

import routes from './routes'

let app = express();

app.use(express.static(__dirname + '/../dist'));

app.set('view engine', 'jade');
app.set('views', './app/views');

app.get('/*', (req, res) => {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var content = ReactDOM.renderToString(<RoutingContext {...renderProps} />);
      res.render('index', {reactContent: content});
    } else {
      res.status(404).send('Not found')
    }
  })
});

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
