import type { Meta, StoryObj } from '@storybook/svelte';
import Arrow from './Arrow.svelte';

const meta = {
	title: 'Collapse/Arrow',
	component: Arrow,
	args: {
		isOpen: false,
		height: 6
	},
	argTypes: {
		isOpen: {
			options: [true, false],
			control: { type: 'radio' }
		}
	}
} satisfies Meta<Arrow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
