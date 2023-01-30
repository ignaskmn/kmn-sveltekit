import type { Meta, StoryObj } from '@storybook/svelte';
import Logo from './Logo.svelte';

const meta = {
	title: 'Header/Logo',
	component: Logo,
	// argTypes: {
	// 	size: {
	// 		control: { type: 'select' },
	// 		options: ['small', 'normal', 'large']
	// 	}
	// },
	args: {
        href: "/"
	}
} satisfies Meta<Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};