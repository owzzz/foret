/*eslint-disable strict */
'use strict';

const gulp = require('gulp');
const gulpMinify = require('gulp-minify-html');
const CONSTS = require('./constants');
const gulpConnect = require('gulp-connect');


gulp.task('copy', ['copyTemplates', 'copyData', 'copyImages']);

gulp.task('copyTemplates', () => {
	return gulp.src(CONSTS.SRC + '**/*.html')
	.pipe(gulpMinify({ empty: true }))
	.pipe(gulp.dest(CONSTS.DEST))
	.pipe(gulpConnect.reload());
});

gulp.task('copyData', () => {
	return gulp.src(CONSTS.SRC + 'data/**/*.json')
	.pipe(gulp.dest(CONSTS.DEST))
	.pipe(gulpConnect.reload());
});

gulp.task('copyImages', () => {
	return gulp.src(CONSTS.IMG_SRC + '**/')
	.pipe(gulp.dest(CONSTS.IMG_DEST))
	.pipe(gulpConnect.reload());
});

