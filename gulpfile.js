"use strict";

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize');
const autoprefixer = require('gulp-autoprefixer');
const concatCSS = require('gulp-concat-css');
const rename = require('gulp-rename');
const jsmin = require('gulp-jsmin');
const csso = require('gulp-csso');


const image_prop = {
  width: 1600,
  height: 700,
  crop: true,
  upscale: false
};

gulp.task('image', function () {
  gulp.src(['src/img/*.png', 'src/img/*.jpg'])
  .pipe(imagemin({
    optimizationLevel: 10,
  }))
  .pipe(imageResize(image_prop))
  .pipe(gulp.dest('dist/img'));
})
;


gulp.task('css', function () {
  gulp.src('src/css/*.css')
  .pipe(autoprefixer({
    browsers: ['last 3 versions'],
    cascade: false
  }))
  .pipe(csso())
  .pipe(concatCSS('dist/css/style.css'))
  .pipe(gulp.dest(''));
})
;

gulp.task('js', function () {
  gulp.src('src/circleMagic.js')
  .pipe(jsmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist'));
})
;

gulp.task('watch', function () {
  gulp.watch('src/css/*.css', ['css']);
gulp.watch('src/circleMagic.js', ['js']);
});