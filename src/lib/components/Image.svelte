<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import type { Image } from '$lib/types';

	let { image, ...restProps }: { image: Image; [key: string]: any } = $props();
</script>

<img src="{PUBLIC_API_URL}/assets/{image.id}" alt={image.title} {...restProps} />
