import React from 'react';
import 'highlightjs/styles/default.css';
import 'highlightjs/styles/atom-one-dark.css';
import { Switch, HashRouter, Route } from 'react-router-dom';

import MenuWrap from '../Menu/MenuWrap';
import Menu from '../Menu/Menu';

import Home from '../../components/Home/Home';
import Getstarted from '../../components/Getstarted/Getstarted';
import Contribution from '../../components/Contribution/Contribution';
import Changelog from './../Changelog/Changelog';
import FooterDemo from './../Footer/Footer';

import Header from '../../axaComponents/Header/Header';
import Footer from '../../axaComponents/Footer/Footer';
import FooterClient from '../../axaComponents/FooterClient/FooterClient';
import TitleBar from '../../axaComponents/TitleBar/TitleBar';
import Slider from '../../axaComponents/Slider/Slider';
import Spinner from '../../axaComponents/Spinner/Spinner';
import Logo from '../../axaComponents/Logo/Logo';
import Form from '../../axaComponents/Form/Form';
import StepForm from '../../axaComponents/StepForm/StepForm';
import StepFormNew from '../../axaComponents/StepFormNew/StepFormNew';
import Nav from '../../axaComponents/Nav/Nav';
import Drawer from '../../axaComponents/Drawer/Drawer';
import Button from '../../axaComponents/Button/Button';
import ButtonCircle from '../../axaComponents/ButtonCircle/ButtonCircle';
import ButtonLink from '../../axaComponents/ButtonLink/ButtonLink';
import Badge from '../../axaComponents/Badge/Badge';
import Title from '../../axaComponents/Title/Title';
import Table from '../../axaComponents/Table/Table';
import Accordion from '../../axaComponents/Accordion/Accordion';
import Panel from '../../axaComponents/Panel/Panel';
import Filter from '../../axaComponents/Filter/Filter';
import FilterInline from '../../axaComponents/FilterInline/FilterInline';
import Icons from '../../axaComponents/Icons/Icons';
import Pager from '../../axaComponents/Pager/Pager';
import Paging from '../../axaComponents/Paging/Paging';
import PageForm from '../../axaComponents/PageForm/PageForm';
import PageTable from '../../axaComponents/PageTable/PageTable';
import Alert from '../../axaComponents/Alert/Alert';
import Tabs from '../../axaComponents/Tabs/Tabs';
import Modal from '../../axaComponents/Modal/Modal';
import Popover from '../../axaComponents/Popover/Popover';
import List from '../../axaComponents/List/List';
import Restit from '../../axaComponents/Restitution/Restitution';
import Colors from '../../axaComponents/Colors/Colors';
import Card from './../../axaComponents/Form/components/Card/Card';
import Checkbox from './../../axaComponents/Form/components/Checkbox/Checkbox';
import Radio from './../../axaComponents/Form/components/Radio/Radio';
import Text from './../../axaComponents/Form/components/Text/Text';
import Select from './../../axaComponents/Form/components/Select/Select';
import Textarea from './../../axaComponents/Form/components/Textarea/Textarea';
import File from './../../axaComponents/Form/components/File/File';
import Pass from './../../axaComponents/Form/components/Pass/Pass';
import Datepicker from './../../axaComponents/Form/components/Datepicker/Datepicker';
import Radioswitch from './../../axaComponents/Form/components/Radioswitch/Radioswitch';

import './App.scss';
import '../Tabs/react-tabs.scss';

const App = () => (
  <HashRouter>
    <div id="outer-container" style={{ height: '100%' }}>
      <MenuWrap wait={20}>
        <Menu />
      </MenuWrap>
      <main id="page-wrap">
        <nav className="navbar navbar--toolkit">
          <h1 className="navbar-brand">AF-TOOLKIT-CORE</h1>
          <small className="badge badge-success float-right">({VERSION})</small>
        </nav>
        <section className="col col--toolkit">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/getstarted" component={Getstarted} />
            <Route path="/changelog" component={Changelog} />
            <Route path="/header" component={Header} />
            <Route path="/footer" component={Footer} />
            <Route path="/footer-client" component={FooterClient} />
            <Route exact path="/form" component={Form} />
            <Route path="/form/text" component={Text} />
            <Route path="/form/select" component={Select} />
            <Route path="/form/textarea" component={Textarea} />
            <Route path="/form/file" component={File} />
            <Route path="/form/pass" component={Pass} />
            <Route path="/form/date-picker" component={Datepicker} />
            <Route path="/form/cards" component={Card} />
            <Route path="/form/checkbox" component={Checkbox} />
            <Route path="/form/radio" component={Radio} />
            <Route path="/form/filter" component={Filter} />
            <Route path="/form/filter-inline" component={FilterInline} />
            <Route path="/form/radio-switch" component={Radioswitch} />
            <Route path="/logo" component={Logo} />
            <Route path="/slider" component={Slider} />
            <Route path="/spinner" component={Spinner} />
            <Route path="/step-form" component={StepForm} />
            <Route path="/step-form-new" component={StepFormNew} />
            <Route path="/title-bar" component={TitleBar} />
            <Route path="/nav" component={Nav} />
            <Route path="/drawer" component={Drawer} />
            <Route path="/button" component={Button} />
            <Route path="/button-circle" component={ButtonCircle} />
            <Route path="/button-link" component={ButtonLink} />
            <Route path="/badge" component={Badge} />
            <Route path="/contribution" component={Contribution} />
            <Route path="/title" component={Title} />
            <Route path="/table" component={Table} />
            <Route path="/pager" component={Pager} />
            <Route path="/paging" component={Paging} />
            <Route path="/accordion" component={Accordion} />
            <Route path="/panel" component={Panel} />
            <Route path="/alert" component={Alert} />
            <Route path="/tabs" component={Tabs} />
            <Route path="/icons" component={Icons} />
            <Route path="/modal" component={Modal} />
            <Route path="/popover" component={Popover} />
            <Route path="/list" component={List} />
            <Route path="/restitution" component={Restit} />
            <Route path="/layouts/pageform" component={PageForm} />
            <Route path="/layouts/pagetable" component={PageTable} />
            <Route path="/colors" component={Colors} />
          </Switch>
        </section>
        <FooterDemo />
      </main>
    </div>
  </HashRouter>
);

export default App;
