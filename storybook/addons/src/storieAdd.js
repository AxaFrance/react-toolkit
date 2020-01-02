import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const addToStorie = (storiesData, module) => {
  storiesData.stories.forEach(story => {
    const { component } = story;
    const docs =
      story.docs || story.readme || storiesData.docs || storiesData.readme;

    const stories = storiesOf(storiesData.name, module);
    const decorators = [withInfo, withKnobs];

    stories.addParameters({
      info: {
        header: false,
      },
      readme: {
        sidebar: docs,
      },
    });

    const desc = story.desc || 'Default';
    stories.add(desc, component, { decorators });
  });
};

export default addToStorie;
