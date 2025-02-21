<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>EGB 2025 - Escola Gaúcha de Bioinformática</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow text-pretty">
		{@render children?.()}
	</main>
</div>
<Footer />

<style lang="postcss">
	:global(html, body) {
		@apply flex h-full flex-col;
	}
</style>
