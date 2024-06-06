import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Countdown } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Eskel/Countdown',
  component: Countdown,
} satisfies Meta<typeof Countdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Following code is equivalent to
//  <Countdown title='My Countdown' body='This is body copy' footer='This is footer' />
export const Default: Story = {
    argTypes: {
    },
    args: {
        timezone: 'Australia/Sydney',
        endTime: new Date(Date.UTC(2025, 5, 10, 12, 5, 32))
    }
};