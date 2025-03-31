<script lang="ts">
	import type { Image as ImageT } from '$lib/types';
	import Image from './Image.svelte';

	let {
		name,
		institution,
		country,
		link,
		picture
	}: {
		name: string;
		country: string;
		picture: ImageT;
		institution: string;
		link: string | null;
	} = $props();
</script>

<div class="flex items-center gap-6">
	<a href={link} target="_blank">
		<Image image={picture} class="h-24 w-20 rounded-xl object-cover" />
	</a>
	<div>
		<a href={link} target="_blank">
			<div class="text-xl">{name}</div>
		</a>
		<div class="mb-2 text-lg text-gray-500">
			{#if institution}{institution}<span>, </span>{/if}
			{country}
		</div>
	</div>
</div>
