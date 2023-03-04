import type { Meta, StoryObj } from '@storybook/svelte';
import Logo from './Logo.svelte';

const meta = {
	title: 'Header/Logo',
	component: Logo,
	argTypes: {
		color: {
			control: { type: 'color' }
		}
	},
	args: {
		color: '#3B3B3B',
		href: '',
		height: 4
	}
} satisfies Meta<Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
