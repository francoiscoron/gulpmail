'use strict';
// Require -> Add depencies to gulp
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    htmlmin     = require('gulp-htmlmin'),
    inlineCss   = require('gulp-inline-css');

// Sass -> Compile .scss file to .css in .tmp/ directory
gulp.task('sass', function() {
    return gulp.src('app/styles/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('app/styles/'))
});

gulp.task('clean', require('del').bind(null, ['app/assets/css', 'build']));

// Inline Css -> Apply inline style in .html files
gulp.task('default',['sass'], function() {
    return gulp.src('app/*.html')
        .pipe(inlineCss({ applyStyleTags: true }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('build/'));
});