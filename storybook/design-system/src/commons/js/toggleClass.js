

import $ from './selector';

export default (oldClass, newClass) => {
  if ($(oldClass)) {
    $(oldClass).classList.add(newClass);
    $(oldClass).classList.remove(oldClass);
  }
};
