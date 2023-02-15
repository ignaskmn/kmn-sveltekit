import type { Meta, StoryObj } from '@storybook/svelte';
import MobileMenu from './MobileMenu.svelte';

const meta = {
	title: 'Header/MobileMenu',
	component: MobileMenu,
	args: {}
} satisfies Meta<MobileMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
