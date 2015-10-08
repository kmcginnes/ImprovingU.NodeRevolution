## How to Node

## Standard Libraries Demo

```javascript
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

---

## Developing and Debugging Demo

`> npm install -g node-inspector`

`> node-debug app.js`

Open in Chrome [http://localhost]()

---

## CommonJS modules Demo

Create a simple logger module and import it into our app.

__logger.js__

```javascript
exports.info = function(msg) {
    console.log(new Date() + ': ' + msg);
};

exports.error = function(msg) {
    console.error(new Date() + ': ' + msg);
};
```

Then modify `app.js`:

```javascript
var logger = require('./logger');

logger.info('Logging hello world');
```

---

## Demo

When you want to export a instance factory you must use `module.exports`.

__point.js__

```javascript
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

```javascript
var Point = require('./Point');

var point = new Point(25, 36);

point.print();
```

---

## Async callbacks and error handling Demo

__app.js__

```javascript
var fs = require('fs');

fs.readFile('/', function (err) {
    if(err) throw err;

    console.log('completed');
});
```
