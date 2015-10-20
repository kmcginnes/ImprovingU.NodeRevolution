# Demos - Day Three - Promises

Today we talk about promises in JavaScript. But first, let's setup our demo to run all in tests.

## Jasmine + Gulp + Babel

Building on last weeks demo, let's setup gulp with babel and nodemon.

First we pull in our dependencies.

```
npm i --save-dev gulp gulp-clean gulp-babel gulp-nodemon
```

```javascript
var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src(['dist/*'], {read: false}).pipe(clean());
});


var babel = require('gulp-babel');

gulp.task('server', ['clean'], function() {
  return gulp.src('./app/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/'));
});


var nodemon = require('gulp-nodemon');

gulp.task('watch', ['default'], function() {
  return nodemon({
    script: 'dist/server.js',
    watch: 'app',
    tasks: ['default']
  })
});


gulp.task('default', ['server']);
```

## Callback hell

It's important to see where we came from in order to appreciate where we are now.

Let's create a simple example of a Node application that simply copies a file onto itself.

We'll start with `npm init` and we'll also copy over the `gulpfile.js` that we created last time, with a few modifications.


Then create an `app/server.js` file to house our code. We'll simply find the largest file within a directory. We'll call into our module and then print out the result.

```javascript
import findLargest from './findLargest'

findLargest('../../../', (er, filename) => {
  if (er) return console.error(er);

  console.log('The largest file was: ' + filename);
});
```

Let's start with a module that satisfies the contract.

```javascript
export default (dir, cb) => {
  console.log('Inside findLargest');

  cb(null, 'foo');
}
```

Now let's 



## Promises to the rescue

### Constructing a promise

```javascript
var promise = new Promise((resolve, reject) => {
    // Do something, possibly async
    if(/* everything turned out fine */) {
        resolve('Stuff worked!');
    } else {
        reject(Error('Something bad happened.');
    }
});

return promise; // Give this to someone
```


[Video of Rx, CycleJS](https://www.youtube.com/watch?v=1zj7M1LnJV4&feature=youtu.be)
