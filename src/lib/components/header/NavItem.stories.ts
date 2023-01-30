import type { Meta, StoryObj } from '@storybook/svelte';
import NavItem from './NavItem.svelte';

const meta = {
    title: 'Header/NavItem',
    component: NavItem,
	args: {
		label: 'NavItem',
		href: ''
	}
} satisfies Meta<NavItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Default'
	}
}