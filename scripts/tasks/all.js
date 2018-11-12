const gulp = require('gulp');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const path = require('path');
const fs = require('fs');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const wrap = require('gulp-wrap');
const replace = require('gulp-replace');
const cleanCSS = require('gulp-clean-css');

const {
  packageFolder,
  cleanCssConfig,
  sassOptions,
  autoprefixer: autoprefixerConfig,
  bootstrap,
  allDist,
  allStyles,
  coreStyles,
  universes,
  srcAll,
  components,
} = require('../config');

const componentsPaths = components.map(compPath =>
  path.join('node_modules/bootstrap/scss', `_${compPath}.scss`)
);

const bypassPartial = filePath => {
  Object.assign(filePath, {
    basename: filePath.basename.replace('_', ''),
  });
};

const folders = [];

const getSubFolders = source =>
  fs
    .readdirSync(source)
    .map(name => ({ source: path.join(source, name), name }))
    .filter(info => fs.statSync(info.source).isDirectory())
    .filter(dir => dir.name !== '__snapshots__');

const getFolders = (packagesDir, subDir = '') => {
  const folds = fs.readdirSync(packagesDir);
  folds.forEach(fold => {
    if (
      (packagesDir === packageFolder && fold === coreStyles) ||
      (packagesDir === packageFolder && fold === allStyles)
    ) {
      return false;
    }
    if (!fs.existsSync(path.join(packagesDir, fold, 'src'))) {
      return getFolders(path.join(packagesDir, fold), path.join(subDir, fold));
    }

    const pkg =
      (fold !== 'core' && subDir !== '') ||
      (fold === 'core' && subDir === 'Form')
        ? `${subDir.replace('\\', '/')}/${fold}`
        : fold;

    const subfolds = getSubFolders(path.join(packagesDir, fold, 'src'));
    if (subfolds.length) {
      subfolds.forEach(({ source, name }) => {
        folders.push({
          path: source,
          pkg,
          sub: name,
        });
      });
    }

    folders.push({
      path: path.join(packagesDir, fold, 'src'),
      pkg,
    });
  });
};

getFolders(packageFolder);

const getImports = () => {
  const arrayFiles = [];
  folders.map(folder => {
    const files = fs.readdirSync(folder.path);
    const filesList = files.filter(
      file => path.extname(file).toLowerCase() === '.scss' && !/^_/.test(file)
    );

    if (filesList.length) {
      filesList.forEach(fileScss => {
        arrayFiles.push(
          `${folder.pkg}/src/${folder.sub ? `${folder.sub}/` : ''}${fileScss}`
        );
      });
    }
  });
  return arrayFiles;
};

gulp.task('bootstrap-theme', () =>
  gulp
    .src(path.join(bootstrap, 'af-bootstrap.scss'))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerConfig))
    .pipe(cleanCSS(cleanCssConfig))
    .pipe(gulp.dest(path.join(allDist, 'style')))
);

gulp.task('af-toolkit-core', () => {
  const arrayFiles = getImports(folders);
  const imports = arrayFiles
    .map(file => `@import '../../../${file}';`)
    .join('\n');

  return gulp
    .src(path.join(srcAll, 'bootstrap', 'af-toolkit-core.template.scss'))
    .pipe(replace(/<%= axaComponents %>/g, imports))
    .pipe(rename({ basename: 'af-toolkit-core' }))
    .pipe(gulp.dest(path.join(allDist, 'style')));
});

gulp.task('af-toolkit-core-build', () =>
  gulp
    .src(path.join(allDist, 'style', 'af-toolkit-core.scss'))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerConfig))
    .pipe(cleanCSS(cleanCssConfig))
    .pipe(gulp.dest(path.join(allDist, 'style')))
);

gulp.task('af-components', () => {
  const arrayFiles = getImports(folders);
  const imports = arrayFiles
    .map(file => `@import '../../../${file}';`)
    .join('\n');
  return gulp
    .src(path.join(srcAll, 'bootstrap', 'af-components.template.scss'))
    .pipe(replace(/<%= axaComponents %>/g, imports))
    .pipe(rename({ basename: 'af-components' }))
    .pipe(gulp.dest(path.join(allDist, 'style')));
});

gulp.task('af-components-build', () =>
  gulp
    .src(path.join(path.join(allDist, 'style'), 'af-components.scss'))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerConfig))
    .pipe(cleanCSS(cleanCssConfig))
    .pipe(gulp.dest(path.join(allDist, 'style')))
);

gulp.task('split-bootstrap-component-universes', () => {
  universes.forEach(universe => {
    gulp
      .src(componentsPaths, { base: 'node_modules/bootstrap/scss' })
      .pipe(
        rename(filePath => {
          bypassPartial(filePath);
          return path;
        })
      )
      .pipe(
        wrap(
          {
            src: path.join(bootstrap, 'universe.template.scss'),
          },
          {
            primary: `$brand-primary: ${universe.value} !default;`,
            name: universe.name,
          },
          {
            parse: false /* do not parse the JSON file for template data */,
          }
        )
      )
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(replace(/(.univers-.+?)\s{1}/g, '$1'))
      .pipe(cleanCSS(autoprefixerConfig))
      .pipe(gulp.dest(path.join(allDist, 'style', 'universes', universe.name)));
  });
});

gulp.task('split-bootstrap-component', () => {
  gulp
    .src(
      [
        'node_modules/bootstrap/scss/_*.scss',
        'node_modules/bootstrap/scss/utilities/_*.scss',
      ],
      {
        base: 'node_modules/bootstrap/scss',
      }
    )
    .pipe(
      rename(filePath => {
        bypassPartial(filePath);
        return filePath;
      })
    )
    .pipe(
      wrap(
        {
          src: path.join(bootstrap, 'common.template.scss'),
        },
        {},
        {
          parse: false /* do not parse the JSON file for template data */,
        }
      )
    )
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(cleanCSS(cleanCssConfig))
    .pipe(gulp.dest(path.join(allDist, 'style', 'bootstrap')));
});

gulp.task('universe-bundle', () => {
  universes.forEach(universe => {
    gulp
      .src(path.join('node_modules/bootstrap/scss/bootstrap.scss'))
      .pipe(
        wrap(
          {
            src: path.join(bootstrap, 'universe.template.scss'),
          },
          {
            primary: `$brand-primary: ${universe.value} !default;`,
            name: universe.name,
          },
          { parse: false }
        )
      )
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(rename({ basename: `af-toolkit-core-${universe.name}` }))
      .pipe(cleanCSS(cleanCssConfig))
      .pipe(gulp.dest(path.join(allDist, 'style', 'universes', universe.name)));
  });
});

gulp.task('all', callback => {
  runSequence(
    ['af-toolkit-core', 'af-components'],
    [
      'bootstrap-theme',
      'split-bootstrap-component-universes',
      'split-bootstrap-component',
      'universe-bundle',
    ],
    ['af-toolkit-core-build', 'af-components-build'],
    callback
  );
});
