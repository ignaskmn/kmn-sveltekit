declare namespace svelteHTML {
	interface HTMLAttributes<T> {
		'on:outsideclick'?: (event: any) => any;
	}
}

// declare namespace svelteHTML {
//     interface HTMLAttributes<T> {
//         outside: () => void;
//     }
// }
