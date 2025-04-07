<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import { format } from 'date-fns';
	import { ChevronRightIcon } from 'lucide-svelte';

	let { data } = $props();
	let { lang, global } = data;

	function translate(enStr: string, ptStr: string) {
		return lang === 'pt-BR' ? ptStr : enStr;
	}
</script>

<svelte:head>
	<title>
		{translate('Registration', 'Inscrição')} &ndash; EGB {format(global.startDate, 'y')}
	</title>
</svelte:head>

<Banner
	{lang}
	title={translate('Registration', 'Inscrição')}
	imageUrl="{base}/api/assets/06e17320-8cc9-4491-bb0f-a4e82202e2d9"
	class="bg-[60%_17%]"
/>

<section id="fees" class="mx-auto mt-18 mb-36 w-full max-w-6xl xl:px-6">
	<div class="flex flex-col gap-12 xl:grid xl:grid-cols-7">
		<div class="col-span-4">
			<h2 class="mb-3 text-3xl font-semibold tracking-tight text-gray-900 max-xl:px-6">
				{translate('Event', 'Taxa do evento')}
			</h2>
			<p class="mb-7 max-w-136 text-gray-600 max-xl:px-6">
				Get complete access to the entire 5-day in-person program (July 21&ndash;25).
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
									{translate('Regular fee', 'Taxa regular')}
								</th>
								<th class="border-b border-gray-200 px-6 py-3 text-end font-semibold text-gray-900">
									{translate('AB3C-partner fee (-15%)', 'Taxa sócio AB3C (-15%)')}
								</th>
							</tr>
						</thead>
						<tbody class="text-gray-600 *:odd:bg-gray-50">
							{#snippet eventTr(category: string, fee: number, partnerFee: number)}
								<tr>
									<td class="px-6 py-4">{category}</td>
									<td class="px-6 py-4 text-end">R$ {fee}</td>
									<td class="px-6 py-4 text-end">R$ {partnerFee}</td>
								</tr>
							{/snippet}
							{@render eventTr(
								translate('Undergraduate student', 'Estudante de graduação'),
								80,
								68
							)}
							{@render eventTr(
								translate('Graduate student', 'Estudante de pós-graduação'),
								140,
								119
							)}
							{@render eventTr(translate('Researcher', 'Pesquisador'), 240, 204)}
							{@render eventTr(
								translate('Industry professional', 'Profissional da indústria'),
								360,
								306
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="col-span-3">
			<h2 class="mb-3 text-3xl font-semibold tracking-tight text-gray-900 max-xl:px-6">
				{translate('Courses', 'Taxas dos cursos')}
			</h2>
			<p class="mb-7 max-w-136 text-gray-600 max-xl:px-6">
				Get access to the live online courses (July 14&ndash;18).
			</p>
			<div class="overflow-auto">
				<div class="min-w-fit rounded-2xl border border-gray-200 shadow-sm max-xl:mx-6">
					<table class="w-full whitespace-nowrap">
						<thead>
							<tr>
								<th class="border-b border-gray-200 px-6 py-3 text-start font-semibold">
									{translate('Duration', 'Duração')}
								</th>
								<th class="border-b border-gray-200 px-6 py-3 text-end font-semibold">
									{translate('Fee', 'Taxa')}
								</th>
							</tr>
						</thead>
						<tbody class="*:odd:bg-gray-50">
							{#snippet courseTr(hours: number, fee: number)}
								<tr>
									<td class="px-6 py-4 text-gray-700">{hours} {translate('hours', 'horas')}</td>
									<td class="px-6 py-4 text-end text-gray-700">R$ {fee}</td>
								</tr>
							{/snippet}
							{@render courseTr(4, 25)}
							{@render courseTr(6, 50)}
							{@render courseTr(12, 70)}
							{@render courseTr(15, 80)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-12 max-xl:px-6">
		<a
			href="https://www.even3.com.br/egb2023"
			target="_blank"
			class="group flex w-fit items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.25 font-medium text-white shadow-sm transition-all md:hover:bg-gray-900/85 md:hover:shadow-md"
		>
			<span class="text-sm whitespace-nowrap">
				{translate('Register', 'Inscrever-se')}
			</span>
			<ChevronRightIcon class="size-4.5 transition-all md:group-hover:translate-x-1" />
		</a>
	</div>
</section>

<section id="FAQ" class="mx-auto mb-40 w-full max-w-6xl px-6">
	<h2 class="mb-20 text-5xl font-semibold tracking-tight text-gray-900">
		Frequently asked questions
	</h2>
	<div class="divide-y divide-gray-200">
		{#snippet faqItem(question: string, answer: string)}
			<div class="grid gap-8 not-first:pt-8 not-last:pb-8 md:grid-cols-2">
				<div class="font-semibold text-gray-900">{question}</div>
				<div class="text-gray-700">{answer}</div>
			</div>
		{/snippet}
		{@render faqItem(
			'Will I receive a participation certificate?',
			'Yes. Digital certificates will be emailed for each attended lecture and completed course.'
		)}
		{@render faqItem(
			'Are the lectures recorded?',
			'No. All lectures are live only (synchronous) and will not be available afterward.'
		)}
		{@render faqItem(	
			'How are course spots allocated?',
			'Course seats are limited and will be filled strictly in order of registration (first-come, first-served).'
		)}
		{@render faqItem(
			'Do I need to register separately for courses?',
			'Yes. Course registration is independent of event registration. You must first register for the event to enroll in courses.'
		)}
		{@render faqItem(
			'Are registration fees refundable?',
			'No. All payments (event or courses) are non-refundable.'
		)}
		{@render faqItem(
			'Can I switch courses after registering?',
			'No. Changes are not permitted after payment.'
		)}
	</div>
</section>

<section id="trip" class="mx-auto mb-40 max-w-6xl px-6">
	<h2 class="mb-12 text-5xl font-semibold tracking-tight text-gray-900">
		{translate('Plan your trip', 'Planeje sua viagem')}
	</h2>
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#snippet bentoButton(
			title: string,
			description: string,
			link: string,
			image: string,
			classes?: string
		)}
			<a
				href={link}
				target="_blank"
				class="group relative flex h-108 flex-col justify-end overflow-hidden rounded-3xl border border-gray-200 shadow-sm transition-all active:shadow-inner max-md:rounded-3xl md:hover:scale-[1.01] md:hover:shadow-lg {classes}"
			>
				<div
					style:background-image="url({image})"
					class="grow bg-gray-200 bg-cover bg-center"
				></div>
				<div class="px-7 pt-6 pb-9">
					<h3 class="mb-3 font-semibold text-gray-900">{title}</h3>
					<p class="text-gray-600">{description}</p>
				</div>
			</a>
		{/snippet}
		{@render bentoButton(
			'How to get to Porto Alegre',
			'Find the best routes and transportation options to reach Porto Alegre.',
			'',
			'https://thedaily.case.edu/wp-content/uploads/2021/07/plane-take-off-feat.jpg',
			''
		)}
		{@render bentoButton(
			'Nearby hotels',
			'Discover convenient hotels near the event venue for a comfortable stay.',
			'',
			'https://www.umbuhotelportoalegre.com.br/storage/featured-item-image/4tZOY26dA8nMUirCrJJLIGE7RwgZ3lJsE6lXqKoh.jpg',
			''
		)}
		{@render bentoButton(
			'Local transport',
			"Explore the city's public transport options, including buses and taxis.",
			'',
			'https://prefeitura.poa.br/sites/default/files/usu_img/sites/destaques-capas/img-4733.JPG',
			''
		)}
		{@render bentoButton(
			'What to do in Porto Alegre',
			"Explore the city's must-see attractions, dining spots, and cultural experiences.",
			'',
			'https://www.rbsdirect.com.br/imagesrc/24052249.jpg?w=1200&h=630&a=c&version=1575255600',
			''
		)}
	</div>
</section>
