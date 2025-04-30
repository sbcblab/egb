<script lang="ts">
	import { ChevronRightIcon } from 'lucide-svelte';
	import type { Snippet } from 'svelte';

	let {
		href,
		disabled = false,
		children
	}: { href?: string | null; disabled?: boolean; children: Snippet } = $props();
</script>

<a
	{href}
	target="_blank"
	class="group inline-flex items-center gap-2 rounded-2xl px-6.5 py-3 text-white transition-all {disabled
		? 'pointer-events-none bg-primary-200'
		: 'border bg-primary-700 shadow-xs hover:bg-primary-600 active:bg-primary-500'}"
>
	<span class="whitespace-nowrap">
		{@render children?.()}
	</span>
	<ChevronRightIcon strokeWidth={1.5} class="size-5 transition-all md:group-hover:translate-x-1" />
</a>
