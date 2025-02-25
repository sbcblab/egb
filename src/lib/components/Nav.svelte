<script lang="ts">
	import { clickOutside } from '$lib/utils';
	import { MenuIcon, XIcon } from 'lucide-svelte';
	import { expoOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const items = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Program', href: '/program' },
		{ label: 'Submissions', href: '/submissions' },
		{ label: 'Registration', href: '/registration' },
		{ label: 'Contact', href: '/contact' }
	];

	let isOpen = $state(false);

	function open() {
		isOpen = true;
		document.body.classList.add('overflow-hidden');
	}

	function close() {
		isOpen = false;
		document.body.classList.remove('overflow-hidden');
	}
</script>

<button onclick={open} class="translate-x-2 p-2">
	<MenuIcon class="text-gray-800" />
</button>

{#if isOpen}
	<div
		transition:fly={{ duration: 300, easing: expoOut }}
		class="fixed inset-0 z-10 bg-gray-950/60"
	></div>
{/if}

{#if isOpen}
	<div
		use:clickOutside
		onoutsideclick={close}
		transition:fly={{ duration: 300, x: '100%', opacity: 1, easing: expoOut }}
		class="fixed top-0 right-0 bottom-0 z-20 w-full max-w-64 bg-white px-7 py-7 shadow-lg"
	>
		<button onclick={close} class="-translate-x-4 -translate-y-4 p-2">
			<XIcon strokeWidth={1} class="size-6 text-gray-600" />
		</button>
		<nav class="mt-6 flex flex-col gap-6">
			{#each items as { label, href }}
				<a {href} onclick={close} class="text-xl font-medium">{label}</a>
			{/each}
		</nav>
	</div>
{/if}
