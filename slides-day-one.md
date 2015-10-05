class: center, middle

### What is Node.js

* Google's V8 JavaScript engine
* Event driven
* Non-blocking standard libraries
* Most APIs speak Streams
* Extensible via C/C++ add-ons
* Provides a package manager and module system for JS/native extensions
* EcmaScript 5 (Node v0.12.*) & EcmaScript 6 (Node 4.*)
* JIT & optimized JavaScript

---

> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

It's important to remember that Node is really two things: a runtime environment and a set of libraries. Like .Net is the CLR and the base class libraries. The Node libraries have first class support for things like HTTP requests and non-blocking IO calls.

### What Node.js is not

* A framework like Asp.net MVC/Web Forms
* A new programming language

### Standard libraries

* Async by default
* Low level
* HTTP is first class citizen

#### Demo

```js
var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Hello world');
});

server.listen(3000);

console.log("Server listening on http://localhost:3000");
```

Open [http://localhost:3000](http://localhost:3000)

### What is NPM

NPM is a command line utility that allows the installation and management of Node modules. These modules can be installed from many sources, but the most common one is [npmjs.com](http://www.npmjs.com).

NPM can install modules into your application, or globally into the system itself.

Every Node application is a module by default.

---

* Node standard libraries are 
* `require('http')` looks on the global Node module path
* NPM installs packags to a local `node_modules` folder and adds that to the Node module path
* `require('express')` will be found in the local `node_modules` folder

## Developing and Debugging

* Lots of different choices
* [nodemon](http://nodemon.io) for save, refresh browser workflow
* [node-inspector](https://github.com/node-inspector/node-inspector) allows debugging in Chrome
* IDEs (WebStorm, Eclipse, Visual Studio [Code], etc)

### Demo

`> npm install -g node-inspector`

`> node-debug app.js`

Open in Chrome [http://localhost]()

## CommonJS modules

* Prevents pollution of the global scope
* Two style of module development

### Demo

Create a simple logger module and import it into our app.

__logger.js__

```js
exports.info = function(msg) {
    console.log(new Date() + ': ' + msg);
};

exports.error = function(msg) {
    console.error(new Date() + ': ' + msg);
};
```

Then modify `app.js`:

```js
var logger = require('./logger');

logger.info('Logging hello world');
```

---

When you want to export a instance factory you must use `module.exports`.

__point.js__

```js
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.print = function() {
    console.log(this.x + ', ' + this.y);
}

module.exports = Point;
```

__app.js__

```js
var Point = require('./Point');

var point = new Point(25, 36);

point.print();
```

## Async callbacks and error handling

* Any async function allows you to pass a callback
* Callback parameters include an `Error` parameter
* Errors will bring down the process if not handled


### Demo

__app.js__

```js
var fs = require('fs');

fs.readFile('/', function (err) {
    if(err) throw err;

    console.log('completed');
});
```

### History

* 1996 JavaScript released by Netscape and xeroxed by Microsoft
* 1997 EcmaScript 1 released
* 1999 Ajax introduced in Internet Explorer 5
* 2006 jQuery is released
* 2008 Google releases V8 JavaScript engine
* 2009 Ryan Dahl starts Node.js
* 2009 EcmaScript 5 released
* 2010 ExpressJS started
* 2011 NPM introduced
* 2013 ReactJS introduced
* 2014 Node.js forked and IO.js created
* 2015 EcmaScript 6 finalized
* 2015 IO.js merges back into Node.js

#### Sep 2, 2008 Google releases V8 JavaScript engine

It was a big step forward in browsers’ performance, and it pushed browsers’ technology to a new whole level. It’s written in C++ and its biggest revolution was that it precompiled the Javascript source code to machine code instead of just interpret it and then applied a JIT process again in runtime to improve dynamic code execution.

#### Ryan Dahl starts working on this thing called Node

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the web server. Dahl desired an easier way.

Based on the ideas of Mongrel for Ruby, and designed to overcome the problems of Ruby on Rails. 


### Why Node.js

#### JavaScript everywhere

* Code reuse
* Same programming culture on client and server
* Lots of JavaScript programmers

#### Vibrant community

* 190,000+ packages on npm
* Top corporate sponsers
* Huge wealth of JavaScript code

#### Sweet spots

* Real-time/high concurrency apps (I/O bound)
* API tier for single page apps and rich clients (iOS/Android)
* Service orchestration
* Working with document (JSON-style) databases

#### Not so sweet spots

* Simple CRUD apps (lack of frameworks)
* Not as fast as some for CPU-intensive stuff
