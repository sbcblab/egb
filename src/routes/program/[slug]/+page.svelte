<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import BoxedIcon from '$lib/components/BoxedIcon.svelte';
	import Header from '$lib/components/Header.svelte';
	import Person from '$lib/components/Person.svelte';
	import { courseLanguageMap, courseLevelMap, courseTypeMap, getDatesBetween } from '$lib/utils.js';
	import { format } from 'date-fns';
	import { ptBR } from 'date-fns/locale';
	import {
		BookIcon,
		ChevronLeft,
		ClockIcon,
		GaugeIcon,
		HourglassIcon,
		LanguagesIcon,
		MapPinIcon,
		NotebookPenIcon
	} from 'lucide-svelte';

	let { data } = $props();
	let { courses, activities, lang, global } = data;

	let activity = activities.find((a) => a.slug === page.params.slug) || null;
	let course = activity ? null : courses.find((c) => c.slug === page.params.slug) || null;

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
				class="inline-flex items-center gap-1 rounded-xl bg-slate-100 p-2 text-slate-600 transition-all hover:bg-slate-200 active:bg-slate-300"
			>
				<ChevronLeft strokeWidth={2} class="size-6" />
			</a>
		</div>
		{#if activity.type}
			<div class="mb-2 text-lg font-medium text-slate-400">
				{translate(
					activity.type,
					activity.type === 'Lecture'
						? 'Palestra'
						: activity.type === 'Social Gathering'
							? 'Confraternização'
							: activity.type === 'On-Site Course'
								? 'Curso presencial'
								: activity.type
				)}
			</div>
		{/if}
		<div class="flex flex-col gap-16 md:grid md:grid-cols-7 md:max-lg:gap-12">
			<div class="col-span-4">
				<div class="mb-16">
					<h1 class="text-3xl font-medium tracking-tighter text-slate-800 md:text-4xl">
						{translation?.title}
					</h1>
					{#if translation?.topics}
						<div class="mt-6 flex flex-wrap gap-2.5">
							{#each translation.topics as topic}
								<span
									class="rounded-full bg-slate-100/80 px-2.75 py-1.25 text-sm/[1] text-slate-500"
								>
									{topic}
								</span>
							{/each}
						</div>
					{/if}
				</div>
				<div class="flex gap-x-16 gap-y-8 max-sm:flex-col md:max-lg:flex-col">
					<div class="flex items-center gap-3.5">
						<BoxedIcon Icon={ClockIcon} size={9} strokeWidth={1.5} />
						<div>
							<div class="mb-0.25 text-sm whitespace-nowrap text-black">
								{translate(
									format(activity.date, 'EEEE, MMMM dd'),
									`${format(activity.date, 'EEEE, dd', { locale: ptBR })} de ${format(activity.date, 'MMMM', { locale: ptBR })}`
								)}
							</div>
							<div class="text-sm whitespace-nowrap text-slate-500">
								{activity.startTime?.slice(0, 5)} &ndash; {activity.endTime?.slice(0, 5)}
							</div>
						</div>
					</div>
					{#if activity.locationLine1 || activity.locationLine2}
						<div class="flex items-center gap-4">
							<BoxedIcon size={9} strokeWidth={1.5} Icon={MapPinIcon} />
							<div>
								<div class="mb-0.25 text-sm text-black">{activity.locationLine1}</div>
								<div class="text-sm text-slate-500">{activity.locationLine2}</div>
							</div>
						</div>
					{/if}
				</div>
				{#if translation?.summary}
					<div class="mt-16">
						<h2 class="mb-3 text-lg font-semibold">{translate('Summary', 'Resumo')}</h2>
						<p class="markdown leading-[1.75] text-slate-600">
							{@html translation.summary}
						</p>
					</div>
				{/if}
			</div>
			{#if activity.speakers}
				<div class="col-span-3 space-y-3">
					{#each activity.speakers as { people_id }}
						<Person {lang} person={people_id} />
					{/each}
				</div>
			{/if}
		</div>
	</div>
{:else if course}
	{@const {
		duration,
		instructors,
		monitors,
		level,
		references,
		type,
		language,
		translations,
		schedule
	} = course}
	{@const translation = translations?.find((i) => i.languages_code === lang)}
	<div class="mx-auto mt-6 mb-32 w-full max-w-6xl px-6 md:mt-10">
		<div class="mb-8 md:mb-12">
			<a
				href="{base}/program"
				class="inline-flex items-center gap-1 rounded-xl bg-slate-100 p-2 text-slate-600 transition-all hover:bg-slate-200"
			>
				<ChevronLeft strokeWidth={2} class="size-6" />
			</a>
		</div>
		<div class="mb-2 text-lg font-medium text-slate-400">
			{translate('Course', 'Curso')}
		</div>
		<div class="flex flex-col md:grid md:grid-cols-7 md:gap-12">
			<div class="col-span-4">
				<div class="mb-16">
					<h1 class="mb-6 text-3xl font-medium tracking-tighter text-slate-800 md:text-4xl">
						{translation?.title}
					</h1>
					{#if translation?.keywords}
						<div class="flex flex-wrap gap-2.5">
							{#each translation?.keywords || [] as keyword}
								<span
									class="rounded-full bg-slate-100/80 px-2.75 py-1.25 text-sm/[1] text-slate-500"
								>
									{keyword}
								</span>
							{/each}
						</div>
					{/if}
				</div>
				<div class="mb-16 grid grid-cols-2 gap-y-6">
					{#snippet coursePropriety(label: string, value: string, Icon: any)}
						<div class="flex items-center gap-3">
							<BoxedIcon {Icon} size={9} strokeWidth={1.25} />
							<div>
								<div class="text-sm text-slate-400/80">{label}</div>
								<div class="text-sm text-slate-800">{value}</div>
							</div>
						</div>
					{/snippet}
					{@render coursePropriety(
						translate('Level', 'Nível'),
						courseLevelMap[lang][level],
						GaugeIcon
					)}
					{@render coursePropriety(
						translate('Duration', 'Duração'),
						`${duration} ${translate('hours', 'horas')}`,
						HourglassIcon
					)}
					{@render coursePropriety(
						translate('Type', 'Tipo'),
						courseTypeMap[lang][type],
						type === 1 ? BookIcon : NotebookPenIcon
					)}
					{@render coursePropriety(
						translate('Language', 'Idioma'),
						courseLanguageMap[lang][language],
						LanguagesIcon
					)}
				</div>
				{#if schedule}
					<div class="mb-16">
						<div class="flex gap-2">
							<div class="w-18 pr-3"></div>
							<div class="grid grow grid-cols-3 gap-0.5">
								{#each [translate('Morning', 'Manhã'), translate('Afternoon', 'Tarde'), translate('Evening', 'Noite')] as day}
									<div class="pb-1 text-center text-sm text-slate-400">{day}</div>
								{/each}
							</div>
						</div>
						<div class="flex flex-col gap-0.5 p-0.5">
							{#each getDatesBetween(global.coursesStartDate, global.coursesEndDate) as date}
								<div class="flex h-7 gap-0.5">
									<div
										class="grid w-18 grid-cols-2 items-center justify-end gap-1.25 pr-3 text-sm whitespace-nowrap"
									>
										<span class="text-slate-400/50">
											{format(date, 'd/M')}
										</span>
										<span class="text-slate-400">
											{translate(format(date, 'E'), format(date, 'EEEEEE', { locale: ptBR }))}
										</span>
									</div>
									<div class="grid grow grid-cols-3 gap-0.5">
										{#snippet timePeriodCol(condition: (s: string) => boolean)}
											<div class="flex flex-col gap-1">
												{#each schedule.filter((s) => s.date === date && condition(s.startTime)) as item}
													<div
														class="flex h-full items-center justify-center rounded-md bg-primary-900 text-xs font-medium text-white sm:text-sm"
													>
														{item.startTime.slice(0, 5)} &ndash; {item.endTime.slice(0, 5)}
													</div>
												{:else}
													<div
														class="flex h-full items-center justify-center rounded-md bg-slate-50 text-sm font-medium text-white"
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
						<div class="mb-12">
							<h2 class="mb-2.5 font-medium">{label}</h2>
							<p class="markdown leading-[1.75] text-slate-600">
								{@html text}
							</p>
						</div>
					{/if}
				{/snippet}
				{@render courseSection(translate('Summary', 'Resumo'), translation?.summary)}
				{@render courseSection(translate('Objectives', 'Objetivos'), translation?.objectives)}
				{#if translation?.topics}
					<div class="mb-10">
						<h2 class="mb-2.5 font-medium">{translate('Topics', 'Conteúdo')}</h2>
						<ul class="markdown list-disc text-slate-600">
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
				{#if references}
					<div class="mb-12">
						<h2 class="mb-3 font-medium">
							{translate('References', 'Bibliografia')}
						</h2>
						<ul class="markdown list-disc space-y-3">
							{#each references as { author, link, title }}
								<li class="text-slate-600">
									{#if link}
										<a href={link} target="_blank">{author}, <em>{title}</em></a>
									{:else}
										<span>{author}, <em>{title}</em></span>
									{/if}
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
			<div class="col-span-3 mb-12 space-y-12">
				{#if instructors && instructors.length > 0}
					<div>
						<h2 class="mb-3 font-medium">Instructors</h2>
						<div class="space-y-3">
							{#each instructors as { people_id }}
								<Person {lang} person={people_id} />
							{/each}
						</div>
					</div>
				{/if}
				{#if monitors && monitors.length > 0}
					<div>
						<h2 class="mb-3 font-medium">Monitors</h2>
						<div class="space-y-3">
							{#each monitors as { people_id }}
								<Person {lang} person={people_id} />
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
