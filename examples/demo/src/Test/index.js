import React from 'react';
import { Tabs } from '@axa-fr/react-toolkit-all';
import Title from 'shared/Title';
import './test.scss';

const Test = () => (
  <>
    <Title backHome>Test Tabs</Title>
    <div className="af-confirm">
      <Tabs>
        <Tabs.Tab title="React">Content of React</Tabs.Tab>
        <Tabs.Tab title="Sass">Content of Sass</Tabs.Tab>
        <Tabs.Tab title="Storybook">Content of Storybook</Tabs.Tab>
        <Tabs.Tab title="Lerna">Content of Lerna</Tabs.Tab>
      </Tabs>
    </div>
  </>
);

export default Test;
