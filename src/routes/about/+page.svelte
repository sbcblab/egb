<script lang="ts">
	import { base } from '$app/paths';
	import Image from '$lib/components/Image.svelte';
	import Person from '$lib/components/Person.svelte';
	import { format } from 'date-fns';

	let { data } = $props();
	let { lang, global, about, previousEditions } = data;

	let selectedEdition = $state(previousEditions[0]);

	const translations = {
		'en-US': {
			pageTitle: 'About',
			aboutTitle: 'What is EGB?',
			committeeTitle: 'Organizing Committee',
			editionsTitle: 'Previous Editions'
		},
		'pt-BR': {
			pageTitle: 'Sobre',
			aboutTitle: 'O que é a EGB?',
			committeeTitle: 'Comitê Organizador',
			editionsTitle: 'Edições Anteriores'
		}
	};
</script>

<svelte:head>
	<title>{translations[lang].pageTitle} &ndash; EGB {format(global.startDate, 'y')}</title>
</svelte:head>

<section
	id="about"
	class="mx-auto mt-8 mb-16 grid w-full max-w-7xl grid-cols-2 flex-col-reverse gap-20 px-6 max-md:flex md:mt-16"
>
	<div>
		<h2 class="mb-10 text-4xl font-semibold tracking-tight">{translations[lang].aboutTitle}</h2>
		<div class="markdown w-full space-y-7 text-lg text-gray-700 max-md:mb-10 md:max-w-144">
			{@html about.translations
				? about.translations.find((i) => i.languages_code === lang)?.body
				: ''}
		</div>
		<div class="mt-10 h-64 rounded-4xl bg-gray-400 md:hidden"></div>
	</div>
	<Image
		image={about.image}
		class="rounded-4xl bg-gray-300 object-cover object-center max-md:hidden"
	/>
</section>

<section id="committee" class="mx-auto my-16 w-full max-w-7xl px-6">
	<h2 class="mb-10 text-4xl font-semibold tracking-tight">
		{translations[lang].committeeTitle}
	</h2>
	<div class="grid gap-6 md:grid-cols-2">
		{#each about.committee || [] as { people_id }}
			{@const { name, link, institution, country, picture } = people_id}
			<Person
				{name}
				{link}
				{picture}
				institution={institution.name}
				country={country.translations?.find((i) => i.languages_code === lang)?.name || ''}
			/>
		{/each}
	</div>
</section>

<section id="previousEditions" class="mx-auto my-16 w-full max-w-7xl px-6 lg:hidden">
	<h2 class="mb-10 text-4xl font-semibold tracking-tight">
		{translations[lang].editionsTitle}
	</h2>
	<div class="my-14">
		<div class="flex justify-around">
			{#each previousEditions as edition}
				{@const isSelected = edition.year === selectedEdition?.year}
				<button
					onclick={() => (selectedEdition = edition)}
					class="rounded-lg px-3 py-1 text-sm font-medium {isSelected
						? 'bg-gray-800 text-white'
						: 'bg-gray-200 text-gray-600'}">{edition.year}</button
				>
			{/each}
		</div>
		<div class="relative h-6">
			<div class="absolute inset-0 overflow-hidden text-lg tracking-wider text-gray-300">
				..........................................................................................................................................................................
			</div>
			<div class="absolute right-0 bottom-1 left-0 flex translate-y-1/2 justify-around">
				{#each previousEditions as edition}
					{@const isSelected = edition.year === selectedEdition?.year}
					<div class="relative">
						<button
							onclick={() => (selectedEdition = edition)}
							aria-label={String(edition.year)}
							class="size-2.5 rounded-full font-medium {isSelected ? 'bg-gray-800' : 'bg-gray-200'}"
						>
						</button>
					</div>
				{/each}
			</div>
		</div>
	</div>
	{#if selectedEdition}
		{@const { title, translations, image } = selectedEdition}
		<div class="grid items-center gap-9 md:grid-cols-2 md:gap-16">
			<div>
				<h3 class="mb-6 text-2xl font-semibold text-gray-800">{title}</h3>
				<p class="w-full text-lg text-gray-700">
					{translations?.find((i) => i.languages_code === lang)?.description}
				</p>
			</div>
			<div
				class="h-full min-h-64 rounded-4xl bg-gray-400 bg-cover bg-center"
				style:background-image="url({base}/api/assets/{image.id})"
			></div>
		</div>
	{/if}
</section>

<section id="previousEditions" class="mx-auto my-16 w-full max-w-7xl px-6 max-lg:hidden">
	<h2 class="mb-14 text-4xl font-semibold tracking-tight">{translations[lang].editionsTitle}</h2>
	<div class="flex">
		<div class="relative h-52 w-48">
			<div
				class="h-full overflow-y-hidden text-xl tracking-wider text-gray-300"
				style:writing-mode="vertical-rl"
			>
				..............................................................................................................................................................................
			</div>
			<div class="absolute top-0 bottom-0 left-6.5 flex flex-col justify-between">
				{#each previousEditions as edition}
					{@const isSelected = edition.year === selectedEdition?.year}
					<button
						onclick={() => (selectedEdition = edition)}
						class="relative rounded-lg px-3 py-1 text-sm font-medium {isSelected
							? 'bg-gray-800 text-white'
							: 'bg-gray-200 text-gray-600'}"
					>
						<span>{edition.year}</span>
						<div
							class="absolute top-1/2 -left-6 size-3 -translate-y-1/2 rounded-full {isSelected
								? 'bg-gray-800'
								: 'bg-gray-200'}"
						></div>
					</button>
				{/each}
			</div>
		</div>
		{#if selectedEdition}
			{@const { title, translations, image } = selectedEdition}
			<div class="grid h-full gap-9 md:grid-cols-2 md:gap-20">
				<div>
					<h3 class="mb-5 text-xl font-semibold text-gray-800">{title}</h3>
					<p class="w-full max-w-128 text-lg text-gray-700">
						{translations?.find((i) => i.languages_code === lang)?.description}
					</p>
				</div>
				<div
					class="rounded-4xl bg-gray-400 bg-cover bg-center"
					style:background-image="url({base}/api/assets/{image.id})"
				></div>
			</div>
		{/if}
	</div>
</section>
