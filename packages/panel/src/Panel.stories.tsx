import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Panel from './Panel';
import Readme from '../README.md';

const LABELS = {
  badgeClassList: ['success', 'info', 'danger', 'error'],
  badgeContent: '2',
  title: 'Title',
};

const KNOBS_LABELS = {
  badgeClass: 'badgeClass',
  badgeContent: 'badgeContent',
  title: 'title',
  classModifier: 'classModifier',
};

const Simple = () => (
  <Panel
    title={text(KNOBS_LABELS.title, LABELS.title)}
    classModifier={text(KNOBS_LABELS.classModifier, '')}>
    <Panel.Content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
        similique, quis aliquam temporibus velit ullam, quos quasi? Quod modi
        asperiores incidunt, velit repellendus, totam saepe quaerat voluptates
        cum quo facere.
      </p>
    </Panel.Content>
  </Panel>
);

const WithFooter = () => (
  <>
    <Panel
      title={text(KNOBS_LABELS.title, LABELS.title)}
      classModifier={text(KNOBS_LABELS.classModifier, '')}>
      <Panel.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          similique, quis aliquam temporibus velit ullam, quos quasi? Quod modi
          asperiores incidunt, velit repellendus, totam saepe quaerat voluptates
          cum quo facere.
        </p>
      </Panel.Content>
      <Panel.Footer>
        <a
          className="af-panel__footer-link"
          href="https://www.qwant.com"
          target="_blank"
          rel="noopener noreferrer">
          <svg
            className="glyphicon glyphicon-new-window"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 103 100">
            <path d="M0 65.417q0 13.75 9.792 23.542t23.542 9.792h25q13.583 0 23.458-9.792t9.875-23.542v-8.167l-6.5-6.083-10.167 10.25v12.333q0 3.417-2.458 5.875t-5.875 2.458h-41.667q-3.417 0-5.875-2.458t-2.458-5.875v-41.667q0-3.417 2.458-5.875t5.875-2.458h13l9.833-10.167-6.167-6.5h-8.333q-13.75 0-23.542 9.792t-9.792 23.542v25zM41.333 39.667l29.417-28.5-12.417-12.417h41.667v41.667l-12.417-12.417-28.5 29.417z" />
          </svg>
          <span> Search with Qwant</span>
        </a>
      </Panel.Footer>
    </Panel>
  </>
);

const WithBadge = () => (
  <Panel
    title={text(KNOBS_LABELS.title, LABELS.title)}
    badgeContent={text(KNOBS_LABELS.badgeContent, LABELS.badgeContent)}
    badgeClass={select(
      KNOBS_LABELS.badgeClass,
      LABELS.badgeClassList,
      'success'
    )}
    classModifier={text(KNOBS_LABELS.classModifier, '')}>
    <Panel.Content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
        similique, quis aliquam temporibus velit ullam, quos quasi? Quod modi
        asperiores incidunt, velit repellendus, totam saepe quaerat voluptates
        cum quo facere.
      </p>
    </Panel.Content>
  </Panel>
);

const stories = storiesOf('Panel', module);

stories.addParameters({
  readme: {
    sidebar: Readme,
  },
  options: {},
});

stories.add('Simple', Simple);
stories.add('With footer', WithFooter);
stories.add('With badge', WithBadge);
