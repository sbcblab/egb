<script lang="ts">
	import type { LanguageCode } from '$lib/types';
	import { clickOutside } from '$lib/utils';
	import { MenuIcon, XIcon } from 'lucide-svelte';
	import { expoOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let { lang }: { lang: LanguageCode } = $props();

	const items = [
		{ 'en-US': 'Home', 'pt-BR': 'Início', href: '/' },
		{ 'en-US': 'About', 'pt-BR': 'Sobre', href: '/about' },
		{ 'en-US': 'Program', 'pt-BR': 'Programa', href: '/program' },
		{ 'en-US': 'Submissions', 'pt-BR': 'Submissões', href: '/submissions' },
		{ 'en-US': 'Registration', 'pt-BR': 'Inscrição', href: '/registration' },
		{ 'en-US': 'Contact', 'pt-BR': 'Contato', href: '/contact' }
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

<button onclick={open} class="absolute top-6 right-4 z-20 p-2 lg:hidden">
	<MenuIcon strokeWidth={1.5} class="text-white" />
</button>

{#if isOpen}
	<div
		transition:fly={{ duration: 150, easing: expoOut }}
		class="fixed inset-0 z-20 bg-gray-950/60"
	></div>
	<div
		use:clickOutside
		onoutsideclick={close}
		transition:fly={{ duration: 150, x: '100%', opacity: 1, easing: expoOut }}
		class="fixed top-0 right-0 bottom-0 z-30 w-full max-w-64 bg-white px-7 py-7 shadow-lg"
	>
		<button onclick={close} class="-translate-x-4 -translate-y-4 p-2">
			<XIcon strokeWidth={1} class="size-6 text-gray-600" />
		</button>
		<nav class="mt-6 flex flex-col gap-6">
			{#each items as item}
				<a href={item.href} onclick={close} class="text-xl font-medium text-gray-900">
					{item[lang]}
				</a>
			{/each}
		</nav>
	</div>
{/if}
