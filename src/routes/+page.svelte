<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/Header.svelte';
	import { format } from 'date-fns';
	import { enUS, ptBR } from 'date-fns/locale';
	import { ChevronRightIcon } from 'lucide-svelte';

	let { data } = $props();
	let { lang, global } = data;

	function translate(enStr: string, ptStr: string) {
		return lang === 'pt-BR' ? ptStr : enStr;
	}
</script>

<svelte:head>
	<title>EGB {format(global.eventStartDate, 'y')} &middot; Escola Gaúcha de Bioinformática</title>
</svelte:head>

<section
	style:background-image="url({base}/api/assets/9045ab3e-90b9-439a-a9cd-fcca24b371e2)"
	class="relative h-screen bg-cover bg-top"
>
	<div class="absolute inset-0 flex flex-col bg-gray-950/65">
		<Header {lang} />
		<div class="flex grow flex-col items-center justify-center text-center">
			<p
				class="mb-3 text-[1.75rem] font-bold tracking-tight text-white/75 drop-shadow-[0_0_1.25rem_rgba(0,0,0,0.5)]"
			>
				EGB {format(global.eventStartDate, 'y')}
			</p>
			<h1
				class="mb-14 text-[2.875rem]/[1.1] font-bold tracking-tight text-white drop-shadow-[0_0_1.25rem_rgba(0,0,0,0.5)] sm:text-[3.5rem]/[1]"
			>
				Escola Gaúcha de Bioinformática
			</h1>
			<p
				class="mb-1.5 text-3xl font-semibold text-white/90 drop-shadow-[0_0_1.25rem_rgba(0,0,0,0.5)]"
			>
				{translate(
					`${format(global.eventStartDate, 'MMMM d', { locale: enUS })} \u2013 ${format(global.eventEndDate, 'd, y')}`,
					`${format(global.eventStartDate, 'd')} a ${format(global.eventEndDate, 'd')} de ${format(global.eventEndDate, 'MMMM', { locale: ptBR })} de ${format(global.eventEndDate, 'y')}`
				)}
			</p>
			<p class="text-lg text-white/80 drop-shadow-[0_0_1.5rem_rgba(0,0,0,0.5)]">
				Porto Alegre, RS, {translate('Brazil', 'Brasil')}
			</p>
			<a
				href="{base}/program"
				class="group mt-16 flex items-center gap-1.5 rounded-xl border border-white/50 bg-white/20 px-6 py-2.5 text-white shadow-md backdrop-blur-sm transition-all md:hover:bg-white/25 md:hover:shadow-[0_0_1rem_rgba(255,255,255,0.1)]"
			>
				<span class="drop-shadow-[1px_1px_3px_rgba(0,0,0,.5)]">
					{translate('Program', 'Programa')}
				</span>
				<ChevronRightIcon
					strokeWidth={1.5}
					class="size-4.5 drop-shadow-[1px_1px_3px_rgba(0,0,0,.5)] transition-all md:group-hover:translate-x-1"
				/>
			</a>
		</div>
	</div>
</section>
