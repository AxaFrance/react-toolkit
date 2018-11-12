const gulp = require('gulp');
const clean = require('gulp-clean');
const config = require('config');

gulp.task('clean', () => gulp.src(config.dest, { read: false }).pipe(clean()));
