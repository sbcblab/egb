<script>
	import { page } from '$app/state';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	let { children, data } = $props();
	let { lang, global } = data;

	let isHome = $derived(page.url.pathname === '/');
</script>

<div
	class="mb-20 flex min-h-full flex-col text-pretty text-gray-950 subpixel-antialiased selection:bg-sky-600 selection:text-white"
>
	<Header {isHome} {lang} />
	<main class="contents">
		{@render children?.()}
	</main>
</div>
<Footer {global} {lang} />

<style>
	:global(html, body) {
		height: 100%;
	}
</style>
