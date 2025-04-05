<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/Header.svelte';
	import { ArrowLeftIcon } from 'lucide-svelte';

	let { data } = $props();
	let { lang } = data;

	function translate(enStr: string, ptStr: string) {
		return lang === 'pt-BR' ? ptStr : enStr;
	}
</script>

<Header {lang} flat />

<div class="flex grow flex-col items-center justify-center px-6 text-center">
	<p class="text-lg font-semibold text-gray-500">404</p>
	<h1 class="mt-2 mb-6 text-5xl font-semibold tracking-tight">
		{translate('Page not found', 'Página não encontrada')}
	</h1>
	<p class="mb-14 text-lg text-gray-600">
		{translate(
			"Sorry, we couldn't find the page you're looking for.",
			'Desculpe, não encontramos a página que você está procurando.'
		)}
	</p>
	<a
		href="{base}/"
		class="flex items-center gap-1.5 font-semibold text-gray-600 md:hover:opacity-60"
	>
		<ArrowLeftIcon strokeWidth={2.5} class="size-3.5" />
		<span>{translate('Back to home', 'Voltar ao início')}</span>
	</a>
</div>
