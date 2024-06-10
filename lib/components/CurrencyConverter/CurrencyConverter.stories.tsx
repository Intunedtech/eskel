import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import CurrencyConverter from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Eskel/Currency Converter',
  component: CurrencyConverter,
} satisfies Meta<typeof CurrencyConverter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    argTypes: {
    },
    args: {
      
    }
};