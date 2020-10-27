const castToArray = (arrayOrNot) =>
  Array.isArray(arrayOrNot) ? arrayOrNot : [arrayOrNot];

export default { castToArray };
