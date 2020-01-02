import { prefix, prefixjs } from '../../data/base.json';

const classJsItemTabs = `${prefixjs}-tabs__nav-item`;
const activeModifier = 'active';
const activeContentClassJs = `${prefix}-tabs__content-item--${activeModifier}`;
const activeNavClassJs = `${prefix}-tabs__nav-item--${activeModifier}`;

const setActive = (e) => {
  const target = e.currentTarget;
  const targetTab = target.closest(`.${prefix}-tabs`);
  targetTab.querySelector(`.${activeContentClassJs}`).classList.remove(activeContentClassJs);
  targetTab.querySelector(`.${activeNavClassJs}`).classList.remove(activeNavClassJs);
  target.classList.add(activeNavClassJs);
  targetTab
    .querySelector(`section[data-id=tabs__content-item--${target.getAttribute('data-nav-id')}]`)
    .classList.add(activeContentClassJs);
};

const initEvents = (tabNavItems) => {
  [].forEach.call(tabNavItems, tab => tab.addEventListener('click', e => setActive(e), true));
};

class Tabs {
  constructor(selector) {
    this.tabs = document.querySelectorAll(`.${selector}`);
  }

  init() {
    if (this.isNotExitingElement()) {
      return;
    }
    this.initElements();
  }

  initElements() {
    [].forEach.call(this.tabs, (tab) => {
      const tabNav = tab.querySelector(`.${prefix}-tabs__nav`);
      const tabNavItems = tabNav.querySelectorAll(`.${classJsItemTabs}`);
      initEvents(tabNavItems);
    });
  }

  isNotExitingElement() {
    return !this.tabs;
  }
}

export default Tabs;
