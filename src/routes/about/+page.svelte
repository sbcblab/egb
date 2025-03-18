<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import { format } from 'date-fns';

	let { data } = $props();
	let { lang, global, about } = data;

	const translations = {
		'en-US': { pageTitle: 'About', aboutTitle: 'What is EGB?' },
		'pt-BR': { pageTitle: 'Sobre', aboutTitle: 'O que é a EGB?' }
	};
</script>

<svelte:head>
	<title>EGB {format(global.startDate, 'y')} &ndash; {translations[lang].pageTitle}</title>
</svelte:head>

<div
	class="mx-auto mt-8 grid w-full max-w-7xl grid-cols-2 flex-col-reverse gap-20 px-6 max-md:flex md:mt-16"
>
	<div>
		<h2 class="mb-8 text-4xl font-semibold">{translations[lang].aboutTitle}</h2>
		<div class="mb-10 w-full max-w-144 space-y-7 text-lg text-gray-700">
			{@html about.translations
				? about.translations.find((i) => i.languages_code === lang)?.body
				: ''}
		</div>
		<div class="mt-16 h-64 rounded-4xl bg-gray-400 md:hidden"></div>
	</div>
	<div
		class="rounded-4xl bg-gray-400 bg-cover bg-center max-md:hidden"
		style:background-image="url({PUBLIC_API_URL}/assets/)"
	></div>
</div>
