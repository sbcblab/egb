<script lang="ts">
	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner.svelte';
	import { format } from 'date-fns';
	import { HouseIcon, MailIcon, PhoneIcon } from 'lucide-svelte';

	let { data } = $props();
	let { lang, global } = data;

	function translate(enStr: string, ptStr: string) {
		return lang === 'pt-BR' ? ptStr : enStr;
	}
</script>

<svelte:head>
	<title>{translate('Contact', 'Contato')} &ndash; EGB {format(global.eventStartDate, 'y')}</title>
</svelte:head>

<Banner
	{lang}
	title={translate('Contact', 'Contato')}
	imageUrl="{base}/api/assets/6024038c-612d-4bec-984f-0e77deaec8f5"
	class="mb-12 bg-[100%_25%]"
/>

<section id="courses" class="mx-auto mb-32 w-full max-w-6xl px-6">
	<p class="mb-12 max-w-116 leading-[1.75] text-slate-600">
		{translate(
			'For general inquiries, registration support, or event details, reach out via email, phone, or visit us at:',
			'Para dúvidas gerais, suporte à inscrição ou informações sobre o evento, entre em contato por e-mail, telefone ou visite-nos:'
		)}
	</p>
	<div class="flex flex-col gap-5">
		<div class="flex items-center gap-4">
			<div class="size-11 rounded-xl border border-primary-200 bg-primary-100">
				<MailIcon strokeWidth={1.25} class="size-full p-2.5 text-primary-800" />
			</div>
			<span class="text-slate-900">{global.email}</span>
		</div>
		<div class="flex items-center gap-4">
			<div class="size-11 rounded-xl border border-primary-200 bg-primary-100">
				<PhoneIcon strokeWidth={1.25} class="size-full p-2.5 text-primary-800" />
			</div>
			<span class="text-slate-900">{global.phone}</span>
		</div>
		<div class="flex items-center gap-4">
			<div class="size-11 shrink-0 rounded-xl border border-primary-200 bg-primary-100">
				<HouseIcon strokeWidth={1.25} class="size-full p-2.5 text-primary-800" />
			</div>
			<span class="text-slate-900">
				{@html global.contactLocation}
			</span>
		</div>
	</div>
</section>
