// Remove previsouly built artifacts

var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src(['dist/*'], {read: false}).pipe(clean());
});

// Compile JSX server side code

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

var babel = require('gulp-babel');

gulp.task('server', ['clean'], function() {
  return gulp.src('./app/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/'));
});

// Watch for changes and relaunch server

var nodemon = require('gulp-nodemon');

gulp.task('watch', ['js', 'server'], function() {
  return nodemon({
    script: 'dist/server.js',
    watch: 'app',
    tasks: ['js', 'server']
  })
});

// The requisite default task that is run when you just execute `gulp` by itself

gulp.task('default', ['js', 'server']);
