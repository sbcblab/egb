<script>
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import Footer from '$lib/components/Footer.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import '../app.css';

	let { children, data } = $props();
	let { lang, global } = data;

	let isHome = $derived(page.url.pathname === `${base}/`);
</script>

<div class="flex min-h-full flex-col text-pretty text-gray-950 subpixel-antialiased">
	<MobileNav {lang} />
	<main class="flex grow flex-col">
		{@render children?.()}
	</main>
	{#if !isHome}
		<Footer {global} {lang} />
	{/if}
</div>

<style>
	:global(html, body) {
		height: 100%;
	}
</style>
