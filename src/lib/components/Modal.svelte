<script lang="ts">
	import { clickOutside } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	let {
		isOpen = $bindable(false),
		class: _class,
		children
	}: { isOpen?: boolean; class?: string; children?: Snippet } = $props();
</script>

{#if isOpen}
	<div
		transition:fade={{ duration: 400, easing: expoOut }}
		class="fixed inset-0 z-600 bg-gray-950/30"
	></div>
	<div
		class="fixed inset-0 z-600 grid max-h-full items-end overflow-y-auto pt-24 md:flex md:items-center md:justify-center md:pt-0"
	>
		<div
			use:clickOutside
			onoutsideclick={() => (isOpen = false)}
			transition:fly={window.matchMedia('(min-width: 768px)').matches
				? { y: -48, easing: expoOut, duration: 400 }
				: { y: '100%', easing: expoOut, duration: 400, opacity: 1 }}
			class="rounded-t-3xl bg-white p-8 shadow-lg md:rounded-b-3xl md:p-10 {_class}"
		>
			{@render children?.()}
		</div>
	</div>
{/if}
