var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var sassGlob = require('gulp-sass-glob');


gulp.task('sass', function () {
    return gulp.src('./sass/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });

  gulp.task('hi', async function() {
    return console.log("hellooo")
  });

  gulp.task('minify-css', () => {
    return gulp.src('./css/*.css')
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS(
      {compatibility: 'ie8'}))
      .pipe(gulp.dest('dist'));
  });

  gulp.task('typescript', function () {
    return gulp.src('./typescript/*.ts')
        .pipe(ts({
            target: 'ES5'
        }))
        .pipe(gulp.dest('./dist'));
  });

    gulp.task('autoprefix', function() {
      return gulp.src('./css/autoprefix.css')
      .pipe(autoprefixer({
          cascade: false
      }))
      .pipe(gulp.dest('./dist'));
    });

    gulp.task('browsersync', function() {
      return gulp.src('./css/*.css')
          .pipe(sass())
          .pipe(gulp.dest('./dist/autoprefix'))
          .pipe(browserSync.stream());
  });
  
  gulp.task('styles', function () {
    return gulp.src('./src/*.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('dist/styles'));
});

  gulp.task('default', gulp.parallel('sass', 'hi', 'minify-css', 'typescript', 'autoprefix', 'browsersync', 'styles'));


