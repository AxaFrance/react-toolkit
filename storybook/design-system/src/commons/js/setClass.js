import setModifier from './setModifier';

const { prefix, prefixjs } = require('../../data/base');

export default (block, modifier, js = false) => {
  let classComponent = `${prefix}-${block}`;

  if (modifier !== '') {
    if (modifier.split(' ').length > 1) {
      classComponent += modifier
        .split(' ')
        .map(mod => ` ${setModifier(`${prefix}-${block}`, mod)}`)
        .join(' ');
    } else {
      classComponent += ` ${setModifier(`${prefix}-${block}`, modifier)}`;
    }
  }
  if (js) {
    classComponent += ` ${prefixjs}-${block}`;
    if (modifier !== '') {
      classComponent += ` ${setModifier(`${prefixjs}-${block}`, modifier)}`;
    }
  }

  return classComponent;
};
