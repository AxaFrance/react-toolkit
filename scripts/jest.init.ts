import '@testing-library/jest-dom';

// dialog functions not supported by jsdom
window.HTMLDialogElement.prototype.show = jest.fn(function mock(
  this: HTMLDialogElement
) {
  this.open = true;
});

window.HTMLDialogElement.prototype.showModal = jest.fn(function mock(
  this: HTMLDialogElement
) {
  this.open = true;
});

window.HTMLDialogElement.prototype.close = jest.fn(function mock(
  this: HTMLDialogElement
) {
  this.open = false;
});
