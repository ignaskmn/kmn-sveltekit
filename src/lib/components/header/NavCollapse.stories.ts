import type { Meta, StoryObj } from '@storybook/svelte';
import NavCollapse from './NavCollapse.svelte';

const meta = {
    title: 'Header/NavCollapse',
    component: NavCollapse,
	args: {
	}
} satisfies Meta<NavCollapse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
	}
}