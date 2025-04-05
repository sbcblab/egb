<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import Image from '$lib/components/Image.svelte';
	import { levelMap } from '$lib/utils';
	import { ChevronLeft, GaugeIcon, TimerIcon } from 'lucide-svelte';

	let { data } = $props();
	let { courses, lang } = data;
	let course = courses.find((c) => c.slug === page.params.slug);

	function translate(enStr: string, ptStr: string) {
		return lang === 'pt-BR' ? ptStr : enStr;
	}
</script>

{#snippet label(name: string)}
	<h3 class="mb-2 font-medium">{name}</h3>
{/snippet}

{#snippet topProps(duration: number, level: string)}
	<div class="mb-10 flex flex-col gap-1.5 text-lg">
		<div class="flex gap-3">
			<div class="flex items-center gap-1">
				<TimerIcon class="h-5 w-7" />
				<span class="font-medium">{translate('Duration', 'Duração')}</span>
			</div>
			<span class="text-gray-700">{duration} {translate('hours', 'horas')}</span>
		</div>
		<div class="flex gap-3">
			<div class="flex items-center gap-1">
				<GaugeIcon class="h-5 w-7" />
				<span class="font-medium">{translate('Level', 'Nível')}</span>
			</div>
			<span class="text-gray-700">{level}</span>
		</div>
	</div>
{/snippet}

<Header {lang} flat />

{#if course}
	{@const { duration, instructors, level, references, translations } = course}
	{@const translation = translations?.find((t) => t.languages_code === lang)}
	<div class="mx-auto mt-6 mb-16 w-full max-w-6xl gap-20 px-6 md:mt-12">
		<a
			href="{base}/program#courses"
			class="mb-8 inline-flex items-center gap-1 text-gray-700 transition-all md:hover:text-gray-500"
		>
			<ChevronLeft strokeWidth={2.5} class="size-5" />
			<span class="text-lg font-medium">{translate('Courses', 'Cursos')}</span>
		</a>
		<h2 class="mb-6 text-4xl tracking-tight">{translation?.title}</h2>
		<div class="mb-10 flex flex-wrap gap-3">
			{#each translation?.keywords || [] as keyword}
				<span class="rounded-xl bg-gray-100 px-4 py-1 text-gray-600">{keyword}</span>
			{/each}
		</div>
		<div class="md:hidden">
			{@render topProps(duration, levelMap[lang][level])}
		</div>
		<div class="flex flex-col-reverse md:grid md:grid-cols-3 md:gap-10">
			<div class="col-span-2 max-w-156 text-lg">
				<div class="max-md:hidden">
					{@render topProps(duration, levelMap[lang][level])}
				</div>
				<div class="mb-10">
					{@render label(translate('Summary', 'Resumo'))}
					<p class="text-gray-700">{translation?.summary}</p>
				</div>
				<div class="mb-10">
					{@render label(translate('Objectives', 'Objetivos'))}
					<p class="text-gray-700">{translation?.objectives}</p>
				</div>
				<div class="mb-10">
					{@render label(translate('Topics', 'Conteúdo'))}
					<ul class="space-y-1">
						{#each translation?.topics.map((t) => t.topic) || [] as item}
							<li class="ml-5 list-disc text-lg/[1.75] text-gray-700 marker:text-gray-300">
								{item}
							</li>
						{/each}
					</ul>
				</div>
				<div class="mb-10">
					{@render label(translate('Teaching methods', 'Metodologia'))}
					<p class="text-gray-700">{translation?.methods}</p>
				</div>
				<div class="mb-10">
					{@render label(translate('Prerequisites', 'Pré-requisitos'))}
					<p class="text-gray-700">{translation?.prerequisites}</p>
				</div>
				<div>
					{@render label(translate('References', 'Bibliografia'))}
					<ul class="space-y-1">
						{#each references as { title, author, link }}
							<li class="ml-5 list-disc text-lg/[1.75] text-gray-700 marker:text-gray-300">
								{#if link}
									<a href={link} target="_blank" class="underline md:hover:text-gray-400"
										>{author}, <em>{title}</em></a
									>
								{:else}
									<span>{author}, <em>{title}</em></span>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<div class="mb-12">
				<h3 class="mb-4 text-lg font-medium">{translate('Instructors', 'Instrutores')}</h3>
				<div class="flex flex-col gap-4">
					{#each instructors || [] as { people_id }}
						{@const { name, link, institution, country, picture } = people_id}
						<div class="flex items-center gap-5">
							<a href={link} target="_blank" class="shrink-0">
								<Image image={picture} class="size-18 rounded-2xl object-cover" />
							</a>
							<div>
								<a href={link} target="_blank">
									<div class="text-lg">{name}</div>
								</a>
								<div class="mb-2 text-gray-500">
									{#if institution}{institution.name}<span>,</span>{/if}
									{country.translations?.find((i) => i.languages_code === lang)?.name || ''}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}
