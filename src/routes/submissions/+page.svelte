<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import BoxedIcon from '$lib/components/BoxedIcon.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import { format } from 'date-fns';
	import { ptBR } from 'date-fns/locale';
	import {
		ChevronDownIcon,
		DownloadIcon,
		FileInputIcon,
		GlassesIcon,
		MailCheckIcon,
		PresentationIcon,
		SendIcon
	} from 'lucide-svelte';

	let { data } = $props();
	let { lang, global, submissions } = data;

	let translation = submissions.translations?.find((t) => t.languages_code === lang);

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
	imageUrl={submissions.bannerImage
		? `${base}/api/assets/${submissions.bannerImage.id}`
		: undefined}
	class="mb-16 bg-top"
/>

<section id="overview" class="mx-auto mb-24 w-full max-w-6xl px-6">
	<h2 class="mb-4 text-[2rem]/[1.15] font-semibold tracking-tight text-slate-900">
		{translate('Submission Overview', 'Visão geral')}
	</h2>
	{#if translation?.overview}
		<p class="mb-12 max-w-128 leading-[1.65] text-slate-600">
			{translation.overview}
		</p>
	{/if}
	<div class="flex items-center justify-between max-md:flex-col">
		{#snippet phase(
			startDate: string | null,
			endDate: string | null,
			title: string,
			description: string,
			Icon: any
		)}
			<Card class="flex max-w-68 flex-col items-center p-5 text-center md:w-56">
				<BoxedIcon {Icon} class="mb-5" />
				<div class="mb-1 text-sm font-medium text-slate-400">
					{#if startDate && endDate}
						{translate(format(startDate, 'dd MMM'), format(startDate, 'dd MMM', { locale: ptBR }))} &ndash;
						{translate(format(endDate, 'dd MMM'), format(endDate, 'dd MMM', { locale: ptBR }))}
					{:else if startDate}
						{translate(format(startDate, 'dd MMM'), format(startDate, 'dd MMM', { locale: ptBR }))}
					{:else}
						<em>To be defined</em>
					{/if}
				</div>
				<h3 class="mb-3.5 text-sm font-medium text-slate-900">{title}</h3>
				<p class="text-sm/[1.5] text-slate-400">
					{description}
				</p>
			</Card>
		{/snippet}
		{@render phase(
			submissions.submissionStart,
			submissions.submissionDeadline,
			translate('Abstract Submission', 'Submissão de resumos'),
			translate(
				'Submit a 1\u20134 page PDF summary of your work using the provided templates.',
				'Envie um resumo de 1\u20134 páginas do seu trabalho de utilizando os templates disponíveis.'
			),
			FileInputIcon
		)}
		<ChevronDownIcon strokeWidth={1} class="size-12 shrink-0 text-slate-200 md:-rotate-90" />
		{@render phase(
			submissions.submissionDeadline,
			submissions.reviewEnd,
			translate('Double-Blind Peer Review', 'Revisão por pares cega'),
			translate(
				'Anonymous review process where authors and reviewers remain undisclosed to each other.',
				'Processo anônimo onde autores e revisores não têm acesso às identidades uns dos outros.'
			),
			GlassesIcon
		)}
		<ChevronDownIcon strokeWidth={1} class="size-12 shrink-0 text-slate-200 md:-rotate-90" />
		{@render phase(
			submissions.acceptanceNotification,
			null,
			translate('Acceptance Notification', 'Notificação de aceite'),
			translate(
				'Authors will receive results via email, including review feedback and presentation instructions.',
				'Autores receberão os resultados por e-mail com feedback e instruções para apresentação.'
			),
			MailCheckIcon
		)}
		<ChevronDownIcon strokeWidth={1} class="size-12 shrink-0 text-slate-200 md:-rotate-90" />
		{@render phase(
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

<div class="mx-auto mb-32 grid w-full max-w-6xl gap-32 px-6 md:mb-18 md:grid-cols-2">
	<section id="abstract-guidelines">
		<h2 class="mb-5 text-[2rem]/[1.15] font-semibold tracking-tight text-slate-900">
			{translate('Abstract Guidelines', 'Diretrizes para resumos')}
		</h2>
		<ul class="list-disc">
			{#each translation?.abstractGuidelines || [] as { item }}
				<li class="text-slate-600">
					{item}
				</li>
			{/each}
			<li class="text-slate-600">
				<div class="mb-4">
					{translate(
						'The submitted abstract should be in PDF format, using one of the following templates:',
						'O resumo deve ser enviado em PDF, utilizando um dos templates:'
					)}
				</div>
				<div class="flex gap-2">
					{#snippet templateLink(label: string, fileId: string | null)}
						<a
							href="{base}/api/assets/{fileId}"
							aria-disabled={!fileId}
							target="_blank"
							class="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium {!fileId
								? 'pointer-events-none border-slate-100 bg-slate-100 text-slate-300 shadow-none'
								: 'border-slate-200 text-slate-900 shadow-xs transition-all hover:bg-slate-100  active:shadow-inner'}"
						>
							<DownloadIcon class="size-4" />
							<span>{label}</span>
						</a>
					{/snippet}
					<div>
						{@render templateLink('Lattes', submissions.lattesTemplate)}
					</div>
					{@render templateLink('Word', submissions.wordTemplate)}
				</div>
			</li>
		</ul>
	</section>
	<section id="poster-guidelines">
		<h2 class="mb-5 text-[2rem]/[1.15] font-semibold tracking-tight text-slate-900">
			{translate('Poster Guidelines', 'Diretrizes para pôsteres')}
		</h2>
		<ul class="list-disc">
			{#each translation?.posterGuidelines || [] as { item }}
				<li class="text-slate-600">
					{item}
				</li>
			{/each}
		</ul>
	</section>
</div>

<section id="submit" class="mx-auto mb-32 flex w-full max-w-6xl justify-center px-6 md:mb-18">
	<Button href={submissions.submitLink} disabled={!submissions.submitLink}>
		{translate('Submit Your Work', 'Submeter trabalho')}
	</Button>
</section>

<section id="important-dates" class="mx-auto mb-24 w-full max-w-6xl px-6">
	<h2 class="mb-10 text-[2rem]/[1.15] font-semibold tracking-tight text-slate-900">
		{translate('Important Dates', 'Datas importantes')}
	</h2>
	<ul class="space-y-8">
		{#snippet date(name: string, date: string | null, Icon: any)}
			<li class="flex items-center gap-4">
				<BoxedIcon {Icon} size={12} strokeWidth={1.25} />
				<div>
					<div class="mb-0.5 text-black">{name}</div>
					<div class="text-slate-500">
						{#if date}
							{translate(
								format(date, 'MMMM d, y'),
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
			submissions.submissionDeadline,
			SendIcon
		)}
		{@render date(
			translate('Acceptance Notification', 'Notificação de aceite'),
			submissions.acceptanceNotification,
			MailCheckIcon
		)}
	</ul>
</section>

<section id="microsoft-cmt" class="mx-auto mb-12 w-full max-w-6xl px-6">
	<p class="text-center text-xs text-slate-400 md:text-sm">
		{translate(
			'The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.',
			'O serviço Microsoft CMT foi utilizado para gerenciar o processo de revisão por pares desta conferência. Este serviço foi fornecido gratuitamente pela Microsoft, que arcarou com todas as despesas, incluindo os custos dos serviços em nuvem Azure, bem como os de desenvolvimento de software e suporte.'
		)}
	</p>
</section>
