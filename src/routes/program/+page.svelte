<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import { courseLevelMap, getFlagEmoji } from '$lib/utils';
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
	imageUrl="{base}/api/assets/988afe9d-473a-4853-92d6-7d52a34dc518"
	class="mb-16 bg-[50%_47%] backdrop-blur-lg"
/>

<section id="activities" class="mx-auto mb-24 w-full max-w-6xl px-6">
	<div class="mb-8">
		<h2 class="mb-2.5 text-[2rem]/[1.15] font-semibold tracking-tight text-gray-900">
			{translate('Activities', 'Atividades')}
		</h2>
		{#if programTranslation?.activitiesSubtitle}
			<div class="max-w-128 text-gray-500">
				{programTranslation.activitiesSubtitle}
			</div>
		{/if}
	</div>
	<div class="flex flex-col gap-3">
		<div class="flex overflow-x-auto rounded-2xl bg-gray-100 p-1">
			{#each dates as date}
				{@const isSelected = date === selectedDate}
				<button
					onclick={() => (selectedDate = date)}
					class="grow rounded-xl px-3 py-1.25 text-sm font-medium transition-all {isSelected
						? 'bg-white shadow-xs'
						: 'text-gray-500 hover:text-gray-800'}"
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
								<div class="text-sm/[1] text-gray-400 max-md:hidden">
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
									<div class="text-sm/[1] text-gray-400">
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
								<div class="text-sm/[1] whitespace-nowrap text-gray-400">
									{startTime?.substring(0, 5)} &ndash; {endTime?.substring(0, 5)}
								</div>
							</div>
						</div>
						{#if speakers && speakers.length > 0}
							<div class="flex flex-col gap-0.5">
								{#each speakers as { people_id }}
									{@const { name, institution, country } = people_id}
									<div class="flex items-start gap-2">
										<span class="text-sm">{getFlagEmoji(country.alpha2)}</span>
										<span class="text-sm text-gray-500">{name}, {institution.name}</span>
									</div>
								{/each}
							</div>
						{/if}
					</div>
					<div class="text-sm whitespace-nowrap text-gray-500 max-md:hidden">
						{startTime?.substring(0, 5)} &ndash; {endTime?.substring(0, 5)}
					</div>
				{/snippet}
				{#if slug}
					<a
						href="{base}/program/{slug}"
						class="flex justify-between gap-3 rounded-2xl border border-gray-200 p-6 shadow-xs hover:bg-gray-50 active:shadow-inner max-md:flex-col-reverse md:items-center md:gap-6"
					>
						{@render content()}
					</a>
				{:else}
					<div
						class="flex justify-between gap-2 rounded-2xl bg-gray-50 px-6 py-5 text-gray-800 max-md:flex-col-reverse md:items-center md:gap-6"
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
		<h2 class="mb-2.5 text-[2rem]/[1] font-semibold tracking-tight text-gray-900">
			{translate('Courses', 'Cursos')}
		</h2>
		{#if programTranslation?.coursesSubtitle}
			<div class="max-w-128 text-gray-500">
				{programTranslation.coursesSubtitle}
			</div>
		{/if}
	</div>
	<div class="grid gap-2 md:grid-cols-2 md:gap-1.5">
		{#each courses.sort( (a, b) => a.slug.localeCompare(b.slug) ) as { slug, duration, level, translations }}
			{@const translation = translations?.find((i) => i.languages_code === lang)}
			<a
				href="{base}/program/{slug}"
				class="flex flex-col gap-1.5 rounded-2xl border border-gray-200 p-6 shadow-xs hover:bg-gray-50 active:shadow-inner"
			>
				<div>
					{translation?.title}
				</div>
				<div class="flex flex-wrap items-center gap-x-6 gap-y-1.5">
					{#snippet coursePropriety(label: string, value: string, Icon: typeof UserIcon)}
						<div class="flex items-center gap-1.5">
							<Icon aria-label={label} class="size-4 shrink-0 text-gray-300" />
							<span class="text-sm text-gray-400">{value}</span>
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
