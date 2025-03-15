<script lang="ts">
	import type { LanguageCode } from '$lib/types';
	import Nav from './Nav.svelte';

	let { isHome, lang }: { isHome: boolean; lang: LanguageCode } = $props();
</script>

<header
	class="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-6 {isHome
		? 'absolute top-0 right-0 left-0 text-white'
		: ''}"
>
	<a
		href="/"
		class="p-2 text-3xl font-extrabold tracking-tight sm:text-4xl {isHome
			? 'text-gray-200'
			: 'text-gray-700'}"
	>
		EGB
	</a>
	<Nav {lang} />
</header>
