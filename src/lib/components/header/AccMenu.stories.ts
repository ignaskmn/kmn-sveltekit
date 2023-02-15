import type { Meta, StoryObj } from '@storybook/svelte';
import AccMenu from './AccMenu.svelte';

const meta = {
	title: 'Header/AccMenu',
	component: AccMenu,
	args: {}
} satisfies Meta<AccMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
