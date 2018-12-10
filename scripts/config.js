const path = require('path');

const srcFolder = 'src';
const distFolder = 'dist';
const packageFolder = 'packages';
const bootstrapFolder = 'bootstrap';
const tasks = './scripts/tasks';
const coreStyles = 'core';
const allStyles = 'all';
const coreSrc = path.join(packageFolder, coreStyles, srcFolder);
const coreDist = path.join(packageFolder, coreStyles, distFolder, 'assets');
const srcAll = path.join(packageFolder, allStyles, srcFolder);
const allDist = path.join(packageFolder, allStyles, distFolder);
const assets = `${coreSrc}/common`;
const bootstrap = `${coreSrc}/${bootstrapFolder}`;

const autoprefixer = {
  browsers: ['last 2 versions'],
  cascade: false,
};

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

module.exports = {
  assets,
  tasks,
  coreSrc,
  srcFolder,
  coreDist,
  distFolder,
  packageFolder,
  cleanCssConfig: { compatibility: 'ie9' },
  autoprefixer,
  bootstrap,
  sassOptions: Object.assign(
    {
      errLogToConsole: true,
      outputStyle: 'compressed',
    },
    autoprefixer,
    {
      includePaths: [
        path.resolve(process.cwd(), assets),
        path.resolve(process.cwd(), bootstrap),
        path.resolve(process.cwd(), 'node_modules'),
        path.resolve(process.cwd(), `packages/all/node_modules`),
      ],
    }
  ),
  universes,
  components,
  allDist,
  srcAll,
  allStyles,
  coreStyles,
};
