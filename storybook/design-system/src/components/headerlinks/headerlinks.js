import $ from '../../commons/js/selector';
import { prefix, prefixjs } from '../../data/base.json';

const classBtnOpen = `${prefix}-headerlinks__open`;
const classBtnClose = `${prefix}-headerlinks__close`;
const openModifier = 'opened';
const classHeaderlinks = `${prefixjs}-headerlinks`;
const classHeader = `${prefix}-header`;
const classHeaderOpened = `${prefix}-header--${openModifier}`;
const classHeaderlinksOpened = `${prefix}-headerlinks--${openModifier}`;

class Headerlinks {
  constructor() {
    this.headerlinks = $(classHeaderlinks);
    this.header = $(classHeader);
  }

  init() {
    if (this.isNotExitingElement()) {
      return;
    }
    this.initEvents();
  }

  initEvents() {
    $(classBtnOpen).addEventListener('click', () => this.openHeaderlinks());
    $(classBtnClose).addEventListener('click', () => this.closeHeaderlinks());
  }

  isNotExitingElement() {
    return !this.headerlinks;
  }

  openHeaderlinks() {
    this.headerlinks.classList.add(classHeaderlinksOpened);
    this.header.classList.add(classHeaderOpened);
  }

  closeHeaderlinks() {
    this.headerlinks.classList.remove(classHeaderlinksOpened);
    this.header.classList.remove(classHeaderOpened);
  }
}

export default Headerlinks;
