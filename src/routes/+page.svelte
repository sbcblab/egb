<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import { type Institution } from '$lib/types.js';
	import { format } from 'date-fns';
	import { enUS, ptBR } from 'date-fns/locale';
	import { ChevronRight } from 'lucide-svelte';

	let { data } = $props();
	let { lang, global, home } = data;

	const translations = {
		'en-US': {
			dateRange: `${format(global.startDate, 'MMMM d', { locale: enUS })} \u2013 ${format(global.endDate, 'd, y')}`,
			countryName: 'Brazil',
			aboutTitle: 'About EGB',
			organizersTitle: 'Organized by',
			sponsorsTitle: 'Sponsored by'
		},
		'pt-BR': {
			dateRange: `${format(global.startDate, 'd')} a ${format(global.endDate, 'd')} de ${format(global.endDate, 'MMMM', { locale: ptBR })} de ${format(global.endDate, 'y')}`,
			countryName: 'Brasil',
			aboutTitle: 'Sobre a EGB',
			organizersTitle: 'Organizadores',
			sponsorsTitle: 'Apoiadores'
		}
	};
</script>

<svelte:head>
	<title>EGB {format(global.startDate, 'y')} &middot; Escola Gaúcha de Bioinformática</title>
</svelte:head>

{#snippet institutionGroup(title: string, institutions: { institutions_id: Institution }[])}
	<div class="mx-auto my-20 max-w-7xl px-6">
		<h2 class="mb-10 text-center text-2xl font-semibold tracking-tight text-gray-700">
			{title}
		</h2>
		<div class="flex flex-wrap justify-center gap-12">
			{#each institutions as { institutions_id }}
				<a
					href={institutions_id.link}
					title={institutions_id.name}
					aria-label={institutions_id.name}
					target="_blank"
					class="aspect-4/3 w-32 bg-contain bg-center bg-no-repeat md:hover:opacity-60"
					style:background-image="url({PUBLIC_API_URL}/assets/{institutions_id.logo})"
				></a>
			{/each}
		</div>
	</div>
{/snippet}

<div class="flex h-screen flex-col items-center justify-center bg-gray-600 px-4 text-center">
	<p class="text-xl font-extrabold text-gray-300">
		EGB {format(global.startDate, 'y')}
	</p>
	<h1 class="mt-2 mb-14 text-5xl font-semibold tracking-tight text-white">
		Escola Gaúcha de Bioinformática
	</h1>
	<p class="mb-1 text-2xl font-semibold text-gray-200">
		{translations[lang].dateRange}
	</p>
	<p class="text-gray-300">Porto Alegre, RS, {translations[lang].countryName}</p>
</div>

<div
	class="mx-auto my-20 grid w-full max-w-7xl grid-cols-2 flex-col-reverse gap-20 px-6 max-md:flex"
>
	<div>
		<h2 class="mb-10 text-4xl font-semibold tracking-tight">{translations[lang].aboutTitle}</h2>
		<p class="mb-10 w-full max-w-144 text-lg text-gray-700">
			{home.translations ? home.translations.find((i) => i.languages_code === lang)?.about : ''}
		</p>
		<a
			href="/about"
			class="flex w-fit items-center gap-1.5 text-lg font-semibold text-gray-700 md:hover:opacity-60"
		>
			<span>About</span>
			<ChevronRight strokeWidth={3} class="size-4" />
		</a>
		<div class="mt-16 h-64 rounded-4xl bg-gray-400 md:hidden"></div>
	</div>
	<div
		class="rounded-4xl bg-gray-400 bg-cover bg-center max-md:hidden"
		style:background-image="url({PUBLIC_API_URL}/assets/{home.aboutImage})"
	></div>
</div>

{@render institutionGroup(translations[lang].organizersTitle, home.organizers)}
{@render institutionGroup(translations[lang].sponsorsTitle, home.sponsors)}
