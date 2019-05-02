const { prefix, prefixjs } = require('../../data/base');

export default (block, active, index) => {
  const baseClass = `${prefix}-${block}`;
  return `${
    active === index ? `${baseClass} ${baseClass}--active` : baseClass
  } ${prefixjs}-${block}`;
};
