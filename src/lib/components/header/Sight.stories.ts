import type { Meta, StoryObj } from '@storybook/svelte';
import Sight from './Sight.svelte';

const meta = {
	title: 'Header/AccItems/Sight',
	component: Sight,
	args: {}
} satisfies Meta<Sight>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
