<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import { format } from 'date-fns';

	let { data } = $props();
	let { lang, global } = data;

	const translations = {
		'en-US': { pageTitle: 'Registration', tripTitle: 'Plan your trip' },
		'pt-BR': { pageTitle: 'Inscrição', tripTitle: 'Planeje sua viagem' }
	};
</script>

<svelte:head>
	<title>{translations[lang].pageTitle} &ndash; EGB {format(global.startDate, 'y')}</title>
</svelte:head>

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
		class="group relative flex flex-col justify-end overflow-hidden border border-gray-200 shadow-sm transition-all active:shadow-inner max-md:h-80 max-md:rounded-3xl md:hover:scale-[1.01] md:hover:shadow-lg {classes}"
	>
		<div style:background-image="url({image})" class="relative grow bg-gray-200 bg-cover bg-center">
			<div
				class="absolute right-0 bottom-0 left-0 h-6 translate-y-[1px] bg-gradient-to-t from-white to-transparent"
			></div>
		</div>
		<div class="px-8 py-7">
			<h3 class="mb-3 text-lg font-medium text-gray-900">{title}</h3>
			<p class="text-gray-600">{description}</p>
		</div>
	</a>
{/snippet}

<Banner
	{lang}
	title={translations[lang].pageTitle}
	imageUrl="{base}/api/assets/013d2473-b0fa-4f15-b610-29de984645d1"
	class="bg-[60%_60%]"
/>

<section id="trip" class="mx-auto mt-18 mb-36 max-w-6xl px-6 md:mt-16 md:mb-56">
	<h2 class="mb-12 text-4xl font-semibold tracking-tight text-gray-900">
		{translations[lang].tripTitle}
	</h2>
	<div class="grid gap-4 md:h-160 md:grid-cols-5 md:grid-rows-2">
		{@render bentoButton(
			'How to get to Porto Alegre',
			'Find the best routes and transportation options to reach Porto Alegre.',
			'',
			'https://thedaily.case.edu/wp-content/uploads/2021/07/plane-take-off-feat.jpg',
			'md:col-span-3 md:rounded-tl-3xl'
		)}
		{@render bentoButton(
			'Nearby hotels',
			'Discover convenient hotels near the event venue for a comfortable stay.',
			'',
			'https://www.umbuhotelportoalegre.com.br/storage/featured-item-image/4tZOY26dA8nMUirCrJJLIGE7RwgZ3lJsE6lXqKoh.jpg',
			'md:col-span-2 md:rounded-tr-3xl'
		)}
		{@render bentoButton(
			'Local transport',
			"Explore the city's public transport options, including buses and taxis.",
			'',
			'https://prefeitura.poa.br/sites/default/files/usu_img/sites/destaques-capas/img-4733.JPG',
			'md:col-span-2 md:rounded-bl-3xl'
		)}
		{@render bentoButton(
			'What to do in Porto Alegre',
			"Explore the city's must-see attractions, dining spots, and cultural experiences.",
			'',
			'https://www.rbsdirect.com.br/imagesrc/24052249.jpg?w=1200&h=630&a=c&version=1575255600',
			'md:col-span-3 md:rounded-br-3xl'
		)}
	</div>
</section>
