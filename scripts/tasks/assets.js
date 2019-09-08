const gulp = require('gulp');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const rename = require('gulp-rename');
const path = require('path');
const iconfont = require('gulp-iconfont');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const replace = require('gulp-replace');
const iconfontHtml = require('gulp-iconfont-template');

const {
  assets,
  coreDist,
  coreSrc,
  cleanCssConfig,
  autoprefixer: autoprefixerConfig,
} = require('../config');

const runTimestamp = Math.round(Date.now() / 1000);

gulp.task('svgstore', () =>
  gulp
    .src(path.join(assets, 'icons', '*.svg'))
    .pipe(
      svgmin(file => {
        const prefix = path.basename(
          file.relative,
          path.extname(file.relative)
        );
        return {
          plugins: [
            {
              cleanupIDs: {
                prefix: `${prefix}-`,
                minify: true,
              },
            },
          ],
        };
      })
    )
    .pipe(svgstore())
    .pipe(rename({ basename: 'icons-sprite' }))
    .pipe(gulp.dest(coreDist))
);

gulp.task('copymedia', () =>
  gulp
    .src(path.join(assets, '*.{ico,png,gif,jpg,svg}'))
    .pipe(gulp.dest(coreDist))
);

gulp.task('copysvg', () =>
  gulp
    .src(path.join(assets, 'icons', '*.svg'))
    .pipe(gulp.dest(path.join(coreDist, 'icons')))
);

gulp.task('copycore', () =>
  gulp
    .src(path.join(assets, 'scss', '*.{scss,js}'))
    .pipe(gulp.dest(path.join(coreDist, 'scss')))
);

gulp.task('copyfonttypo', () =>
  gulp
    .src(path.join(assets, 'fonts/typo', '*.*'))
    .pipe(gulp.dest(path.join(coreDist, 'fonts/typo')))
);

gulp.task('iconfont', () =>
  gulp
    .src(path.join(assets, 'icons', '*.svg'))
    .pipe(
      iconfontHtml({
        fontName: 'af-icons',
        cssClass: 'glyphicon',
        path: path.join(assets, 'templates/template.txt'),
        targetPath: path.join('../../templates', 'template.pug'),
      })
    )
    .pipe(
      iconfont({
        fontName: 'icons', // required
        prependUnicode: false,
        formats: ['ttf', 'eot', 'woff', 'svg'], // default, 'woff2' and 'svg' are available
        timestamp: runTimestamp, // recommended to get consistent builds when watching files
      })
    )
    .on('glyphs', glyphs => {
      gulp
        .src(path.join(coreSrc, 'icons/icons.template.scss'))
        .pipe(
          replace(
            /<%= icons %>/g,
            glyphs
              .map(
                glyph =>
                  `(${glyph.name}, '${glyph.unicode[0]
                    .charCodeAt(0)
                    .toString(16)
                    .toUpperCase()}')`
              )
              .join(',')
          )
        )
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerConfig))
        .pipe(cleanCSS(cleanCssConfig))
        .pipe(rename({ basename: 'af-icons' }))
        .pipe(gulp.dest(path.join(coreDist, 'fonts/icons')));
    })
    .pipe(gulp.dest(path.join(coreDist, 'fonts/icons')))
);

gulp.task('copyiconfontcsstosass', () =>
  gulp
    .src(path.join(coreDist, 'fonts/icons', '*.css'))
    .pipe(rename({ extname: '.scss' }))
    .pipe(gulp.dest(path.join(coreDist, 'fonts/icons')))
);

gulp.task('assets', callback => {
  runSequence(
    'copymedia',
    'svgstore',
    'iconfont',
    'copysvg',
    'copycore',
    'copyfonttypo',
    'copyiconfontcsstosass',
    callback
  );
});
