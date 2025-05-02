<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, class: extraClasses }: { children?: Snippet; class?: string } = $props();
</script>

<div class="shadow-card rounded-3xl {extraClasses}">
	{@render children?.()}
</div>

<style lang="postcss">
	@refence "tailwindcss";

	.shadow-card {
		box-shadow:
			0 0 0 1px var(--color-slate-200),
			0 10px 15px -3px rgba(0, 0, 0, 0.05),
			0 4px 6px -4px rgba(0, 0, 0, 0.05);
	}
</style>
