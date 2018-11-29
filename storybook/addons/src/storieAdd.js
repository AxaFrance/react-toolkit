import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme, withDocs } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';
import { setDefaults } from '@storybook/addon-info';

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
});

const addToStorie = (storiesData, module) => {
  const stories = storiesOf(storiesData.name, module);
  stories.addDecorator(withKnobs);
  storiesData.stories.forEach(story => {
    let component = story.component;
    if (story.withInfo !== false) {
      component = withInfo({
        inline: true,
        text: `<h1>Code information</h1>`,
      })(component);
    }
    if (story.docs) {
      component = withDocs(story.docs, component);
    } else if (storiesData.docs) {
      component = withDocs(storiesData.docs, component);
    }
    if (story.readme) {
      component = withReadme(story.readme, component);
    }
    const desc = story.desc || 'Default';
    stories.add(desc, component);
  });
};

export default addToStorie;
