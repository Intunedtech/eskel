import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Accordion } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Eskel/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    argTypes: {
        title: {control: 'text'},
        body: {control: 'text'},
        footer: {control: 'text'},
        backgroundColor: { control: 'color' },
    },
    args: {
        title: 'My Accordion',
        body: 'This is a body copy',
        footer: 'This is footer',
    }
};