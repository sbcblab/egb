<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import { getFlagEmoji, levelMap } from '$lib/utils';
	import { format } from 'date-fns';
	import { GaugeIcon, TimerIcon, UserIcon, UserRoundIcon } from 'lucide-svelte';

	let { data } = $props();
	let { lang, global, courses, activities } = data;

	let validActivities = activities.filter(
		(a) => a.date !== null && a.startTime !== null && a.endTime !== null
	);
	let dates = Array.from(new Set(validActivities.map((a) => a.date as string)));
	let selectedDate = $state(dates[0]);

	function translate(enStr: string, ptStr: string) {
		return lang === 'pt-BR' ? ptStr : enStr;
	}
</script>

<svelte:head>
	<title>{translate('Program', 'Programa')} &ndash; EGB {format(global.startDate, 'y')}</title>
</svelte:head>

{#snippet coursePropriety(label: string, value: string, Icon: typeof UserIcon)}
	<div class="flex items-center gap-1.5">
		<Icon aria-label={label} class="mb-1 size-4 shrink-0 text-gray-400" />
		<span class="text-sm text-gray-600">{value}</span>
	</div>
{/snippet}

<Banner
	{lang}
	title={translate('Program', 'Programa')}
	imageUrl="{base}/api/assets/988afe9d-473a-4853-92d6-7d52a34dc518"
	class="bg-[50%_47%] backdrop-blur-lg"
/>

<section id="activities" class="mx-auto mt-18 mb-24 w-full max-w-6xl px-6">
	<h2 class="mb-6 text-3xl font-semibold tracking-tight text-gray-900">
		{translate('Activities', 'Atividades')}
	</h2>
	<div class="flex flex-col gap-3">
		<div class="flex overflow-x-auto rounded-2xl bg-gray-100 p-1">
			{#each dates as date}
				{@const isSelected = date === selectedDate}
				<button
					onclick={() => (selectedDate = date)}
					class="grow rounded-xl px-3 py-1 text-sm font-medium transition-all {isSelected
						? 'bg-white shadow-sm'
						: 'bg-gray-100 text-gray-500'}"
				>
					<div>
						<span class="md:hidden">{format(date, 'E')}</span>
						<span class="max-md:hidden">{format(date, 'EEEE')}</span>
					</div>
					<div>{format(date, 'dd/MM')}</div>
				</button>
			{/each}
		</div>
		<div class="flex flex-col gap-1.5">
			{#each activities.filter((a) => a.date === selectedDate) as { translations, startTime, endTime, speakers, clickable }}
				{#snippet content()}
					<div class="flex flex-col gap-2 md:gap-1.5">
						<div>{translations?.find((i) => i.languages_code === lang)?.title}</div>
						{#if speakers?.length || 0 > 0}
							<div class="flex flex-col gap-0.5">
								{#each speakers || [] as { people_id }}
									{@const { name, institution, country } = people_id}
									<div class="flex items-center gap-2">
										<span class="text-sm">{getFlagEmoji(country.alpha2)}</span>
										<span class="text-sm text-gray-600">{name}, {institution.name}</span>
									</div>
								{/each}
							</div>
						{/if}
					</div>
					<div class="text-sm whitespace-nowrap text-gray-600">
						{startTime?.substring(0, 5)} &ndash; {endTime?.substring(0, 5)}
					</div>
				{/snippet}
				{#if clickable}
					<a
						href="{base}/program"
						class="flex justify-between gap-3 rounded-2xl border border-gray-200 p-6 shadow-sm transition-all active:shadow-inner max-md:flex-col-reverse md:items-center md:gap-6 md:hover:bg-gray-50"
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

<section id="courses" class="mx-auto mb-18 w-full max-w-6xl px-6">
	<h2 class="mb-6 text-3xl font-semibold tracking-tight text-gray-900">
		{translate('Courses', 'Cursos')}
	</h2>
	<div class="grid gap-2 md:grid-cols-2">
		{#each courses as { slug, duration, instructors, level, translations }}
			{@const translation = translations?.find((i) => i.languages_code === lang)}
			<a
				href="{base}/program/{slug}"
				class="flex flex-col gap-2.5 rounded-2xl border border-gray-200 p-6 shadow-sm transition-all active:shadow-inner md:hover:bg-gray-50"
			>
				<div>
					{translation?.title}
				</div>
				<div class="flex flex-wrap gap-x-6 gap-y-1.5">
					{@render coursePropriety(
						'Duration',
						`${duration} ${translate('hours', 'horas')}`,
						TimerIcon
					)}
					{@render coursePropriety('Level', levelMap[lang][level], GaugeIcon)}
					{@render coursePropriety(
						'Instructors',
						instructors?.map((i) => i.people_id.name).join(', ') || '',
						UserRoundIcon
					)}
				</div>
			</a>
		{/each}
	</div>
</section>
