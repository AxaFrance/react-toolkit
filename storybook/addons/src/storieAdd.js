import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { withInfo, setDefaults } from '@storybook/addon-info';

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
});

const addToStorie = (storiesData, module) => {
  storiesData.stories.forEach(story => {
    const stories = storiesOf(storiesData.name, module);
    stories.addDecorator(withKnobs);
    const { component } = story;
    const theLocalDocs = story.docs || story.readme;
    const theGlobalDocs = storiesData.docs || storiesData.readme;
    if (theLocalDocs) {
      stories.addDecorator(withReadme(theLocalDocs));
    } else if (theGlobalDocs) {
      stories.addDecorator(withReadme(theGlobalDocs));
    }
    if (story.withInfo !== false) {
      stories.addDecorator(withInfo());
    }
    const desc = story.desc || 'Default';
    stories.add(desc, component);
  });
};

export default addToStorie;
