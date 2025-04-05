<script lang="ts">
	import { base } from '$app/paths';
	import type { LanguageCode } from '$lib/types';
	import Nav from './Nav.svelte';

	let { lang, flat }: { lang: LanguageCode; flat?: boolean } = $props();
</script>

<div class="mx-auto flex w-full max-w-6xl items-center justify-between p-6">
	<a
		href="{base}/"
		class="text-4xl font-extrabold tracking-tight {flat ? 'text-gray-800' : 'text-white/90'}">EGB</a
	>
	<Nav {lang} {flat} />
</div>
