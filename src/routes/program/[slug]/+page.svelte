<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import { getDatesBetween, levelMap } from '$lib/utils.js';
	import { format } from 'date-fns';
	import { ptBR } from 'date-fns/locale';
	import { ChevronLeft, GaugeIcon, GlobeIcon, HourglassIcon } from 'lucide-svelte';
	import AcademiconsLattes from '~icons/academicons/lattes';
	import Fa6BrandsGoogleScholar from '~icons/fa6-brands/google-scholar';
	import RiGithubFill from '~icons/ri/github-fill';
	import RiLinkedinFill from '~icons/ri/linkedin-fill';
	import RivetIconsMapPinSolid from '~icons/rivet-icons/map-pin-solid';
	import SimpleIconsOrcid from '~icons/simple-icons/orcid';
	import SimpleIconsResearchgate from '~icons/simple-icons/researchgate';

	let { data } = $props();
	let { courses, activities, lang, global } = data;

	let activity = activities.find((a) => a.slug === page.params.slug) || null;
	let course = activity ? null : courses.find((c) => c.slug === page.params.slug) || null;

	const linkTypes = [
		{ type: 'website', title: 'Website', colorClass: 'bg-gray-500', Icon: GlobeIcon },
		{
			type: 'lattes',
			title: translate('Lattes Curriculum', 'Currículo Lattes'),
			colorClass: 'bg-indigo-900/90',
			Icon: AcademiconsLattes
		},
		{
			type: 'linkedin',
			title: 'LinkedIn',
			colorClass: 'bg-blue-800/80',
			Icon: RiLinkedinFill
		},
		{
			type: 'orcid',
			title: 'ORCID',
			colorClass: 'bg-lime-500/70',
			Icon: SimpleIconsOrcid
		},
		{
			type: 'scholar',
			title: 'Google Scholar',
			colorClass: 'bg-blue-700/65',
			Icon: Fa6BrandsGoogleScholar
		},
		{
			type: 'researchgate',
			title: 'ResearchGate',
			colorClass: 'bg-teal-500/80',
			Icon: SimpleIconsResearchgate
		},
		{
			type: 'github',
			title: 'GitHub',
			colorClass: 'bg-neutral-800',
			Icon: RiGithubFill
		}
	];

	function translate(enStr: string, ptStr: string) {
		return lang === 'pt-BR' ? ptStr : enStr;
	}
</script>

<svelte:head>
	<title
		>{activity
			? activity.translations?.find((t) => t.languages_code === lang)?.title
			: course?.translations?.find((t) => t.languages_code === lang)?.title} &ndash; EGB {format(
			global.eventStartDate,
			'y'
		)}</title
	>
</svelte:head>

<Header {lang} flat />

