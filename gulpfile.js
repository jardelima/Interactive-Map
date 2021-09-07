'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('convertAndMinifySass', () => {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css'))
}); 

gulp.task('default', () => {
    gulp.watch('./src/scss/**/*.scss', gulp.series('convertAndMinifySass'));
});