const endWith = (str, suffix) =>
  str.indexOf(suffix, str.length - suffix.length) !== -1;

const isValidNumber = (value) => {
  if (value === null || value === undefined) {
    return false;
  }
  const regex = new RegExp('^\\d+([,.]\\d+)?$', 'gi');
  const success = regex.test(value);
  return success;
};

const parseValueToNumber = (value) => {
  if (!isValidNumber(value)) {
    return null;
  }
  // remplace les , par des .
  let valueTemp = value.replace(/,/g, '.');

  // Supprime le point si c'est le dernier caractère (en cour de saisie)
  if (endWith(value, '.')) {
    valueTemp = value.substring(0, valueTemp.length - 1);
  }

  const number = parseFloat(valueTemp);
  if (number !== null && number !== undefined) {
    return number;
  }

  return null;
};

export default parseValueToNumber;
