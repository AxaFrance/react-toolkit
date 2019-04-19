import $ from '../../commons/js/selector';
import { prefix, prefixjs } from '../../data/base.json';

const classBtnOpen = `${prefixjs}-icon--open`;
const classBtnClose = `${prefixjs}-icon--close`;
const classJsFooter = `${prefixjs}-footer`;
const classJsContent = `${prefixjs}-content`;
const openModifier = 'opened';
const classMenu = `${prefixjs}-menu`;
const classMenuOpened = `${prefix}-menu--${openModifier}`;
const classFooterOpened = `${prefix}-footer--${openModifier}`;
const classContentOpened = `${prefix}-content--${openModifier}`;

class Menu {
  constructor() {
    this.menu = $(classMenu);
    this.footer = $(classJsFooter);
    this.content = $(classJsContent);
  }

  init() {
    if (this.isNotExitingElement()) {
      return;
    }
    this.initEvents();
  }

  initEvents() {
    $(classBtnOpen).addEventListener('click', () => this.openMenu());
    $(classBtnClose).addEventListener('click', () => this.closeMenu());
    window.onresize = () => this.closeMenu();
  }

  isNotExitingElement() {
    return !this.menu && !this.footer;
  }

  openMenu() {
    this.menu.classList.add(classMenuOpened);
    this.footer.classList.add(classFooterOpened);
    this.content.classList.add(classContentOpened);
  }

  closeMenu() {
    this.menu.classList.remove(classMenuOpened);
    this.footer.classList.remove(classFooterOpened);
    this.content.classList.remove(classContentOpened);
  }
}

export default Menu;
