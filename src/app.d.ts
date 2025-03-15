import 'unplugin-icons/types/svelte';

declare global {
	namespace App {
		interface Locals {
			lang: string;
		}
	}
	namespace svelteHTML {
		interface HTMLAttributes {
			onoutsideclick?: (event: CustomEvent) => void;
		}
	}
}

export {};
