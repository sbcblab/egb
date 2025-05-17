<script lang="ts">
	import { base } from '$app/paths';
	import type { LanguageCode, Person } from '$lib/types';
	import { GlobeIcon, XIcon } from 'lucide-svelte';
	import AcademiconsLattes from '~icons/academicons/lattes';
	import Fa6BrandsGoogleScholar from '~icons/fa6-brands/google-scholar';
	import RiGithubFill from '~icons/ri/github-fill';
	import RiLinkedinFill from '~icons/ri/linkedin-fill';
	import SimpleIconsOrcid from '~icons/simple-icons/orcid';
	import SimpleIconsResearchgate from '~icons/simple-icons/researchgate';
	import Modal from './Modal.svelte';

	let { person, lang }: { person: Person; lang: LanguageCode } = $props();
	let { name, picture, country, institution, links, translations } = person;
	let translation = translations?.find((t) => t.languages_code === lang);

	let isOpen = $state(false);

	const linkTypes = [
		{ type: 'website', title: 'Website', colorClass: 'bg-slate-500', Icon: GlobeIcon },
		{
			type: 'lattes',
			title: translate('Lattes Curriculum', 'Currículo Lattes'),
			colorClass: 'bg-indigo-900/90',
			Icon: AcademiconsLattes
		},
		{
			type: 'linkedin',
			title: 'LinkedIn',
			colorClass: 'bg-blue-800/80',
			Icon: RiLinkedinFill
		},
		{
			type: 'orcid',
			title: 'ORCID',
			colorClass: 'bg-lime-500/70',
			Icon: SimpleIconsOrcid
		},
		{
			type: 'scholar',
			title: 'Google Scholar',
			colorClass: 'bg-blue-700/65',
			Icon: Fa6BrandsGoogleScholar
		},
		{
			type: 'researchgate',
			title: 'ResearchGate',
			colorClass: 'bg-teal-500/80',
			Icon: SimpleIconsResearchgate
		},
		{
			type: 'github',
			title: 'GitHub',
			colorClass: 'bg-neutral-800',
			Icon: RiGithubFill
		}
	];

	function translate(enStr: string, ptStr: string) {
		return lang === 'pt-BR' ? ptStr : enStr;
	}
</script>

<div>
	<button
		onclick={() => (isOpen = true)}
		class="flex w-full flex-col gap-8 overflow-hidden rounded-3xl border border-slate-200 text-start shadow-xs hover:bg-slate-50 active:bg-slate-100 active:shadow-inner max-md:flex-col-reverse md:gap-6"
	>
		<div class="flex items-center gap-5">
			<div
				class="aspect-square h-26 shrink-0 rounded-l-2xl border-r border-slate-200 bg-cover bg-center"
				style:background-image="url({base}/api/assets/{picture.id})"
			></div>
			<div class="grow">
				<div class="mb-0.5 text-slate-900">{name}</div>
				<div class="text-sm text-slate-500">
					{institution.name}, {country.translations?.find((t) => t.languages_code === lang)?.name}
				</div>
			</div>
		</div>
	</button>

	<Modal bind:isOpen class="relative w-full md:max-w-124">
		<button
			onclick={() => (isOpen = false)}
			class="absolute top-4 right-4 p-2 text-slate-300 hover:text-slate-400 active:text-slate-500"
		>
			<XIcon class="size-4" />
		</button>
		<div class="flex items-center gap-6">
			<div
				class="w-full max-w-26 shrink-0 self-stretch rounded-2xl border border-slate-200 bg-cover bg-center"
				style:background-image="url({base}/api/assets/{picture.id})"
			></div>
			<div class="py-5">
				<div class="mb-1 text-lg/[1.15] font-medium">{name}</div>
				<div class="text-slate-600">
					{institution.name}, {country.translations?.find((t) => t.languages_code === lang)?.name}
				</div>
				{#if links}
					<div class="mt-4 flex gap-1">
						{#each linkTypes as { type, title, colorClass, Icon }}
							{@const link = links.find((l) => l.type === type)}
							{#if link}
								<a
									href={link.link}
									{title}
									target="_blank"
									class="size-5.5 rounded-full p-1 opacity-40 transition-all hover:opacity-100 {colorClass}"
								>
									<Icon class="size-full text-white" />
								</a>
							{/if}
						{/each}
					</div>
				{/if}
			</div>
		</div>
		{#if translation?.summary}
			<div class="mt-8 text-sm/[1.65] text-slate-500">
				{@html translation.summary}
			</div>
		{/if}
	</Modal>
</div>
