import type { Meta, StoryObj } from '@storybook/svelte';
import TestNav from './TestNav.svelte';

const meta = {
	title: 'Header/TestNav',
	component: TestNav,
	args: {}
} satisfies Meta<TestNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
