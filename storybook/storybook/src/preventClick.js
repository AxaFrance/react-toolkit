export default next => e => {
  e.preventDefault();
  next(e);
};
