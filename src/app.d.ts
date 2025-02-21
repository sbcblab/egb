import 'unplugin-icons/types/svelte';

declare global {
	namespace App {}
	namespace svelteHTML {
		interface HTMLAttributes {
			onoutsideclick?: (event: CustomEvent) => void;
		}
	}
}

export {};
