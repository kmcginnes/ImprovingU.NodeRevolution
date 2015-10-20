// Remove previsouly built artifacts
var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src(['dist/*'], {read: false}).pipe(clean());
});


// Compiles all the JavaScript into EcmaScript 5 compatible JavaScript
var babel = require('gulp-babel');

gulp.task('build', ['clean'], function() {
  return gulp.src('./app/**/*.js')
    .pipe(babel({ optional: ['runtime'] }))
    .pipe(gulp.dest('dist/'));
});


// Runs all the jasmine tests
var jasmine = require('gulp-jasmine');

gulp.task('specs', ['build'], function() {
  return gulp.src('./dist/specs/**/*.js')
    .pipe(jasmine({
      verbose: true
    }));
})


// Watch for changes and relaunch server
var nodemon = require('gulp-nodemon');

gulp.task('watch', ['default'], function() {
  return nodemon({
    script: 'dist/server.js',
    watch: 'app',
    tasks: ['default']
  })
});

// The requisite default task that is run when you just execute `gulp` by itself
gulp.task('default', ['specs']);
