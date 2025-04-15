<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import { format } from 'date-fns';
	import {
		ChevronDownIcon,
		ChevronRightIcon,
		DownloadIcon,
		FileInputIcon,
		GlassesIcon,
		MailCheckIcon,
		PresentationIcon,
		SendIcon
	} from 'lucide-svelte';

	let { data } = $props();
	let { lang, global } = data;

	function translate(enStr: string, ptStr: string) {
		return lang === 'pt-BR' ? ptStr : enStr;
	}
</script>

<svelte:head>
	<title
		>{translate('Submissions', 'Submissões')} &ndash; EGB {format(
			global.eventStartDate,
			'y'
		)}</title
	>
</svelte:head>

<Banner
	{lang}
	title={translate('Call for Posters', 'Chamada de Pôsteres')}
	imageUrl="{base}/api/assets/544ff6c5-c527-4c0d-aeab-214058f86d95"
	class="bg-top"
/>

<section id="overview" class="mx-auto mt-20 mb-32 w-full max-w-6xl px-6">
	<h2 class="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
		{translate('Submission Overview', 'Submission Overview')}
	</h2>
	<p class="mb-14 max-w-128 leading-[1.55] text-gray-600">
		{translate(
			'We invite authors to submit original work (completed or ongoing) related to Bioinformatics.',
			'We invite authors to submit original work (completed or ongoing) related to Bioinformatics.'
		)}
	</p>
	<div class="flex items-center justify-center gap-4 max-md:flex-col">
		{#snippet step(date: string, title: string, description: string, Icon: any)}
			<div class="flex w-56 flex-col items-center text-center">
				<Icon strokeWidth={1.25} class="mb-6 size-16 text-gray-900" />
				<div class="mb-0.5 text-sm font-medium text-gray-400">{date}</div>
				<h3 class="mb-2.5 font-medium">{title}</h3>
				<p class="text-sm/[1.5] text-gray-500">
					{description}
				</p>
			</div>
		{/snippet}
		{@render step(
			translate('15 Aug \u2013 15 Sep', '15 Aug \u2013 15 Sep'),
			translate('Abstract Submission', 'Abstract Submission'),
			translate(
				'Submit a 1\u20134 page PDF summary of your work using the provided templates.',
				'Submit a 1\u20134 page PDF summary of your work using the provided templates.'
			),
			FileInputIcon
		)}
		<ChevronDownIcon strokeWidth={2} class="size-12 text-gray-200 md:-rotate-90" />
		{@render step(
			translate('15 Sep \u2013 18 Sep', '15 Sep \u2013 18 Sep'),
			translate('Double-Blind Peer Review', 'Double-Blind Peer Review'),
			translate(
				'Anonymous review process where authors and reviewers remain undisclosed to each other.',
				'Anonymous review process where authors and reviewers remain undisclosed to each other.'
			),
			GlassesIcon
		)}
		<ChevronDownIcon strokeWidth={2} class="size-12 text-gray-200 md:-rotate-90" />
		{@render step(
			translate('25 Sep \u2013 29 Sep', '25 Sep \u2013 29 Sep'),
			translate('Poster Presentation', 'Poster Presentation'),
			translate(
				'Visually focused display of research highlights, presented in-person during dedicated sessions.',
				'Visually focused display of research highlights, presented in-person during dedicated sessions.'
			),
			PresentationIcon
		)}
	</div>
</section>

<div class="mx-auto mb-20 grid w-full max-w-6xl gap-20 px-6 md:grid-cols-2">
	{#snippet guidelinesLi(text: string)}
		<li class="ml-4.5 list-disc text-gray-600 marker:text-gray-300">
			{text}
		</li>
	{/snippet}
	<section id="abstract-guidelines">
		<h2 class="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
			{translate('Abstract Guidelines', 'Abstract Guidelines')}
		</h2>
		<ul class="space-y-2.5">
			{@render guidelinesLi(
				translate('Submissions must be unpublished.', 'Submissions must be unpublished.')
			)}
			{@render guidelinesLi(
				translate(
					'Omit author details (double-blind peer review).',
					'Omit author details (double-blind peer review).'
				)
			)}
			{@render guidelinesLi(translate('Include up to 5 keywords.', 'Include up to 5 keywords.'))}
			{@render guidelinesLi(translate('1\u20134 pages.', '1\u20134 pages.'))}
			<li class="ml-4.5 list-disc text-gray-600 marker:text-gray-300">
				<div class="mb-4">
					{translate(
						'The submitted abstract should be in PDF format, using one of the following templates:',
						'The submitted abstract should be in PDF format, using one of the following templates:'
					)}
				</div>
				<div class="flex gap-2">
					{#snippet templateLink(label: string, href: string)}
						<a
							{href}
							target="_blank"
							class="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-all active:shadow-inner md:hover:bg-gray-100"
						>
							<DownloadIcon class="size-4" />
							<span>{label}</span>
						</a>
					{/snippet}
					<div>
						{@render templateLink(
							'Lattes',
							'https://www.ufrgs.br/egb/wp-content/uploads/2019/01/Latex.zip'
						)}
					</div>
					{@render templateLink(
						'Word',
						'https://www.ufrgs.br/egb/wp-content/uploads/2019/01/Word.zip'
					)}
				</div>
			</li>
		</ul>
	</section>
	<section id="poster-guidelines">
		<h2 class="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
			{translate('Poster Guidelines', 'Poster Guidelines')}
		</h2>
		<ul class="space-y-2.5">
			{@render guidelinesLi(
				translate(
					'Focus on key findings—minimize text, emphasize figures, diagrams, and graphs.',
					'Focus on key findings—minimize text, emphasize figures, diagrams, and graphs.'
				)
			)}
			{@render guidelinesLi(
				translate(
					'Uppercase title at the top with authors and affiliations below.',
					'Uppercase title at the top with authors and affiliations below.'
				)
			)}
			{@render guidelinesLi(
				translate(
					'Include institutional and funding agency logos.',
					'Include institutional and funding agency logos.'
				)
			)}
			{@render guidelinesLi(
				translate(
					'English or Portuguese (English preferred).',
					'English or Portuguese (English preferred).'
				)
			)}
		</ul>
	</section>
</div>

<section id="submit" class="mx-auto mb-20 flex w-full max-w-6xl justify-center px-6">
	<a
		href="https://cmt3.research.microsoft.com/EGB2023"
		target="_blank"
		class="group inline-flex items-center gap-2 rounded-2xl bg-gray-950 px-6 py-3 font-medium text-white shadow-sm transition-all md:hover:bg-gray-950/90 md:hover:shadow-md"
	>
		<span class="whitespace-nowrap">
			{translate('Submit Your Work', 'Submit Your Work')}
		</span>
		<ChevronRightIcon class="size-4.5 transition-all md:group-hover:translate-x-1" />
	</a>
</section>

<section id="important-dates" class="mx-auto mb-40 w-full max-w-6xl px-6">
	<h2 class="mb-9 text-3xl font-semibold tracking-tight text-gray-900">
		{translate('Important Dates', 'Important Dates')}
	</h2>
	<ul class="space-y-7">
		{#snippet date(name: string, date: string, Icon: any)}
			<li class="flex items-center gap-5">
				<Icon strokeWidth={1.25} class="size-12 text-gray-900" />
				<div>
					<div class="font-medium">{name}</div>
					<div class="text-gray-600">{date}</div>
				</div>
			</li>
		{/snippet}
		{@render date('Submission Deadline', 'Sep 15, 2023', SendIcon)}
		{@render date('Acceptance Notification', 'Sep 18, 2023', MailCheckIcon)}
	</ul>
</section>
