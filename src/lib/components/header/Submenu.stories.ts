import type { Meta, StoryObj } from '@storybook/svelte';
import Submenu from './Submenu.svelte';

const meta = {
	title: 'Header/Submenu',
	component: Submenu,
	args: {
		isOpen: true
	}
} satisfies Meta<Submenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
