<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import Person from '$lib/components/Person.svelte';
	import type { Institution } from '$lib/types.js';
	import { format } from 'date-fns';

	let { data } = $props();
	let { lang, global, about, previousEditions } = data;

	let translation = about.translations?.find((i) => i.languages_code === lang);
	let selectedEdition = $state(previousEditions.at(-1));

	function translate(enStr: string, ptStr: string) {
		return lang === 'pt-BR' ? ptStr : enStr;
	}
</script>

<svelte:head>
	<title>{translate('About', 'Sobre')} &ndash; EGB {format(global.eventStartDate, 'y')}</title>
</svelte:head>

<Banner
	{lang}
	title={translate('About', 'Sobre')}
	imageUrl="{base}/api/assets/46157eab-8cb1-4c72-9cb6-2635fa4c6a65"
	class="mb-20 bg-[50%_90%]"
/>

{#if translation?.whatIsEgb}
	<section
		id="about"
		class="mx-auto mb-32 grid w-full max-w-6xl grid-cols-2 flex-col-reverse items-center gap-18 px-6 max-md:flex"
	>
		<div>
			<h2 class="mb-7 text-3xl font-semibold tracking-tight text-gray-900">
				{translate('What is EGB?', 'O que é a EGB?')}
			</h2>
			<div class="markdown w-full space-y-7 leading-[1.75] text-gray-700 max-md:mb-10 md:max-w-144">
				{@html translation.whatIsEgb}
			</div>
			<div
				style:background-image={about.theVenueImage
					? `url(${base}/api/assets/${about.whatIsEgbImage?.id})`
					: null}
				class="mt-10 h-64 rounded-3xl bg-gray-300 bg-cover bg-center md:hidden"
			></div>
		</div>
		<div
			style:background-image={about.theVenueImage
				? `url(${base}/api/assets/${about.whatIsEgbImage?.id})`
				: null}
			class="h-full rounded-3xl bg-gray-300 bg-cover bg-center max-md:hidden"
		></div>
	</section>
{/if}

{#if translation?.theVenue}
	<section
		id="venue"
		class="mx-auto mb-32 grid w-full max-w-6xl grid-cols-2 flex-col-reverse items-center gap-10 px-6 max-md:flex md:gap-18"
	>
		<div
			style:background-image={about.theVenueImage
				? `url(${base}/api/assets/${about.theVenueImage?.id})`
				: null}
			class="h-full min-h-72 w-full rounded-3xl bg-gray-300 bg-cover bg-center"
		></div>
		<div>
			<h2 class="mb-7 text-3xl font-semibold tracking-tight text-gray-900">
				{translate('The Venue', 'Local do evento')}
			</h2>
			<div class="markdown w-full space-y-7 leading-[1.75] text-gray-600 md:max-w-144">
				{@html translation.theVenue}
			</div>
		</div>
	</section>
{/if}

{#if about.committee && about.committee.length > 0}
	<section id="committee" class="mx-auto mb-32 w-full max-w-6xl px-6">
		<h2 class="mb-7 text-3xl font-semibold tracking-tight text-gray-900">
			{translate('Organizing Committee', 'Comitê organizador')}
		</h2>
		<div class="grid gap-6 md:grid-cols-2">
			{#each about.committee as { people_id }}
				{@const { name, institution, country, picture } = people_id}
				<Person
					{name}
					{picture}
					institution={institution.name}
					country={country.translations?.find((i) => i.languages_code === lang)?.name || ''}
				/>
			{/each}
		</div>
	</section>
{/if}

{#if previousEditions.length > 0}
	<section id="previousEditions" class="mx-auto mb-32 w-full max-w-6xl px-6 lg:hidden">
		<h2 class="mb-9 text-3xl font-semibold tracking-tight text-gray-900">
			{translate('Previous Editions', 'Edições anteriores')}
		</h2>
		<div class="mt-14 mb-16">
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
								class="size-2.5 rounded-full font-medium {isSelected
									? 'bg-gray-800'
									: 'bg-gray-200'}"
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
					<h3 class="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
					<p class="w-full leading-[1.75] text-gray-600">
						{translations?.find((i) => i.languages_code === lang)?.description}
					</p>
				</div>
				<div
					class="h-full min-h-64 rounded-3xl bg-gray-400 bg-cover bg-center"
					style:background-image="url({base}/api/assets/{image.id})"
				></div>
			</div>
		{/if}
	</section>

	<section id="previousEditions" class="mx-auto mb-32 w-full max-w-6xl px-6 max-lg:hidden">
		<h2 class="mb-12 text-3xl font-semibold tracking-tight">
			{translate('Previous Editions', 'Edições anteriores')}
		</h2>
		<div class="flex">
			<div class="relative h-52 w-48">
				<div
					class="h-full overflow-y-hidden text-xl tracking-wider text-gray-300"
					style:writing-mode="vertical-rl"
				>
					..............................................................................................................................................................................
				</div>
				<div class="absolute top-0 bottom-0 left-6.5 flex flex-col-reverse justify-between">
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
						<h3 class="mb-4 text-lg font-semibold text-gray-900">{title}</h3>
						<p class="w-full max-w-128 leading-[1.75] text-gray-600">
							{translations?.find((i) => i.languages_code === lang)?.description}
						</p>
					</div>
					<div
						class="rounded-3xl bg-gray-400 bg-cover bg-center"
						style:background-image="url({base}/api/assets/{image.id})"
					></div>
				</div>
			{/if}
		</div>
	</section>
{/if}

{#snippet institutionGroup(
	id: string,
	title: string,
	institutions: { institutions_id: Institution }[]
)}
	<section {id} class="mx-auto mb-32 max-w-6xl px-6">
		<h2 class="mb-9 text-center text-xl font-medium tracking-tight text-gray-900">
			{title}
		</h2>
		<div class="flex flex-wrap justify-center gap-10">
			{#each institutions as { institutions_id }}
				{@const { name, link, logo } = institutions_id}
				<a
					href={link}
					title={name}
					aria-label={name}
					target="_blank"
					class="aspect-4/3 w-30 bg-contain bg-center bg-no-repeat transition-all md:hover:opacity-70"
					style:background-image="url({base}/api/assets/{logo})"
				></a>
			{/each}
		</div>
	</section>
{/snippet}

{#if about.organizers && about.organizers.length > 0}
	{@render institutionGroup(
		'organizers',
		translate('Organized By', 'Organizadores'),
		about.organizers
	)}
{/if}

{#if about.sponsors && about.sponsors.length > 0}
	{@render institutionGroup('sponsors', translate('Sponsored By', 'Apoiadores'), about.sponsors)}
{/if}
