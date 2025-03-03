<script lang="ts">
	import { title } from '$lib/data';
	import { ChevronRightIcon } from 'lucide-svelte';

	const supporterUrls = ['fapergs.svg', 'ppgbcm.svg', 'ufrgs.svg'];
	const organizerUrls = ['capes.svg', 'cbiot.svg', 'cnpq.svg'];
</script>

<svelte:head>
	<title>{title} &middot; Escola Gaúcha de Bioinformática</title>
</svelte:head>

<div
	style:background-image="url(https://www.ufrgs.br/egb/wp-content/uploads/2023/06/Screenshot-from-2023-06-23-16-07-01-1.png)"
	class="relative h-172 bg-cover bg-[64%]"
>
	<div class="absolute inset-0 bg-sky-700/80 backdrop-grayscale"></div>
	<div class="absolute inset-0 flex items-center">
		<div class="flex size-full flex-col items-center justify-center px-4 text-center">
			<h1 class="mb-10 flex flex-col gap-1.5">
				<span class="text-xl font-extrabold text-cyan-200">EGB 2025</span>
				<span class="text-[2.5rem]/[1.05] font-bold tracking-tighter text-white">
					Escola Gaúcha de Bioinformática
				</span>
			</h1>
			<p class="text-2xl font-semibold text-cyan-50">July 21 &ndash; 25, 2025</p>
			<p class="text-base font-semibold text-cyan-200">Porto Alegre, RS, Brazil</p>
			<a
				href="/registration"
				class="mt-14 flex items-center gap-1.5 rounded-xl border-cyan-200/50 bg-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-sm"
			>
				<span>Register</span>
				<ChevronRightIcon strokeWidth={2.5} class="size-4" />
			</a>
		</div>
	</div>
</div>

<div>
	<h2 class="mx-4 mt-20 mb-8 text-center text-3xl font-semibold tracking-tight text-gray-800">
		Organizers
	</h2>
	<div class="mx-4 flex flex-wrap justify-center gap-8">
		{#each organizerUrls as url}
			<div style:mask="url({url}) center / contain no-repeat" class="h-20 w-30 bg-gray-600"></div>
		{/each}
	</div>
</div>

<div class="mb-20">
	<h2 class="mx-4 mt-20 mb-8 text-center text-3xl font-semibold tracking-tight text-gray-800">
		Supporters
	</h2>
	<div class="mx-4 flex flex-wrap justify-center gap-8">
		{#each supporterUrls as url}
			<div style:mask="url({url}) center / contain no-repeat" class="h-20 w-30 bg-gray-600"></div>
		{/each}
	</div>
</div>
