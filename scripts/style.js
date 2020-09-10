const sass = require('sass');
const fs = require('fs-extra');
const chalk = require('chalk');
const find = require('find');
const path = require('path');
const autoprefixer = require('autoprefixer');
const CleanCSS = require('clean-css');
const postcss = require('postcss');

const {
  packages,
  src,
  dist,
  assets,
  coreSrc,
  allSrc,
  allDist,
  coreDist,
  autoprefixerConfig,
  cleanCssConfig,
  sassConfig,
  bootstrapModulesDistCss,
} = require('./config');

const colors = require(`../${assets}/scss/colorsList.js`);
const outputPathAll = `${allDist}/style`;
const outputPathBootstrap = `${outputPathAll}/bootstrap`;

const log = (prefix, message, inverse) => {
  const darkGray = '#111111';
  const yellow = '#e8be00';
  const blue = '#0c93f2';
  if (inverse) {
    console.log(
      chalk.hex(blue).bgHex(darkGray)(` ${prefix} `),
      chalk.hex(yellow).bgHex(darkGray)(` ${message} `)
    );
  } else {
    console.log(
      chalk.hex(darkGray).bgHex(blue)(` ${prefix} `),
      chalk.hex(darkGray).bgHex(yellow)(` ${message} `)
    );
  }
};

const logStart = (prefix, inverse = false) => log(prefix, 'Starting', inverse);
const logFinished = (prefix, inverse = false) =>
  log(prefix, 'Finished', inverse);

/**************************************************************************** */
/* Compile SCSS files to CSS files for packages except Core and All package   */
/**************************************************************************** */

const getScssFiles = () => {
  try {
    return find.fileSync(/\.scss$/, packages);
  } catch (err) {
    console.error(err);
  }
};

const cleanPathScssPackagesFiles = allScssFiles =>
  allScssFiles.map(file => file.replace(/\\/g, '/'));

const getScssPackagesFiles = allScssFiles =>
  allScssFiles.filter(
    pathFile =>
      pathFile.includes(`/${src}`) &&
      !pathFile.includes(`${coreSrc}`) &&
      !pathFile.includes(`${packages}/all/${src}`) &&
      !pathFile.includes('/node_modules') &&
      !path.basename(pathFile).startsWith('_')
  );

/**
 * Transform all src/.../file.scss files founded and compile to dist/.../af-file.css
 * All .scss files are copied in /dist
 */
const prepareStylePackages = packagesScssfiles => {
  logStart('Build style packages', true);
  packagesScssfiles.forEach(scssFile => {
    const outputPath = `${path
      .dirname(scssFile)
      .replace(`/${src}`, `/${dist}`)}`;
    const outputName = `/af-${path
      .basename(scssFile)
      .replace(`.scss`, '.css')}`;

    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    renderSass(scssFile, outputPath, outputName);
    fs.copyFileSync(scssFile, `${outputPath}/${path.basename(scssFile)}`);
  });
  logFinished('Build style packages', true);
};

/**
 * Render Sass function
 */
const renderSass = (file, outputPath, outputName) => {
  const outFile = `${outputPath}${outputName}`;
  const result = sass.renderSync({
    file,
    outFile,
    sourceMap: true,
    ...sassConfig,
  });
  writeCssFiles(result, outFile);
};

/**
 * Write CSS files with Autoprefixer and CSS map files
 */
const writeCssFiles = (result, outFile) => {
  postcss([autoprefixer(autoprefixerConfig)])
    .process(result.css, { from: undefined })
    .then(resultAutoprefixed => {
      fs.writeFile(
        outFile,
        new CleanCSS(cleanCssConfig).minify(resultAutoprefixed.css).styles,
        err => {
          if (err) {
            console.log('ERR CSS', err);
          }
        }
      );

      fs.writeFile(`${outFile}.map`, result.map, err => {
        if (err) {
          console.log('ERR MAP', err);
        }
      });
    });
};

/**************************************************************************** */
/* Generate and Compile SCSS files to CSS files for /all package              */
/**************************************************************************** */

