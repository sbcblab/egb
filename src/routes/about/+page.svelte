<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import BoxedIcon from '$lib/components/BoxedIcon.svelte';
	import Person from '$lib/components/Person.svelte';
	import type { Institution } from '$lib/types.js';
	import { format } from 'date-fns';
	import { MapPinIcon } from 'lucide-svelte';

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
	imageUrl={about.bannerImage ? `${base}/api/assets/${about.bannerImage.id}` : undefined}
	class="mb-16 bg-[50%_90%]"
/>

{#if translation?.whatIsEgb}
	<section
		id="about"
		class="mx-auto mb-32 grid w-full max-w-6xl grid-cols-2 flex-col-reverse items-center gap-18 px-6 max-md:flex"
	>
		<div>
			<h2 class="mb-7 text-3xl font-semibold tracking-tight text-slate-900">
				{translate('What is EGB?', 'O que é a EGB?')}
			</h2>
			<div
				class="markdown w-full space-y-7 leading-[1.75] wrap-anywhere text-slate-600 max-md:mb-10 md:max-w-144"
			>
				{@html translation.whatIsEgb}
			</div>
			{#if about.whatIsEgbImage1}
				<div
					style:background-image={about.theVenueImage
						? `url(${base}/api/assets/${about.whatIsEgbImage1?.id})`
						: null}
					class="mt-10 h-64 rounded-3xl bg-slate-300 bg-cover bg-center md:hidden"
				></div>
			{/if}
			{#if about.whatIsEgbImage2}
				<div
					style:background-image={about.theVenueImage
						? `url(${base}/api/assets/${about.whatIsEgbImage2?.id})`
						: null}
					class="mt-10 h-64 rounded-3xl bg-slate-300 bg-cover bg-center md:hidden"
				></div>
			{/if}
		</div>
		<div class="flex h-full flex-col gap-6 max-md:hidden">
			{#if about.whatIsEgbImage1}
				<div
					style:background-image={about.theVenueImage
						? `url(${base}/api/assets/${about.whatIsEgbImage1?.id})`
						: null}
					class="h-full rounded-3xl bg-slate-300 bg-cover bg-center"
				></div>
			{/if}
			{#if about.whatIsEgbImage2}
				<div
					style:background-image={about.theVenueImage
						? `url(${base}/api/assets/${about.whatIsEgbImage2?.id})`
						: null}
					class="h-full rounded-3xl bg-slate-300 bg-cover bg-center"
				></div>
			{/if}
		</div>
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
			class="h-full min-h-72 w-full rounded-3xl bg-slate-300 bg-cover bg-center"
		></div>
		<div>
			<h2 class="mb-7 text-3xl font-semibold tracking-tight text-slate-900">
				{translate('The Venue', 'Local do evento')}
			</h2>
			<div class="markdown w-full space-y-7 leading-[1.75] text-slate-600 md:max-w-144">
				{@html translation.theVenue}
			</div>
			{#if about.venueName || about.venueAddress}
				<div class="mt-9 flex items-center gap-6">
					<BoxedIcon Icon={MapPinIcon} size={18} strokeWidth={0.75} class="p-1" />
					<div>
						{#if about.venueName}
							<div class="mb-1 text-black">{about.venueName}</div>
						{/if}
						{#if about.venueAddress}
							{#if about.venueAddressLink}
								<a
									href={about.venueAddressLink}
									target="_blank"
									class="inline-block leading-6 text-balance text-slate-500 underline hover:text-slate-500/70"
								>
									{about.venueAddress}
								</a>
							{:else}
								<div class="inline-block leading-6 text-balance text-slate-500">
									{about.venueAddress}
								</div>
							{/if}
						{/if}
					</div>
				</div>
			{/if}
		</div>
	</section>
{/if}

{#if about.committee && about.committee.length > 0}
	<section id="committee" class="mx-auto mb-32 w-full max-w-6xl px-6">
		<h2 class="mb-7 text-3xl font-semibold tracking-tight text-slate-900">
			{translate('Organizing Committee', 'Comitê organizador')}
		</h2>
		<div class="grid gap-3 md:grid-cols-3">
			{#each about.committee as { people_id }}
				<Person person={people_id} {lang} />
			{/each}
		</div>
	</section>
{/if}

{#if previousEditions.length > 0}
	<section id="previousEditions" class="mx-auto mb-32 w-full max-w-6xl px-6 lg:hidden">
		<h2 class="mb-9 text-3xl font-semibold tracking-tight text-slate-900">
			{translate('Previous Editions', 'Edições anteriores')}
		</h2>
		<div class="mt-14 mb-16">
			<div class="flex justify-around">
				{#each previousEditions as edition}
					{@const isSelected = edition.year === selectedEdition?.year}
					<button
						onclick={() => (selectedEdition = edition)}
						class="rounded-lg px-3 py-1 text-sm font-medium {isSelected
							? 'bg-slate-900 text-white'
							: 'bg-slate-200 text-slate-600'}">{edition.year}</button
					>
				{/each}
			</div>
			<div class="relative h-6">
				<div class="absolute inset-0 overflow-hidden text-lg tracking-wider text-slate-300">
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
									? 'bg-slate-900'
									: 'bg-slate-200'}"
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
					<h3 class="mb-3 text-lg font-semibold text-slate-900">{title}</h3>
					<p class="w-full leading-[1.75] text-slate-600">
						{translations?.find((i) => i.languages_code === lang)?.description}
					</p>
				</div>
				<div
					class="h-full min-h-64 rounded-3xl bg-slate-400 bg-cover bg-center"
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
					class="h-full overflow-y-hidden text-xl tracking-wider text-slate-200/60"
					style:writing-mode="vertical-rl"
				>
					..............................................................................................................................................................................
				</div>
				<div class="absolute top-0 bottom-0 left-6.5 flex flex-col-reverse justify-between">
					{#each previousEditions as edition}
						{@const isSelected = edition.year === selectedEdition?.year}
						<button
							onclick={() => (selectedEdition = edition)}
							class="group relative rounded-lg px-3 py-1 text-sm font-medium transition-all {isSelected
								? 'bg-primary-200 text-primary-700'
								: 'bg-slate-100 text-slate-500 hover:bg-slate-200 active:bg-slate-300'}"
						>
							<span>{edition.year}</span>
							<div
								class="absolute top-1/2 -left-6 size-3 -translate-y-1/2 rounded-full transition-all {isSelected
									? 'bg-primary-200'
									: 'bg-slate-100 group-hover:bg-slate-200 group-active:bg-slate-300'}"
							></div>
						</button>
					{/each}
				</div>
			</div>
			{#if selectedEdition}
				{@const { title, translations, image } = selectedEdition}
				<div class="grid h-full gap-9 md:grid-cols-2 md:gap-20">
					<div>
						<h3 class="mb-4 text-lg font-semibold text-slate-900">{title}</h3>
						<p class="w-full max-w-128 leading-[1.75] text-slate-600">
							{translations?.find((i) => i.languages_code === lang)?.description}
						</p>
					</div>
					<div
						class="rounded-3xl bg-slate-400 bg-cover bg-center"
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
		<h2 class="mb-9 text-center text-lg font-medium tracking-tight text-slate-900">
			{title}
		</h2>
		<div class="flex flex-wrap justify-center gap-9">
			{#each institutions as { institutions_id }}
				{@const { name, link, logo } = institutions_id}
				<a
					href={link}
					title={name}
					aria-label={name}
					target="_blank"
					class="h-16 w-26 transition-all hover:opacity-70"
				>
					<img src="{base}/api/assets/{logo}" alt={name} class="size-full object-contain" />
				</a>
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
