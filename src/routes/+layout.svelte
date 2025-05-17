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

<div
	class="relative flex min-h-full flex-col text-pretty text-slate-950 subpixel-antialiased selection:bg-primary-800 selection:text-white"
>
	<MobileNav {lang} />
	<main class="flex grow flex-col">
		{@render children?.()}
	</main>
	<Footer {global} {lang} />
</div>
