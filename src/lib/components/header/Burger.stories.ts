import type { Meta, StoryObj } from '@storybook/svelte';
import Burger from './Burger.svelte';

const meta = {
	title: 'Header/Burger',
	component: Burger,
	args: {}
} satisfies Meta<Burger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
