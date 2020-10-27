import classNames from 'classnames';

const getClassWithoutModifier = (classNameToUse: string) => {
  let classWithoutModifier: string = null;
  if (classNameToUse) {
    const classes = classNameToUse.split(' ').reverse();
    classWithoutModifier = classes.find((c) => !!c);
  }
  return classWithoutModifier;
};

const listClassModifier = (classModifier: string) => {
  if (classModifier) {
    return classModifier.split(' ');
  }
  return null;
};

const getComponentClassName = (
  className?: string | null,
  classModifier?: string | null,
  defaultClassName?: string | null
) => {
  const classNameToUse = className || defaultClassName || null;

  const classWithoutModifier = getClassWithoutModifier(classNameToUse);
  const modifiers = listClassModifier(classModifier);

  const modifiersObject: any = {};
  if (modifiers) {
    modifiers.forEach((modifier) => {
      if (/\S/.test(modifier)) {
        modifiersObject[
          `${classWithoutModifier}--${modifier}`
        ] = classNameToUse;
      }
    }, this);
  }

  const componentClassName = classNames(classNameToUse, modifiersObject);
  return componentClassName;
};

export default {
  getComponentClassName,
};
