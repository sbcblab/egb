<script lang="ts">
	import PhDna from '~icons/ph/dna';
	import Nav from './Nav.svelte';
</script>

<header class="flex items-center justify-between px-5 py-6">
	<a href="/" class="flex items-center text-sky-600">
		<PhDna class="size-10" />
		<div class="flex flex-col">
			<span class="text-2xl/[1] font-semibold">EGB</span>
			<span class="text-sm/[1] font-extrabold tracking-[0.25em]">2025</span>
		</div>
	</a>
	<Nav />
</header>
