import $$ from '../../commons/js/selectorAll';
import $ from '../../commons/js/selector';
import { prefix, prefixjs } from '../../data/base.json';

const classJsItemTabs = `${prefixjs}-tabs__nav-item`;
const activeModifier = 'active';
const activeContentClassJs = `${prefix}-tabs__content-item--${activeModifier}`;
const activeNavClassJs = `${prefix}-tabs__nav-item--${activeModifier}`;

class Tabs {
  constructor(selector) {
    this.selector = $(selector);
  }

  init() {
    if (this.isNotExitingElement()) {
      return;
    }
    this.initElements();
    this.initEvents();
  }

  initElements() {
    this.tabNav = this.selector.querySelector(`.${prefix}-tabs__nav`);
    this.tabContent = this.selector.querySelector(`.${prefix}-tabs__content`);
    this.tabs = $$(this.tabNav)(`.${classJsItemTabs}`);
    this.contents = $$(this.tabContent)(`.${classJsItemTabs}`);
  }

  initEvents() {
    [].forEach.call(this.tabs, tab => tab.addEventListener('click', e => this.setActive(e), true));
  }

  setActive(e) {
    this.tabContent
      .querySelector(`:scope > .${activeContentClassJs}`)
      .classList.remove(activeContentClassJs);
    this.tabNav.querySelector(`:scope > .${activeNavClassJs}`).classList.remove(activeNavClassJs);
    e.currentTarget.classList.add(activeNavClassJs);
    this.tabContent
      .querySelector(
        `section[data-id=tabs__content-item--${e.currentTarget.getAttribute('data-nav-id')}]`,
      )
      .classList.add(activeContentClassJs);
  }

  isNotExitingElement() {
    return !this.selector;
  }
}

export default Tabs;
