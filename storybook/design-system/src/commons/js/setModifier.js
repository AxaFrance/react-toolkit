export default (classComponent, modifier) => {
  if (modifier === '' || classComponent === '') {
    return '';
  }
  const classes = classComponent.split(' ');
  if (classes.length > 1) {
    return ` ${classes.map(classe => `${classe}--${modifier}`).join(' ')}`;
  }
  return ` ${classComponent}--${modifier}`;
};
