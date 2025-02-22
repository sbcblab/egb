<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>EGB 2025 - Escola Gaúcha de Bioinformática</title>
</svelte:head>

<div class="flex min-h-full flex-col">
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
