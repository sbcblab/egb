<script lang="ts">
	import { clickOutside } from '$lib/utils';
	import { XIcon } from 'lucide-svelte';
	import { expoOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import HugeiconsMenu11 from '~icons/hugeicons/menu-11';

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Program', href: '/program' },
		{ label: 'Submissions', href: '/submissions' },
		{ label: 'Registration', href: '/registration' },
		{ label: 'Contact', href: '/contact' }
	];

	let isOpen = $state(false);
</script>

<button onclick={() => (isOpen = true)} class="translate-x-1 p-2 text-2xl">
	<HugeiconsMenu11 />
</button>

{#if isOpen}
	<div transition:fade={{ duration: 400, easing: expoOut }} class="fixed inset-0 bg-black/40"></div>
{/if}

{#if isOpen}
	<div
		use:clickOutside
		onoutsideclick={() => (isOpen = false)}
		transition:fly={{ easing: expoOut, duration: 400, x: '100%', opacity: 1 }}
		class="fixed top-0 right-0 bottom-0 w-full max-w-72 bg-white px-7 py-7 shadow-lg"
	>
		<button onclick={() => (isOpen = false)} class="-translate-x-4 -translate-y-4 p-2">
			<XIcon strokeWidth={1} class="size-6 text-zinc-600" />
		</button>
		<nav class="mt-6 flex flex-col gap-6">
			{#each navItems as { label, href }}
				<a {href} class="text-xl font-medium">{label}</a>
			{/each}
		</nav>
	</div>
{/if}
