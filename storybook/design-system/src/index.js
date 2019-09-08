import Menu from './components/menu/menu';
import Tabs from './components/tabs/tabs';
import Demo from './components/demo/demo';
import SmoothScrollTo from './components/smoothscrollto/smoothScrollTo';

const menu = new Menu();
const tabsDemo = new Tabs('js-tabs--demo');
const demo = new Demo();
const smoothScrollTo = new SmoothScrollTo('js-smooth-links');

document.addEventListener('DOMContentLoaded', () => {
  menu.init();
  tabsDemo.init();
  demo.init();
  smoothScrollTo.init();
});