{#if activity}
	{@const translation = activity.translations?.find((i) => i.languages_code === lang)}
	<div class="mx-auto mt-6 mb-32 w-full max-w-6xl px-6 md:mt-10">
		<div class="mb-8 md:mb-12">
			<a
				href="{base}/program"
				class="inline-flex items-center gap-1 rounded-xl bg-gray-100 p-2 text-gray-600 transition-all hover:bg-gray-200"
			>
				<ChevronLeft strokeWidth={2} class="size-6" />
			</a>
		</div>
		<div class="mb-2 text-lg font-medium text-gray-400">
			{translate(
				activity.type || '',
				activity.type === 'Lecture'
					? 'Palestra'
					: (activity.type === 'Social Gathering' ? 'Confraternização' : activity.type) || ''
			)}
		</div>
		<div class="flex flex-col gap-16 md:grid md:grid-cols-7 md:max-lg:gap-12">
			<div class="col-span-4">
				<div class="mb-16">
					<h1 class="text-3xl font-medium tracking-tighter text-gray-800 md:text-4xl">
						{translation?.title}
					</h1>
					{#if translation?.topics}
						<div class="mt-6 flex flex-wrap gap-2.5">
							{#each translation.topics as topic}
								<span class="rounded-full bg-gray-100/80 px-2.75 py-1.25 text-sm/[1] text-gray-500">
									{topic}
								</span>
							{/each}
						</div>
					{/if}
				</div>
				<div class="flex gap-x-16 gap-y-8 max-sm:flex-col md:max-lg:flex-col">
					<div class="flex items-center gap-3.5">
						<div class="flex size-9 flex-col overflow-hidden rounded-lg border border-gray-200">
							<div
								class="flex h-3 items-center justify-center bg-gray-200 text-[0.5rem] text-gray-600"
							>
								{translate(
									format(activity.date, 'MMM'),
									format(activity.date, 'MMM', { locale: ptBR })
								)}
							</div>
							<div class="flex grow items-center justify-center text-xs font-medium text-gray-500">
								{format(activity.date, 'd')}
							</div>
						</div>
						<div>
							<div class="mb-0.25 text-sm font-medium whitespace-nowrap">
								{translate(
									format(activity.date, 'EEEE, MMMM dd'),
									`${format(activity.date, 'EEEE, dd', { locale: ptBR })} de ${format(activity.date, 'MMMM', { locale: ptBR })}`
								)}
							</div>
							<div class="text-sm whitespace-nowrap text-gray-500">
								{activity.startTime?.slice(0, 5)} &ndash; {activity.endTime?.slice(0, 5)}
							</div>
						</div>
					</div>
					{#if activity.locationLine1 || activity.locationLine2}
						<div class="flex items-center gap-3.5">
							<div
								class="flex size-9 items-center justify-center overflow-hidden rounded-lg border border-gray-200"
							>
								<RivetIconsMapPinSolid class="size-4.5 text-gray-400/65" />
							</div>
							<div>
								<div class="mb-0.25 text-sm font-medium">{activity.locationLine1}</div>
								<div class="text-sm text-gray-500">{activity.locationLine2}</div>
							</div>
						</div>
					{/if}
				</div>
				{#if translation?.summary}
					<div class="mt-16">
						<h2 class="mb-3 text-lg font-semibold">{translate('Summary', 'Resumo')}</h2>
						<p class="markdown leading-[1.75] text-gray-700">
							{@html translation.summary}
						</p>
					</div>
				{/if}
			</div>
			<div class="col-span-3 space-y-4">
				{#each activity.speakers || [] as { people_id }}
					{@const { name, picture, country, institution, links, translations } = people_id}
					{@const speakerTranslation = translations.find((t) => t.languages_code === lang)}
					{@debug speakerTranslation}
					<div class="flex flex-col gap-8 rounded-3xl border border-gray-200 p-8 shadow-xs">
						<div class="flex items-center gap-5">
							<div
								class="w-full max-w-26 self-stretch rounded-2xl border border-gray-200 bg-cover bg-center"
								style:background-image="url({base}/api/assets/{picture.id})"
							></div>
							<div class="py-5">
								<div class="mb-1 text-lg/[1.15] font-medium">{name}</div>
								<div class="text-gray-700">
									{institution.name}, {country.translations?.find((t) => t.languages_code === lang)
										?.name}
								</div>
								{#if links}
									<div class="mt-4 flex gap-1">
										{#each linkTypes as { type, title, colorClass, Icon }}
											{@const link = links.find((l) => l.type === type)}
											{#if link}
												<a
													href={link.link}
													{title}
													target="_blank"
													class="size-5.5 rounded-full p-1 opacity-40 transition-all hover:opacity-100 {colorClass}"
												>
													<Icon class="size-full text-white" />
												</a>
											{/if}
										{/each}
									</div>
								{/if}
							</div>
						</div>
						<!-- {#if speakerTranslation?.summary}
							<div class="text-sm/[1.75] text-gray-500">
								{@html speakerTranslation.summary}
							</div>
						{/if} -->
					</div>
				{/each}
			</div>
		</div>
	</div>
{:else if course}
	{@const { duration, instructors, level, references, slug, translations, schedule } = course}
	{@const translation = translations?.find((i) => i.languages_code === lang)}
	<div class="mx-auto mt-6 mb-32 w-full max-w-6xl px-6 md:mt-10">
		<div class="mb-8 md:mb-12">
			<a
				href="{base}/program"
				class="inline-flex items-center gap-1 rounded-xl bg-gray-100 p-2 text-gray-600 transition-all hover:bg-gray-200"
			>
				<ChevronLeft strokeWidth={2} class="size-6" />
			</a>
		</div>
		<div class="mb-2 text-lg font-medium text-gray-400">
			{translate('Course', 'Curso')}
		</div>
		<div class="flex flex-col gap-16 md:grid md:grid-cols-7 md:max-lg:gap-12">
			<div class="col-span-4">
				<div class="mb-16">
					<h1 class="mb-6 text-3xl font-medium tracking-tighter text-gray-800 md:text-4xl">
						{translation?.title}
					</h1>
					{#if translation?.keywords}
						<div class="flex flex-wrap gap-2.5">
							{#each translation?.keywords || [] as keyword}
								<span class="rounded-full bg-gray-100/80 px-2.75 py-1.25 text-sm/[1] text-gray-500">
									{keyword}
								</span>
							{/each}
						</div>
					{/if}
				</div>
				<div class="mb-16 flex gap-16">
					<div class="flex items-center gap-3.5">
						<div class="flex size-9 items-center justify-center rounded-lg border border-gray-200">
							<HourglassIcon strokeWidth={1.5} class="size-5 text-gray-950" />
						</div>
						<div>
							<div class="mb-0.25 text-sm font-medium">{translate('Duration', 'Duração')}</div>
							<div class="text-sm text-gray-500">
								{duration}
								{translate('hours', 'horas')}
							</div>
						</div>
					</div>
					<div class="flex items-center gap-3">
						<div class="flex size-9 items-center justify-center rounded-lg border border-gray-200">
							<GaugeIcon strokeWidth={2} class="size-5 text-gray-700" />
						</div>
						<div>
							<div class="mb-0.25 text-sm font-medium">{translate('Level', 'Nível')}</div>
							<div class="text-sm text-gray-500">{levelMap[lang][level]}</div>
						</div>
					</div>
				</div>
				{#if schedule}
					<div class="mb-16">
						<div class="flex gap-2">
							<div class="w-18 pr-3"></div>
							<div class="grid grow grid-cols-3 gap-1">
								{#each [translate('Morning', 'Manhã'), translate('Afternoon', 'Tarde'), translate('Evening', 'Noite')] as day}
									<div class="pb-1 text-center text-sm text-gray-400">{day}</div>
								{/each}
							</div>
						</div>
						<div class="flex flex-col gap-1 p-1">
							{#each getDatesBetween(global.coursesStartDate, global.coursesEndDate) as date}
								<div class="flex h-7.5 gap-1">
									<div
										class="grid w-18 grid-cols-2 items-center justify-end gap-1.25 pr-3 text-sm whitespace-nowrap"
									>
										<span class="text-gray-400/50">
											{format(date, 'd/M')}
										</span>
										<span class="text-gray-400">
											{translate(format(date, 'E'), format(date, 'E', { locale: ptBR }))}
										</span>
									</div>
									<div class="grid grow grid-cols-3 gap-1">
										{#snippet timePeriodCol(condition: (s: string) => boolean)}
											<div class="flex flex-col gap-1">
												{#each schedule.filter((s) => s.date === date && condition(s.startTime)) as item}
													<div
														class="flex h-full items-center justify-center rounded-md bg-gray-900 text-xs font-medium text-gray-100 sm:text-sm"
													>
														{item.startTime.slice(0, 5)} &ndash; {item.endTime.slice(0, 5)}
													</div>
												{:else}
													<div
														class="flex h-full items-center justify-center rounded-md bg-gray-50 text-sm font-medium text-white"
													></div>
												{/each}
											</div>
										{/snippet}
										{@render timePeriodCol((s) => s < '12:00:00')}
										{@render timePeriodCol((s) => s >= '12:00:00' && s < '18:00:00')}
										{@render timePeriodCol((s) => s >= '18:00:00')}
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
				{#snippet courseSection(label: string, text?: string | null)}
					{#if text}
						<div class="mb-10">
							<h2 class="mb-2.5 font-medium text-gray-900">{label}</h2>
							<p class="markdown leading-[1.75] text-gray-600">
								{@html text}
							</p>
						</div>
					{/if}
				{/snippet}
				{@render courseSection(translate('Summary', 'Resumo'), translation?.summary)}
				{@render courseSection(translate('Objectives', 'Objetivos'), translation?.objectives)}
				{#if translation?.topics}
					<div class="mb-10">
						<h2 class="mb-2.5 font-medium text-gray-900">{translate('Topics', 'Conteúdo')}</h2>
						<ul class="markdown ml-4.5 list-disc space-y-2.5 text-gray-600 marker:text-gray-300">
							{#each translation.topics as { topic }}
								<li>{topic}</li>
							{/each}
						</ul>
					</div>
				{/if}
				{@render courseSection(translate('Teaching Methods', 'Metodologia'), translation?.methods)}
				{@render courseSection(
					translate('Prerequisites', 'Pré-requisitos'),
					translation?.prerequisites
				)}
				<div class="mb-10">
					<h2 class="mb-2.5 font-medium text-gray-900">
						{translate('References', 'Bibliografia')}
					</h2>
					<ul class="markdown space-y-2.5">
						{#each references as { author, link, title }}
							<li class="ml-4.5 list-disc text-gray-600 marker:text-gray-300">
								{#if link}
									<a href={link} target="_blank" class="font-normal text-gray-600 underline"
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
			<div class="col-span-3 space-y-6">
				{#each instructors || [] as { people_id }}
					{@const { name, picture, country, institution, links, translations } = people_id}
					{@const instructorTranslation = translations.find((t) => t.languages_code === lang)}
					<div class="flex flex-col gap-8 rounded-3xl border border-gray-200 p-8 shadow-xs">
						<div class="flex items-center gap-5">
							<div
								class="w-full max-w-26 self-stretch rounded-2xl border border-gray-200 bg-cover bg-center"
								style:background-image="url({base}/api/assets/{picture.id})"
							></div>
							<div class="py-5">
								<div class="mb-1 text-lg/[1.15] font-medium">{name}</div>
								<div class="text-gray-700">
									{institution.name}, {country.translations?.find((t) => t.languages_code === lang)
										?.name}
								</div>
								{#if links}
									<div class="mt-4 flex gap-1">
										{#each linkTypes as { type, title, colorClass, Icon }}
											{@const link = links.find((l) => l.type === type)}
											{#if link}
												<a
													href={link.link}
													{title}
													target="_blank"
													class="size-5.5 rounded-full p-1 opacity-40 transition-all hover:opacity-100 {colorClass}"
												>
													<Icon class="size-full text-white" />
												</a>
											{/if}
										{/each}
									</div>
								{/if}
							</div>
						</div>
						<!-- {#if instructorTranslation?.summary}
							<div class="text-sm/[1.75] text-gray-500">
								{@html instructorTranslation.summary}
							</div>
						{/if} -->
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
