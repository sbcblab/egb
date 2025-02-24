<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { title } from '$lib/data';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex min-h-full flex-col text-gray-950">
	<Header />
	<main class="contents">
		{@render children?.()}
	</main>
</div>
<Footer />

<style>
	:global(html, body) {
		height: 100%;
	}
</style>
