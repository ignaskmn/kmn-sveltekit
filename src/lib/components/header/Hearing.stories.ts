import type { Meta, StoryObj } from '@storybook/svelte';
import Hearing from './Hearing.svelte';

const meta = {
	title: 'Header/AccItems/Hearing',
	component: Hearing,
	args: {}
} satisfies Meta<Hearing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
