<script lang="ts">
	import type { Image as ImageT } from '$lib/types';
	import Image from './Image.svelte';

	let {
		name,
		institution,
		country,
		picture
	}: {
		name: string;
		country: string;
		picture: ImageT;
		institution: string;
	} = $props();
</script>

<div class="flex items-center gap-5">
	<Image image={picture} class="size-18 rounded-2xl border border-gray-200 object-cover" />
	<div>
		<div class="text-lg">{name}</div>
		<div class=" text-gray-500">
			{#if institution}{institution}<span>, </span>{/if}
			{country}
		</div>
	</div>
</div>
