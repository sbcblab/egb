<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import { format } from 'date-fns';

	let { data } = $props();
	let { lang, global, registration } = data;

	let translation = registration.translations?.find((t) => t.languages_code === lang);
	let planYourTripItems = [
		{
			title: translate('How to Get to Porto Alegre', 'Como chegar a Porto Alegre'),
			description: translate(
				'Find the best routes and transportation options to reach Porto Alegre.',
				'Encontre as melhores rotas e opções de transporte para chegar a Porto Alegre.'
			),
			imageUrl: `${base}/api/assets/38f7a3d5-e9f4-4db5-8657-d76127bb3842`,
			link: registration.howToGetToPortoAlegre
		},
		{
			title: translate('Nearby Hotels', 'Hotéis próximos'),
			description: translate(
				'Discover convenient hotels near the event venue for a comfortable stay.',
				'Descubra hotéis convenientes próximos ao local do evento para uma estadia confortável.'
			),
			imageUrl: `${base}/api/assets/021a6b4b-eb5d-4019-92a7-fd1afea8c583`,
			link: registration.nearbyHotels
		},
		{
			title: translate('Local Transport', 'Transporte local'),
			description: translate(
				"Explore the city's public transport options, including buses and taxis.",
				'Conheça as opções de transporte público da cidade, incluindo ônibus e táxis.'
			),
			imageUrl: `${base}/api/assets/0f02595b-4d1e-441f-a025-cfb3083567fd`,
			link: registration.localTransport
		},
		{
			title: translate('What to Do in Porto Alegre', 'O que fazer em Porto Alegre'),
			description: translate(
				"Explore the city's must-see attractions, dining spots, and cultural experiences.",
				'Explore os principais pontos turísticos, restaurantes e experiências culturais da cidade.'
			),
			imageUrl: `${base}/api/assets/14db6478-0d05-434a-9d2f-4be46eae3fc4`,
			link: registration.whatToDoInPortoAlegre
		}
	];

	function translate(enStr: string, ptStr: string) {
		return lang === 'pt-BR' ? ptStr : enStr;
	}
</script>

<svelte:head>
	<title>
		{translate('Registration', 'Inscrição')} &ndash; EGB {format(global.eventStartDate, 'y')}
	</title>
</svelte:head>

<Banner
	{lang}
	title={translate('Registration', 'Inscrição')}
	imageUrl="{base}/api/assets/06e17320-8cc9-4491-bb0f-a4e82202e2d9"
	class="mb-16 bg-[60%_17%]"
/>

