import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Accordion from './Accordion';
import CollapseCard from './CollapseCard';
import readme from '../README.md';

export default {
  title: 'Accordion',
  component: Accordion,
  parameters: {
    readme: {
      sidebar: readme,
    },
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta;

type TemplateProps = Omit<ComponentProps<typeof Accordion>, 'children'>;
const Template: Story<TemplateProps> = ({ ...args }) => (
  <Accordion {...args}>
    <CollapseCard onToggle={action('onToggle')}>
      <CollapseCard.Header>CollpaseCard #1 Title</CollapseCard.Header>
      <CollapseCard.Body>
        Collapsible #1 content Anim pariatur cliche reprehenderit, enim eiusmod
        high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
        squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
        sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
        you probably haven’t heard of them accusamus labore sustainable VHS.
      </CollapseCard.Body>
    </CollapseCard>
    <CollapseCard onToggle={action('onToggle')}>
      <CollapseCard.Header>CollpaseCard #2 Title</CollapseCard.Header>
      <CollapseCard.Body>
        Collapsible #2 content Anim pariatur cliche reprehenderit, enim eiusmod
        high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
        squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
        sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
        you probably haven’t heard of them accusamus labore sustainable VHS.
      </CollapseCard.Body>
    </CollapseCard>
    <CollapseCard onToggle={action('onToggle')}>
      <CollapseCard.Header>CollpaseCard #3 Title</CollapseCard.Header>
      <CollapseCard.Body>
        Collapsible #3 content Anim pariatur cliche reprehenderit, enim eiusmod
        high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
        squid single-origin coffee nulla assumenda shoreditch et. Nihil anim
        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
        sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
        you probably haven’t heard of them accusamus labore sustainable VHS.
      </CollapseCard.Body>
    </CollapseCard>
  </Accordion>
);

export const AccordionStory = Template.bind({}) as typeof Template;
AccordionStory.storyName = 'Default';
AccordionStory.args = {
  onlyOne: true,
  className: '',
  classModifier: '',
};
