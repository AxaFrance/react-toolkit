import { create } from '@storybook/theming';
import { version } from '../lerna.json';

export default create({
  base: 'light',
  brandTitle: `Axa React Toolkit v${version}`,
  brandUrl: 'https://axaguildev.github.io/design-system/',
});
