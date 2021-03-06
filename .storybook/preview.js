import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { viewportsSizes } from '../styles/viewportsSizes';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  viewport: {
    viewports: viewportsSizes
  },
}