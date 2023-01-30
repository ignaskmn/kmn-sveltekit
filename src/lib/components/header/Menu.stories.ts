import type { Meta, StoryObj } from '@storybook/svelte';
import Menu from './Menu.svelte';

const meta = {
	title: 'Header/Menu',
	component: Menu,
	args: {}
} satisfies Meta<Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
