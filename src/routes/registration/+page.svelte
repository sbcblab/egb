<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import { format } from 'date-fns';

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
	imageUrl="{base}/api/assets/013d2473-b0fa-4f15-b610-29de984645d1"
	class="bg-[60%_60%]"
/>

<section
	id="fees"
	class="mx-auto mt-18 mb-24 flex w-full max-w-6xl grid-cols-8 flex-col gap-24 px-6 md:grid"
>
	<div class="col-span-5">
		<h2 class="mb-6 text-3xl font-semibold tracking-tight text-gray-900">
			{translate('Event fees', 'Taxa do evento')}
		</h2>
		<div class="">
			<div class="rounded-3xl border border-gray-200 shadow-sm">
				<table class="min-w-full overflow-x-auto whitespace-nowrap">
					<thead>
						<tr>
							<th class="border-b border-gray-200 px-6 py-3 text-start font-semibold text-gray-900">
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
						{@render eventTr(translate('Undergraduate student', 'Estudante de graduação'), 80, 68)}
						{@render eventTr(translate('Graduate student', 'Estudante de pós-graduação'), 140, 119)}
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
	<div class="md:col-span-3">
		<h2 class="mb-6 text-3xl font-semibold tracking-tight text-gray-900">
			{translate('Course fees', 'Taxas dos cursos')}
		</h2>
		<div class="overflow-auto">
			<div class="rounded-3xl border border-gray-200 shadow-sm">
				<table class="min-w-full whitespace-nowrap">
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
</section>

<section id="trip" class="mx-auto max-w-6xl px-6 mb-24">
	<h2 class="mb-7 text-3xl font-semibold tracking-tight text-gray-900">
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
				<div class="h-50 px-8 py-7">
					<h3 class="mb-3 text-lg font-medium text-gray-900">{title}</h3>
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