<section id="fees" class="mx-auto mb-16 w-full max-w-6xl xl:px-6">
	<div class="flex gap-20 max-xl:flex-col">
		<div class="grow">
			<div class="mb-8 max-xl:px-6">
				<h2 class="mb-2.5 text-[2rem]/[1.15] font-semibold tracking-tight text-slate-900">
					{translation?.eventFeesTitle}
				</h2>
				{#if translation?.eventFeesSubtitle}
					<p class="text-slate-500">
						{translation.eventFeesSubtitle}
					</p>
				{/if}
			</div>
			<div class="overflow-x-auto">
				<div class="min-w-fit overflow-hidden rounded-2xl border border-slate-200 max-xl:mx-6">
					<table class="w-full whitespace-nowrap">
						<thead>
							<tr>
								<th
									class="border-b border-slate-200 px-6 py-3 text-start font-semibold text-slate-900"
								>
									{translate('Category', 'Categoria')}
								</th>
								<th
									class="border-b border-slate-200 px-6 py-3 text-end font-semibold text-slate-900"
								>
									{translate('Standard Fee', 'Taxa regular')}
								</th>
								<th
									class="border-b border-slate-200 px-6 py-3 text-end font-semibold text-slate-900"
								>
									{translate('AB3C Member Fee (-15%)', 'Taxa sócio AB3C (-15%)')}
								</th>
							</tr>
						</thead>
						<tbody>
							{#each translation?.eventFees || [] as { category, fee }}
								{#if fee}
									<tr class="text-slate-600 odd:bg-slate-50">
										<td class="px-6 py-4">{category}</td>
										<td class="px-6 py-4 text-end">R$ {fee}</td>
										<td class="px-6 py-4 text-end">R$ {Math.floor(fee * 0.85)}</td>
									</tr>
								{/if}
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="grow">
			<div class="mb-8 max-xl:px-6">
				<h2 class="mb-2.5 text-[2rem]/[1.15] font-semibold tracking-tight text-slate-900">
					{translation?.courseFeesTitle}
				</h2>
				{#if translation?.courseFeesSubtitle}
					<p class="text-slate-500">
						{translation.courseFeesSubtitle}
					</p>
				{/if}
			</div>
			<div class="overflow-auto">
				<div class="min-w-fit overflow-hidden rounded-2xl border border-slate-200 max-xl:mx-6">
					<table class="w-full whitespace-nowrap">
						<thead>
							<tr>
								<th class="border-b border-slate-200 px-6 py-3 text-start font-semibold">
									<span class="inline-flex gap-0.25 align-top">
										<span>{translate('Duration', 'Carga horária')}</span>
										<em class="text-sm leading-5 font-normal text-slate-400">*</em>
									</span>
								</th>
								<th class="border-b border-slate-200 px-6 py-3 text-end font-semibold">
									{translate('Fee', 'Taxa')}
								</th>
							</tr>
						</thead>
						<tbody>
							{#each registration.courseFees as { duration, fee }}
								<tr class="odd:bg-slate-50">
									<td class="px-6 py-4 text-slate-600">{duration} {translate('hours', 'horas')}</td>
									<td class="px-6 py-4 text-end text-slate-600">R$ {fee}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
			<div class="mt-2.5 flex justify-start px-2 max-xl:px-8">
				<em class="inline-flex align-top text-sm text-slate-400">
					<span class="mr-0.25 leading-4">*</span>
					<span>
						{translate('1 class hour = 50 minutes', '1 hora-aula = 50 minutos.')}
					</span>
				</em>
			</div>
		</div>
	</div>
</section>

<section id="register" class="mb-32 flex justify-center px-6">
	<Card class="w-fit rounded-3xl p-8">
		<h2 class="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
			<span>{translate('Important', 'Importante')}</span>
		</h2>
		<ul class="mb-8 list-disc leading-[1.6] text-slate-500 md:space-y-1.5">
			{#if registration.registrationStartDate && registration.registrationEndDate}
				<li>
					{translate('Registrations will be open from', 'As inscrições estarão abertas de')}
					<span class="font-medium text-slate-900">
						{format(registration.registrationStartDate, 'dd/MM')}
					</span>
					{translate('to', 'até')}
					<span class="font-medium text-slate-900">
						{format(registration.registrationEndDate, 'dd/MM')}
					</span>.
				</li>
			{/if}
			<li>
				{translate('Course seats are', 'As vagas dos cursos são')}
				<span class="font-medium text-slate-900">
					{translate('limited', 'limitadas')}
				</span>
				{translate(
					'and will be filled in order of registration.',
					'e serão preenchidas por ordem de inscrição.'
				)}
			</li>
			<li>
				{translate(
					'If you have any questions, please contact',
					'Em caso de dúvidas, entre em contato pelo e-mail'
				)}
				<a
					class="font-medium text-slate-900 hover:text-slate-900/70"
					target="_blank"
					href="mailto:egb@inf.ufrgs.br">egb@inf.ufrgs.br</a
				>.
			</li>
		</ul>
		<div class="flex justify-center">
			<Button href={registration.registrationLink} disabled={!registration.registrationLink}>
				{translate('Register', 'Inscrever-se')}
			</Button>
		</div>
	</Card>
</section>

{#if translation?.faq && translation.faq.length > 0}
	<section id="FAQ" class="mx-auto mb-28 w-full max-w-6xl px-6">
		<h2 class="mb-20 text-4xl font-semibold tracking-tight text-slate-900">
			{translate('Frequently Asked Questions', 'Perguntas frequentes')}
		</h2>
		<div class="divide-y divide-slate-200">
			{#each translation.faq as { question, answer }}
				<div class="grid gap-4 not-first:pt-8 not-last:pb-8 md:grid-cols-2">
					<div class="font-medium text-slate-900">{question}</div>
					<div class="leading-[1.6] text-slate-600">{answer}</div>
				</div>
			{/each}
		</div>
	</section>
{/if}

<section id="trip" class="mx-auto mb-40 max-w-6xl px-6">
	<h2 class="mb-10 text-4xl font-semibold tracking-tight text-slate-900">
		{translate('Plan your trip', 'Planeje sua viagem')}
	</h2>
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2">
		{#each planYourTripItems as { title, description, imageUrl, link }}
			<a
				href={link}
				target="_blank"
				class="group flex h-72 flex-col justify-end overflow-hidden rounded-3xl border border-slate-200 shadow-sm transition-all active:shadow-inner md:h-96"
			>
				<div style:background-image="url({imageUrl})" class="relative grow bg-cover bg-center">
					<div class="absolute inset-0 transition-all md:group-hover:bg-slate-950/5"></div>
				</div>
				<div class="px-7 pt-7 pb-8 transition-all md:group-hover:bg-slate-100">
					<h3 class="mb-3 font-medium text-slate-900">{title}</h3>
					<p class="text-sm/[1.6] text-slate-500">{description}</p>
				</div>
			</a>
		{/each}
	</div>
</section>
