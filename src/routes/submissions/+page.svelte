<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import { format } from 'date-fns';
	import { ptBR } from 'date-fns/locale';
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
	let { lang, global, submissions } = data;
	let {
		lattesTemplate,
		wordTemplate,
		submitLink,
		submissionStart,
		submissionDeadline,
		acceptanceNotification
	} = submissions;

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
	title={translate('Call for Posters', 'Chamada de pôsteres')}
	imageUrl="{base}/api/assets/544ff6c5-c527-4c0d-aeab-214058f86d95"
	class="bg-top"
/>

<section id="overview" class="mx-auto mt-14 mb-28 w-full max-w-6xl px-6">
	<h2 class="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
		{translate('Submission Overview', 'Visão geral')}
	</h2>
	<p class="mb-14 max-w-128 leading-[1.55] text-gray-600">
		{translate(
			'We invite authors to submit original work (completed or ongoing) related to Bioinformatics.',
			'Convidamos autores a submeter trabalhos originais (concluídos ou em andamento) na área de Bioinformática.'
		)}
	</p>
	<div class="flex items-center justify-center gap-4 max-md:flex-col">
		{#snippet step(
			startDate: string | null,
			endDate: string | null,
			title: string,
			description: string,
			Icon: any
		)}
			<div class="flex w-56 flex-col items-center text-center">
				<Icon strokeWidth={1.25} class="mb-6 size-16 text-gray-800" />
				<div class="mb-0.5 text-sm font-medium text-gray-400">
					{#if startDate && endDate}
						{translate(format(startDate, 'dd MMM'), format(startDate, 'dd MMM', { locale: ptBR }))} &ndash;
						{translate(format(endDate, 'dd MMM'), format(endDate, 'dd MMM', { locale: ptBR }))}
					{:else}
						<em>To be defined</em>
					{/if}
				</div>
				<h3 class="mb-2.5 font-medium">{title}</h3>
				<p class="text-sm/[1.5] text-gray-500">
					{description}
				</p>
			</div>
		{/snippet}
		{@render step(
			submissionStart,
			submissionDeadline,
			translate('Abstract Submission', 'Submissão de resumos'),
			translate(
				'Submit a 1\u20134 page PDF summary of your work using the provided templates.',
				'Envie um resumo de 1\u20134 páginas em PDF utilizando os templates disponíveis.'
			),
			FileInputIcon
		)}
		<ChevronDownIcon strokeWidth={2} class="size-12 text-gray-200 md:-rotate-90" />
		{@render step(
			submissionDeadline,
			acceptanceNotification,
			translate('Double-Blind Peer Review', 'Revisão por pares cega'),
			translate(
				'Anonymous review process where authors and reviewers remain undisclosed to each other.',
				'Processo anônimo onde autores e revisores não têm acesso às identidades uns dos outros.'
			),
			GlassesIcon
		)}
		<ChevronDownIcon strokeWidth={2} class="size-12 text-gray-200 md:-rotate-90" />
		{@render step(
			global.eventStartDate,
			global.eventEndDate,
			translate('Poster Presentation', 'Apresentação de pôsteres'),
			translate(
				'Visually focused display of research highlights, presented in-person during dedicated sessions.',
				'Exposição visual dos principais resultados da pesquisa em sessões presenciais dedicadas.'
			),
			PresentationIcon
		)}
	</div>
</section>

<div class="mx-auto mb-28 grid w-full max-w-6xl gap-28 px-6 md:mb-18 md:grid-cols-2">
	{#snippet guidelinesLi(text: string)}
		<li class="ml-4.5 list-disc text-gray-600 marker:text-gray-300">
			{text}
		</li>
	{/snippet}
	<section id="abstract-guidelines">
		<h2 class="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
			{translate('Abstract Guidelines', 'Diretrizes para resumos')}
		</h2>
		<ul class="space-y-2.5">
			{@render guidelinesLi(
				translate(
					'Submissions must be unpublished.',
					'Trabalhos devem ser inéditos (não publicados).'
				)
			)}
			{@render guidelinesLi(
				translate(
					'Omit author details (blind review).',
					'Omita detalhes dos autores (revisão cega).'
				)
			)}
			{@render guidelinesLi(translate('Include up to 5 keywords.', 'Inclua até 5 palavras-chave.'))}
			{@render guidelinesLi(translate('1\u20134 pages.', '1\u20134 páginas.'))}
			<li class="ml-4.5 list-disc text-gray-600 marker:text-gray-300">
				<div class="mb-4">
					{translate(
						'The submitted abstract should be in PDF format, using one of the following templates:',
						'O resumo deve ser enviado em PDF, utilizando um dos templates:'
					)}
				</div>
				<div class="flex gap-2">
					{#snippet templateLink(label: string, fileId: string | null)}
						<a
							href="{base}/assets/{fileId}"
							aria-disabled={!fileId}
							target="_blank"
							class="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium {!fileId
								? 'pointer-events-none border-gray-100 bg-gray-100 text-gray-300 shadow-none'
								: 'border-gray-200 text-gray-900 shadow-sm transition-all active:shadow-inner md:hover:bg-gray-100'}"
						>
							<DownloadIcon class="size-4" />
							<span>{label}</span>
						</a>
					{/snippet}
					<div>
						{@render templateLink('Lattes', lattesTemplate)}
					</div>
					{@render templateLink('Word', wordTemplate)}
				</div>
			</li>
		</ul>
	</section>
	<section id="poster-guidelines">
		<h2 class="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
			{translate('Poster Guidelines', 'Diretrizes para pôsteres')}
		</h2>
		<ul class="space-y-2.5">
			{@render guidelinesLi(
				translate(
					'Focus on key findings—minimize text, emphasize figures, diagrams, and graphs.',
					'Destaque os principais resultados \u2013 minimize texto, privilegie figuras, diagramas e gráficos.'
				)
			)}
			{@render guidelinesLi(
				translate(
					'Uppercase title at the top with authors and affiliations below.',
					'Título em CAIXA ALTA no topo, com autores e afiliações abaixo.'
				)
			)}
			{@render guidelinesLi(
				translate(
					'Include institutional and funding agency logos.',
					'Inclua logos institucionais e de agências de fomento.'
				)
			)}
			{@render guidelinesLi(
				translate(
					'English or Portuguese (English preferred).',
					'Inglês ou Português (Inglês preferencial).'
				)
			)}
		</ul>
	</section>
</div>

<section id="submit" class="mx-auto mb-28 flex w-full max-w-6xl justify-center px-6 md:mb-18">
	<a
		href={submitLink}
		target="_blank"
		class="group inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-medium {submitLink
			? 'bg-gray-950 text-white shadow-sm transition-all hover:shadow-md active:shadow-inner md:hover:bg-gray-950/90'
			: 'pointer-events-none bg-gray-400 text-gray-200'}"
	>
		<span class="whitespace-nowrap">
			{translate('Submit Your Work', 'Submeter trabalho')}
		</span>
		<ChevronRightIcon class="size-4.5 transition-all md:group-hover:translate-x-1" />
	</a>
</section>

<section id="important-dates" class="mx-auto mb-28 w-full max-w-6xl px-6">
	<h2 class="mb-9 text-3xl font-semibold tracking-tight text-gray-900">
		{translate('Important Dates', 'Datas importantes')}
	</h2>
	<ul class="space-y-7">
		{#snippet date(name: string, date: string | null, Icon: any)}
			<li class="flex items-center gap-5">
				<Icon strokeWidth={1.25} class="size-11 text-gray-800" />
				<div>
					<div class="font-medium">{name}</div>
					<div class="text-gray-600">
						{#if date}
							{translate(
								format(date, 'MMM d, y'),
								`${format(date, 'd')} de ${format(date, 'MMMM', { locale: ptBR })} de ${format(date, 'y')}`
							)}
						{:else}
							<em>{translate('To be defined', 'A definir')}</em>
						{/if}
					</div>
				</div>
			</li>
		{/snippet}
		{@render date(
			translate('Submission Deadline', 'Prazo final para submissão'),
			submissionDeadline,
			SendIcon
		)}
		{@render date(
			translate('Acceptance Notification', 'Notificação de aceite'),
			acceptanceNotification,
			MailCheckIcon
		)}
	</ul>
</section>
