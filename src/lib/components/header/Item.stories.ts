import type { Meta, StoryObj } from '@storybook/svelte';
import Item from './Item.svelte';

const meta = {
	title: 'Header/Item',
	component: Item,
	args: {
		label: {
			en: '',
			lt: ''
		},
		slug: {
			en: '',
			lt: ''
		}
	}
} satisfies Meta<Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Link: Story = {
	args: {
		label: { en: 'Link', lt: 'Nuoroda' },
		slug: { en: 'link', lt: 'Nuoroda' }
	}
};

export const Button: Story = {
	args: {
		label: { en: 'Button', lt: 'Mygtukas' }
	}
};
