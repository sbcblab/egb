<script lang="ts">
	import { base } from '$app/paths';
	import type { LanguageCode } from '$lib/types';
	import { clickOutside } from '$lib/utils';
	import { XIcon } from 'lucide-svelte';
	import { expoOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let { lang, flat }: { lang: LanguageCode; flat?: boolean } = $props();

	const items = [
		{ 'en-US': 'Home', 'pt-BR': 'Início', href: `${base}/` },
		{ 'en-US': 'About', 'pt-BR': 'Sobre', href: `${base}/about` },
		{ 'en-US': 'Program', 'pt-BR': 'Programa', href: `${base}/program` },
		{ 'en-US': 'Submissions', 'pt-BR': 'Submissões', href: `${base}/submissions` },
		{ 'en-US': 'Registration', 'pt-BR': 'Inscrição', href: `${base}/registration` },
		{ 'en-US': 'Contact', 'pt-BR': 'Contato', href: `${base}/contact` }
	];

	let isOpen = $state(false);

	function close() {
		isOpen = false;
		document.body.classList.remove('overflow-hidden');
	}
</script>

<div class="flex gap-10 max-lg:hidden">
	{#each items as { href, ...item }}
		<a
			{href}
			class="] p-2 transition-all {flat
				? 'md:hover:text-gray-500'
				: 'text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.2)] md:hover:drop-shadow-[0_0_0.5rem_rgba(255,255,255,0.75)]'}"
		>
			{item[lang]}
		</a>
	{/each}
</div>

{#if isOpen}
	<div
		transition:fly={{ duration: 150, easing: expoOut }}
		class="fixed inset-0 z-20 bg-gray-950/65"
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
		<nav class="my-8 flex flex-col gap-8">
			{#each items as { href, ...item }}
				<a {href} onclick={close} class="text-xl text-gray-900">
					{item[lang]}
				</a>
			{/each}
		</nav>
	</div>
{/if}
