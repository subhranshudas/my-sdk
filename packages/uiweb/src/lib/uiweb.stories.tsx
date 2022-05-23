import { Story, Meta } from '@storybook/react';
import { Uiweb, UiwebProps } from './uiweb';

export default {
  component: Uiweb,
  title: 'Uiweb',
} as Meta;

const Template: Story<UiwebProps> = (args) => <Uiweb {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
