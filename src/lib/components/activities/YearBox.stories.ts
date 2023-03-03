import type { Meta, StoryObj } from '@storybook/svelte';
import YearBox from './YearBox.svelte';

const meta = {
	title: 'Activities/YearBox',
	component: YearBox,
	args: {
		year: 2022,
		isActive: false
	}
} satisfies Meta<YearBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
