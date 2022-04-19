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
    language: { type: 'string' },
    stay: { type: 'boolean' }
  }
};

const template = args => <Space404 {...args} />;
template.args = { countdown: 10 };

export const English = template.bind({});
English.args = {
  ...template.args,
  language: 'en',
  href: '/iframe.html?id=space-404--english'
};

export const Chinese = template.bind({});
Chinese.args = {
  ...template.args,
  language: 'chs',
  href: '/iframe.html?id=space-404--chinese'
};

export default meta;