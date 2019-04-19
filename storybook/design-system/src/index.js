import Menu from './components/menu/menu';
import Tabs from './components/tabs/tabs';
import Demo from './components/demo/demo';

const menu = new Menu();
const tabs = new Tabs('js-tabs');
const tabsDemo = new Tabs('js-tabs--demo');
const demo = new Demo();

document.addEventListener('DOMContentLoaded', () => {
  menu.init();
  tabs.init();
  tabsDemo.init();
  demo.init();
});
