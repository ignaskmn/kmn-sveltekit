import type { Meta, StoryObj } from '@storybook/svelte';
import Collapse from './Collapse.svelte';
import WideMobile from '../decorators/WideMobile.svelte';

const meta = {
	title: 'Collapse/Simple',
	component: Collapse,
	decorators: [() => ({ Component: WideMobile })],
	args: {
	}
} satisfies Meta<Collapse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Event: Story = {
	args: {
		type: 'event',
		heading: "Veiklos / Koncerto pavadinimas"
	}
};

export const Person: Story = {
	args: {
		type: 'person',
		firstName: 'Vardenė',
		lastName: 'Pavardenis',
		nationality: "US",
	}
};