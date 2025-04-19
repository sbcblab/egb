<script lang="ts">
	import { page } from '$app/state';
	import type { LanguageCode } from '$lib/types';
	import { clickOutside } from '$lib/utils';
	import { MenuIcon, XIcon } from 'lucide-svelte';
	import { expoOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import Logo from './Logo.svelte';

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

<button
	onclick={open}
	class="absolute top-6 right-4 z-20 p-2 lg:hidden"
	class:text-white={!page.url.pathname.includes('program/')}
>
	<MenuIcon strokeWidth={1.5} />
</button>

{#if isOpen}
	<div
		transition:fly={{ duration: 400, easing: expoOut }}
		class="fixed inset-0 z-20 bg-gray-950/70 backdrop-blur-xs"
	></div>
	<div
		use:clickOutside
		onoutsideclick={close}
		transition:fly={{ duration: 400, x: '100%', opacity: 1, easing: expoOut }}
		class="fixed top-0 right-0 bottom-0 z-30 w-full max-w-64 bg-white shadow-lg"
	>
		<div class="mb-12 flex items-center justify-between pt-3 pr-1 pl-7">
			<Logo class="w-32 text-gray-800" />
			<button onclick={close} class="p-5 text-gray-400 transition-all hover:text-gray-200">
				<XIcon strokeWidth={1.5} class="size-6" />
			</button>
		</div>
		<nav class="flex w-full flex-col items-start">
			{#each items as item}
				<a
					href={item.href}
					onclick={close}
					class="px-7 py-3.5 text-xl font-medium text-gray-900 transition-all hover:text-gray-400"
				>
					{item[lang]}
				</a>
			{/each}
		</nav>
	</div>
{/if}
