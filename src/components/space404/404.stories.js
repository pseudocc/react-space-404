import React from 'react';
import Space404 from './404';

/**
 * @type {import('@storybook/react').Meta}
 */
const meta = {
  title: 'Space 404',
  component: Space404
};

const template = args => <Space404 {...args} />;

export const English = template.bind({});
export const Chinese = template.bind({ args: { language: 'chs' } });

export default meta;