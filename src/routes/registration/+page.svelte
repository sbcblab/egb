<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import { format } from 'date-fns';
	import { ptBR } from 'date-fns/locale';
	import { ChevronRightIcon } from 'lucide-svelte';

	let { data } = $props();
	let { lang, global, registration } = data;

	let faqItems = registration?.translations?.find((t) => t.languages_code === lang)?.faq;
	let eventFees = [
		{
			category: translate('Undergraduate Student', 'Estudante de graduação'),
			fee: registration.undergraduateStudent
		},
		{
			category: translate('Graduate Student', 'Estudante de pós-graduação'),
			fee: registration.graduateStudent
		},
		{ category: translate('Researcher', 'Pesquisador'), fee: registration.researcher },
		{
			category: translate('Industry Professional', 'Profissional da indústria	'),
			fee: registration.industryProfessional
		}
	];
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
	class="mb-20 bg-[60%_17%]"
/>

<section id="fees" class="mx-auto mb-36 w-full max-w-6xl xl:px-6">
	<div class="flex gap-20 max-xl:flex-col">
		<div class="grow">
			<h2 class="mb-3 text-3xl font-semibold tracking-tight text-gray-900 max-xl:px-6">
				{translate('Full Event Pass', 'Passe completo do evento')}
			</h2>
			<p class="mb-8 text-gray-600 max-xl:px-6">
				{translate(
					`Complete access to all 5 days of on-site activities (${format(global.eventStartDate, 'MMMM d')}\u2013${format(global.eventEndDate, 'd')}).`,
					`Acesso completo a todos os 5 dias de atividades presenciais (${format(global.eventStartDate, 'd')} a ${format(global.eventEndDate, 'd')} de ${format(global.eventEndDate, 'MMMM', { locale: ptBR })}).`
				)}
			</p>
			<div class="overflow-x-auto">
				<div class="min-w-fit rounded-2xl border border-gray-200 shadow-sm max-xl:mx-6">
					<table class="w-full whitespace-nowrap">
						<thead>
							<tr>
								<th
									class="border-b border-gray-200 px-6 py-3 text-start font-semibold text-gray-900"
								>
									{translate('Category', 'Categoria')}
								</th>
								<th class="border-b border-gray-200 px-6 py-3 text-end font-semibold text-gray-900">
									{translate('Standard Fee', 'Taxa regular')}
								</th>
								<th class="border-b border-gray-200 px-6 py-3 text-end font-semibold text-gray-900">
									{translate('AB3C Member Fee (-15%)', 'Taxa sócio AB3C (-15%)')}
								</th>
							</tr>
						</thead>
						<tbody class="text-gray-600 *:odd:bg-gray-50">
							{#each eventFees as { category, fee }}
								{#if fee}
									<tr>
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
			<h2 class="mb-3 text-3xl font-semibold tracking-tight text-gray-900 max-xl:px-6">
				{translate('Live Online Courses', 'Cursos online ao vivo')}
			</h2>
			<p class="mb-8 text-gray-600 max-xl:px-6">
				{translate(
					`Enroll in one or more courses (${format(global.coursesStartDate, 'MMMM d')}\u2013${format(global.coursesEndDate, 'd')}).`,
					`Inscreva-se em um ou mais cursos (${format(global.coursesStartDate, 'd')} a ${format(global.coursesEndDate, 'd')} de ${format(global.coursesEndDate, 'MMMM', { locale: ptBR })}).`
				)}
			</p>
			<div class="overflow-auto">
				<div class="min-w-fit rounded-2xl border border-gray-200 shadow-sm max-xl:mx-6">
					<table class="w-full whitespace-nowrap">
						<thead>
							<tr>
								<th class="border-b border-gray-200 px-6 py-3 text-start font-semibold">
									<span class="inline-flex gap-0.25 align-top">
										<span>{translate('Duration', 'Carga horária')}</span>
										<em class="text-sm leading-5 font-normal text-gray-400">*</em>
									</span>
								</th>
								<th class="border-b border-gray-200 px-6 py-3 text-end font-semibold">
									{translate('Fee', 'Taxa')}
								</th>
							</tr>
						</thead>
						<tbody class="*:odd:bg-gray-50">
							{#each registration.courseCategories as { duration, fee }}
								<tr>
									<td class="px-6 py-4 text-gray-700">{duration} {translate('hours', 'horas')}</td>
									<td class="px-6 py-4 text-end text-gray-700">R$ {fee}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
			<div class="mt-2.5 flex justify-start px-2 max-xl:px-8">
				<em class="inline-flex align-top text-sm text-gray-400">
					<span class="mr-0.25 leading-4">*</span>
					<span>
						{translate('1 class hour = 50 minutes', '1 hora-aula = 50 minutos.')}
					</span>
				</em>
			</div>
		</div>
	</div>
	<div class="mt-20 flex justify-center max-xl:px-6 xl:mt-12">
		<a
			href={registration.registrationLink}
			aria-disabled={!registration.registrationLink}
			target="_blank"
			class="group inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-medium {registration.registrationLink
				? 'bg-gray-950 text-white shadow-sm transition-all hover:bg-gray-950/90 hover:shadow-md active:shadow-inner'
				: 'pointer-events-none bg-gray-400 text-gray-200'}"
		>
			<span class="whitespace-nowrap">
				{translate('Register', 'Inscrever-se')}
			</span>
			<ChevronRightIcon class="size-4.5 transition-all md:group-hover:translate-x-1" />
		</a>
	</div>
</section>

{#if faqItems && faqItems.length > 0}
	<section id="FAQ" class="mx-auto mb-40 w-full max-w-6xl px-6">
		<h2 class="mb-20 text-4xl font-semibold tracking-tight text-gray-900">
			{translate('Frequently Asked Questions', 'Perguntas frequentes')}
		</h2>
		<div class="divide-y divide-gray-200">
			{#each faqItems as { question, answer }}
				<div class="grid gap-4 not-first:pt-8 not-last:pb-8 md:grid-cols-2">
					<div class="font-medium text-gray-900">{question}</div>
					<div class="text-gray-600">{answer}</div>
				</div>
			{/each}
		</div>
	</section>
{/if}

<section id="trip" class="mx-auto mb-40 max-w-6xl px-6">
	<h2 class="mb-10 text-4xl font-semibold tracking-tight text-gray-900">
		{translate('Plan your trip', 'Planeje sua viagem')}
	</h2>
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2">
		{#each planYourTripItems as { title, description, imageUrl, link }}
			<a
				href={link}
				target="_blank"
				class="group flex h-72 flex-col justify-end overflow-hidden rounded-3xl border border-gray-200 shadow-sm transition-all active:shadow-inner md:h-96"
			>
				<div style:background-image="url({imageUrl})" class="relative grow bg-cover bg-center">
					<div class="absolute inset-0 transition-all md:group-hover:bg-gray-950/5"></div>
				</div>
				<div class="px-7 pt-7 pb-8 transition-all md:group-hover:bg-gray-100">
					<h3 class="mb-3 font-medium text-gray-900">{title}</h3>
					<p class="text-sm text-gray-600">{description}</p>
				</div>
			</a>
		{/each}
	</div>
</section>