const setFileImport = filePath => {
  const fileSplit = filePath.split('/src/');
  const basePath = fileSplit[0]
    .replace('packages/', '')
    .replace(/\//g, '-')
    .toLowerCase();
  return `@import '@axa-fr/react-toolkit-${basePath}/src/${fileSplit[1]}';`;
};

/**
 * generation package /all Scss
 */
const generateAfToolkitCore = packagesScssfiles => {
  logStart('af-toolkit-core', true);
  const imports = packagesScssfiles
    .map(scssFile => setFileImport(scssFile))
    .join('\n');

  generateContentScss(imports, 'af-toolkit-core');
  generateContentScss(imports, 'af-components');
  logFinished('af-toolkit-core', true);
};

const generateContentScss = (imports, name) => {
  const template = fs.readFileSync(
    `${path.join(allSrc, 'bootstrap', `${name}.template.scss`)}`,
    'utf8'
  );
  const content = template.replace(/<%= axaComponents %>/g, imports);

  if (!fs.existsSync(outputPathAll)) {
    fs.mkdirSync(outputPathAll, { recursive: true });
  }
  fs.writeFileSync(`${outputPathAll}/${name}.scss`, content);
  renderSass(
    `${outputPathAll}/${name}.scss`,
    `${outputPathAll}/`,
    `${name}.css`
  );
};

/**************************************************************************** */
/* Generate Colors variables SASS files                                       */
/**************************************************************************** */

const generateColorsSassFile = () => {
  logStart('Colors Sass File', true);
  const outputColors = ['// stylelint-disable color-no-hex'];
  Object.keys(colors).forEach(key => {
    outputColors.push(`// ${key}`);
    colors[key].forEach(listColors => {
      listColors.forEach(color => {
        outputColors.push(
          `$${color.name}: ${color.hex}${color.default ? ' !default' : ''};`
        );
      });
    });
  });
  outputColors.push(''); // last line
  fs.writeFileSync(
    `${assets}/scss/_custom-af-colorsvariables.scss`,
    outputColors.join('\n')
  );
  logFinished('Colors Sass File', true);
};

/**************************************************************************** */
/* Copy Core files                                                            */
/**************************************************************************** */

const copyCoreFiles = () => {
  logStart('Copy Core File', true);
  try {
    if (!fs.existsSync(path.join(coreDist, 'assets'))) {
      fs.mkdirSync(path.join(coreDist, 'assets'), { recursive: true });
    }
    const coreDistAssets = path.join(coreDist, 'assets');

    if (!fs.existsSync(path.join(coreDistAssets, 'scss'))) {
      fs.mkdirSync(path.join(coreDistAssets, 'scss'), { recursive: true });
    }
    if (!fs.existsSync(path.join(coreDistAssets, 'fonts'))) {
      fs.mkdirSync(path.join(coreDistAssets, 'fonts'), { recursive: true });
    }
    if (!fs.existsSync(path.join(coreDistAssets, 'fonts/icons'))) {
      fs.mkdirSync(path.join(coreDistAssets, 'fonts/icons'), {
        recursive: true,
      });
    }
    if (!fs.existsSync(path.join(coreDistAssets, 'icons'))) {
      fs.mkdirSync(path.join(coreDistAssets, 'icons'), { recursive: true });
    }
    fs.copySync(path.join(assets, 'scss'), path.join(coreDistAssets, 'scss'));
    fs.copySync(path.join(assets, 'fonts'), path.join(coreDistAssets, 'fonts'));
    fs.copySync(path.join(assets, 'icons'), path.join(coreDistAssets, 'icons'));
    fs.copySync(
      path.join(assets, 'legacy/icons'),
      path.join(coreDistAssets, 'fonts/icons')
    );
    fs.copySync(
      path.join(assets, 'favicon.ico'),
      path.join(coreDistAssets, 'favicon.ico')
    );
    fs.copySync(
      path.join(assets, 'logo-axa.svg'),
      path.join(coreDistAssets, 'logo-axa.svg')
    );
    fs.copySync(
      path.join(assets, 'legacy/icons-sprite.svg'),
      path.join(coreDistAssets, 'icons-sprite.svg')
    );
  } catch (err) {
    console.error(err);
  }
  logFinished('Colors Sass File', true);
};

/**************************************************************************** */
/* Copy Bootstrap files                                                            */
/**************************************************************************** */

const copyBootstrapFiles = () => {
  logStart('Copy Bootstrap Files', true);
  try {
    if (!fs.existsSync(outputPathBootstrap)) {
      fs.mkdirSync(outputPathBootstrap, { recursive: true });
    }

    fs.copySync(
      path.join(bootstrapModulesDistCss, 'bootstrap-grid.min.css'),
      path.join(outputPathBootstrap, 'grid.css')
    );

    fs.copySync(
      path.join(bootstrapModulesDistCss, 'bootstrap-reboot.min.css'),
      path.join(outputPathBootstrap, 'reboot.css')
    );
  } catch (err) {
    console.error(err);
  }
  logFinished('Copy Bootstrap Files', true);
};

/**************************************************************************** */
/* Main                                                                       */
/**************************************************************************** */
try {
  logStart('Build Style Files');
  generateColorsSassFile();
  const scssFiles = getScssFiles() || [];
  const cleanedScssFiles = cleanPathScssPackagesFiles(scssFiles);
  const packagesScssfiles = getScssPackagesFiles(cleanedScssFiles);
  prepareStylePackages(packagesScssfiles);
  generateAfToolkitCore(packagesScssfiles);
  copyCoreFiles();
  copyBootstrapFiles();
} catch (err) {
  console.error(err);
} finally {
  logFinished('Build Style Files');
}
