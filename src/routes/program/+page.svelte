<script lang="ts">
	import { base } from '$app/paths';
	import { levelMap } from '$lib/utils';
	import { format } from 'date-fns';
	import { GaugeIcon, TimerIcon, UserIcon, UserRoundIcon } from 'lucide-svelte';

	let { data } = $props();
	let { lang, global, program, courses } = data;

	const globalTranslations = {
		'en-US': {
			pageTitle: 'Program',
			speakersTitle: 'Speakers',
			coursesTitle: 'Courses',
			hours: 'hours'
		},
		'pt-BR': {
			pageTitle: 'Programa',
			speakersTitle: 'Palestrantes',
			coursesTitle: 'Cursos',
			hours: 'horas'
		}
	};
</script>

<svelte:head>
	<title>{globalTranslations[lang].pageTitle} &ndash; EGB {format(global.startDate, 'y')}</title>
</svelte:head>

{#snippet coursePropriety(label: string, value: string, Icon: typeof UserIcon)}
	<div class="flex items-center gap-2">
		<Icon aria-label={label} class="size-4.5 shrink-0 text-gray-400/60" />
		<span class="text-gray-500">{value}</span>
	</div>
{/snippet}

<!-- <section id="speakers" class="mx-auto mt-18 mb-32 w-full max-w-6xl px-6">
	<h2 class="mb-10 text-4xl font-semibold tracking-tight text-gray-900">
		{globalTranslations[lang].speakersTitle}
	</h2>
	<div class="grid gap-6 md:grid-cols-2">
		{#each program.speakers || [] as { people_id }}
			{@const { name, link, institution, country, picture } = people_id}
			<Person
				{name}
				{link}
				{picture}
				institution={institution.name}
				country={country.translations?.find((i) => i.languages_code === lang)?.name || ''}
			/>
		{/each}
	</div>
</section> -->

<section id="courses" class="mx-auto mt-18 mb-16 w-full max-w-6xl px-6">
	<h2 class="mb-10 text-4xl font-semibold tracking-tight text-gray-900">
		{globalTranslations[lang].coursesTitle}
	</h2>
	<div class="flex flex-col gap-7">
		{#each courses as { slug, duration, instructors, level, translations }}
			{@const translation = translations?.find((i) => i.languages_code === lang)}
			<a
				href="{base}/program/{slug}"
				class="rounded-2xl border border-gray-200 p-7 shadow-sm transition-all active:shadow-inner md:hover:scale-[1.01] md:hover:shadow-lg"
			>
				<h3 class="mb-3 text-xl">
					{translation?.title}
				</h3>
				<div class="mb-6 flex flex-wrap gap-x-8 gap-y-2">
					{@render coursePropriety(
						'Duration',
						`${duration} ${globalTranslations[lang].hours}`,
						TimerIcon
					)}
					{@render coursePropriety('Level', levelMap[lang][level], GaugeIcon)}
					{@render coursePropriety(
						'Instructors',
						instructors?.map((i) => i.people_id.name).join(', ') || '',
						UserRoundIcon
					)}
				</div>
				<div class="flex flex-wrap gap-3">
					{#each translation?.keywords || [] as keyword}
						<span class="rounded-lg bg-gray-100 px-3 py-0.5 text-sm text-gray-600">{keyword}</span>
					{/each}
				</div>
			</a>
		{/each}
	</div>
</section>
