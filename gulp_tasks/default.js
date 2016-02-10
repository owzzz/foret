/*eslint-disable strict */
'use strict';

const gulp = require('gulp');

gulp.task('default', () => {
	gulp.start('build');
});

gulp.task('build', ['clean', 'copy', 'sass', 'scripts', 'copyImages']);

gulp.task('local', ['clean', 'copy', 'sass', 'scripts', 'copyImages', 'connect']);
