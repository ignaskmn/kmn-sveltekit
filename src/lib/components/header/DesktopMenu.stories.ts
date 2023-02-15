import type { Meta, StoryObj } from '@storybook/svelte';
import DesktopMenu from './DesktopMenu.svelte';

const meta = {
	title: 'Header/DesktopMenu',
	component: DesktopMenu,
	args: {}
} satisfies Meta<DesktopMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
