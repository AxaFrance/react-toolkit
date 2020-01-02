export default keyObject => (a, b) => {
  const objectA = a[keyObject];
  const objectB = b[keyObject];

  let comparison = 0;
  if (objectA > objectB) {
    comparison = 1;
  } else if (objectA < objectB) {
    comparison = -1;
  }
  return comparison;
};
