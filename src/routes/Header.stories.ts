import type { Meta, StoryObj } from '@storybook/svelte';
import Header from './Header.svelte';

const meta = {
	title: 'Header/Header',
	component: Header,
	args: {}
} satisfies Meta<Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};