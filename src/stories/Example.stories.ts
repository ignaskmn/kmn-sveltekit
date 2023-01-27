import type { Meta, StoryObj } from '@storybook/svelte';
import Example from './Example.svelte';

const meta = {
	title: 'Example/Example',
	component: Example,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['small', 'normal', 'large']
		}
	},
	args: {
		label: 'Example',
		size: 'normal',
		primary: false
	}
} satisfies Meta<Example>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		primary: true
	}
};

export const Secondary: Story = {};

export const Large: Story = {
	args: {
		size: 'large'
	}
};

export const Small: Story = {
	args: {
		size: 'small'
	}
};
