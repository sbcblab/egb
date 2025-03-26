<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import { format } from 'date-fns';

	let { data } = $props();
	let { lang, global, program, courses } = data;

	const translations = {
		'en-US': { pageTitle: 'Program', speakersTitle: 'Speakers', coursesTitle: 'Courses' },
		'pt-BR': { pageTitle: 'Programa', speakersTitle: 'Palestrantes', coursesTitle: 'Cursos' }
	};
</script>

<svelte:head>
	<title>{translations[lang].pageTitle} &ndash; EGB {format(global.startDate, 'y')}</title>
</svelte:head>

<div class="mx-auto my-16 w-full max-w-7xl px-6">
	<h2 class="mb-10 text-4xl font-semibold tracking-tight">
		{translations[lang].speakersTitle}
	</h2>
	<div class="grid gap-6 md:grid-cols-2">
		{#each program.speakers || [] as { people_id }}
			{@const { name, country, picture, institution, link } = people_id}
			<div class="flex items-center gap-6">
				<a href={link} target="_blank">
					<Image image={picture} class="h-24 w-20 rounded-2xl object-cover" />
				</a>
				<div>
					<a href={link} target="_blank" class="md:hover:opacity-60">
						<div class="text-xl">{name}</div>
					</a>
					<div class="mb-2 text-lg text-gray-500">
						{#if institution}{institution.name}<span>, </span>{/if}
						{country.translations?.find((i) => i.languages_code === lang)?.name}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="mx-auto my-16 w-full max-w-7xl px-6">
	<h2 class="mb-10 text-4xl font-semibold tracking-tight">
		{translations[lang].coursesTitle}
	</h2>
	<div class="flex flex-col gap-6">
		{#each courses as {  }}
			{@const { name, country, picture, institution, link } = people_id}
			<div class="flex items-center gap-6">
				<a href={link} target="_blank">
					<Image image={picture} class="h-24 w-20 rounded-2xl object-cover" />
				</a>
				<div>
					<a href={link} target="_blank" class="md:hover:opacity-60">
						<div class="text-xl">{name}</div>
					</a>
					<div class="mb-2 text-lg text-gray-500">
						{#if institution}{institution.name}<span>, </span>{/if}
						{country.translations?.find((i) => i.languages_code === lang)?.name}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
