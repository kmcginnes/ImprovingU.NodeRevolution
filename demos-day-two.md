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

Create the package.json file so we can pull down some dependencies.

    npm init

Install ExpressJS and save it. It is not a dev dependency, but a full dependency of our application.

    npm install --save express

Add the most basic code needed to get an Express server up and running:

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

Then open the site at [http://localhost:3000](http://localhost:3000). Any other route will result in a 404.

Ok, that's pretty boring, and we've already done that with only Node. Let's add a templating engine called Jade.

    npm install --save jade

Let's create a folder for our Jade views and tell Express about it.

    mkdir views

Add these to server.js:

    app.set('view engine', 'jade');
    app.set('views', './views');

Now create `views/index.jade` and add:

    html
      head
        title!= title
      body
        h1!= message

And route to it in `server.js`

    app.get('/', function (req, res) {
      res.render('index', { title: 'Hey', message: 'Hello there!'});
    });

Ok, that's cool. We have a full fledged web server. This gives us pretty much everything that Asp.net MVC gives us as far as views and routes go.

Let's make things a bit more interesting. Enter __ReactJs__.

    npm install --save react react-dom

and add make server.js look like the following:

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

React is now working, but we want to use the JSX syntax. Let's add Browserify and Gulp to take care of the conversion.

    npm install --save-dev browserify gulp gulp-clean
    npm install --global gulp

Now let's create a `gulpfile.js`.

    var gulp = require('gulp');
    var clean = require('gulp-clean');
    
    gulp.task('clean', function() {
      return gulp.src(['build/*'], {read: false}).pipe(clean());
    });

This only has a clean task which deletes all files in the `./build/` directory.

## Allow client side use of server components

* React components
* Router
* Auth
* Database
* Rest calls
* Validation
