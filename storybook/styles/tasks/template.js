const gulp = require('gulp');
const pug = require('gulp-pug');
const config = require('config');

gulp.task('template', () =>
  gulp.src(`${config.components}/**/*.pug`).pipe(pug()).pipe(gulp.dest(config.dest))
);
