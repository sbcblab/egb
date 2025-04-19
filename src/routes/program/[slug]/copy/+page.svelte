<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import Image from '$lib/components/Image.svelte';
	import { levelMap } from '$lib/utils';
	import { format } from 'date-fns';
	import { ptBR } from 'date-fns/locale';
	import {
		CalendarDaysIcon,
		ChevronLeft,
		GaugeIcon,
		GlobeIcon,
		MapPinnedIcon,
		TimerIcon
	} from 'lucide-svelte';
	import AcademiconsLattes from '~icons/academicons/lattes';
	import Fa6BrandsGoogleScholar from '~icons/fa6-brands/google-scholar';
	import RiGithubFill from '~icons/ri/github-fill';
	import RiLinkedinFill from '~icons/ri/linkedin-fill';
	import SimpleIconsOrcid from '~icons/simple-icons/orcid';
	import SimpleIconsResearchgate from '~icons/simple-icons/researchgate';

	let { data } = $props();
	let { courses, activities, lang, global } = data;

	let activity = activities.find((a) => a.slug === page.params.slug) || null;
	let course = activity ? null : courses.find((c) => c.slug === page.params.slug) || null;

	const linkMap = {
		website: { title: 'Website', colorClass: 'bg-gray-500', Icon: GlobeIcon },
		lattes: {
			title: translate('Lattes Curriculum', 'Currículo Lattes'),
			colorClass: 'bg-indigo-900/90',
			Icon: AcademiconsLattes
		},
		linkedin: {
			title: 'LinkedIn',
			colorClass: 'bg-blue-800/80',
			Icon: RiLinkedinFill
		},
		orcid: {
			title: 'ORCID',
			colorClass: 'bg-lime-500/70',
			Icon: SimpleIconsOrcid
		},
		scholar: {
			title: 'Google Scholar',
			colorClass: 'bg-blue-700/65',
			Icon: Fa6BrandsGoogleScholar
		},
		researchgate: {
			title: 'ResearchGate',
			colorClass: 'bg-teal-500/80',
			Icon: SimpleIconsResearchgate
		},
		github: {
			title: 'GitHub',
			colorClass: 'bg-neutral-800',
			Icon: RiGithubFill
		}
	};

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
	{@const { type, translations, date, startTime, endTime, locationLine1, locationLine2, speakers } =
		activity}
	{@const translation = translations?.find((i) => i.languages_code === lang)}
	<div class="mx-auto mt-6 mb-32 w-full max-w-6xl px-6 md:mt-10">
		<div class="mb-6 md:mb-12">
			<a
				href="{base}/program"
				class="inline-flex items-center gap-1 rounded-xl bg-gray-100 p-2 text-gray-600 transition-all hover:bg-gray-200"
			>
				<ChevronLeft strokeWidth={2} class="size-6" />
			</a>
		</div>
		<div class="mb-2 text-lg font-medium text-gray-500">
			{translate(
				type || '',
				type === 'Lecture'
					? 'Palestra'
					: (type === 'Social Gathering' ? 'Confraternização' : type) || ''
			)}
		</div>
		<div class="flex flex-col gap-16 md:grid md:grid-cols-7 md:max-lg:gap-12">
			<div class="col-span-4">
				<div class="mb-16">
					<h1 class="mb-6 text-4xl tracking-tight">
						{translation?.title}
					</h1>
					{#if translation?.topics}
						<div class="flex flex-wrap gap-3">
							{#each translation?.topics || [] as topic}
								<span class="rounded-lg bg-gray-100/70 px-3.25 py-1.75 text-sm/[1] text-gray-600">
									{topic}
								</span>
							{/each}
						</div>
					{/if}
				</div>
				<div class="-ml-0.75 flex gap-x-16 gap-y-8 max-sm:flex-col md:max-lg:flex-col">
					<div class="flex items-center gap-3.5">
						<CalendarDaysIcon strokeWidth={1} class="mb-1 size-11 shrink-0 text-gray-800" />
						<div class="flex flex-col">
							<span class="font-medium whitespace-nowrap">
								{translate(
									format(date, 'EEEE, MMMM dd'),
									`${format(date, 'EEEE, dd', { locale: ptBR })} de ${format(date, 'MMMM', { locale: ptBR })}`
								)}
							</span>
							<span class="whitespace-nowrap text-gray-600">
								{startTime?.slice(0, 5)} &ndash; {endTime?.slice(0, 5)}
							</span>
						</div>
					</div>
					{#if locationLine1 || locationLine2}
						<div class="flex items-center gap-3.5">
							<MapPinnedIcon strokeWidth={1} class="mb-1 size-11 shrink-0 text-gray-800" />
							<div class="flex flex-col">
								<span class="font-medium">{locationLine1}</span>
								<span class="text-gray-600">{locationLine2}</span>
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
				{#each speakers || [] as { people_id }}
					{@const { name, picture, country, institution, links, translations } = people_id}
					{@const translation = translations.find((t) => t.languages_code === lang)}
					<div class="flex flex-col gap-8 rounded-3xl border border-gray-200 p-8 shadow-sm">
						<div class="flex items-center gap-5">
							<div
								class="h-32 w-full max-w-26 rounded-2xl border border-gray-200 bg-cover bg-center"
								style:background-image="url({base}/api/assets/{picture.id})"
							></div>
							<div>
								<div class="mb-1 text-lg/[1.15] font-medium">{name}</div>
								<div class="text-gray-700">
									{institution.name}, {country.translations?.find((t) => t.languages_code === lang)
										?.name}
								</div>
								{#if links}
									<div class="mt-4 flex gap-1">
										{#snippet speakerLink(
											title: string,
											href: string,
											colorClass: string,
											Icon: any
										)}
											<a
												{href}
												{title}
												target="_blank"
												class="size-5.5 rounded-full p-1 opacity-40 transition-all hover:opacity-100 {colorClass}"
											>
												<Icon class="size-full text-white" />
											</a>
										{/snippet}
										{#each links as { type, link }}
											{@render speakerLink(
												linkMap[type].title,
												link,
												linkMap[type].colorClass,
												linkMap[type].Icon
											)}
										{/each}
									</div>
								{/if}
							</div>
						</div>
						{#if translation?.summary}
							<div class="text-sm/[1.75] text-gray-600">
								{@html translation.summary}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
{:else if course}
	{@const { duration, instructors, level, references, translations } = course}
	{@const translation = translations?.find((t) => t.languages_code === lang)}
	<div class="mx-auto mt-6 mb-16 w-full max-w-6xl gap-20 px-6 md:mt-12">
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
		<a
			href="{base}/program"
			class="mb-8 inline-flex items-center gap-1 text-gray-700 transition-all hover:text-gray-500"
		>
			<ChevronLeft strokeWidth={2.5} class="size-5" />
			<span class="text-lg font-medium">{translate('Program', 'Programa')}</span>
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
				{#snippet label(name: string)}
					<h3 class="mb-2 font-medium">{name}</h3>
				{/snippet}
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
									<a href={link} target="_blank" class="underline hover:text-gray-400"
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
						{@const { name, institution, country, picture } = people_id}
						<div class="flex items-center gap-5">
							<Image image={picture} class="size-18 shrink-0 rounded-2xl object-cover" />
							<div>
								<div class="text-lg">{name}</div>
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
