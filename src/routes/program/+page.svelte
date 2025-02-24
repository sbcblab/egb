<script lang="ts">
	import Flag from '$lib/components/Flag.svelte';
	import { schedule, title } from '$lib/data';
	import { CalendarIcon } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Program &ndash; {title}</title>
</svelte:head>

<div class="mx-4 mt-6 mb-16">
	<h1 class="mb-5 text-4xl font-semibold tracking-tight text-gray-800">Program</h1>
	<p class="text-lg/[1.75] text-gray-600">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor urna ac arcu lacinia, ut
		egestas tellus ultricies.
	</p>
	{#each schedule as { day, activities }}
		<div class="mt-16 mb-3 flex items-center gap-2">
			<CalendarIcon class="mb-0.5 size-4.5 text-gray-400" />
			<h2 class="text-lg font-semibold">{day}</h2>
		</div>
		<div class="rounded-2xl border border-gray-200 shadow-sm">
			{#each activities as { title, startTime, endTime, people }}
				<div class="px-6 py-9 first:rounded-t-xl last:rounded-b-xl even:bg-gray-50">
					<div class="flex items-center gap-1.5 text-sm text-gray-500">
						{startTime} &ndash; {endTime}
					</div>
					<div class="mt-2.5 text-xl/[1.375]">{title}</div>
					<div>
						{#each people as { name, country, institution }}
							<div class="mt-1.5 flex gap-2 text-sm text-gray-500">
								<div class="flex gap-2">
									<Flag alpha2={country.alpha2} class="size-5 rounded-md" />
									<span>{name}</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>
