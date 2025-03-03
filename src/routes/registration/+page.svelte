<script lang="ts">
	import { title } from '$lib/data';
</script>

<svelte:head>
	<title>Registration &ndash; {title}</title>
</svelte:head>

<div class="mt-6">
	<h2 class="mx-6 mb-8 text-4xl font-semibold tracking-tight text-gray-800">Event Fees</h2>
	<div class="overflow-auto">
		<div class="w-fit rounded-3xl border border-gray-200 shadow-sm">
			<table class="min-w-full whitespace-nowrap">
				<thead>
					<tr class="font-semibold">
						<th class="border-b border-gray-200 px-6 py-3 text-start">Category</th>
						<th class="border-b border-gray-200 px-6 py-3 text-end">Regular fee</th>
						<th class="border-b border-gray-200 px-6 py-3 text-end">AB3C-partner fee (15% off)</th>
					</tr>
				</thead>
				<tbody class="text-gray-600 *:odd:bg-gray-50">
					<tr>
						<td class="px-6 py-4">Undergraduate student</td>
						<td class="px-6 py-4 text-end">R$ 80</td>
						<td class="px-6 py-4 text-end">R$ 68</td>
					</tr>
					<tr>
						<td class="px-6 py-4">Graduate student</td>
						<td class="px-6 py-4 text-end">R$ 140</td>
						<td class="px-6 py-4 text-end">R$ 119</td>
					</tr>
					<tr>
						<td class="px-6 py-4">Researcher</td>
						<td class="px-6 py-4 text-end">R$ 240</td>
						<td class="px-6 py-4 text-end">R$ 204</td>
					</tr>
					<tr>
						<td class="px-6 py-4">Industry professional</td>
						<td class="px-6 py-4 text-end">R$ 360</td>
						<td class="px-6 py-4 text-end">R$ 306</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<h2 class="mx-6 mt-20 mb-8 text-4xl font-semibold tracking-tight text-gray-800">Course Fees</h2>
	<div class="overflow-auto">
		<div class="rounded-3xl border border-gray-200 shadow-sm">
			<table class="min-w-full whitespace-nowrap">
				<thead>
					<tr class="font-semibold">
						<th class="border-b border-gray-200 px-6 py-3 text-start">Duration</th>
						<th class="border-b border-gray-200 px-6 py-3 text-end">Fee</th>
					</tr>
				</thead>
				<tbody class="text-gray-600 *:odd:bg-gray-50">
					<tr>
						<td class="px-6 py-4">4 hours<span class="text-sm text-gray-400 italic">*</span></td>
						<td class="px-6 py-4 text-end">R$ 25</td>
					</tr>
					<tr>
						<td class="px-6 py-4">6 hours<span class="text-sm text-gray-400 italic">*</span></td>
						<td class="px-6 py-4 text-end">R$ 50</td>
					</tr>
					<tr>
						<td class="px-6 py-4">12 hours<span class="text-sm text-gray-400 italic">*</span></td>
						<td class="px-6 py-4 text-end">R$ 70</td>
					</tr>
					<tr>
						<td class="px-6 py-4">15 hours<span class="text-sm text-gray-400 italic">*</span></td>
						<td class="px-6 py-4 text-end">R$ 80</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<p class="mt-3 mr-6 ml-5 text-xs text-gray-400 italic">
		<span class="mr-1">*</span>1 class hour = 50 minutes
	</p>
</div>
