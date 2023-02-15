import type { Meta, StoryObj } from '@storybook/svelte';
import Lang from './Lang.svelte';

const meta = {
	title: 'Header/AccItems/Lang',
	component: Lang,
	args: {}
} satisfies Meta<Lang>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
