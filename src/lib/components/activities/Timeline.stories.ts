import type { Meta, StoryObj } from '@storybook/svelte';
import Timeline from './Timeline.svelte';

const meta = {
	title: 'Activities/Timeline',
	component: Timeline,
	args: {
		years: [2020, 2021, 2022, 2023],
		activeYear: 2022
	}
} satisfies Meta<Timeline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
