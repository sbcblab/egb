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

<header
	style:background-image={imageUrl ? `url(${imageUrl})` : undefined}
	class="relative h-80 bg-primary-900 bg-linear-to-t to-transparent bg-cover bg-blend-luminosity {_class}"
>
	<div class="absolute inset-0 bg-slate-950/55 backdrop-blur-xs">
		<div
			class="absolute inset-0 flex flex-col justify-between bg-linear-to-t from-primary-800/95 to-transparent to-50%"
		>
			<Header {lang} />
			<h1
				class="mx-auto mb-10 w-full max-w-6xl px-6 text-5xl font-semibold tracking-tight text-white md:text-6xl"
			>
				{title}
			</h1>
		</div>
	</div>
</header>
