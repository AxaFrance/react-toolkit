const gulp = require('gulp');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const path = require('path');
const fs = require('fs');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const wrap = require('gulp-wrap');
const config = require('config');
const replace = require('gulp-replace');
const cleanCSS = require('gulp-clean-css');

const components = [
  // Core CSS
  'reboot',
  'type',
  'images',
  'code',
  'grid',
  'tables',
  'forms',
  'buttons',

  // Components
  'animation',
  'dropdown',
  'button-group',
  'input-group',
  'custom-forms',
  'nav',
  'navbar',
  'card',
  'breadcrumb',
  'pagination',
  'tags',
  'jumbotron',
  'alert',
  'progress',
  'media',
  'list-group',
  'responsive-embed',
  'close',

  // Components w/ JavaScript
  'modal',
  'tooltip',
  'popover',
  'carousel',

  // Utility classes
  'utilities',
];
const componentsPaths = components.map(compPath =>
  path.join('node_modules/bootstrap/scss', `_${compPath}.scss`)
);

const universes = [
  {
    name: 'auto',
    value: '#5a8093',
  },
  {
    name: 'habitation',
    value: '#b26ab1',
  },
  {
    name: 'loisirs',
    value: '#00af8f',
  },
  {
    name: 'sante',
    value: '#98bc58',
  },
  {
    name: 'banque',
    value: '#51aad3',
  },
  {
    name: 'epargne',
    value: '#6377ba',
  },
  {
    name: 'entreprise',
    value: '#5e3778',
  },
  {
    name: 'collective',
    value: '#006983',
  },
  {
    name: 'iard',
    value: '#42145f',
  },
  {
    name: 'patrimonial',
    value: '#c5a57f',
  },
  {
    name: 'pros',
    value: '#738b9c',
  },
  {
    name: 'assurbanque',
    value: '#ff1821',
  },
];

const sassConfig = Object.assign({}, config.autoprefixer, {
  includePaths: [
    path.resolve(process.cwd(), config.assets),
    path.resolve(process.cwd(), config.bootstrap),
    path.resolve(process.cwd(), 'node_modules'),
  ],
});

function bypassPartial(filePath) {
  Object.assign(filePath, {
    basename: filePath.basename.replace('_', ''),
  });
}

gulp.task('bootstrap-theme', () =>
  gulp
    .src(path.join(config.bootstrap, 'af-bootstrap.scss'))
    .pipe(sass(sassConfig).on('error', sass.logError))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(cleanCSS(config.cleanCssConfig))
    .pipe(gulp.dest(config.destBootstrap))
);

gulp.task('bootstrap-theme-with-af-components', (cb) => {
  fs.readdir(config.components, (err, files) => {
    const imports = files.map(file => `@import '../axa-components/${file}/${file}';`).join('\n');
    gulp
      .src(path.join(config.bootstrap, 'af-toolkit-core.template.scss'))
      .pipe(replace(/<%= axaComponents %>/g, imports))
      .pipe(sass(sassConfig).on('error', sass.logError))
      .pipe(autoprefixer(config.autoprefixer))
      .pipe(cleanCSS(config.cleanCssConfig))
      .pipe(rename({ basename: 'af-toolkit-core' }))
      .pipe(gulp.dest(config.destBootstrap))
      .on('end', cb);
  });
});

gulp.task('split-bootstrap-component-universes', () => {
  universes.forEach((universe) => {
    gulp
      .src(componentsPaths, { base: 'node_modules/bootstrap/scss' })
      .pipe(
        rename((filePath) => {
          bypassPartial(filePath);
          return path;
        })
      )
      .pipe(
        wrap(
          {
            src: path.join(config.bootstrap, 'universe.template.scss'),
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
      .pipe(sass(sassConfig).on('error', sass.logError))
      .pipe(replace(/(.univers-.+?)\s{1}/g, '$1'))
      .pipe(cleanCSS(config.cleanCssConfig))
      .pipe(gulp.dest(path.join(config.dest, 'universes', universe.name)));
  });
});
gulp.task('split-bootstrap-component', () => {
  gulp
    .src(['node_modules/bootstrap/scss/_*.scss', 'node_modules/bootstrap/scss/utilities/_*.scss'], {
      base: 'node_modules/bootstrap/scss',
    })
    .pipe(
      rename((filePath) => {
        bypassPartial(filePath);
        return filePath;
      })
    )
    .pipe(
      wrap(
        {
          src: path.join(config.bootstrap, 'common.template.scss'),
        },
        {},
        {
          parse: false /* do not parse the JSON file for template data */,
        }
      )
    )
    .pipe(sass(sassConfig).on('error', sass.logError))
    .pipe(cleanCSS(config.cleanCssConfig))
    .pipe(gulp.dest(config.destBootstrap));
});
gulp.task('universe-bundle', () => {
  universes.forEach((universe) => {
    gulp
      .src(path.join('node_modules/bootstrap/scss/bootstrap.scss'))
      .pipe(
        wrap(
          {
            src: path.join(config.bootstrap, 'universe.template.scss'),
          },
          {
            primary: `$brand-primary: ${universe.value} !default;`,
            name: universe.name,
          },
          { parse: false }
        )
      )
      .pipe(sass(sassConfig).on('error', sass.logError))
      .pipe(rename({ basename: `af-toolkit-core-${universe.name}` }))
      .pipe(cleanCSS(config.cleanCssConfig))
      .pipe(gulp.dest(path.join(config.dest, 'universes', universe.name)));
  });
});
gulp.task('universes-af-components', () => {
  universes.forEach((universe) => {
    gulp
      .src(path.join(config.components, '**/*.scss'))
      .pipe(
        wrap(
          {
            src: path.join(config.bootstrap, 'universe.template.scss'),
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
      .pipe(sass(sassConfig).on('error', sass.logError))
      .pipe(cleanCSS(config.cleanCssConfig))
      .pipe(rename({ dirname: '', prefix: 'af-' }))
      .pipe(gulp.dest(path.join(config.dest, 'universes', universe.name)));
  });
});

gulp.task('bootstrap', (callback) => {
  runSequence(
    [
      'bootstrap-theme',
      'bootstrap-theme-with-af-components',
      'split-bootstrap-component-universes',
      'split-bootstrap-component',
      'universe-bundle',
      'universes-af-components',
    ],
    callback
  );
});
