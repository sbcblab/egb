<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import { courseLevelMap } from '$lib/utils';
	import { format } from 'date-fns';
	import { ptBR } from 'date-fns/locale';
	import { GaugeIcon, HourglassIcon, UserIcon } from 'lucide-svelte';

	let { data } = $props();
	let { lang, global, courses, activities, program } = data;

	let programTranslation = program.translations?.find((t) => t.languages_code === lang);
	let dates = Array.from(new Set(activities.map((a) => a.date as string)));
	let selectedDate = $state(dates[0]);

	function translate(enStr: string, ptStr: string) {
		return lang === 'pt-BR' ? ptStr : enStr;
	}
</script>

<svelte:head>
	<title>{translate('Program', 'Programa')} &ndash; EGB {format(global.eventStartDate, 'y')}</title>
</svelte:head>

<Banner
	{lang}
	title={translate('Program', 'Programa')}
	imageUrl={program.bannerImage ? `${base}/api/assets/${program.bannerImage.id}` : undefined}
	class="mb-16 bg-[50%_47%] backdrop-blur-lg"
/>

<section id="activities" class="mx-auto mb-24 w-full max-w-6xl px-6">
	<div class="mb-8">
		<h2 class="mb-2.5 text-[2rem]/[1.15] font-semibold tracking-tight text-slate-900">
			{translate('Activities', 'Atividades')}
		</h2>
		{#if programTranslation?.activitiesSubtitle}
			<div class="max-w-128 text-slate-500">
				{programTranslation.activitiesSubtitle}
			</div>
		{/if}
	</div>
	<div class="flex flex-col gap-3">
		<div class="flex overflow-x-auto rounded-2xl bg-slate-100 p-1">
			{#each dates as date}
				{@const isSelected = date === selectedDate}
				<button
					onclick={() => (selectedDate = date)}
					class="grow rounded-xl px-3 py-1.25 text-sm font-medium transition-all {isSelected
						? 'bg-white shadow-xs'
						: 'text-slate-500 hover:text-slate-800 active:text-slate-950'}"
				>
					<div class="mb-0.25">
						<span class="md:hidden"
							>{translate(format(date, 'E'), format(date, 'EEEEEE', { locale: ptBR }))}</span
						>
						<span class="max-md:hidden"
							>{translate(format(date, 'EEEE'), format(date, 'EEEE', { locale: ptBR }))}</span
						>
					</div>
					<div class="text-xs">{format(date, 'dd/MM')}</div>
				</button>
			{/each}
		</div>
		<div class="flex flex-col gap-1.5">
			{#each activities.filter((a) => a.date === selectedDate) as { slug, translations, startTime, endTime, speakers, type }}
				{#snippet content()}
					<div class="flex flex-col gap-2 md:gap-1.5">
						<div class="flex flex-col-reverse gap-2 md:gap-1.25">
							<div>{translations?.find((i) => i.languages_code === lang)?.title}</div>
							{#if type}
								<div class="text-sm/[1] text-slate-400 max-md:hidden">
									{translate(
										type,
										type === 'Lecture'
											? 'Palestra'
											: type === 'Social Gathering'
												? 'Confraternização'
												: type === 'On-Site Course'
													? 'Curso presencial'
													: type
									)}
								</div>
							{/if}
							<div class="items-top flex justify-between md:hidden">
								{#if type}
									<div class="text-sm/[1] text-slate-400">
										{translate(
											type,
											type === 'Lecture'
												? 'Palestra'
												: type === 'Social Gathering'
													? 'Confraternização'
													: type === 'On-Site Course'
														? 'Curso presencial'
														: type
										)}
									</div>
								{/if}
								<div class="text-sm/[1] whitespace-nowrap text-slate-400">
									{startTime?.substring(0, 5)} &ndash; {endTime?.substring(0, 5)}
								</div>
							</div>
						</div>
						{#if speakers && speakers.length > 0}
							<div class="flex flex-col gap-0.75">
								{#each speakers as { people_id }}
									{@const { name, institution } = people_id}
									<div class="flex items-center gap-2">
										<span class="size-1.25 rounded-full bg-primary-700 text-sm"></span>
										<span class="text-sm text-slate-500">{name}, {institution.name}</span>
									</div>
								{/each}
							</div>
						{/if}
					</div>
					<div class="text-sm whitespace-nowrap text-slate-500 max-md:hidden">
						{startTime?.substring(0, 5)} &ndash; {endTime?.substring(0, 5)}
					</div>
				{/snippet}
				{#if slug}
					<a
						href="{base}/program/{slug}"
						class="flex justify-between gap-3 rounded-2xl border border-slate-200 p-6 shadow-xs hover:bg-slate-50 active:bg-slate-100 active:shadow-inner max-md:flex-col-reverse md:items-center md:gap-6"
					>
						{@render content()}
					</a>
				{:else}
					<div
						class="flex justify-between gap-2 rounded-2xl bg-slate-50 px-6 py-5 text-slate-800 max-md:flex-col-reverse md:items-center md:gap-6"
					>
						{@render content()}
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>

<section id="courses" class="mx-auto mb-32 w-full max-w-6xl px-6">
	<div class="mb-8">
		<h2 class="mb-2.5 text-[2rem]/[1] font-semibold tracking-tight text-slate-900">
			{translate('Courses', 'Cursos')}
		</h2>
		{#if programTranslation?.coursesSubtitle}
			<div class="max-w-128 text-slate-500">
				{programTranslation.coursesSubtitle}
			</div>
		{/if}
	</div>
	<div class="grid gap-2 md:grid-cols-2 md:gap-1.5">
		{#each courses.sort( (a, b) => a.slug.localeCompare(b.slug) ) as { slug, duration, level, translations }}
			{@const translation = translations?.find((i) => i.languages_code === lang)}
			<a
				href="{base}/program/{slug}"
				class="flex flex-col gap-2 rounded-2xl border border-slate-200 p-6 shadow-xs hover:bg-slate-50 active:bg-slate-100 active:shadow-inner"
			>
				<div>
					{translation?.title}
				</div>
				<div class="flex flex-wrap items-center gap-x-7 gap-y-1.5">
					{#snippet coursePropriety(label: string, value: string, Icon: typeof UserIcon)}
						<div class="flex items-center gap-2">
							<Icon aria-label={label} class="size-3.5 shrink-0 text-primary-700" />
							<span class="text-sm text-slate-500">{value}</span>
						</div>
					{/snippet}
					{@render coursePropriety(
						'Duration',
						`${duration} ${translate('hours', 'horas')}`,
						HourglassIcon
					)}
					{@render coursePropriety('Level', courseLevelMap[lang][level], GaugeIcon)}
				</div>
			</a>
		{/each}
	</div>
</section>
