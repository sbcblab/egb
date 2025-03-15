<script lang="ts">
	import { format } from 'date-fns';
	import { enUS, ptBR } from 'date-fns/locale';

	let { data } = $props();
	let { lang, global } = data;

	const translations = {
		'en-US': {
			dateRange: `${format(global.startDate, 'MMMM d', { locale: enUS })} \u2013 ${format(global.endDate, 'd, y')}`,
			countryName: 'Brazil'
		},
		'pt-BR': {
			dateRange: `${format(global.startDate, 'd')} a ${format(global.endDate, 'd')} de ${format(global.endDate, 'MMMM', { locale: ptBR })} de ${format(global.endDate, 'y')}`,
			countryName: 'Brasil'
		}
	};
</script>

<svelte:head>
	<title>EGB {format(global.startDate, 'y')} &middot; Escola Gaúcha de Bioinformática</title>
</svelte:head>

<div class="flex h-screen flex-col items-center justify-center bg-gray-600 px-8 text-center">
	<h2 class="text-xl font-extrabold text-gray-300 sm:text-3xl">
		EGB {format(global.startDate, 'y')}
	</h2>
	<h1 class="mt-2.5 mb-16 text-4xl font-semibold tracking-tight text-white sm:text-7xl">
		Escola Gaúcha de Bioinformática
	</h1>
	<p class="text-2xl font-semibold text-gray-200 sm:mb-2 sm:text-4xl">
		{translations[lang].dateRange}
	</p>
	<p class="text-gray-300 sm:text-xl">Porto Alegre, RS, {translations[lang].countryName}</p>
</div>
