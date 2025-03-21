<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import Image from '$lib/components/Image.svelte';
	import { format } from 'date-fns';

	let { data } = $props();
	let { lang, global, about } = data;

	const translations = {
		'en-US': {
			pageTitle: 'About',
			aboutTitle: 'What is EGB?',
			committeeTitle: 'Organizing Committee'
		},
		'pt-BR': {
			pageTitle: 'Sobre',
			aboutTitle: 'O que é a EGB?',
			committeeTitle: 'Comitê Organizador'
		}
	};
</script>

<svelte:head>
	<title>EGB {format(global.startDate, 'y')} &ndash; {translations[lang].pageTitle}</title>
</svelte:head>

<div
	class="mx-auto mt-8 grid w-full max-w-7xl grid-cols-2 flex-col-reverse gap-20 px-4 max-md:flex md:mt-16"
>
	<div>
		<h2 class="mb-8 text-4xl font-semibold">{translations[lang].aboutTitle}</h2>
		<div class="w-full max-w-144 space-y-7 text-lg text-gray-700 max-md:mb-10">
			{@html about.translations
				? about.translations.find((i) => i.languages_code === lang)?.body
				: ''}
		</div>
		<div class="mt-10 h-64 rounded-4xl bg-gray-400 md:hidden"></div>
	</div>
	<div
		class="mt-10 rounded-4xl bg-gray-400 bg-cover bg-center max-md:hidden"
		style:background-image="url({PUBLIC_API_URL}/assets/)"
	></div>
</div>

<div class="mx-auto my-20 w-full max-w-7xl px-6">
	<h2 class="mb-10 text-4xl font-semibold">{translations[lang].committeeTitle}</h2>
	<div class="grid gap-7 md:grid-cols-2">
		{#each about.committee as { people_id }}
			{@const { name, country, picture, institution, link } = people_id}
			<div class="flex items-center gap-5">
				<Image image={picture} class="h-24 w-20 rounded-2xl object-cover" />
				<div>
					<a href={link} target="_blank" class="md:hover:text-gray-500">
						<div class="text-xl">{name}</div>
					</a>

					<div class="mb-2 text-lg text-gray-500">
						{#if institution}{institution.name}<span>, </span>{/if}
						{country.translations.find((i) => i.languages_code === lang)?.name}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
