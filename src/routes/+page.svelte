<script lang="ts">
	import { base } from '$app/paths';
	import Header from '$lib/components/Header.svelte';
	import type { Institution } from '$lib/types.js';
	import { format } from 'date-fns';
	import { enUS, ptBR } from 'date-fns/locale';
	import { ChevronRightIcon } from 'lucide-svelte';

	let { data } = $props();
	let { lang, global, about } = data;

	function translate(enStr: string, ptStr: string) {
		return lang === 'pt-BR' ? ptStr : enStr;
	}
</script>

<svelte:head>
	<title>EGB {format(global.eventStartDate, 'y')} &middot; Escola Gaúcha de Bioinformática</title>
</svelte:head>

<section
	style:background-image="url({base}/api/assets/9045ab3e-90b9-439a-a9cd-fcca24b371e2)"
	class="relative mb-24 h-screen bg-primary-900 bg-cover bg-top bg-blend-luminosity"
>
	<div class="absolute inset-0 bg-slate-950/55">
		<div
			class="absolute inset-0 flex flex-col bg-linear-to-t from-primary-800/60 to-transparent to-75%"
		>
			<Header {lang} />
			<div class="flex grow flex-col items-center justify-center px-6 text-center">
				<p
					class="mb-2 text-[1.75rem] font-extrabold tracking-tight text-white/70 drop-shadow-[0_0_1.25rem_rgba(0,0,0,0.5)]"
				>
					EGB {format(global.eventStartDate, 'y')}
				</p>
				<h1
					class="mb-12 text-[2.875rem]/[1.1] font-bold tracking-tighter text-white drop-shadow-[0_0_1.25rem_rgba(0,0,0,0.5)] sm:text-[3.5rem]/[1]"
				>
					Escola Gaúcha de Bioinformática
				</h1>
				<p
					class="mb-7 text-3xl font-semibold text-white/90 drop-shadow-[0_0_1.25rem_rgba(0,0,0,0.5)]"
				>
					{translate(
						`${format(global.eventStartDate, 'MMMM d', { locale: enUS })} \u2013 ${format(global.eventEndDate, 'd, y')}`,
						`${format(global.eventStartDate, 'd')} a ${format(global.eventEndDate, 'd')} de ${format(global.eventEndDate, 'MMMM', { locale: ptBR })} de ${format(global.eventEndDate, 'y')}`
					)}
				</p>
				<p class="text-xl text-white/90 drop-shadow-[0_0_1.5rem_rgba(0,0,0,0.5)]">
					Porto Alegre, RS, {translate('Brazil', 'Brasil')}
				</p>
				{#if global.eventLocation}
					<p class="mt-0.5 text-white/60 drop-shadow-[0_0_1.5rem_rgba(0,0,0,0.5)]">
						{global.eventLocation}
					</p>
				{/if}
				<a
					href="{base}/program"
					class="group mt-16 flex items-center gap-1.5 rounded-xl border border-white/50 bg-white/20 px-6 py-2.5 text-white shadow-md backdrop-blur-sm transition-all hover:bg-white/25 hover:shadow-[0_0_1rem_rgba(255,255,255,0.1)]"
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
	</div>
</section>

{#snippet institutionGroup(
	id: string,
	title: string,
	institutions: { institutions_id: Institution }[]
)}
	<section {id} class="mx-auto mb-32 max-w-6xl px-6">
		<h2 class="mb-9 text-center text-lg font-medium tracking-tight text-slate-900">
			{title}
		</h2>
		<div class="flex flex-wrap justify-center gap-9">
			{#each institutions as { institutions_id }}
				{@const { name, link, logo } = institutions_id}
				<a
					href={link}
					title={name}
					aria-label={name}
					target="_blank"
					class="h-16 w-26 transition-all hover:opacity-70"
				>
					<img src="{base}/api/assets/{logo}" alt={name} class="size-full object-contain" />
				</a>
			{/each}
		</div>
	</section>
{/snippet}

{#if about.organizers && about.organizers.length > 0}
	{@render institutionGroup(
		'organizers',
		translate('Organized By', 'Organizadores'),
		about.organizers
	)}
{/if}

{#if about.sponsors && about.sponsors.length > 0}
	{@render institutionGroup('sponsors', translate('Sponsored By', 'Apoiadores'), about.sponsors)}
{/if}
