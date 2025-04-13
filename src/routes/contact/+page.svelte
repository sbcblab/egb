<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import { format } from 'date-fns';
	import { MailIcon, PhoneIcon } from 'lucide-svelte';

	let { data } = $props();
	let { lang, global } = data;

	const translations = {
		'en-US': {
			pageTitle: 'Contact',
			title: 'Contact us',
			text: 'If you have have any questions about EGB 2025, please feel free to reach out through any of the methods below.'
		},
		'pt-BR': {
			pageTitle: 'Contato',
			title: 'Entre em contato',
			text: 'Caso tenha alguma dúvida sobre a EGB 2025, fique à vontade para entrar em contato por qualquer dos meios abaixo.'
		}
	};
</script>

<svelte:head>
	<title>{translations[lang].pageTitle} &ndash; EGB {format(global.eventStartDate, 'y')}</title>
</svelte:head>

<Banner
	{lang}
	title={translations[lang].pageTitle}
	imageUrl="{base}/api/assets/6024038c-612d-4bec-984f-0e77deaec8f5"
	class="bg-[100%_25%]"
/>

<section id="courses" class="mx-auto mt-12 w-full max-w-6xl px-6">
	<p class="max-w-128 text-lg text-gray-700">{translations[lang].text}</p>
	<div class="mt-12 flex flex-col gap-4">
		<div class="flex items-center gap-5.5">
			<MailIcon strokeWidth={1} class="size-8 text-gray-400" />
			<span class="text-lg text-gray-950">{global.email}</span>
		</div>
		<div class="flex items-center gap-5">
			<PhoneIcon strokeWidth={1} class="size-8 text-gray-400" />
			<span class="text-lg text-gray-950">{global.phone}</span>
		</div>
	</div>
</section>
