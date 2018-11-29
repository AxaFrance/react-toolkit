import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import addToStorie from '@axa-fr/storybook-addons';
import {
  CollapseCard,
  CollapseCardBase,
  Accordion,
} from '@axa-fr/react-toolkit-collapse';

const readme = require('@axa-fr/react-toolkit-collapse/dist/README.md');

const LABELS = {
  desc: 'CollapseCard',
  desc2: 'CollapseCardBase',
  desc3: 'Accordion',
  collapse1: {
    title: 'Collapsible Group Item #1',
    text:
      'Collapsible content 1 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven’t heard of them accusamus labore sustainable VHS.',
    textb: ' bold text',
  },
  collapse2: {
    title: 'Collapsible Group Item #2',
    text:
      'Collapsible content 2 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven’t heard of them accusamus labore sustainable VHS.',
  },
  collapse3: {
    title: 'Collapsible Group Item #3',
    text:
      'Collapsible content 3 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven’t heard of them accusamus labore sustainable VHS.',
  },
};

const KNOBS_LABELS = {
  collapse1: {
    title: 'Collapsible 1 title',
    text: 'Collapsible 1 text',
    textb: 'Collapsible 1 bold text',
  },
  collapse2: {
    title: 'Collapsible 2 title',
    text: 'Collapsible 2 text',
  },
  collapse3: {
    title: 'Collapsible 3 title',
    text: 'Collapsible 3 text',
  },
};

const stories = [];

stories.push({
  desc: LABELS.desc,
  component: () => (
    <CollapseCard
      defaultCollapse={boolean('defaultCollapse', true)}
      classModifier={text('classModifier', '')}
      className={text('className', '')}
      id={text('id', 'uniqueid')}>
      <CollapseCard.Header>
        {text(KNOBS_LABELS.collapse1.title, LABELS.collapse1.title)}
      </CollapseCard.Header>
      <CollapseCard.Body>
        {text(KNOBS_LABELS.collapse1.text, LABELS.collapse1.text)}
        <b>{text(KNOBS_LABELS.collapse1.textb, LABELS.collapse1.textb)}</b>
      </CollapseCard.Body>
    </CollapseCard>
  ),
});

stories.push({
  desc: LABELS.desc2,
  component: () => (
    <CollapseCardBase
      collapse={boolean('collapse', true)}
      onToggle={action('onToggle')}
      classModifier={text('classModifier', '')}
      className={text('className', '')}
      id={text('id', 'uniqueid')}>
      <CollapseCard.Header>
        {text(KNOBS_LABELS.collapse1.title, LABELS.collapse1.title)}
      </CollapseCard.Header>
      <CollapseCard.Body>
        {text(KNOBS_LABELS.collapse1.text, LABELS.collapse1.text)}
        <b>{text(KNOBS_LABELS.collapse1.textb, LABELS.collapse1.textb)}</b>
      </CollapseCard.Body>
    </CollapseCardBase>
  ),
});

stories.push({
  desc: LABELS.desc3,
  component: () => (
    <Accordion
      classModifier={text('classModifier', '')}
      className={text('className', '')}
      onlyOne={boolean('onlyOne', true)}>
      <CollapseCardBase collapse={false}>
        <CollapseCard.Header>
          {text(KNOBS_LABELS.collapse1.title, LABELS.collapse1.title)}
        </CollapseCard.Header>
        <CollapseCard.Body>
          {text(KNOBS_LABELS.collapse1.text, LABELS.collapse1.text)}
          <b>{text(KNOBS_LABELS.collapse1.textb, LABELS.collapse1.textb)}</b>
        </CollapseCard.Body>
      </CollapseCardBase>

      <CollapseCardBase>
        <CollapseCard.Header>
          {text(KNOBS_LABELS.collapse2.title, LABELS.collapse2.title)}
        </CollapseCard.Header>
        <CollapseCard.Body>
          {text(KNOBS_LABELS.collapse2.text, LABELS.collapse2.text)}
        </CollapseCard.Body>
      </CollapseCardBase>

      <CollapseCardBase collapse={false}>
        <CollapseCard.Header>
          {text(KNOBS_LABELS.collapse3.title, LABELS.collapse3.title)}
        </CollapseCard.Header>
        <CollapseCard.Body>
          {text(KNOBS_LABELS.collapse3.text, LABELS.collapse3.text)}
        </CollapseCard.Body>
      </CollapseCardBase>
    </Accordion>
  ),
});

stories.push({
  desc: 'Accordion single',
  component: () => (
    <Accordion
      classModifier={text('classModifier', '')}
      className={text('className', '')}
      onlyOne={boolean('onlyOne', true)}>
      <CollapseCardBase id="idcollaspe1">
        <CollapseCard.Header>
          {text(KNOBS_LABELS.collapse1.title, LABELS.collapse1.title)}
        </CollapseCard.Header>
        <CollapseCard.Body>
          {text(KNOBS_LABELS.collapse1.text, LABELS.collapse1.text)}
          <b>{text(KNOBS_LABELS.collapse1.textb, LABELS.collapse1.textb)}</b>
        </CollapseCard.Body>
      </CollapseCardBase>
    </Accordion>
  ),
});

const storyData = {
  name: 'Collapse',
  docs: readme,
  stories: stories,
};

addToStorie(storyData, module);
