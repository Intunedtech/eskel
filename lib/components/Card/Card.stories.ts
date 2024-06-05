import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Card } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Eskel/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Following code is equivalent to
//  <Card title='My Card' body='This is body copy' footer='This is footer' />
export const Default: Story = {
    argTypes: {
        title: {control: 'text'},
        body: {control: 'text'},
        footer: {control: 'text'},
        backgroundColor: { control: 'color' },
    },
    args: {
        title: 'My Card',
        body: 'This is a body copy',
        footer: 'This is footer',
    }
};