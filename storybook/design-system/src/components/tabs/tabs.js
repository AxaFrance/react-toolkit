/* eslint-disable arrow-parens */
import $$ from '../../commons/js/selectorAll';
import { prefix, prefixjs } from '../../data/base.json';

const classJsItemTabs = `${prefixjs}-tabs__nav-item`;
const activeModifier = 'active';
const activeContentClassJs = `${prefix}-tabs__content-item--${activeModifier}`;
const activeNavClassJs = `${prefix}-tabs__nav-item--${activeModifier}`;

const setActive = ({ e, tabContent, tabNav }) => {
  tabContent
    .querySelector(`:scope > .${activeContentClassJs}`)
    .classList.remove(activeContentClassJs);
  tabNav.querySelector(`:scope > .${activeNavClassJs}`).classList.remove(activeNavClassJs);
  e.currentTarget.classList.add(activeNavClassJs);
  tabContent
    .querySelector(
      `section[data-id=tabs__content-item--${e.currentTarget.getAttribute('data-nav-id')}]`,
    )
    .classList.add(activeContentClassJs);
};

const initEvents = ({ tabs, ...rest }) => {
  [].forEach.call(tabs, tab => tab.addEventListener('click', e => setActive({ e, ...rest }), true));
};

class Tabs {
  constructor(selector) {
    this.selector = $$(document)(`.${selector}`);
  }

  init() {
    if (this.isNotExitingElement()) {
      return;
    }
    this.initElements();
  }

  initElements() {
    [].forEach.call(this.selector, elt => {
      const tabNav = elt.querySelector(`.${prefix}-tabs__nav`);
      const tabContent = elt.querySelector(`.${prefix}-tabs__content`);
      const tabs = $$(tabNav)(`.${classJsItemTabs}`);
      const contents = $$(tabContent)(`.${classJsItemTabs}`);
      initEvents({
        tabNav,
        tabContent,
        tabs,
        contents,
      });
    });
  }

  isNotExitingElement() {
    return !this.selector;
  }
}

export default Tabs;
