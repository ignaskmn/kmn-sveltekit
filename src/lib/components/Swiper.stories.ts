import type { Meta, StoryObj } from '@storybook/svelte';
import Swiper from './Swiper.svelte';

const meta = {
	title: 'Components/Swiper',
	component: Swiper,
	args: {}
} satisfies Meta<Swiper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
