const path = require('path');

const distFolder = 'dist';
const bootstrapFolder = 'bootstrap';

module.exports = {
  tasks: 'tasks',
  components: 'src/axa-components',
  dest: distFolder,
  destDemo: 'distDemo',
  demo: 'src/demo',
  assets: 'src/common',
  destUniverses: path.join(distFolder, 'universes'),
  destAXAComponents: path.join(distFolder, 'axa-components'),
  destBootstrap: path.join(distFolder, bootstrapFolder),
  bootstrap: path.join('src', bootstrapFolder),
  cleanCssConfig: { compatibility: 'ie9' },
  autoprefixer: {
    browsers: ['last 2 versions'],
    cascade: false,
  },
  destCssFont: './src/common/fonts/icons/',
};
