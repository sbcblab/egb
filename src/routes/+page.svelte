<script lang="ts">
	import { base } from '$app/paths';
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

{#snippet institutionGroup(
	id: string,
	title: string,
	institutions: { institutions_id: Institution }[]
)}
	<section {id} class="mx-auto mb-32 max-w-6xl px-6">
		<h2 class="mb-10 text-center text-xl tracking-tight text-gray-950">
			{title}
		</h2>
		<div class="flex flex-wrap justify-center gap-10">
			{#each institutions as { institutions_id }}
				<a
					href={institutions_id.link}
					title={institutions_id.name}
					aria-label={institutions_id.name}
					target="_blank"
					class="aspect-4/3 w-30 bg-contain bg-center bg-no-repeat transition-transform md:hover:scale-110"
					style:background-image="url({base}/api/assets/{institutions_id.logo})"
				></a>
			{/each}
		</div>
	</section>
{/snippet}

<section
	style:background-image="url('https://destinopoa.com.br/wp-content/uploads/2023/10/29MAR2022_AlexRocha_Esquadrilha_Fumaca_-9.jpg')"
	class="relative flex h-screen flex-col items-center justify-center bg-sky-700 bg-cover bg-top px-4 text-center bg-blend-luminosity"
>
	<div class="absolute inset-0 bg-gray-900 opacity-60"></div>
	<p class="text-2xl font-extrabold text-cyan-100 drop-shadow-[0_0_1.25rem_rgba(0,0,0,0.5)]">
		EGB {format(global.startDate, 'y')}
	</p>
	<h1
		class="mt-3 mb-16 text-5xl font-semibold tracking-tight text-white drop-shadow-[0_0_1.25rem_rgba(0,0,0,0.5)]"
	>
		Escola Gaúcha de Bioinformática
	</h1>
	<p class="mb-1 text-3xl font-semibold text-cyan-100 drop-shadow-[0_0_1.25rem_rgba(0,0,0,0.5)]">
		{translations[lang].dateRange}
	</p>
	<p class="text-lg text-cyan-200 drop-shadow-[0_0_1.5rem_rgba(0,0,0,0.5)]">
		Porto Alegre, RS, {translations[lang].countryName}
	</p>
</section>

<section
	id="about"
	class="mx-auto mt-32 mb-32 grid w-full max-w-6xl grid-cols-2 flex-col-reverse gap-20 px-6 max-md:flex"
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
		<div class="mt-16 h-64 rounded-4xl bg-gray-300 md:hidden"></div>
	</div>
	<div
		class="rounded-4xl bg-gray-300 bg-cover bg-center max-md:hidden"
		style:background-image="url({base}/api/assets/{home.aboutImage})"
	></div>
</section>

{@render institutionGroup('organizers', translations[lang].organizersTitle, home.organizers || [])}
{@render institutionGroup('sponsors', translations[lang].sponsorsTitle, home.sponsors || [])}
