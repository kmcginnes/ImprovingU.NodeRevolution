# Demos: Day Two

## Start with server side React web site

Let's create a simple web server which serves up html generated on the server by React. In order to do this we'll set up the following:

1. The server bootstrap code
2. The hello world index page
3. The gulp file to compile JSX code (with Webpack)
4. The unit tests to verify our DOM
5. The test runner (Karma)
6. The router to let us add more pages

With the nodemon server, gulp, and unit tests running all the time, now is the perfect moment to introduce an alternative console that has 4 pane window.

* [iTerm2](http://www.iterm2.com) is the number one choice in OS X.
* [ConEmu](https://github.com/Maximus5/ConEmu) is the number one choice in Windows.

### Step by step

#### Express

Create the package.json file so we can pull down some dependencies.

    npm init

Install ExpressJS and save it. It is not a dev dependency, but a full dependency of our application.

    npm install --save express

Add the most basic code needed to get an Express server up and running into `app/server.js`:

```javascript
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
```

Then open the site at [http://localhost:3000](http://localhost:3000). Any other route will result in a 404.

#### Jade

Ok, that's pretty boring, and we've already done that with only Node. Let's add a templating engine called Jade.

    npm install --save jade

Let's create a folder for our Jade views and tell Express about it.

    mkdir app/views

Add these to `server.js`:

```javascript
app.set('view engine', 'jade');
app.set('views', './app/views');
```

Now create `app/views/index.jade` and add:

```jade
doctype
html
  head
    title!= title
  body
    h1!= message
```

And route to it in `server/index.js`

```javascript
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
```

Ok, that's cool. We have a full fledged web server. This gives us pretty much everything that Asp.net MVC gives us as far as views and routes go.

#### React: Server Side

Let's make things a bit more interesting. Enter __ReactJs__.

    npm install --save react react-dom

and add make `server/index.js` look like the following:

```javascript
var express = require('express');
var React = require('react');
var ReactDOM = require('react-dom/server');

var app = express();

app.set('view engine', 'jade');
app.set('views', './app/views');

var ReactApp = React.createClass({
  render: function() {
    return React.createElement('h1', null, "Hello world");
  }
});

app.get('/', function (req, res) {
  var content = ReactDOM.renderToString(React.createElement(ReactApp, null));
  res.render('index', {reactContent: content});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
```

And add a `div` to hold the react content:

```jade
doctype
html
  head
    title!= 'React Server'
  body
    #app!= reactContent
```

#### React: JSX

React is now working, but we want to use the JSX syntax and be a little more modular. Let's create `shared/shell.js` to hold the root of our application. In this file we'll want our root React component.

```javascript
import React from 'react'

class ReactApp extends React.Component {
  render() {
    return (
      <h1>Hello world from both server and client!</h1>
    );
  }
}

module.exports = ReactApp;
```

Then we can simplify our `server.js` to import this component and mount it in our jade page.

```javascript
// Plugs into require so all javascript goes through babel.
require('babel/register');

// ... snip ...

var ReactApp = require('./components/ReactApp');

// ... snip ...

app.get('/', (req, res) => {
  var content = ReactDOM.renderToString(React.createElement(ReactApp));
  res.render('index', {reactContent: content});
});

// ... snip ...
```

#### React: Client Side

So now that our server is all set up and running with Node, Express, and React let's hook up the client side.

First we'll create the React bootstrapper that the browser will use `app/client.js`.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import ReactApp from './components/ReactApp'

ReactDOM.render(
  <ReactApp />, 
  document.getElementById('app')
);

```

Now we need to have a way to compile, minify, and bundle our shared React components to make them easier for browsers to consume.

#### Gulp

We'll use gulp for that.

    npm install --save-dev gulp gulp-clean
    npm install --global gulp

Now let's create a `gulpfile.js`.

```javascript
var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src(['dist/*'], {read: false}).pipe(clean());
});
```

#### Gulp: Browserify

This only has a clean task which deletes all files in the `./dist/` directory. Not very interesting so far. Let's add the ability to process JSX files.

    npm install --save-dev browserify babelify vinyl-source-stream

```javascript
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('js', ['clean'], function() {
  return browserify('./app/client.js')
    .transform(babelify)
    .bundle()
    .pipe(source('client.js'))
    .pipe(gulp.dest('dist/'))
});
```

Now we've wired up the front end and back end code to the same React components.

But things have gotten a bit more complicated on the development side. Let's simplify by automating some of these steps.

    npm install --save-dev gulp-nodemon

```javascript
var nodemon = require('gulp-nodemon');

gulp.task('watch', ['js'], function() {
  return nodemon({
    script: 'app/server.js',
    watch: 'app',
    tasks: ['js']
  })
});
```

And we also want a default task for gulp to call when we just execute `gulp` without any arguments.

```javascript
gulp.task('default', ['js']);
```

#### React: Client side configuration

Then we need to tell Express how to serve this static files up in the `server.js` file:

```javascript
app.use(express.static(__dirname + '/../dist'));
```

Now we have React running on both the server and the client side. Let's add a `componentDidMount` to our root React component so we can see that something happened.

```javascript
componentDidMount() {
  console.log('React is now loaded client side!');
}
```

#### Gulp: Babel server side

Now that we're using ES6 on the client side, we want to use it on the server side too. So let's set up a gulp task to run Babel on our server code:

```javascript
var babel = require('gulp-babel');

gulp.task('server', ['clean'], function() {
  return gulp.src('./app/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/'));
});
```

And update all tasks that should depend on this:

```javascript
gulp.task('watch', ['js', 'server'], function() {
  return nodemon({
    script: 'dist/server.js',
    watch: 'app',
    tasks: ['js', 'server']
  })
});

gulp.task('default', ['js', 'server']);
```

Now we can update `app/server.js` to take advantage of ES6 syntax:

```javascript
import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'

import ReactApp from './components/ReactApp'

let app = express();

app.use(express.static(__dirname + '/../dist'));

app.set('view engine', 'jade');
app.set('views', './app/views');

app.get('/', (req, res) => {
  let content = ReactDOM.renderToString(<ReactApp />);
  res.render('index', {reactContent: content});
});

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
```

#### React: Router

So far we've only been dealing with a single page in our application. Let's expand that using routing. We want this routing to work both on the server and on the client. That means we can't use the standard Express routing.

Let's use [react-router](https://github.com/rackt/react-router) for this:

    npm install --save react-router@1.0.0-rc3

Now we'll add a new file called `app/routes.js` that will define all of our app's routes:

```javascript
import React from "react";
import { Route } from "react-router";

import ReactApp from "./components/ReactApp";

export default (  
  <Route path="/" component={ ReactApp } />
);
```

Then we'll change our `app/client.js` to use the router:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import Router from "react-router"

import routes from "./routes"

ReactDOM.render(<Router routes={routes} />, document.getElementById('app'));
```

And change the `app/server.js` to do the same:

```javascript
// ... snip ...

import { match, RoutingContext } from 'react-router'

import routes from './routes'

// ... snip ...

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

// ... snip ...
```

## Allow client side use of server components

* React components
* Router
* Auth
* Database
* Rest calls
* Validation

## Sources

[How to build React apps that load quickly using server side rendering](https://www.terlici.com/2015/03/18/fast-react-loading-server-rendering.html)
[DavidWells/isomorphic-react-example](https://github.com/DavidWells/isomorphic-react-example)
[Server/Client With React, Part 2: The Build System](http://eflorenzano.com/blog/2014/04/10/react-part-2-build-system/)
[Josh Finnie - React.js Tutorial Part 2](http://www.joshfinnie.com/blog/reactjs-tutorial-part-2/)
