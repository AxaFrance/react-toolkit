const fs = require('fs');
const gulp = require('gulp');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const wrap = require('gulp-wrap');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const path = require('path');
const clean = require('gulp-clean');
const shell = require('gulp-shell');

const {
  packageFolder,
  srcFolder,
  distFolder,
  cleanCssConfig,
  sassOptions,
  autoprefixerOptions,
  bootstrap,
  allStyles,
  coreStyles,
} = require('../config');

const allFolders = [];

const getFolders = packagesDir => {
  const folds = fs.readdirSync(packagesDir);
  folds.forEach(fold => {
    if (!fs.existsSync(path.join(packagesDir, fold, 'src'))) {
      return getFolders(path.join(packagesDir, fold));
    }
    allFolders.push(path.join(packagesDir, fold));
  });
};

getFolders(packageFolder);

const folders = allFolders.filter(
  folder =>
    folder !== path.join(packageFolder, coreStyles) &&
    folder !== path.join(packageFolder, allStyles)
);

gulp.task('clean', () =>
  allFolders.map(folder =>
    gulp.src(`${path.join(folder, distFolder)}`, { read: false }).pipe(clean())
  )
);

/* Suppression des package_lock.json */

gulp.task('clearlock', () => {
  allFolders.map(folder =>
    gulp.src(`${path.join(folder)}/package-lock.json`).pipe(clean())
  );
  gulp.src(`./storybook/addons/package-lock.json`).pipe(clean());
  gulp.src(`./storybook/storybook/package-lock.json`).pipe(clean());
  gulp.src(`./storybook/styles/package-lock.json`).pipe(clean());
  gulp.src(`./storybook/design-system/package-lock.json`).pipe(clean());
});

gulp.task('generatelock', () => {
  /* allFolders.map(folder =>
    gulp
      .src(`${path.join(folder)}/package.json`)
      .pipe(shell([`npm i --prefix ${folder}`]))
  ); */
  //gulp.src(`./storybook/addons/package.json`).pipe(shell([`npm i --prefix`]));
  /* gulp
    .src(`./storybook/storybook/package.json`)
    .pipe(shell([`npm i --prefix`]));
  gulp.src(`./storybook/styles/package.json`).pipe(shell([`npm i --prefix`])); */
  gulp
    .src(`./storybook/design-system/package.json`)
    .pipe(shell([`npm i --prefix ./`]));
});

gulp.task('sass', () =>
  folders.map(folder =>
    gulp
      .src(`${path.join(folder, srcFolder)}/**/*.scss`)
      .pipe(
        wrap(
          {
            src: path.join(bootstrap, 'common.template.scss'),
          },
          {},
          { parse: false /* do not parse the JSON file for template data */ }
        )
      )
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(cleanCSS(cleanCssConfig))
      .pipe(
        rename({
          prefix: 'af-',
        })
      )
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(`${path.join(folder, distFolder)}`))
  )
);

gulp.task('copy-sass', () =>
  folders.map(folder =>
    gulp
      .src(`${path.join(folder, srcFolder)}/**/*.scss`)
      .pipe(gulp.dest(`${path.join(folder, distFolder)}`))
  )
);

gulp.task('style', callback => {
  runSequence(['sass', 'copy-sass'], callback);
});
