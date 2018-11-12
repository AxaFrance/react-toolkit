const gulp = require('gulp');
const path = require('path');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');
const { tasks } = require('./scripts/config');

requireDir(path.resolve(__dirname, tasks));

gulp.task('prepare', callback => {
  runSequence('variablesColors', 'style', 'all', 'assets', callback);
});
