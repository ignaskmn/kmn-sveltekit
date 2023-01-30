import type { Meta, StoryObj } from '@storybook/svelte';
import MenuDropdown from './MenuDropdown.svelte';

const meta = {
	title: 'Header/MenuDropdown',
	component: MenuDropdown,
	args: {
		isOpen: true
	}
} satisfies Meta<MenuDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
