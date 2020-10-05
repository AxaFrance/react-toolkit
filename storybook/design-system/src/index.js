import Menu from './components/menu/menu';
import Headerlinks from './components/headerlinks/headerlinks';
import Tabs from './components/tabs/tabs';
import Demo from './components/demo/demo';
import SmoothScrollTo from './components/smoothscrollto/smoothScrollTo';

const menu = new Menu();
const headerlinks = new Headerlinks();
const tabs = new Tabs('js-tabs--main');
const tabsDemo = new Tabs('js-tabs--demo');
const demo = new Demo();
const smoothScrollTo = new SmoothScrollTo('js-smooth-links');

document.addEventListener('DOMContentLoaded', () => {
  headerlinks.init();
  menu.init();
  tabs.init();
  tabsDemo.init();
  demo.init();
  smoothScrollTo.init();
});
