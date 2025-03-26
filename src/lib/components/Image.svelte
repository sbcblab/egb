<script lang="ts">
	import { base } from '$app/paths';
	import type { Image } from '$lib/types';

	let { image, ...restProps }: { image: Image; [key: string]: any } = $props();
</script>

<img src="{base}/api/assets/{image.id}" alt={image.title} {...restProps} />
