import type { Meta, StoryObj } from '@storybook/svelte';
import MenuItem from './MenuItem.svelte';

const meta = {
	title: 'Header/MenuItem',
	component: MenuItem,
	args: {
		label: '',
		slug: ''
	}
} satisfies Meta<MenuItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Link: Story = {
	args: {
		label: 'Link',
		slug: 'link'
	}
};

export const Button: Story = {
	args: {
		label: 'Button'
	}
};
