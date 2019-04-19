import $$ from '../../commons/js/selectorAll';
import { prefix, prefixjs } from '../../data/base.json';

const classJsOpen = `${prefixjs}-icon--demo-open`;
const classJsClose = `${prefixjs}-icon--demo-close`;
const activeModifier = 'fullscreen';
const classDisplay = `${prefix}-demo__display`;

const openFullScreen = e => {
  e.currentTarget.closest(`.${classDisplay}`).classList.add(`${classDisplay}--${activeModifier}`);
};

const closeFullScreen = e => {
  e.currentTarget
    .closest(`.${classDisplay}--${activeModifier}`)
    .classList.remove(`${classDisplay}--${activeModifier}`);
};

class Demo {
  constructor() {
    this.openElts = $$(document)(`.${classJsOpen}`);
    this.closeElts = $$(document)(`.${classJsClose}`);
  }

  init() {
    if (this.isNotExitingElement()) {
      return;
    }

    this.initEvents();
  }

  initEvents() {
    [].forEach.call(this.openElts, elt =>
      elt.addEventListener('click', e => openFullScreen(e), true),
    );
    [].forEach.call(this.closeElts, elt =>
      elt.addEventListener('click', e => closeFullScreen(e), true),
    );
  }

  isNotExitingElement() {
    return !this.openElts || !this.closeElts;
  }
}

export default Demo;
