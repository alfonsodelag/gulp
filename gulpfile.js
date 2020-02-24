var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var ts = require('gulp-typescript');
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

// gulp.task('css', function () {
//    return gulp.src('./css/*.css')
//       .pipe(uglifycss({
//         "maxLineLen": 80,
//         "uglyComments": true
//       }))
//       .pipe(gulp.dest('./dist'));
//   });

 
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


  // gulp.task('typescript', function () {
  //   return gulp.src('./typescript/*.ts')
  //     .pipe(target('ES5'))
  //     .pipe(gulp.dest('./dist'));
  // });

  
  // gulp.task('run' ['sass', 'css']);

  // gulp.task('watch', function(){
  //   gulp.watch('./sass/*.sass', ['sass']);
  //   gulp.watch('./css /*.css', ['css']); 
  // });

  gulp.task('default', gulp.parallel('sass', 'hi', 'minify-css', 'typescript'));


//   exports.default = () => (
//     gulp.src('./css/*.css')
//     .pipe(autoprefixer({
//             cascade: false
//         }))
//         .pipe(gulp.dest('dist'))
// );

