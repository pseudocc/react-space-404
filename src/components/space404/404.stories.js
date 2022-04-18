import React from 'react';
import Space404 from './404';

/**
 * @type {import('@storybook/react').Meta}
 */
const meta = {
  title: 'Space 404',
  component: Space404,
  argTypes: {
    countdown: { type: 'number' },
    href: { type: 'string' },
    language: { type: 'string' }
  }
};

const template = args => <Space404 {...args} />;

export const English = template.bind({});
English.args = { language: 'en' };

export const Chinese = template.bind({});
Chinese.args = { language: 'chs' };

export default meta;