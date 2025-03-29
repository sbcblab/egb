<script lang="ts">
	import { base } from '$app/paths';
	import type { Image } from '$lib/types';

	let { image, ...restProps }: { image: Image | null; [key: string]: any } = $props();
</script>

{#if image}
	<img src="{base}/api/assets/{image.id}" alt={image.title} {...restProps} />
{:else}
	<div {...restProps}></div>
{/if}
