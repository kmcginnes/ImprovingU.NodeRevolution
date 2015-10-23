var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function(){
  return gulp
    .src(['dist/*'], {read: false})
    .pipe(clean());
});

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('js', ['clean'], function() {
  return browserify('./app/client.js')
    .transform(babelify)
    .bundle()
    .pipe(source('client.js'))
    .pipe(gulp.dest('dist/'));
});

var babel = require('gulp-babel');

gulp.task('babel-server', ['clean'], function() {
  return gulp.src('./app/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/'));
});

// Runs all the jasmine tests
var jasmine = require('gulp-jasmine');

gulp.task('specs', ['babel-server'], function() {
  return gulp.src('./dist/specs/**/*.js')
    .pipe(jasmine({
      verbose: true
    }));
});

var nodemon = require('gulp-nodemon');

gulp.task('watch', ['default'], function() {
  return nodemon({
    script: 'dist/server.js',
    watch: 'app',
    tasks: ['default']
  });
});

gulp.task('default', ['js', 'specs']);
