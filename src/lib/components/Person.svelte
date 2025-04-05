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

<div class="flex items-center gap-5">
	<a href={link} target="_blank">
		<Image image={picture} class="size-18 rounded-2xl border border-gray-200 object-cover" />
	</a>
	<div>
		<a href={link} target="_blank" class="text-lg">{name}</a>
		<div class=" text-gray-500">
			{#if institution}{institution}<span>, </span>{/if}
			{country}
		</div>
	</div>
</div>
