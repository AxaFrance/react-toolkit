const gulp = require('gulp');
const fs = require('fs');
const { assets } = require('../config');

const colors = require(`../../${assets}/scss/colorsList.js`);

gulp.task('variablesColors', () => {
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
});
