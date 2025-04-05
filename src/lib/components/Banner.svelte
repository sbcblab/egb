<script lang="ts">
	import type { LanguageCode } from '$lib/types';
	import Header from './Header.svelte';

	let {
		lang,
		title,
		imageUrl,
		class: _class
	}: { lang: LanguageCode; title: string; imageUrl?: string; class?: string } = $props();
</script>

<header style:background-image="url({imageUrl})" class="relative h-80 bg-cover {_class}">
	<div
		class="absolute inset-0 flex flex-col justify-between backdrop-blur-xs {imageUrl
			? 'bg-gray-950/65'
			: 'bg-gray-700'}"
	>
		<Header {lang} />
		<h1 class="mx-auto mb-10 w-full max-w-6xl px-6 text-6xl tracking-tight text-white">
			{title}
		</h1>
	</div>
</header>
