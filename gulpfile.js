var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

 
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

    gulp.task('autoprefix', async function() {
      gulp.src('./css/*.css')
      .pipe(autoprefixer({
          cascade: false
      }))
      .pipe(gulp.dest('dist'))
    })
  
  gulp.task('default', gulp.parallel('sass', 'hi', 'minify-css', 'typescript', 'autoprefix'));


