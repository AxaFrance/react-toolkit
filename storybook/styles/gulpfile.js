const gulp = require('gulp');
const requireDir = require('require-dir');
const path = require('path');
const runSequence = require('run-sequence');
const config = require('config');

requireDir(path.resolve(__dirname, config.tasks));

gulp.task('build', (callback) => {
  runSequence('clean', ['template'], callback);
});
