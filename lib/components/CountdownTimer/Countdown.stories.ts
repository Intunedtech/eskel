import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import {CountdownTimer} from './index';
import { getTimestampOneDayAhead } from './Countdown.utils';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Eskel/CountdownTimer',
  component: CountdownTimer,
} satisfies Meta<typeof CountdownTimer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    argTypes: {
    },
    args: {
      endTimestamp: getTimestampOneDayAhead(),
      message: "Countdown has ended"
    }
};